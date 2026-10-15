import type { Database } from "@/shared/types/database";
import type { Project } from "../types";

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type ProjectSkill = { skills: { id: string; name: string } | null };

export type ProjectWithSkills = ProjectRow & { project_skills: ProjectSkill[] | null };

export function toProject(row: ProjectWithSkills): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    descriptionHtml: row.description_html,
    repoUrl: row.repo_url,
    demoUrl: row.demo_url,
    startedAt: row.started_at,
    isFeatured: row.is_featured,
    isPublished: row.is_published,
    createdAt: row.created_at,
    sortOrder: row.sort_order,
    skills: (row.project_skills ?? [])
      .map((ps) => ps.skills)
      .filter((s): s is { id: string; name: string } => s !== null),
  };
}
