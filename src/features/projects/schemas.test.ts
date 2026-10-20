import { describe, expect, it } from "vitest";
import { projectFormSchema } from "./schemas";

const valid = {
  title: "Nexus Commerce",
  slug: "nexus-commerce",
  summary: "Platform e-commerce headless dengan Next.js dan Supabase.",
  startedAt: "",
  endedAt: "",
  descriptionHtml: "",
  repoUrl: "",
  demoUrl: "",
  coverImageUrl: "",
  coverImageAlt: "",
  skillIds: [],
  isFeatured: false,
  isPublished: true,
  isDeployed: false,
  seoTitle: "",
  seoDescription: "",
};

describe("projectFormSchema", () => {
  it("menerima proyek tanpa gambar cover", () => {
    expect(projectFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima detail proyek (jenis, peran, tim, fitur, hasil)", () => {
    const result = projectFormSchema.safeParse({
      ...valid,
      projectType: "Freelance",
      role: "Backend Developer",
      teamSize: 4,
      problem: "Pelaporan kunjungan masih manual.",
      solution: "Sistem check-in dengan verifikasi AI.",
      challenges: "Data pihak ketiga tidak konsisten.",
      features: ["Check-in kunjungan", "Peta tiang FAT"],
      outcomes: ["Laporan tidak lagi manual"],
      isDeployed: true,
    });
    expect(result.success).toBe(true);
  });

  it("menolak ukuran tim kurang dari 1", () => {
    expect(projectFormSchema.safeParse({ ...valid, teamSize: 0 }).success).toBe(false);
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

  it("menerima periode proyek yang berurutan", () => {
    const result = projectFormSchema.safeParse({
      ...valid,
      startedAt: "2026-03-01",
      endedAt: "2026-08-31",
    });
    expect(result.success).toBe(true);
  });

  it("menolak tanggal selesai sebelum tanggal mulai", () => {
    const result = projectFormSchema.safeParse({
      ...valid,
      startedAt: "2026-08-01",
      endedAt: "2026-03-01",
    });
    expect(result.success).toBe(false);
  });
});
