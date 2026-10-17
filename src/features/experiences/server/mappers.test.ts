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

describe("toExperience", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toExperience(row)).toEqual({
      id: "e1",
      company: "PT Maju Jaya",
      role: "Backend Engineer",
      description: "Membangun API.",
      location: "Jakarta",
      startedAt: "2023-01-01",
      endedAt: null,
      sortOrder: 4,
      isPublished: false,
    });
  });
});
