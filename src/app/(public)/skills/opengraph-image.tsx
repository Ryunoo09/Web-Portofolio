import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/shared/lib/seo/og-image";

export const alt = "Keahlian Rakha — backend, data, computer vision, otomasi";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "KEAHLIAN",
    title: "Keahlian & bukti",
    subtitle: "Backend · Data · Computer Vision · Automation",
  });
}
