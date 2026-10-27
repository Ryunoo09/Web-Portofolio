import type { Metadata } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
