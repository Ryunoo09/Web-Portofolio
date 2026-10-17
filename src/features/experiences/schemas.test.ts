import { describe, expect, it } from "vitest";
import { experienceFormSchema } from "./schemas";

const valid = {
  company: "PT Maju Jaya",
  role: "Backend Engineer",
  startedAt: "2023-01-01",
  endedAt: "",
  location: "",
  description: "",
  sortOrder: 0,
  isPublished: true,
};

describe("experienceFormSchema", () => {
  it("menerima data lengkap tanpa tanggal selesai", () => {
    expect(experienceFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menolak tanggal mulai yang kosong", () => {
    expect(experienceFormSchema.safeParse({ ...valid, startedAt: "" }).success).toBe(false);
  });

  it("menolak tanggal selesai sebelum tanggal mulai", () => {
    expect(experienceFormSchema.safeParse({ ...valid, endedAt: "2022-12-31" }).success).toBe(false);
  });

  it("menerima tanggal selesai setelah tanggal mulai", () => {
    expect(experienceFormSchema.safeParse({ ...valid, endedAt: "2024-06-30" }).success).toBe(true);
  });

  it("menolak urutan negatif", () => {
    expect(experienceFormSchema.safeParse({ ...valid, sortOrder: -1 }).success).toBe(false);
  });
});
