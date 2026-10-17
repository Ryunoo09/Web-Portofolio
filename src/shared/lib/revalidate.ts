import { revalidatePath } from "next/cache";

/** Satu pintu untuk memperbarui halaman publik terkait proyek. */
export function revalidateProjects(slug?: string): void {
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
  else revalidatePath("/projects/[slug]", "page");
  revalidatePath("/sitemap.xml");
}

/** Keahlian tampil di beranda, /skills, dan tech stack tiap detail proyek. */
export function revalidateSkills(): void {
  revalidatePath("/");
  revalidatePath("/skills");
  revalidatePath("/projects");
  revalidatePath("/projects/[slug]", "page");
}

/** Pengalaman, pendidikan, dan sertifikat tampil di /about. */
export function revalidateAbout(): void {
  revalidatePath("/about");
  revalidatePath("/");
}

/** Profil tampil di beranda dan /about. */
export function revalidateProfile(): void {
  revalidatePath("/");
  revalidatePath("/about");
}

/** Pesan memengaruhi badge sidebar admin dan hitungan di ringkasan. */
export function revalidateMessages(): void {
  revalidatePath("/admin");
  revalidatePath("/admin/messages");
}
