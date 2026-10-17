"use client";

import * as React from "react";
import Image from "next/image";
import { AlertCircle, FileText, Loader2, Trash2, UploadCloud } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { MAX_UPLOAD_BYTES } from "@/shared/constants/media";
import { cn } from "@/shared/lib/utils";
import type { ActionResult } from "@/shared/types/action-result";

interface ImageUploadFieldProps {
  label: string;
  value: string | null;
  onChange: (url: string | null) => void;
  /** Server Action pengunggah (folder & izin ditentukan di sana). */
  upload: (file: File) => Promise<ActionResult<string>>;
  accept?: string;
  help?: string;
  /** Batas ukuran di klien; validasi sebenarnya tetap di server. */
  maxBytes?: number;
}

const MEGABYTE = 1024 * 1024;

/**
 * Unggah satu berkas (gambar atau PDF) dengan pratinjau, tombol hapus, dan
 * pesan galat `role="alert"`. Status sibuk memakai `useTransition`.
 */
export function ImageUploadField({
  label,
  value,
  onChange,
  upload,
  accept = "image/*",
  help,
  maxBytes = MAX_UPLOAD_BYTES,
}: ImageUploadFieldProps) {
  const inputId = React.useId();
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [dragging, setDragging] = React.useState(false);
  const [pending, startTransition] = React.useTransition();

  const isDocument = accept.includes("pdf") || (value?.toLowerCase().endsWith(".pdf") ?? false);

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (file.size > maxBytes) {
      setError(`Ukuran berkas maksimal ${Math.round(maxBytes / MEGABYTE)} MB.`);
      return;
    }

    setError(null);
    startTransition(async () => {
      const result = await upload(file);
      if (result.ok) onChange(result.data);
      else setError(result.error);
    });
  };

  const describedBy = [help ? helpId : null, error ? errorId : null].filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>{label}</Label>

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
          handleFile(event.dataTransfer.files?.[0]);
        }}
      >
        {value ? (
          <div className="flex items-start gap-3">
            <div className="bg-secondary relative h-20 w-32 shrink-0 overflow-hidden rounded-md">
              {isDocument ? (
                <div className="text-muted-foreground flex size-full items-center justify-center">
                  <FileText className="size-6" />
                </div>
              ) : (
                <Image
                  src={value}
                  alt=""
                  width={256}
                  height={160}
                  unoptimized
                  className="size-full object-cover"
                />
              )}
            </div>

            <div className="min-w-0 flex-1 space-y-2">
              <a
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-ring text-sm break-all underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
              >
                {value}
              </a>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="min-h-11"
                  onClick={() => inputRef.current?.click()}
                  disabled={pending}
                  aria-describedby={describedBy || undefined}
                >
                  {pending ? "Mengunggah..." : "Ganti berkas"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive min-h-11"
                  onClick={() => {
                    setError(null);
                    onChange(null);
                  }}
                  disabled={pending}
                >
                  <Trash2 className="size-4" />
                  Hapus
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-3 text-center">
            <UploadCloud className="text-muted-foreground size-6" aria-hidden="true" />
            <p className="text-muted-foreground text-sm">
              Tarik &amp; letakkan berkas di sini, atau
            </p>
            <Button
              type="button"
              variant="outline"
              className="min-h-11"
              onClick={() => inputRef.current?.click()}
              disabled={pending}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy || undefined}
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Mengunggah...
                </>
              ) : (
                "Pilih berkas"
              )}
            </Button>
          </div>
        )}

        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          tabIndex={-1}
          className="sr-only"
          onChange={(event) => {
            handleFile(event.target.files?.[0]);
            event.target.value = "";
          }}
        />
      </div>

      {help ? (
        <p id={helpId} className="text-muted-foreground text-sm">
          {help}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} role="alert" className="text-destructive flex items-center gap-1 text-sm">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
