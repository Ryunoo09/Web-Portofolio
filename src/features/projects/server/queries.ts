import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { Project } from "../types";
import { toProject, type ProjectWithSkills } from "./mappers";

// shortcut: cover & galeri gambar belum diambil; tambahkan saat upload storage (Fase 3) siap.
const PROJECT_SELECT =
  "id, slug, title, summary, description_html, repo_url, demo_url, started_at, is_featured, project_skills(skills(id, name))";

async function findProjects(featuredOnly: boolean): Promise<Project[]> {
  const supabase = createPublicClient();
  let query = supabase.from("projects").select(PROJECT_SELECT).eq("is_published", true);
  if (featuredOnly) query = query.eq("is_featured", true);

  const { data, error } = await query.order("sort_order");
  if (error) throw new Error(`Gagal memuat proyek: ${error.message}`);

  // Supabase mengetik relasi join secara longgar; baris sudah sesuai PROJECT_SELECT.
  return (data as unknown as ProjectWithSkills[]).map(toProject);
}

export function getPublishedProjects(): Promise<Project[]> {
  return findProjects(false);
}

export function getFeaturedProjects(): Promise<Project[]> {
  return findProjects(true);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_SELECT)
    .eq("slug", slug)
    .eq("is_published", true)
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
