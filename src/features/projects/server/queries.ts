import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Project, ProjectImage } from "../types";
import { toProject, toProjectImage, type ProjectWithRelations } from "./mappers";

const PROJECT_SELECT =
  "id, slug, title, summary, description_html, repo_url, demo_url, cover_image_url, cover_image_alt, started_at, ended_at, is_featured, is_published, created_at, updated_at, sort_order, project_type, role, team_size, problem, solution, features, outcomes, challenges, is_deployed, domain, seo_title, seo_description, project_skills(skills(id, name)), project_images(id, url, alt, sort_order)";

function findProjects(): Promise<Project[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);

    return (data as unknown as ProjectWithRelations[]).map(toProject);
  }, []);
}

export function getPublishedProjects(): Promise<Project[]> {
  return findProjects();
}

export function getProjectBySlug(slug: string): Promise<Project | null> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select(PROJECT_SELECT)
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();

    if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);
    return data ? toProject(data as unknown as ProjectWithRelations) : null;
  }, null);
}

// Admin queries ----------------------------------------------------------------

/** Semua proyek (termasuk draf) untuk admin. */
export async function getAllProjects(): Promise<Project[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_SELECT)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);
  return (data as unknown as ProjectWithRelations[]).map(toProject);
}

/** Satu proyek berdasarkan ID (termasuk draf) untuk form edit. */
export async function getProjectById(id: string): Promise<Project | null> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_SELECT)
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);
  return data ? toProject(data as unknown as ProjectWithRelations) : null;
}

/** Galeri satu proyek (tanpa data proyeknya). */
export async function getProjectImages(projectId: string): Promise<ProjectImage[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("project_images")
    .select("id, url, alt, sort_order")
    .eq("project_id", projectId)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat galeri proyek: ${error.message}`);
  return data.map(toProjectImage);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countProjects(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung proyek: ${error.message}`);
  return count ?? 0;
}
