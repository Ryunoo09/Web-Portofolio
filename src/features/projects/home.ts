import type { Project } from "./types";
import { getProjectShortLabel } from "./short-labels";

/** Urutan kartu studi kasus di beranda: kartu pertama menjadi `feature`. */
export const HOME_CASE_SLUGS = ["validasi-ftth-yolo26-paddleocr", "dse-ai", "sirata"] as const;

/** Proyek sumber proof strip beranda. */
export const PROOF_PROJECT_SLUG = "analisis-prediktif-kualitas-air";

/**
 * Item ticker beranda. Label pendek berasal dari `short-labels.ts` agar sama
 * dengan bukti skill di /skills.
 */
export const HOME_TICKER_ITEMS = [
  { slug: "validasi-ftth-yolo26-paddleocr", detail: "deteksi kunjungan + OCR" },
  { slug: "dse-ai", detail: "verifikasi kunjungan sales" },
  { slug: "sirata", detail: "surat 10 → 2 menit" },
  { slug: PROOF_PROJECT_SLUG, detail: "88,62% akurasi" },
].map((item) => ({ ...item, label: getProjectShortLabel(item.slug, item.slug) }));

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
