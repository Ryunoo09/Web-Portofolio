import type { Database } from "@/shared/types/database";
import type { Organization, OrganizationImage } from "../types";

type OrganizationRow = Database["public"]["Tables"]["organizations"]["Row"];
type OrganizationImageRow = Database["public"]["Tables"]["organization_images"]["Row"];

/** Cukup kolom yang dipetakan; query boleh memilih sebagian kolom saja. */
export type OrganizationImageFields = Pick<
  OrganizationImageRow,
  "id" | "url" | "alt" | "sort_order"
>;

export type OrganizationWithRelations = OrganizationRow & {
  organization_images: OrganizationImageFields[] | null;
};

export function toOrganizationImage(row: OrganizationImageFields): OrganizationImage {
  return {
    id: row.id,
    url: row.url,
    alt: row.alt,
    sortOrder: row.sort_order,
  };
}

export function toOrganization(row: OrganizationWithRelations): Organization {
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
    images: (row.organization_images ?? [])
      .map(toOrganizationImage)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}
