"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { emptyToNull } from "@/shared/lib/validation";
import { organizationFormSchema, type OrganizationFormValues } from "../schemas";

type ParsedOrganization = z.output<typeof organizationFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(values: ParsedOrganization) {
  return {
    name: values.name.trim(),
    role: values.role.trim(),
    description: emptyToNull(values.description),
    started_at: values.startedAt || null,
    ended_at: values.endedAt || null,
    member_count: values.memberCount ?? null,
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

export async function createOrganization(input: OrganizationFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = organizationFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("organizations").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat organisasi." };
  }
}

export async function updateOrganization(
  id: string,
  input: OrganizationFormValues,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = organizationFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("organizations")
      .update(toColumns(parsed.data))
      .eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui organisasi." };
  }
}

export async function deleteOrganization(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("organizations").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus organisasi." };
  }
}

export async function toggleOrganizationPublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("organizations")
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
