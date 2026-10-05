import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

// TODO: tambahkan proyek terbit dari database (lastModified = updated_at).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/about", "/skills", "/projects", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));
}
