"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ContactFormValues } from "../schemas";

// TODO: validasi Zod, cek honeypot, rate limit, lalu insert ke contact_messages.
export async function submitContactMessage(_input: ContactFormValues): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

// TODO (admin): requireAdmin() sebelum mengubah/menghapus.
export async function markMessageRead(_id: string): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

export async function deleteMessage(_id: string): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
