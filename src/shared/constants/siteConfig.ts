export const siteConfig = {
  name: "Rakha Yuda Wicaksono",
  shortName: "Rakha",
  title: "Rakha Yuda Wicaksono | Backend & Data Engineer",
  description:
    "Portofolio Rakha Yuda Wicaksono — Backend & Data Engineer. Python, FastAPI, Laravel, PostgreSQL, serta otomasi dan AI untuk menyelesaikan masalah nyata.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  role: "Backend Developer & Data Engineer",
  location: "Brebes, Jawa Tengah, Indonesia",
  availability: "Terbuka untuk posisi Junior Software, Backend & Data",
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
