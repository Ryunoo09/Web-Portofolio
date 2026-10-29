import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/shared/lib/seo/og-image";

export const alt = "Tentang Rakha Yuda Wicaksono — Backend & Data Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "TENTANG",
    title: "Tentang Rakha",
    subtitle: "Backend & Data Engineer · Brebes, Jawa Tengah",
  });
}
