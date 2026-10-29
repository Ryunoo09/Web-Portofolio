import type { Metadata } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Mis. untuk URL filter: canonical tetap `/projects` tapi jangan diindeks. */
  robots?: { index: boolean; follow: boolean };
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  robots,
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    // Judul sudah lengkap per halaman; jangan ditimpa template `| nama` di root.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    ...(robots ? { robots } : {}),
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
