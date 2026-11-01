import { describe, expect, it } from "vitest";
import { toOrganization, type OrganizationWithRelations } from "./mappers";

const row: OrganizationWithRelations = {
  id: "o1",
  name: "Polytechnic Computer Club",
  role: "Anggota Aktif",
  description: null,
  started_at: "2022-09-01",
  ended_at: "2023-06-01",
  member_count: 40,
  sort_order: 1,
  is_published: true,
  created_at: "2023-06-01T00:00:00Z",
  updated_at: "2023-06-01T00:00:00Z",
  organization_images: [
    { id: "i2", url: "https://cdn.test/2.png", alt: "Rapat", sort_order: 1 },
    { id: "i1", url: "https://cdn.test/1.png", alt: "Seminar", sort_order: 0 },
  ],
};

describe("toOrganization", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toOrganization(row)).toEqual({
      id: "o1",
      name: "Polytechnic Computer Club",
      role: "Anggota Aktif",
      description: null,
      startedAt: "2022-09-01",
      endedAt: "2023-06-01",
      memberCount: 40,
      sortOrder: 1,
      isPublished: true,
      images: [
        { id: "i1", url: "https://cdn.test/1.png", alt: "Seminar", sortOrder: 0 },
        { id: "i2", url: "https://cdn.test/2.png", alt: "Rapat", sortOrder: 1 },
      ],
    });
  });

  it("memakai daftar kosong bila foto tidak di-embed", () => {
    expect(toOrganization({ ...row, organization_images: null }).images).toEqual([]);
  });
});
