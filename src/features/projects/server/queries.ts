import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Project } from "../types";
import { toProject, type ProjectWithSkills } from "./mappers";

const PROJECT_SELECT =
  "id, slug, title, summary, description_html, repo_url, demo_url, started_at, is_featured, is_published, created_at, sort_order, project_skills(skills(id, name))";

function findProjects(featuredOnly: boolean): Promise<Project[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    let query = supabase.from("projects").select(PROJECT_SELECT).eq("is_published", true);
    if (featuredOnly) query = query.eq("is_featured", true);

    const { data, error } = await query.order("sort_order");
    if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);

    return (data as unknown as ProjectWithSkills[]).map(toProject);
  }, []);
}

export function getPublishedProjects(): Promise<Project[]> {
  return findProjects(false);
}

export function getFeaturedProjects(): Promise<Project[]> {
  return findProjects(true);
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
    return data ? toProject(data as unknown as ProjectWithSkills) : null;
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
  return (data as unknown as ProjectWithSkills[]).map(toProject);
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
  return data ? toProject(data as unknown as ProjectWithSkills) : null;
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
