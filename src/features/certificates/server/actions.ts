"use server";

import type { z } from "zod";
import type { ActionResult } from "@/shared/types/action-result";
import { requireAdmin } from "@/features/auth";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateAbout } from "@/shared/lib/revalidate";
import { removeFiles, uploadFile } from "@/shared/lib/storage";
import { emptyToNull } from "@/shared/lib/validation";
import { certificateFormSchema, type CertificateFormValues } from "../schemas";

type ParsedCertificate = z.output<typeof certificateFormSchema>;

function invalidInput(fieldErrors: Record<string, string[]>): ActionResult {
  return { ok: false, error: "Data tidak valid.", fieldErrors };
}

function toColumns(values: ParsedCertificate) {
  return {
    title: values.title.trim(),
    issuer: values.issuer.trim(),
    description: emptyToNull(values.description),
    issued_at: values.issuedAt || null,
    credential_url: emptyToNull(values.credentialUrl),
    image_url: emptyToNull(values.imageUrl),
    sort_order: values.sortOrder,
    is_published: values.isPublished,
  };
}

/** Unggah berkas sertifikat ke folder `certificates`. */
export async function uploadCertificateImage(formData: FormData): Promise<ActionResult<string>> {
  try {
    await requireAdmin();

    const file = formData.get("file");
    if (!(file instanceof File)) return { ok: false, error: "Berkas tidak ditemukan." };

    const supabase = await createServerSupabase();
    const url = await uploadFile(supabase, file, "certificates");

    return { ok: true, data: url };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal mengunggah berkas." };
  }
}

export async function createCertificate(input: CertificateFormValues): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = certificateFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("certificates").insert(toColumns(parsed.data));
    if (error) return { ok: false, error: error.message };

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal membuat sertifikat." };
  }
}

export async function updateCertificate(
  id: string,
  input: CertificateFormValues,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const parsed = certificateFormSchema.safeParse(input);
    if (!parsed.success) {
      return invalidInput(parsed.error.flatten().fieldErrors as Record<string, string[]>);
    }

    const supabase = await createServerSupabase();
    const { data: existing, error: findError } = await supabase
      .from("certificates")
      .select("image_url")
      .eq("id", id)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };

    const columns = toColumns(parsed.data);
    const { error } = await supabase.from("certificates").update(columns).eq("id", id);
    if (error) return { ok: false, error: error.message };

    // Gambar lama dibersihkan bila diganti atau dihapus.
    if (existing?.image_url && existing.image_url !== columns.image_url) {
      await removeFiles(supabase, [existing.image_url]);
    }

    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui sertifikat." };
  }
}

export async function deleteCertificate(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { data: existing, error: findError } = await supabase
      .from("certificates")
      .select("image_url")
      .eq("id", id)
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };

    const { error } = await supabase.from("certificates").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    await removeFiles(supabase, [existing?.image_url]);
    revalidateAbout();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus sertifikat." };
  }
}

export async function toggleCertificatePublish(
  id: string,
  isPublished: boolean,
): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("certificates")
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
