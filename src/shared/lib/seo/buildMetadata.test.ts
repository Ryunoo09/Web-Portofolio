import { describe, expect, it } from "vitest";
import { siteConfig } from "@/shared/constants/siteConfig";
import { buildMetadata } from "./buildMetadata";

describe("buildMetadata", () => {
  it("membuat canonical absolut dan OG dasar", () => {
    const metadata = buildMetadata({
      title: "Proyek",
      description: "Deskripsi",
      path: "/projects",
    });

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/projects`);
    expect(metadata.openGraph).toMatchObject({
      title: "Proyek",
      description: "Deskripsi",
      url: `${siteConfig.url}/projects`,
    });
  });

  it("tidak menulis kunci images tanpa gambar agar OG file-based bisa digabung", () => {
    const metadata = buildMetadata({ title: "Proyek", description: "Deskripsi", path: "/x" });

    expect(metadata.openGraph).not.toHaveProperty("images");
  });

  it("menulis images bila gambar diberikan", () => {
    const metadata = buildMetadata({
      title: "Proyek",
      description: "Deskripsi",
      path: "/x",
      image: "https://example.com/og.png",
    });

    expect(metadata.openGraph?.images).toEqual([{ url: "https://example.com/og.png" }]);
  });
});
