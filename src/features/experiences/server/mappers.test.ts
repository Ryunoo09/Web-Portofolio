import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toExperience } from "./mappers";

type ExperienceRow = Database["public"]["Tables"]["experiences"]["Row"];

const row: ExperienceRow = {
  id: "e1",
  company: "PT Maju Jaya",
  role: "Backend Engineer",
  description: "Membangun API.",
  location: "Jakarta",
  started_at: "2023-01-01",
  ended_at: null,
  sort_order: 4,
  is_published: false,
  created_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
};

const images = [
  {
    id: "img-2",
    url: "https://demo.supabase.co/dua.png",
    alt: "Demo internal",
    sort_order: 2,
  },
  {
    id: "img-1",
    url: "https://demo.supabase.co/satu.png",
    alt: "Rapat tim",
    sort_order: 1,
  },
];

describe("toExperience", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toExperience({ ...row, experience_images: [] })).toEqual({
      id: "e1",
      company: "PT Maju Jaya",
      role: "Backend Engineer",
      description: "Membangun API.",
      location: "Jakarta",
      startedAt: "2023-01-01",
      endedAt: null,
      sortOrder: 4,
      isPublished: false,
      images: [],
    });
  });

  it("memetakan field dokumentasi dan mengurutkan berdasarkan sortOrder", () => {
    const experience = toExperience({ ...row, experience_images: images });

    expect(experience.images).toEqual([
      {
        id: "img-1",
        url: "https://demo.supabase.co/satu.png",
        alt: "Rapat tim",
        sortOrder: 1,
      },
      {
        id: "img-2",
        url: "https://demo.supabase.co/dua.png",
        alt: "Demo internal",
        sortOrder: 2,
      },
    ]);
  });

  it("memakai array kosong bila experience_images null", () => {
    expect(toExperience({ ...row, experience_images: null }).images).toEqual([]);
  });
});
