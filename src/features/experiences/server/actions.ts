"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { emptyToNull } from "@/shared/lib/validation";
import { experienceFormSchema, type ExperienceFormValues } from "../schemas";

type ParsedExperience = z.output<typeof experienceFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(values: ParsedExperience) {
  return {
    company: values.company.trim(),
    role: values.role.trim(),
    location: emptyToNull(values.location),
    description: emptyToNull(values.description),
    started_at: values.startedAt,
    ended_at: values.endedAt || null,
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

export async function createExperience(input: ExperienceFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = experienceFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("experiences").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat pengalaman." };
  }
}

export async function updateExperience(
  id: string,
  input: ExperienceFormValues,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = experienceFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("experiences")
      .update(toColumns(parsed.data))
      .eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui pengalaman." };
  }
}

export async function deleteExperience(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("experiences").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus pengalaman." };
  }
}

export async function toggleExperiencePublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("experiences")
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
