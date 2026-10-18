import type { Database } from "@/shared/types/database";
import type { Skill } from "../types";

type SkillRow = Database["public"]["Tables"]["skills"]["Row"];

export function toSkill(row: SkillRow): Skill {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    level: row.level ?? 0,
    iconName: row.icon,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
    isLearning: row.is_learning,
  };
}
