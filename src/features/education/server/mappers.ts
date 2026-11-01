import type { Database } from "@/shared/types/database";
import type { Education, EducationImage } from "../types";

type EducationRow = Database["public"]["Tables"]["education"]["Row"];
type EducationImageRow = Database["public"]["Tables"]["education_images"]["Row"];

/** Cukup kolom yang dipetakan; query boleh memilih sebagian kolom saja. */
export type EducationImageFields = Pick<EducationImageRow, "id" | "url" | "alt" | "sort_order">;

export type EducationWithRelations = EducationRow & {
  education_images: EducationImageFields[] | null;
};

export function toEducationImage(row: EducationImageFields): EducationImage {
  return {
    id: row.id,
    url: row.url,
    alt: row.alt,
    sortOrder: row.sort_order,
  };
}

export function toEducation(row: EducationWithRelations): Education {
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
    images: (row.education_images ?? [])
      .map(toEducationImage)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}
