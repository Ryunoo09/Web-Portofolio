import { siteConfig } from "@/shared/constants/siteConfig";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/shared/lib/seo/og-image";

export const alt = "Rakha Yuda Wicaksono — Software Engineer & Data Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: siteConfig.name,
    subtitle: "Software Engineer & Data Engineer",
    metrics: siteConfig.metrics,
  });
}
