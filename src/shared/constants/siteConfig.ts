export const siteConfig = {
  name: "Rakha W.",
  shortName: "Rakha",
  title: "Rakha W. | Full-Stack Developer & Software Engineer",
  description:
    "Portofolio profesional Full-Stack Developer spesialis Next.js, TypeScript, PostgreSQL, and scalable web architectures.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  role: "Full-Stack Software Engineer",
  location: "Indonesia",
  availability: "Tersedia untuk Kontrak & Proyek Penuh Waktu",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@rakhadev.com",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Proyek", href: "/projects" },
    { label: "Tentang", href: "/about" },
    { label: "Skill", href: "/skills" },
    { label: "Kontak", href: "/contact" },
  ],
} as const;
