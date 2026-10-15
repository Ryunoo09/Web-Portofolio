"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ProjectFormValues } from "../schemas";
import { projectFormSchema } from "../schemas";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { sanitizeHtml } from "@/shared/lib/sanitize";
import { revalidateProjects } from "@/shared/lib/revalidate";

export async function createProject(
  input: ProjectFormValues,
): Promise<ActionResult<{ id: string }>> {
  try {
    await requireAdmin();

    const parsed = projectFormSchema.safeParse(input);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Data tidak valid.",
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }

    const { skillIds, ...project } = parsed.data;
    const supabase = await createServerSupabase();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        title: project.title,
        slug: project.slug,
        summary: project.summary,
        description_html: project.descriptionHtml ? sanitizeHtml(project.descriptionHtml) : null,
        repo_url: project.repoUrl || null,
        demo_url: project.demoUrl || null,
        is_featured: project.isFeatured,
        is_published: project.isPublished,
        seo_title: project.seoTitle || null,
        seo_description: project.seoDescription || null,
      })
      .select("id")
      .single();

    if (error) return { ok: false, error: error.message };

    // Insert skill relations
    if (skillIds.length > 0) {
      const { error: skillsError } = await supabase
        .from("project_skills")
        .insert(skillIds.map((skill_id) => ({ project_id: data.id, skill_id })));
      if (skillsError) return { ok: false, error: skillsError.message };
    }

    revalidateProjects();
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
      return {
        ok: false,
        error: "Data tidak valid.",
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }

    const { skillIds, ...project } = parsed.data;
    const supabase = await createServerSupabase();

    const { error: updateError } = await supabase
      .from("projects")
      .update({
        title: project.title,
        slug: project.slug,
        summary: project.summary,
        description_html: project.descriptionHtml ? sanitizeHtml(project.descriptionHtml) : null,
        repo_url: project.repoUrl || null,
        demo_url: project.demoUrl || null,
        is_featured: project.isFeatured,
        is_published: project.isPublished,
        seo_title: project.seoTitle || null,
        seo_description: project.seoDescription || null,
      })
      .eq("id", id);

    if (updateError) return { ok: false, error: updateError.message };

    // Replace skill relations
    const { error: deleteSkillsError } = await supabase
      .from("project_skills")
      .delete()
      .eq("project_id", id);
    if (deleteSkillsError) return { ok: false, error: deleteSkillsError.message };

    if (skillIds.length > 0) {
      const { error: insertSkillsError } = await supabase
        .from("project_skills")
        .insert(skillIds.map((skill_id) => ({ project_id: id, skill_id })));
      if (insertSkillsError) return { ok: false, error: insertSkillsError.message };
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

    const { error: skillsError } = await supabase
      .from("project_skills")
      .delete()
      .eq("project_id", id);
    if (skillsError) return { ok: false, error: skillsError.message };

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

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
