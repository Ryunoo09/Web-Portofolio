"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ProfileFormValues } from "../schemas";

export async function updateProfile(_input: ProfileFormValues): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
