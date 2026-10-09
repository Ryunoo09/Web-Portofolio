import { DUMMY_PROJECTS, type ProjectItem } from "@/shared/constants/dummyData";

export async function getPublishedProjects(): Promise<ProjectItem[]> {
  return DUMMY_PROJECTS;
}

export async function getFeaturedProjects(): Promise<ProjectItem[]> {
  return DUMMY_PROJECTS.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  const found = DUMMY_PROJECTS.find((p) => p.slug === slug);
  return found ?? null;
}
