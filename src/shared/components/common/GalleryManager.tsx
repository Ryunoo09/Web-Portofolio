"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { IMAGE_ACCEPT, MAX_UPLOAD_BYTES } from "@/shared/constants/media";
import { cn } from "@/shared/lib/utils";
import type { ActionResult } from "@/shared/types/action-result";
import { ConfirmDeleteDialog } from "./ConfirmDeleteDialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export type GalleryImage = { id: string; url: string; alt: string };

interface GalleryManagerProps {
  title: string;
  hint: string;
  emptyText: string;
  parentId: string;
  images: GalleryImage[];
  upload: (parentId: string, formData: FormData) => Promise<ActionResult<string>>;
  create: (parentId: string, url: string, alt: string) => Promise<ActionResult>;
  update: (id: string, alt: string) => Promise<ActionResult>;
  remove: (id: string) => Promise<ActionResult>;
}

/**
 * Kelola galeri foto satu entitas: unggah banyak sekaligus, sunting teks alternatif, hapus.
 * Generik agar pendidikan & organisasi berbagi kode yang sama.
 */
export function GalleryManager({
  title,
  hint,
  emptyText,
  parentId,
  images,
  upload,
  create,
  update,
  remove,
}: GalleryManagerProps) {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);

  const addFiles = (files: File[]) => {
    if (files.length === 0) return;

    if (files.some((file) => file.size > MAX_UPLOAD_BYTES)) {
      setError(`Ukuran tiap berkas maksimal ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)} MB.`);
      return;
    }

    setError(null);
    startTransition(async () => {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        const uploaded = await upload(parentId, formData);
        if (!uploaded.ok) {
          setError(uploaded.error);
          break;
        }

        const created = await create(parentId, uploaded.data, "");
        if (!created.ok) {
          setError(created.error);
          break;
        }
      }
      router.refresh();
    });
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-foreground font-heading text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-1 text-sm">{hint}</p>
      </div>

      <div
        className={cn(
          "rounded-lg border border-dashed p-3 transition-colors",
          dragging && "border-gold bg-gold/5",
        )}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          addFiles(Array.from(event.dataTransfer.files ?? []));
        }}
      >
        <div className="flex flex-col items-center gap-2 py-3 text-center">
          <UploadCloud className="text-muted-foreground size-6" aria-hidden="true" />
          <p className="text-muted-foreground text-sm">
            Tarik &amp; letakkan beberapa gambar, atau
          </p>
          <Button
            type="button"
            variant="outline"
            className="min-h-11"
            onClick={() => inputRef.current?.click()}
            disabled={pending}
          >
            {pending ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Mengunggah...
              </>
            ) : (
              "Pilih gambar"
            )}
          </Button>
        </div>

        <input
          ref={inputRef}
          type="file"
          multiple
          accept={IMAGE_ACCEPT}
          tabIndex={-1}
          className="sr-only"
          onChange={(event) => {
            addFiles(Array.from(event.target.files ?? []));
            event.target.value = "";
          }}
        />
      </div>

      {error ? (
        <p role="alert" className="text-destructive flex items-center gap-1 text-sm">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}

      {images.length === 0 ? (
        <p className="text-muted-foreground rounded-lg border border-dashed p-6 text-center text-sm">
          {emptyText}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              update={update}
              remove={remove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function GalleryItem({
  image,
  index,
  update,
  remove,
}: {
  image: GalleryImage;
  index: number;
  update: (id: string, alt: string) => Promise<ActionResult>;
  remove: (id: string) => Promise<ActionResult>;
}) {
  const router = useRouter();
  const inputId = React.useId();
  const [alt, setAlt] = React.useState(image.alt);
  const [pending, startTransition] = React.useTransition();

  const saveAlt = () => {
    if (alt === image.alt) return;

    startTransition(async () => {
      const result = await update(image.id, alt);
      if (result.ok) {
        toast.success("Teks alternatif disimpan.");
        router.refresh();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <li className="border-border/80 bg-card overflow-hidden rounded-xl border">
      <div className="bg-secondary relative aspect-video">
        <Image
          src={image.url}
          alt={image.alt || `Dokumentasi ${index + 1}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-3">
        <Label htmlFor={inputId} className="text-xs">
          Teks alternatif
        </Label>
        <div className="flex items-center gap-2">
          <Input
            id={inputId}
            value={alt}
            maxLength={160}
            placeholder="Foto tim saat demo internal"
            className="min-h-11"
            onChange={(event) => setAlt(event.target.value)}
            onBlur={saveAlt}
            disabled={pending}
          />
          <ConfirmDeleteDialog
            triggerSize="icon"
            title="Hapus Gambar"
            itemName={image.alt || `Dokumentasi ${index + 1}`}
            ariaLabel={`Hapus ${image.alt || `dokumentasi ${index + 1}`}`}
            successMessage="Gambar dihapus."
            description="Berkasnya juga dihapus dari penyimpanan."
            onConfirm={() => remove(image.id)}
          />
        </div>
      </div>
    </li>
  );
}
