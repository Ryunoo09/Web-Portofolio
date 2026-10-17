import { describe, expect, it } from "vitest";
import { skillFormSchema } from "./schemas";

const valid = {
  name: "Laravel & PHP",
  category: "Backend",
  level: 4,
  sortOrder: 13,
  isPublished: true,
};

describe("skillFormSchema", () => {
  it("menerima data keahlian yang lengkap", () => {
    expect(skillFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menolak nama yang terlalu pendek", () => {
    expect(skillFormSchema.safeParse({ ...valid, name: "P" }).success).toBe(false);
  });

  it("menolak tingkat di luar skala 1-5", () => {
    expect(skillFormSchema.safeParse({ ...valid, level: 0 }).success).toBe(false);
    expect(skillFormSchema.safeParse({ ...valid, level: 6 }).success).toBe(false);
  });

  it("menolak urutan negatif", () => {
    expect(skillFormSchema.safeParse({ ...valid, sortOrder: -1 }).success).toBe(false);
  });
});
