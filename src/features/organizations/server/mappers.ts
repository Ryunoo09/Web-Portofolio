import type { Database } from "@/shared/types/database";
import type { Organization } from "../types";

type OrganizationRow = Database["public"]["Tables"]["organizations"]["Row"];

export function toOrganization(row: OrganizationRow): Organization {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    description: row.description,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    memberCount: row.member_count,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
  };
}
