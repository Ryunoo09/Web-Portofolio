"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { emptyToNull } from "@/shared/lib/validation";
import { languageFormSchema, type LanguageFormValues } from "../schemas";

type ParsedLanguage = z.output<typeof languageFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(values: ParsedLanguage) {
  return {
    name: values.name.trim(),
    level: values.level.trim(),
    score: emptyToNull(values.score),
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

export async function createLanguage(input: LanguageFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = languageFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("languages").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat bahasa." };
  }
}

export async function updateLanguage(id: string, input: LanguageFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = languageFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("languages").update(toColumns(parsed.data)).eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui bahasa." };
  }
}

export async function deleteLanguage(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("languages").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus bahasa." };
  }
}

export async function toggleLanguagePublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("languages")
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
