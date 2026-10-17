"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { emptyToNull } from "@/shared/lib/validation";
import { educationFormSchema, type EducationFormValues } from "../schemas";

type ParsedEducation = z.output<typeof educationFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(values: ParsedEducation) {
  return {
    institution: values.institution.trim(),
    degree: values.degree.trim(),
    field: emptyToNull(values.field),
    description: emptyToNull(values.description),
    started_at: values.startedAt || null,
    ended_at: values.endedAt || null,
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

export async function createEducation(input: EducationFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = educationFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("education").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat pendidikan." };
  }
}

export async function updateEducation(
  id: string,
  input: EducationFormValues,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = educationFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("education").update(toColumns(parsed.data)).eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui pendidikan." };
  }
}

export async function deleteEducation(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("education").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus pendidikan." };
  }
}

export async function toggleEducationPublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("education")
      .update({ is_published: isPublished })
      .eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Gagal mengubah status publikasi.",
    };
  }
}
