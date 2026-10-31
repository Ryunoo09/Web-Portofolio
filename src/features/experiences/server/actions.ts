"use server";

import { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { removeFiles, uploadFile } from "@/shared/lib/storage";
import { emptyToNull } from "@/shared/lib/validation";
import { experienceFormSchema, type ExperienceFormValues } from "../schemas";

type ParsedExperience = z.output<typeof experienceFormSchema>;

const imageInputSchema = z.object({
  url: z.string().url(),
  alt: z.string().max(160),
});

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
    // Storage tidak punya cascade: kumpulkan URL gambar sebelum barisnya hilang.
    const { data: existing, error: findError } = await supabase
      .from("experiences")
      .select("experience_images(url)")
      .eq("id", id)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };

    const { error } = await supabase.from("experiences").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    const urls = (existing?.experience_images ?? []).map((image) => image.url);
    await removeFiles(supabase, urls);

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

// Dokumentasi pengalaman -------------------------------------------------------

/** Unggah satu berkas ke Storage; kembalikan URL publiknya. */
export async function uploadExperienceImage(
  experienceId: string,
  formData: FormData,
): Promise<ActionResult<string>> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) return { ok: false, error: "Berkas tidak ditemukan." };

    const supabase = await createServerSupabase();
    const url = await uploadFile(supabase, file, `experiences/${experienceId}`);

    return { ok: true, data: url };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal mengunggah gambar." };
  }
}

/** Daftarkan dokumentasi baru di urutan paling akhir. */
export async function createExperienceImage(
  experienceId: string,
  url: string,
  alt: string,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = imageInputSchema.safeParse({ url, alt });
    if (!parsed.success) return { ok: false, error: "Data gambar tidak valid." };

    const supabase = await createServerSupabase();
    const { data: last } = await supabase
      .from("experience_images")
      .select("sort_order")
      .eq("experience_id", experienceId)
      .order("sort_order", { ascending: false })
      .limit(1)
      .maybeSingle();

    const { error } = await supabase.from("experience_images").insert({
      experience_id: experienceId,
      url: parsed.data.url,
      alt: parsed.data.alt,
      sort_order: (last?.sort_order ?? -1) + 1,
    });
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menambah gambar." };
  }
}

/** Perbarui teks alternatif sebuah dokumentasi. */
export async function updateExperienceImage(imageId: string, alt: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = z.string().max(160).safeParse(alt);
    if (!parsed.success) {
      return { ok: false, error: "Teks alternatif maksimal 160 karakter." };
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("experience_images")
      .update({ alt: parsed.data })
      .eq("id", imageId);
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui gambar." };
  }
}

/** Hapus baris dokumentasi sekaligus objeknya di Storage. */
export async function deleteExperienceImage(imageId: string): Promise<ActionResult> {
  try {
    await requireAdmin();
    const supabase = await createServerSupabase();

    const { data: image, error: findError } = await supabase
      .from("experience_images")
      .select("url")
      .eq("id", imageId)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };
    if (!image) return { ok: false, error: "Gambar tidak ditemukan." };

    const { error } = await supabase.from("experience_images").delete().eq("id", imageId);
    if (error) return { ok: false, error: error.message };

    await removeFiles(supabase, [image.url]);
    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus gambar." };
  }
}
