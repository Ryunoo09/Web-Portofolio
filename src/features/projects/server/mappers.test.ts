import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toProject, toProjectImage } from "./mappers";
import type { ProjectWithRelations } from "./mappers";

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type ProjectImageRow = Database["public"]["Tables"]["project_images"]["Row"];

const projectRow: ProjectRow = {
  id: "p1",
  slug: "nexus-commerce",
  title: "Nexus Commerce",
  summary: "Platform e-commerce headless.",
  description_html: "<p>Halo</p>",
  cover_image_url: "https://demo.supabase.co/cover.jpg",
  cover_image_alt: "Beranda Nexus",
  repo_url: null,
  demo_url: null,
  started_at: "2024-02-01",
  ended_at: null,
  is_featured: true,
  is_published: true,
  sort_order: 1,
  project_type: "Freelance",
  role: "Backend Developer",
  team_size: 3,
  problem: "Pelaporan manual.",
  solution: "Otomasi pelaporan.",
  features: ["Check-in", "Peta FAT"],
  outcomes: ["Hemat 8 menit per surat"],
  challenges: "Data vendor tidak konsisten.",
  is_deployed: true,
  seo_title: null,
  seo_description: null,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-01T00:00:00Z",
};

const imageRow = (id: string, sortOrder: number): ProjectImageRow => ({
  id,
  project_id: "p1",
  url: `https://demo.supabase.co/${id}.jpg`,
  alt: `Gambar ${id}`,
  sort_order: sortOrder,
  created_at: "2024-01-01T00:00:00Z",
});

describe("toProjectImage", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toProjectImage(imageRow("i1", 3))).toEqual({
      id: "i1",
      url: "https://demo.supabase.co/i1.jpg",
      alt: "Gambar i1",
      sortOrder: 3,
    });
  });
});

describe("toProject", () => {
  it("memetakan kolom baru, menyaring skill kosong, dan mengurutkan galeri", () => {
    const row: ProjectWithRelations = {
      ...projectRow,
      project_skills: [{ skills: { id: "s1", name: "Laravel" } }, { skills: null }],
      project_images: [imageRow("i2", 5), imageRow("i1", 2)],
    };

    const project = toProject(row);

    expect(project.coverImageUrl).toBe("https://demo.supabase.co/cover.jpg");
    expect(project.coverImageAlt).toBe("Beranda Nexus");
    expect(project.createdAt).toBe("2024-01-01T00:00:00Z");
    expect(project.endedAt).toBeNull();
    expect(project.projectType).toBe("Freelance");
    expect(project.role).toBe("Backend Developer");
    expect(project.teamSize).toBe(3);
    expect(project.features).toEqual(["Check-in", "Peta FAT"]);
    expect(project.outcomes).toEqual(["Hemat 8 menit per surat"]);
    expect(project.challenges).toBe("Data vendor tidak konsisten.");
    expect(project.isDeployed).toBe(true);
    expect(project.skills).toEqual([{ id: "s1", name: "Laravel" }]);
    expect(project.images.map((image) => image.id)).toEqual(["i1", "i2"]);
  });
});
