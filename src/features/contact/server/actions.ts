"use server";

import { createPublicClient } from "@/shared/lib/supabase/public";
import type { ActionResult } from "@/shared/types/action-result";
import { contactFormSchema, type ContactFormValues } from "../schemas";

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
    subject: parsed.data.subject || null,
    message: parsed.data.message,
  });

  if (error) {
    console.error("Gagal menyimpan pesan kontak:", error.message);
    return { ok: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
  }

  return { ok: true, data: undefined };
}

export async function markMessageRead(_id: string): Promise<ActionResult> {
  return { ok: true, data: undefined };
}

export async function deleteMessage(_id: string): Promise<ActionResult> {
  return { ok: true, data: undefined };
}
