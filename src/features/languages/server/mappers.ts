import type { Database } from "@/shared/types/database";
import type { Language } from "../types";

type LanguageRow = Database["public"]["Tables"]["languages"]["Row"];

export function toLanguage(row: LanguageRow): Language {
  return {
    id: row.id,
    name: row.name,
    level: row.level,
    score: row.score,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
  };
}
