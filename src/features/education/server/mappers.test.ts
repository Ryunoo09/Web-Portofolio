import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toEducation } from "./mappers";

type EducationRow = Database["public"]["Tables"]["education"]["Row"];

const row: EducationRow = {
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
    });
  });
});
