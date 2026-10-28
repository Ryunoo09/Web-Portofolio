import type { Status } from "@/shared/components";
import type { Project } from "./types";

/** Proyek berikutnya untuk CTA studi kasus; berputar ke awal di ujung daftar. */
export function pickNextProject(
  projects: readonly Project[],
  current: Project | null,
): Project | null {
  if (projects.length === 0) return null;
  if (!current) return projects[0] ?? null;

  const index = projects.findIndex((project) => project.slug === current.slug);
  if (index === -1) return projects[0] ?? null;
  return projects[(index + 1) % projects.length] ?? null;
}

/**
 * Status tampilan: `Live` bila deployed, `Sedang dikerjakan` bila belum selesai,
 * `Kode privat` bila repo tertutup, `Arsip` untuk proyek lama yang sudah selesai.
 */
export function resolveProjectStatus(project: Project): Status {
  if (!project.endedAt) return "in-progress";
  if (project.isDeployed) return "live";
  if (!project.repoUrl) return "private";
  return "archived";
}
