"use server";

import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateSkills } from "@/shared/lib/revalidate";
import { skillFormSchema, type SkillFormValues } from "../schemas";

/** 23505 = pelanggaran unique constraint Postgres (nama keahlian unik). */
const DUPLICATE_NAME = "Nama keahlian sudah ada.";

/**
 * Kolom `icon` sengaja tidak ditulis: belum dirender di UI mana pun, jadi
 * membiarkannya utuh mencegah nilai lama terhapus saat admin mengubah skill.
 */
function toColumns(values: SkillFormValues) {
  return {
    name: values.name,
    category: values.category,
    level: values.level,
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toErrorMessage(error: { code?: string; message: string }): string {
  return error.code === "23505" ? DUPLICATE_NAME : error.message;
}

export async function createSkill(input: SkillFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = skillFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("skills").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: toErrorMessage(error) };

    revalidateSkills();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat keahlian." };
  }
}

export async function updateSkill(id: string, input: SkillFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = skillFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("skills").update(toColumns(parsed.data)).eq("id", id);
    if (error) return { ok: false, error: toErrorMessage(error) };

    revalidateSkills();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui keahlian." };
  }
}

export async function deleteSkill(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    // project_skills memakai on delete cascade — relasi ke proyek ikut terhapus.
    const { error } = await supabase.from("skills").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateSkills();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus keahlian." };
  }
}
