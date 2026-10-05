export const siteConfig = {
  name: "Nama Anda",
  title: "Nama Anda | Portofolio",
  description: "Portofolio dan karya saya.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
} as const;
