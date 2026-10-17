/**
 * Batas & tipe berkas untuk bucket `portfolio-media`
 * (lihat `supabase/migrations/0003_storage.sql`).
 *
 * Berkas ini sengaja bebas dari `server-only` agar komponen klien bisa
 * memakai batas yang sama untuk umpan balik cepat sebelum mengunggah.
 */

export const MEDIA_BUCKET = "portfolio-media";

/** Batas 5 MB per berkas. Body Server Action dibatasi 6 MB (lihat `next.config.ts`). */
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

export const IMAGE_MIME_TO_EXTENSION: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

export const DOCUMENT_MIME_TO_EXTENSION: Record<string, string> = {
  "application/pdf": "pdf",
};

export const IMAGE_ACCEPT = Object.keys(IMAGE_MIME_TO_EXTENSION).join(",");
export const DOCUMENT_ACCEPT = Object.keys(DOCUMENT_MIME_TO_EXTENSION).join(",");
