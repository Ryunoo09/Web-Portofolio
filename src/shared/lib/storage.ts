import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/shared/types/database";
import {
  DOCUMENT_MIME_TO_EXTENSION,
  IMAGE_MIME_TO_EXTENSION,
  MAX_UPLOAD_BYTES,
  MEDIA_BUCKET,
} from "@/shared/constants/media";

export type UploadKind = "image" | "document";

type Supabase = SupabaseClient<Database>;

const EXTENSIONS: Record<UploadKind, Record<string, string>> = {
  image: IMAGE_MIME_TO_EXTENSION,
  document: DOCUMENT_MIME_TO_EXTENSION,
};

const KIND_LABELS: Record<UploadKind, string> = {
  image: "JPG, PNG, WebP, atau AVIF",
  document: "PDF",
};

/** Ekstensi dari whitelist MIME, atau null bila tipe berkas tidak diizinkan. */
function extensionFor(file: File, kinds: readonly UploadKind[]): string | null {
  const mime = file.type.toLowerCase();
  for (const kind of kinds) {
    const extension = EXTENSIONS[kind][mime];
    if (extension) return extension;
  }
  return null;
}

/** Lempar error bila MIME tidak diizinkan atau berkas melebihi batas ukuran. */
export function assertAllowedFile(file: File, kinds: readonly UploadKind[] = ["image"]): void {
  if (file.size === 0) {
    throw new Error("Berkas kosong atau gagal dibaca.");
  }

  if (!extensionFor(file, kinds)) {
    throw new Error(
      `Format berkas tidak didukung. Gunakan ${kinds.map((kind) => KIND_LABELS[kind]).join(" atau ")}.`,
    );
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error(`Ukuran berkas maksimal ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)} MB.`);
  }
}

/**
 * Path objek acak di dalam `folder`. Nama dari `File.name` tidak pernah dipakai:
 * nama pengguna bisa berisi path traversal atau ekstensi yang menyesatkan.
 */
export function buildObjectPath(
  folder: string,
  file: File,
  kinds: readonly UploadKind[] = ["image"],
): string {
  const extension = extensionFor(file, kinds) ?? "bin";
  const cleanFolder = folder.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${cleanFolder}/${crypto.randomUUID()}.${extension}`;
}

/** URL publik sebuah objek di bucket media. */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) throw new Error("NEXT_PUBLIC_SUPABASE_URL belum dikonfigurasi.");

  return `${base.replace(/\/+$/, "")}/storage/v1/object/public/${MEDIA_BUCKET}/${path}`;
}

const PUBLIC_MARKER = `/storage/v1/object/public/${MEDIA_BUCKET}/`;

/** Path objek dari URL publik media; null bila URL bukan milik bucket kita. */
export function pathFromPublicUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const index = url.indexOf(PUBLIC_MARKER);
  if (index === -1) return null;

  const path = url.slice(index + PUBLIC_MARKER.length).split("?")[0];
  if (!path) return null;

  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

/** Validasi, unggah, lalu kembalikan URL publiknya. */
export async function uploadFile(
  supabase: Supabase,
  file: File,
  folder: string,
  kinds: readonly UploadKind[] = ["image"],
): Promise<string> {
  assertAllowedFile(file, kinds);

  const path = buildObjectPath(folder, file, kinds);
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    contentType: file.type,
    upsert: false,
  });

  if (error) throw new Error(`Gagal mengunggah berkas: ${error.message}`);

  return publicUrl(path);
}

/**
 * Hapus objek Storage dari daftar URL. Storage tidak punya cascade, jadi
 * pemanggil harus mengumpulkan URL sebelum baris database dihapus.
 * Kegagalan diabaikan (hanya dicatat) agar data tetap bisa dihapus.
 */
export async function removeFiles(
  supabase: Supabase,
  urls: readonly (string | null | undefined)[],
): Promise<void> {
  const paths = urls.map(pathFromPublicUrl).filter((path): path is string => path !== null);
  if (paths.length === 0) return;

  const { error } = await supabase.storage.from(MEDIA_BUCKET).remove(paths);
  if (error) console.warn(`Gagal menghapus berkas dari Storage: ${error.message}`);
}
