"use server";

import type { ActionResult } from "@/shared/types/action-result";

// TODO: login via supabase.auth.signInWithPassword, lalu redirect ke /admin.
export async function login(_formData: FormData): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

export async function logout(): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
