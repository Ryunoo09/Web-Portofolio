"use server";

import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { revalidateMessages } from "@/shared/lib/revalidate";
import { requireAdmin } from "@/features/auth";
import type { ActionResult } from "@/shared/types/action-result";
import { CONTACT_INTENT_LABELS, contactFormSchema, type ContactFormValues } from "../schemas";

export async function submitContactMessage(input: ContactFormValues): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Data formulir tidak valid.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot terisi = bot. Pura-pura sukses agar bot tidak mencoba lagi.
  if (parsed.data.website) {
    return { ok: true, data: undefined };
  }

  const supabase = createPublicClient();
  // Tanpa .select(): anon tidak punya izin SELECT pada contact_messages (RLS).
  const { error } = await supabase.from("contact_messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    // Tabel belum punya kolom intent; simpan sebagai awalan subjek yang terbaca admin.
    subject: `${CONTACT_INTENT_LABELS[parsed.data.intent]}: ${parsed.data.subject}`,
    message: parsed.data.message,
  });

  if (error) {
    console.error("Gagal menyimpan pesan kontak:", error.message);
    return { ok: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
  }

  return { ok: true, data: undefined };
}

/** Tandai pesan sudah/belum dibaca. */
export async function markMessageRead(id: string, isRead: boolean): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: isRead })
      .eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateMessages();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal memperbarui pesan." };
  }
}

export async function deleteMessage(id: string): Promise<ActionResult> {
  try {
    await requireAdmin();

    const supabase = await createServerSupabase();
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) return { ok: false, error: error.message };

    revalidateMessages();
    return { ok: true, data: undefined };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Gagal menghapus pesan." };
  }
}
