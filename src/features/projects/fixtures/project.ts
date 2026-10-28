import type { Project } from "../types";

/** Proyek tiruan untuk tes. Nilai default mengikuti bentuk data produksi. */
export function makeProject(overrides: Partial<Project> = {}): Project {
  return {
    id: "p1",
    slug: "contoh-proyek",
    title: "Contoh Proyek",
    summary: "Ringkasan proyek untuk pengujian.",
    descriptionHtml: null,
    repoUrl: null,
    demoUrl: null,
    coverImageUrl: null,
    coverImageAlt: null,
    startedAt: "2026-03-01",
    endedAt: "2026-08-31",
    isFeatured: true,
    isPublished: true,
    createdAt: "2026-01-01",
    sortOrder: 1,
    projectType: "Skripsi",
    role: "Full Stack",
    teamSize: 1,
    problem: null,
    solution: null,
    features: [],
    outcomes: [],
    challenges: null,
    isDeployed: false,
    domain: "computer-vision",
    seoTitle: null,
    seoDescription: null,
    skills: [
      { id: "s1", name: "Python" },
      { id: "s2", name: "FastAPI" },
      { id: "s3", name: "PostgreSQL" },
      { id: "s4", name: "YOLO" },
      { id: "s5", name: "PaddleOCR" },
    ],
    images: [],
    ...overrides,
  };
}
