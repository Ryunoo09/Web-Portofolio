import { describe, expect, it } from "vitest";
import { projectFormSchema } from "./schemas";

const valid = {
  title: "Nexus Commerce",
  slug: "nexus-commerce",
  summary: "Platform e-commerce headless dengan Next.js dan Supabase.",
  descriptionHtml: "",
  repoUrl: "",
  demoUrl: "",
  coverImageUrl: "",
  coverImageAlt: "",
  skillIds: [],
  isFeatured: false,
  isPublished: true,
  seoTitle: "",
  seoDescription: "",
};

describe("projectFormSchema", () => {
  it("menerima proyek tanpa gambar cover", () => {
    expect(projectFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima cover lengkap dengan teks alternatif", () => {
    const result = projectFormSchema.safeParse({
      ...valid,
      coverImageUrl: "https://demo.supabase.co/storage/v1/object/public/portfolio-media/a.jpg",
      coverImageAlt: "Tangkapan layar beranda",
    });
    expect(result.success).toBe(true);
  });

  it("menolak cover tanpa teks alternatif", () => {
    const result = projectFormSchema.safeParse({
      ...valid,
      coverImageUrl: "https://demo.supabase.co/gambar.jpg",
      coverImageAlt: "   ",
    });
    expect(result.success).toBe(false);
  });

  it("menolak slug yang bukan huruf kecil dan tanda hubung", () => {
    expect(projectFormSchema.safeParse({ ...valid, slug: "Nexus Commerce" }).success).toBe(false);
  });
});
