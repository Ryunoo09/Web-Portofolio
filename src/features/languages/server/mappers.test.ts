import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toLanguage } from "./mappers";

type LanguageRow = Database["public"]["Tables"]["languages"]["Row"];

const row: LanguageRow = {
  id: "l1",
  name: "Inggris",
  level: "Intermediate",
  score: "TOEIC 685",
  sort_order: 2,
  is_published: true,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-01T00:00:00Z",
};

describe("toLanguage", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toLanguage(row)).toEqual({
      id: "l1",
      name: "Inggris",
      level: "Intermediate",
      score: "TOEIC 685",
      sortOrder: 2,
      isPublished: true,
    });
  });
});
