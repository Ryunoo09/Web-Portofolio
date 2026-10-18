import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toOrganization } from "./mappers";

type OrganizationRow = Database["public"]["Tables"]["organizations"]["Row"];

const row: OrganizationRow = {
  id: "o1",
  name: "Polytechnic Computer Club (PCC)",
  role: "Anggota Aktif",
  description: "Pelatihan desain untuk panti asuhan.",
  started_at: "2022-10-01",
  ended_at: "2023-10-01",
  member_count: 100,
  sort_order: 1,
  is_published: true,
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-01-01T00:00:00Z",
};

describe("toOrganization", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toOrganization(row)).toEqual({
      id: "o1",
      name: "Polytechnic Computer Club (PCC)",
      role: "Anggota Aktif",
      description: "Pelatihan desain untuk panti asuhan.",
      startedAt: "2022-10-01",
      endedAt: "2023-10-01",
      memberCount: 100,
      sortOrder: 1,
      isPublished: true,
    });
  });
});
