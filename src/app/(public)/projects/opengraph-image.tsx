import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/shared/lib/seo/og-image";

export const alt = "Karya & proyek Rakha — backend, data, computer vision";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: "Karya & Proyek",
    subtitle: "Backend, data, computer vision, dan otomasi",
  });
}
