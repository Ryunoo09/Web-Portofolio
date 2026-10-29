/**
 * Empat capability group di `/skills`. Copy disetujui di `04 §7.5`;
 * `proofSlugs` menunjuk proyek nyata yang membuktikan klaim tersebut.
 * Bila sebuah proyek tidak ada, baris buktinya dilewati (bukan tautan palsu).
 */
export type CapabilityGroup = {
  title: string;
  description: string;
  proofSlugs: readonly string[];
};

export const CAPABILITY_GROUPS: readonly CapabilityGroup[] = [
  {
    title: "Backend & API",
    description: "API yang aman, validasi input, otorisasi peran, dan database yang bisa dirawat.",
    proofSlugs: ["validasi-ftth-yolo26-paddleocr", "sirata", "dse-ai"],
  },
  {
    title: "Data & Automation",
    description: "Pipeline data, pembersihan, evaluasi model, dan otomasi laporan.",
    proofSlugs: ["analisis-prediktif-kualitas-air", "chatbot-report-automation"],
  },
  {
    title: "Applied AI & CV",
    description: "Deteksi objek, OCR, dan evaluasi model untuk menggantikan pengecekan manual.",
    proofSlugs: ["validasi-ftth-yolo26-paddleocr", "dse-ai"],
  },
  {
    title: "Automation & Integration",
    description: "Menghubungkan layanan dan orang lewat n8n, WhatsApp, Telegram, dan API.",
    proofSlugs: ["chatbot-report-automation"],
  },
] as const;
