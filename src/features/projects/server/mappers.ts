import type { Database } from "@/shared/types/database";
import { resolveProjectDomain } from "@/shared/lib/taxonomy";
import type { Project, ProjectImage } from "../types";

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
type ProjectImageRow = Database["public"]["Tables"]["project_images"]["Row"];
type ProjectSkill = { skills: { id: string; name: string } | null };

/** Cukup kolom yang dipetakan; query boleh memilih sebagian kolom saja. */
export type ProjectImageFields = Pick<ProjectImageRow, "id" | "url" | "alt" | "sort_order">;

export type ProjectWithRelations = ProjectRow & {
  project_skills: ProjectSkill[] | null;
  project_images: ProjectImageRow[] | null;
};

export function toProjectImage(row: ProjectImageFields): ProjectImage {
  return {
    id: row.id,
    url: row.url,
    alt: row.alt,
    sortOrder: row.sort_order,
  };
}

export function toProject(row: ProjectWithRelations): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    descriptionHtml: row.description_html,
    repoUrl: row.repo_url,
    demoUrl: row.demo_url,
    coverImageUrl: row.cover_image_url,
    coverImageAlt: row.cover_image_alt,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    isFeatured: row.is_featured,
    isPublished: row.is_published,
    createdAt: row.created_at,
    sortOrder: row.sort_order,
    projectType: row.project_type,
    role: row.role,
    teamSize: row.team_size,
    problem: row.problem,
    solution: row.solution,
    features: row.features ?? [],
    outcomes: row.outcomes ?? [],
    challenges: row.challenges,
    isDeployed: row.is_deployed,
    domain: resolveProjectDomain(row.slug, row.domain),
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    skills: (row.project_skills ?? [])
      .map((ps) => ps.skills)
      .filter((s): s is { id: string; name: string } => s !== null),
    images: (row.project_images ?? [])
      .map(toProjectImage)
      .sort((a, b) => a.sortOrder - b.sortOrder),
  };
}
