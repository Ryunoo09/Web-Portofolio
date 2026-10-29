/**
 * Nama tampilan pendek untuk ruang sempit (ticker, bukti skill, panel status).
 * Ini bukan perubahan data — judul lengkap tetap dipakai di kartu dan detail.
 */
export const PROJECT_SHORT_LABELS: Readonly<Record<string, string>> = {
  "validasi-ftth-yolo26-paddleocr": "Validasi FTTH",
  "analisis-prediktif-kualitas-air": "Big Data Kualitas Air",
  sirata: "SIRATA",
  campevent: "Campevent",
  "soil-ai": "SOIL-AI",
  "dse-ai": "DSE AI",
  "elang-hub": "Elang HUB",
  aifi: "AIFI",
  "chatbot-report-automation": "Chatbot Report",
};

/** Label pendek berdasarkan slug; fallback ke judul asli bila belum dipetakan. */
export function getProjectShortLabel(slug: string, fallback: string): string {
  return PROJECT_SHORT_LABELS[slug] ?? fallback;
}
