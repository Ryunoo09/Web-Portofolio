import type { Project } from "./types";

/** Urutan kartu studi kasus di beranda: kartu pertama menjadi `feature`. */
export const HOME_CASE_SLUGS = ["validasi-ftth-yolo26-paddleocr", "dse-ai", "sirata"] as const;

/** Proyek sumber proof strip beranda. */
export const PROOF_PROJECT_SLUG = "analisis-prediktif-kualitas-air";

/**
 * Label pendek untuk ticker. Judul asli proyek terlalu panjang untuk satu baris,
 * sedangkan label ini hanya nama tampilan — bukan perubahan data.
 */
export const HOME_TICKER_ITEMS = [
  {
    slug: "validasi-ftth-yolo26-paddleocr",
    label: "Validasi FTTH",
    detail: "deteksi kunjungan + OCR",
  },
  { slug: "dse-ai", label: "DSE AI", detail: "verifikasi kunjungan sales" },
  { slug: "sirata", label: "SIRATA", detail: "surat 10 → 2 menit" },
  { slug: PROOF_PROJECT_SLUG, label: "Big Data Kualitas Air", detail: "88,62% akurasi" },
] as const;

/** Ambil proyek sesuai urutan slug; slug yang tidak ada dilewati. */
export function pickProjectsBySlug(
  projects: readonly Project[],
  slugs: readonly string[],
): Project[] {
  const bySlug = new Map(projects.map((project) => [project.slug, project]));
  return slugs.flatMap((slug) => {
    const project = bySlug.get(slug);
    return project ? [project] : [];
  });
}

const SHORT_LABELS = new Map<string, string>(
  HOME_TICKER_ITEMS.map((item) => [item.slug, item.label] as const),
);

/** Nama pendek untuk tempat sempit (ticker, panel status); fallback ke judul asli. */
export function getProjectShortLabel(slug: string, fallback: string): string {
  return SHORT_LABELS.get(slug) ?? fallback;
}
