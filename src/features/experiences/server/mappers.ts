import type { Database } from "@/shared/types/database";
import type { Experience, ExperienceImage } from "../types";

type ExperienceRow = Database["public"]["Tables"]["experiences"]["Row"];
type ExperienceImageRow = Database["public"]["Tables"]["experience_images"]["Row"];

/** Cukup kolom yang dipetakan; query boleh memilih sebagian kolom saja. */
export type ExperienceImageFields = Pick<ExperienceImageRow, "id" | "url" | "alt" | "sort_order">;

export type ExperienceWithRelations = ExperienceRow & {
  experience_images: ExperienceImageFields[] | null;
};

export function toExperienceImage(row: ExperienceImageFields): ExperienceImage {
  return {
    id: row.id,
    url: row.url,
    alt: row.alt,
    sortOrder: row.sort_order,
  };
}

export function toExperience(row: ExperienceWithRelations): Experience {
  return {
    id: row.id,
    company: row.company,
    role: row.role,
    description: row.description,
    location: row.location,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
    images: (row.experience_images ?? [])
      .map(toExperienceImage)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}
