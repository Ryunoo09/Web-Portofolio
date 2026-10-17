"use server";

import { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import type { ProjectFormValues } from "../schemas";
import { projectFormSchema } from "../schemas";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { sanitizeHtml } from "@/shared/lib/sanitize";
import { revalidateProjects } from "@/shared/lib/revalidate";
import { removeFiles, uploadFile } from "@/shared/lib/storage";

type ParsedProject = z.output<typeof projectFormSchema>;

const imageInputSchema = z.object({
  url: z.string().url(),
  alt: z.string().max(160),
});

function invalidInput<T = void>(fieldErrors: Record<string, string[]>): ActionResult<T> {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(project: Omit<ParsedProject, "skillIds">) {
  const coverImageUrl = project.coverImageUrl || null;

  return {
    title: project.title,
    slug: project.slug,
    summary: project.summary,
    description_html: project.descriptionHtml ? sanitizeHtml(project.descriptionHtml) : null,
    repo_url: project.repoUrl || null,
    demo_url: project.demoUrl || null,
    cover_image_url: coverImageUrl,
    cover_image_alt: coverImageUrl ? project.coverImageAlt?.trim() || null : null,
    is_featured: project.isFeatured,
    is_published: project.isPublished,
    seo_title: project.seoTitle || null,
    seo_description: project.seoDescription || null,
  };
}

/** Ganti seluruh relasi keahlian; mengembalikan pesan error atau null. */
async function replaceSkills(
  supabase: Awaited<ReturnType<typeof createServerSupabase>>,
  projectId: string,
  skillIds: string[],
): Promise<string | null> {
  const { error: deleteError } = await supabase
    .from("project_skills")
    .delete()
    .eq("project_id", projectId);
  if (deleteError) return deleteError.message;

  if (skillIds.length === 0) return null;

  const { error: insertError } = await supabase
    .from("project_skills")
    .insert(skillIds.map((skill_id) => ({ project_id: projectId, skill_id })));

  return insertError?.message ?? null;
}

export async function createProject(
  input: ProjectFormValues,
): Promise<ActionResult<{ id: string }>> {
  try {
    await requireAdmin();

    const parsed = projectFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const { skillIds, ...project } = parsed.data;
    const supabase = await createServerSupabase();

    const { data, error } = await supabase
      .from("projects")
      .insert(toColumns(project))
      .select("id")
      .single();
    if (error) return { ok: false, error: error.message };

    const skillsError = await replaceSkills(supabase, data.id, skillIds);
    if (skillsError) return { ok: false, error: skillsError };

    revalidateProjects(project.slug);
    return { ok: true, data: { id: data.id } };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat proyek." };
  }
}

export async function updateProject(id: string, input: ProjectFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = projectFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const { skillIds, ...project } = parsed.data;
    const supabase = await createServerSupabase();

    const { data: existing, error: findError } = await supabase
      .from("projects")
      .select("cover_image_url")
      .eq("id", id)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };
    if (!existing) return { ok: false, error: "Proyek tidak ditemukan." };

    const { error: updateError } = await supabase
      .from("projects")
      .update(toColumns(project))
      .eq("id", id);
    if (updateError) return { ok: false, error: updateError.message };

    const skillsError = await replaceSkills(supabase, id, skillIds);
    if (skillsError) return { ok: false, error: skillsError };

    // Cover lama dibersihkan bila diganti atau dihapus agar Storage tidak menumpuk.
    if (existing.cover_image_url && existing.cover_image_url !== project.coverImageUrl) {
      await removeFiles(supabase, [existing.cover_image_url]);
    }

    revalidateProjects(project.slug);
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui proyek." };
  }
}

export async function deleteProject(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();
    const supabase = await createServerSupabase();

    // Storage tidak punya cascade: kumpulkan URL sebelum baris database dihapus.
    const { data: project, error: findError } = await supabase
      .from("projects")
      .select("cover_image_url, project_images(url)")
      .eq("id", id)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };

    // project_skills & project_images ikut terhapus lewat `on delete cascade`.
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    const images = project?.project_images ?? [];
    await removeFiles(supabase, [project?.cover_image_url, ...images.map((image) => image.url)]);

    revalidateProjects();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus proyek." };
  }
}

export async function toggleProjectPublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();
    const supabase = await createServerSupabase();

    const { error } = await supabase
      .from("projects")
      .update({ is_published: isPublished })
      .eq("id", id);

    if (error) return { ok: false, error: error.message };

    revalidateProjects();
    return { ok: true, data: undefined };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Gagal mengubah status publikasi.",
    };
  }
}

// Gambar proyek ---------------------------------------------------------------

/** Unggah satu berkas ke Storage; kembalikan URL publiknya. */
export async function uploadProjectImage(
  projectId: string | null,
  formData: FormData,
): Promise<ActionResult<string>> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) return { ok: false, error: "Berkas tidak ditemukan." };

    const supabase = await createServerSupabase();
    const url = await uploadFile(supabase, file, `projects/${projectId ?? "umum"}`);

    return { ok: true, data: url };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal mengunggah gambar." };
  }
}

/** Daftarkan gambar galeri baru di urutan paling akhir. */
export async function createProjectImage(
  projectId: string,
  url: string,
  alt: string,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = imageInputSchema.safeParse({ url, alt });
    if (!parsed.success) return { ok: false, error: "Data gambar tidak valid." };

    const supabase = await createServerSupabase();
    const { data: last } = await supabase
      .from("project_images")
      .select("sort_order")
      .eq("project_id", projectId)
      .order("sort_order", { ascending: false })
      .limit(1)
      .maybeSingle();

    // shortcut: urutan galeri hanya lewat sort_order otomatis, upgrade saat butuh drag & drop (A-12)
    const { error } = await supabase.from("project_images").insert({
      project_id: projectId,
      url: parsed.data.url,
      alt: parsed.data.alt,
      sort_order: (last?.sort_order ?? -1) + 1,
    });
    if (error) return { ok: false, error: error.message };

    revalidateProjects();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menambah gambar." };
  }
}

/** Perbarui teks alternatif sebuah gambar galeri. */
export async function updateProjectImage(imageId: string, alt: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = z.string().max(160).safeParse(alt);
    if (!parsed.success) {
      return { ok: false, error: "Teks alternatif maksimal 160 karakter." };
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("project_images")
      .update({ alt: parsed.data })
      .eq("id", imageId);
    if (error) return { ok: false, error: error.message };

    revalidateProjects();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui gambar." };
  }
}

/** Hapus baris gambar sekaligus objeknya di Storage. */
export async function deleteProjectImage(imageId: string): Promise<ActionResult> {
  try {
    await requireAdmin();
    const supabase = await createServerSupabase();

    const { data: image, error: findError } = await supabase
      .from("project_images")
      .select("url")
      .eq("id", imageId)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };
    if (!image) return { ok: false, error: "Gambar tidak ditemukan." };

    const { error } = await supabase.from("project_images").delete().eq("id", imageId);
    if (error) return { ok: false, error: error.message };

    await removeFiles(supabase, [image.url]);
    revalidateProjects();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus gambar." };
  }
}
