import { revalidatePath } from "next/cache";

/** Satu pintu untuk memperbarui halaman publik terkait proyek. */
export function revalidateProjects(slug?: string): void {
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
  revalidatePath("/sitemap.xml");
}
