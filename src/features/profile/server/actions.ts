"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateProfile } from "@/shared/lib/revalidate";
import { removeFiles, uploadFile } from "@/shared/lib/storage";
import { emptyToNull } from "@/shared/lib/validation";
import { profileFormSchema, type ProfileFormValues } from "../schemas";

type ParsedProfile = z.output<typeof profileFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

/** Unggah avatar ke folder `profile`. */
export async function uploadProfileImage(formData: FormData): Promise<ActionResult<string>> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) return { ok: false, error: "Berkas tidak ditemukan." };

    const supabase = await createServerSupabase();
    const url = await uploadFile(supabase, file, "profile");

    return { ok: true, data: url };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal mengunggah avatar." };
  }
}

/** Unggah CV (PDF) ke folder `profile`. */
export async function uploadProfileResume(formData: FormData): Promise<ActionResult<string>> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) return { ok: false, error: "Berkas tidak ditemukan." };

    const supabase = await createServerSupabase();
    const url = await uploadFile(supabase, file, "profile", ["document"]);

    return { ok: true, data: url };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal mengunggah CV." };
  }
}

export async function updateProfile(input: ProfileFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = profileFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { data: current, error: findError } = await supabase
      .from("profile")
      .select("id, avatar_url, resume_url")
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };
    if (!current) return { ok: false, error: "Baris profil belum tersedia di database." };

    const values: ParsedProfile = parsed.data;
    const avatarUrl = emptyToNull(values.avatarUrl);
    const resumeUrl = emptyToNull(values.resumeUrl);

    const { error } = await supabase
      .from("profile")
      .update({
        full_name: values.fullName.trim(),
        headline: values.headline.trim(),
        bio: emptyToNull(values.bio),
        email: emptyToNull(values.email),
        location: emptyToNull(values.location),
        avatar_url: avatarUrl,
        resume_url: resumeUrl,
        social_links: values.socialLinks,
        seo_title: emptyToNull(values.seoTitle),
        seo_description: emptyToNull(values.seoDescription),
      })
      .eq("id", current.id);
    if (error) return { ok: false, error: error.message };

    // Berkas lama dibersihkan bila avatar/CV diganti atau dihapus.
    await removeFiles(supabase, [
      current.avatar_url === avatarUrl ? null : current.avatar_url,
      current.resume_url === resumeUrl ? null : current.resume_url,
    ]);

    revalidateProfile();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui profil." };
  }
}
