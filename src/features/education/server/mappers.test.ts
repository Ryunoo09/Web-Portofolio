import { describe, expect, it } from "vitest";
import { toEducation, type EducationWithRelations } from "./mappers";

const row: EducationWithRelations = {
  id: "d1",
  institution: "Universitas Indonesia",
  degree: "S1 Teknik Informatika",
  field: "Ilmu Komputer",
  description: null,
  started_at: "2018-08-01",
  ended_at: "2022-07-01",
  sort_order: 2,
  is_published: true,
  created_at: "2022-07-01T00:00:00Z",
  updated_at: "2022-07-01T00:00:00Z",
  education_images: [
    { id: "i2", url: "https://cdn.test/2.png", alt: "Wisuda", sort_order: 1 },
    { id: "i1", url: "https://cdn.test/1.png", alt: "Kampus", sort_order: 0 },
  ],
};

describe("toEducation", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toEducation(row)).toEqual({
      id: "d1",
      institution: "Universitas Indonesia",
      degree: "S1 Teknik Informatika",
      field: "Ilmu Komputer",
      description: null,
      startedAt: "2018-08-01",
      endedAt: "2022-07-01",
      sortOrder: 2,
      isPublished: true,
      images: [
        { id: "i1", url: "https://cdn.test/1.png", alt: "Kampus", sortOrder: 0 },
        { id: "i2", url: "https://cdn.test/2.png", alt: "Wisuda", sortOrder: 1 },
      ],
    });
  });

  it("memakai daftar kosong bila foto tidak di-embed", () => {
    expect(toEducation({ ...row, education_images: null }).images).toEqual([]);
  });
});
