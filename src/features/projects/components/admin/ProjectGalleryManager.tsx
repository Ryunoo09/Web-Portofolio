"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2, Trash2, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import {
  createProjectImage,
  deleteProjectImage,
  updateProjectImage,
  uploadProjectImage,
} from "../../server/actions";
import { IMAGE_ACCEPT, MAX_UPLOAD_BYTES } from "@/shared/constants/media";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import type { ProjectImage } from "../../types";

interface ProjectGalleryManagerProps {
  projectId: string;
  images: ProjectImage[];
}

/** Kelola galeri satu proyek: unggah banyak sekaligus, sunting alt, hapus. */
export function ProjectGalleryManager({ projectId, images }: ProjectGalleryManagerProps) {
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

        const uploaded = await uploadProjectImage(projectId, formData);
        if (!uploaded.ok) {
          setError(uploaded.error);
          break;
        }

        const created = await createProjectImage(projectId, uploaded.data, "");
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
        <h2 className="text-foreground font-heading text-xl font-bold">Galeri Proyek</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Tambahkan tangkapan layar. Isi teks alternatif agar gambar terbaca screen reader.
        </p>
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
          Belum ada gambar galeri. Tambahkan tangkapan layar pertama Anda.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
}

function GalleryItem({ image, index }: { image: ProjectImage; index: number }) {
  const router = useRouter();
  const inputId = React.useId();
  const [alt, setAlt] = React.useState(image.alt);
  const [pending, startTransition] = React.useTransition();

  const saveAlt = () => {
    if (alt === image.alt) return;

    startTransition(async () => {
      const result = await updateProjectImage(image.id, alt);
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
          alt={image.alt || `Gambar ${index + 1}`}
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
            placeholder="Tangkapan layar halaman daftar"
            className="min-h-11"
            onChange={(event) => setAlt(event.target.value)}
            onBlur={saveAlt}
            disabled={pending}
          />
          <DeleteImageDialog image={image} index={index} />
        </div>
      </div>
    </li>
  );
}

function DeleteImageDialog({ image, index }: { image: ProjectImage; index: number }) {
  const router = useRouter();
  const confirmRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  const label = image.alt || `Gambar ${index + 1}`;

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteProjectImage(image.id);
      if (result.ok) {
        toast.success("Gambar dihapus.");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive min-h-11 min-w-11"
          aria-label={`Hapus ${label}`}
        >
          <Trash2 className="size-4" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => {
          // Fokus langsung ke tombol destruktif agar jelas apa yang akan terjadi.
          event.preventDefault();
          confirmRef.current?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>Hapus Gambar</DialogTitle>
          <DialogDescription>
            Yakin ingin menghapus <strong>{label}</strong>? Berkasnya juga dihapus dari penyimpanan.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button ref={confirmRef} variant="destructive" onClick={handleDelete} disabled={pending}>
            {pending ? "Menghapus..." : "Hapus"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
