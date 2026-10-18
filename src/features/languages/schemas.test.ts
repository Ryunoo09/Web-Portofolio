import { describe, expect, it } from "vitest";
import { languageFormSchema } from "./schemas";

const valid = {
  name: "Inggris",
  level: "Intermediate",
  score: "TOEIC 685",
  sortOrder: 2,
  isPublished: true,
};

describe("languageFormSchema", () => {
  it("menerima data bahasa yang valid", () => {
    expect(languageFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima bahasa tanpa skor", () => {
    expect(languageFormSchema.safeParse({ ...valid, score: "" }).success).toBe(true);
  });

  it("menolak tingkat yang kosong", () => {
    expect(languageFormSchema.safeParse({ ...valid, level: "" }).success).toBe(false);
  });

  it("menolak nama bahasa kosong", () => {
    expect(languageFormSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
  });
});
