import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/shared/lib/seo/og-image";

export const alt = "Hubungi Rakha Yuda Wicaksono";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "KONTAK",
    title: "Hubungi Rakha",
    subtitle: "Respons maksimal 1×24 jam kerja",
  });
}
