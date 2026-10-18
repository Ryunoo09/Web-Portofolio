import { describe, expect, it } from "vitest";
import { organizationFormSchema } from "./schemas";

const valid = {
  name: "Polytechnic Computer Club (PCC)",
  role: "Anggota Aktif",
  description: "",
  startedAt: "2022-10-01",
  endedAt: "2023-10-01",
  memberCount: 100,
  sortOrder: 1,
  isPublished: true,
};

describe("organizationFormSchema", () => {
  it("menerima data organisasi yang valid", () => {
    expect(organizationFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima organisasi tanpa tanggal selesai dan tanpa jumlah anggota", () => {
    const result = organizationFormSchema.safeParse({
      ...valid,
      endedAt: "",
      memberCount: undefined,
    });
    expect(result.success).toBe(true);
  });

  it("menolak tanggal selesai sebelum tanggal mulai", () => {
    expect(organizationFormSchema.safeParse({ ...valid, endedAt: "2022-01-01" }).success).toBe(
      false,
    );
  });

  it("menolak nama organisasi kosong", () => {
    expect(organizationFormSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
  });
});
