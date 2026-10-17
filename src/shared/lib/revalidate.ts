import { revalidatePath } from "next/cache";

/** Satu pintu untuk memperbarui halaman publik terkait proyek. */
export function revalidateProjects(slug?: string): void {
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
  revalidatePath("/sitemap.xml");
}

/** Keahlian tampil di beranda, /skills, dan tech stack tiap detail proyek. */
export function revalidateSkills(): void {
  revalidatePath("/");
  revalidatePath("/skills");
  revalidatePath("/projects");
  revalidatePath("/projects/[slug]", "page");
}
