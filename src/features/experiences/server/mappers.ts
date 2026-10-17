import type { Database } from "@/shared/types/database";
import type { Experience } from "../types";

type ExperienceRow = Database["public"]["Tables"]["experiences"]["Row"];

export function toExperience(row: ExperienceRow): Experience {
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
  };
}
