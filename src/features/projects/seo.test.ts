import { describe, expect, it } from "vitest";
import { siteConfig } from "@/shared/constants/siteConfig";
import { projectJsonLd, projectMetadata } from "./seo";
import type { Project } from "./types";

const project: Project = {
  id: "p1",
  slug: "sirata",
  title: "SIRATA - Sistem Surat Menyurat",
  summary: "Sistem surat menyurat kampus.",
  descriptionHtml: null,
  repoUrl: "https://github.com/example/sirata",
  demoUrl: null,
  coverImageUrl: null,
  coverImageAlt: null,
  startedAt: "2024-06-01",
  endedAt: "2025-01-31",
  isFeatured: true,
  isPublished: true,
  createdAt: "2024-06-01T00:00:00Z",
  sortOrder: 1,
  projectType: "Tugas Kuliah",
  role: "Backend Developer",
  teamSize: 8,
  problem: "Surat dibuat manual.",
  solution: "Template dan persetujuan online.",
  features: ["Template surat"],
  outcomes: ["10 menit menjadi 2 menit"],
  challenges: null,
  isDeployed: false,
  domain: "backend-system",
  seoTitle: "SIRATA — Studi Kasus",
  seoDescription: "Backend Laravel untuk surat kampus.",
  skills: [
    { id: "s1", name: "Laravel" },
    { id: "s2", name: "PostgreSQL" },
  ],
  images: [],
};

describe("projectMetadata", () => {
  it("memakai seo_title/seo_description bila tersedia", () => {
    const metadata = projectMetadata(project);

    expect(metadata.title).toBe("SIRATA — Studi Kasus");
    expect(metadata.description).toBe("Backend Laravel untuk surat kampus.");
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/projects/sirata`);
  });

  it("jatuh ke judul dan ringkasan proyek saat kolom SEO kosong", () => {
    const metadata = projectMetadata({ ...project, seoTitle: null, seoDescription: "  " });

    expect(metadata.title).toBe(project.title);
    expect(metadata.description).toBe(project.summary);
  });
});

describe("projectJsonLd", () => {
  it("membuat CreativeWork dengan penulis, tanggal, kata kunci, dan domain", () => {
    const data = projectJsonLd(project);

    expect(data["@type"]).toBe("CreativeWork");
    expect(data.url).toBe(`${siteConfig.url}/projects/sirata`);
    expect(data.dateCreated).toBe("2024-06-01");
    expect(data.genre).toBe("Backend & API");
    expect(data.keywords).toEqual(["Laravel", "PostgreSQL"]);
    expect(data.codeRepository).toBe(project.repoUrl);
    expect(data.author).toMatchObject({ "@type": "Person", name: siteConfig.name });
  });

  it("tidak mengisi repo/gambar bila datanya kosong", () => {
    const data = projectJsonLd({ ...project, repoUrl: null, coverImageUrl: null });

    expect(data.codeRepository).toBeUndefined();
    expect(data.image).toBeUndefined();
  });
});
