import { describe, expect, it } from "vitest";
import { educationFormSchema } from "./schemas";

const valid = {
  institution: "Universitas Indonesia",
  degree: "S1 Teknik Informatika",
  field: "Ilmu Komputer",
  startedAt: "",
  endedAt: "",
  description: "",
  sortOrder: 0,
  isPublished: true,
};

describe("educationFormSchema", () => {
  it("menerima data tanpa tanggal (tanggal opsional)", () => {
    expect(educationFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menolak nama institusi yang kosong", () => {
    expect(educationFormSchema.safeParse({ ...valid, institution: "" }).success).toBe(false);
  });

  it("menolak tanggal selesai sebelum tanggal mulai", () => {
    const result = educationFormSchema.safeParse({
      ...valid,
      startedAt: "2019-08-01",
      endedAt: "2018-07-01",
    });
    expect(result.success).toBe(false);
  });

  it("menerima rentang tanggal yang benar", () => {
    const result = educationFormSchema.safeParse({
      ...valid,
      startedAt: "2018-08-01",
      endedAt: "2022-07-01",
    });
    expect(result.success).toBe(true);
  });
});
