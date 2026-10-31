/** Satu metrik hero. Nilai harus terverifikasi dan bisa dilacak ke satu proyek. */
export type SiteMetric = {
  value: string;
  label: string;
  detail?: string;
};

export const siteConfig = {
  name: "Rakha Yuda Wicaksono",
  shortName: "Rakha",
  title: "Rakha Yuda Wicaksono | Software Engineer & Data Engineer",
  description:
    "Portofolio Rakha Yuda Wicaksono — Software Engineer & Data Engineer. Python, FastAPI, Laravel, PostgreSQL, serta otomasi dan AI untuk menyelesaikan masalah nyata.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  role: "Software Engineer & Data Engineer",
  valueProp:
    "Saya mengubah proses manual menjadi backend, pipeline data, dan sistem computer vision yang bisa diukur. Fresh graduate Teknologi Rekayasa Komputer, Politeknik Negeri Semarang.",
  location: "Brebes, Jawa Tengah, Indonesia",
  timezone: "WIB",
  availability: "Terbuka untuk Backend & Data Engineer",
  /** Teknologi yang ditonjolkan di panel status hero. */
  focus: ["Python", "FastAPI", "PostgreSQL", "Laravel", "Next.js"],
  /**
   * Metrik hero. `500+` sengaja tidak dipakai: definisi pengguna unik/akumulatif
   * belum terverifikasi (keputusan 27 Okt 2026). Ganti nilainya di sini lalu deploy.
   */
  metrics: [
    { value: "3", label: "sistem operasional", detail: "FTTH · DSE AI · SIRATA" },
    { value: "88,62%", label: "akurasi model", detail: "Big Data Kualitas Air" },
    { value: "10 → 2", label: "menit pembuatan surat", detail: "SIRATA" },
  ],
  socials: {
    github: "https://github.com/Ryunoo09",
    linkedin: "https://www.linkedin.com/in/rakha-yd",
    email: "rakhayuda04@gmail.com",
  },
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Proyek", href: "/projects" },
    { label: "Tentang", href: "/about" },
    { label: "Skill", href: "/skills" },
    { label: "Kontak", href: "/contact" },
  ],
} as const;
