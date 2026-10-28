import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Project } from "@/features/projects";
import type { Skill } from "../../types";
import { CapabilityBoard, buildSkillProofIndex, groupSkillsByCategory } from "./CapabilityBoard";

function makeSkill(overrides: Partial<Skill> = {}): Skill {
  return {
    id: "s1",
    name: "Python",
    category: "Bahasa Pemrograman",
    level: 4,
    iconName: null,
    sortOrder: 1,
    isPublished: true,
    isLearning: false,
    ...overrides,
  };
}

/** Proyek ringkas khusus tes: hanya field yang dipakai `CapabilityBoard`. */
function makeProjectRef(slug: string, title: string, skillNames: string[]): Project {
  return {
    id: slug,
    slug,
    title,
    summary: "",
    descriptionHtml: null,
    repoUrl: null,
    demoUrl: null,
    coverImageUrl: null,
    coverImageAlt: null,
    startedAt: null,
    endedAt: null,
    isFeatured: false,
    isPublished: true,
    createdAt: "2026-01-01",
    sortOrder: 1,
    projectType: "Tugas Kuliah",
    role: null,
    teamSize: null,
    problem: null,
    solution: null,
    features: [],
    outcomes: [],
    challenges: null,
    isDeployed: false,
    domain: "backend-system",
    seoTitle: null,
    seoDescription: null,
    skills: skillNames.map((name, index) => ({ id: `${slug}-s${index}`, name })),
    images: [],
  };
}

const projects = [
  makeProjectRef("sirata", "SIRATA", ["Python", "Laravel"]),
  makeProjectRef("dse-ai", "DSE AI", ["python"]),
  makeProjectRef("aifi", "AIFI", ["Python"]),
];

describe("buildSkillProofIndex", () => {
  it("mencocokkan nama skill tanpa beda huruf besar", () => {
    const index = buildSkillProofIndex(projects);
    expect(index.get("python")?.map((project) => project.slug)).toEqual([
      "sirata",
      "dse-ai",
      "aifi",
    ]);
  });
});

describe("groupSkillsByCategory", () => {
  it("menjaga urutan kemunculan kategori", () => {
    const groups = groupSkillsByCategory([
      makeSkill({ id: "a", category: "Database" }),
      makeSkill({ id: "b", category: "Konsep" }),
      makeSkill({ id: "c", category: "Database" }),
    ]);

    expect(groups.map((group) => group.category)).toEqual(["Database", "Konsep"]);
    expect(groups[0]?.skills).toHaveLength(2);
  });
});

describe("CapabilityBoard", () => {
  it("menampilkan statistik, bukti proyek, dan skill tanpa bukti secara jujur", () => {
    const skills = [
      makeSkill({ id: "s1", name: "Python", category: "Bahasa Pemrograman" }),
      makeSkill({ id: "s2", name: "Docker", category: "Cloud & DevOps" }),
    ];

    render(
      <CapabilityBoard
        skills={skills}
        learningSkills={[makeSkill({ id: "s3", name: "Playwright", isLearning: true })]}
        projects={projects}
      />,
    );

    expect(screen.getByText(/2 keahlian · 2 kategori · 1 sedang dipelajari/)).toBeInTheDocument();
    expect(screen.getByText("Belum ada studi kasus")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "SIRATA" })[0]).toHaveAttribute(
      "href",
      "/projects/sirata",
    );
    // Tiga bukti untuk Python → dua tautan + sisa dihitung.
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("tidak memakai progress bar", () => {
    const { container } = render(
      <CapabilityBoard skills={[makeSkill()]} learningSkills={[]} projects={projects} />,
    );

    expect(container.querySelector('[role="progressbar"]')).toBeNull();
  });
});
