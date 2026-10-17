import type { Database } from "@/shared/types/database";
import type { Education } from "../types";

type EducationRow = Database["public"]["Tables"]["education"]["Row"];

export function toEducation(row: EducationRow): Education {
  return {
    id: row.id,
    institution: row.institution,
    degree: row.degree,
    field: row.field,
    description: row.description,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
  };
}
