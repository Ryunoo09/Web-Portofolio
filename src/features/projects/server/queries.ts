import type { Project } from "../types";

// TODO: ganti dengan query Supabase memakai createPublicClient
// (lihat PLANNING-PORTOFOLIO.md bagian 11.3).
export async function getPublishedProjects(): Promise<Project[]> {
  return [];
}

export async function getProjectBySlug(_slug: string): Promise<Project | null> {
  return null;
}
