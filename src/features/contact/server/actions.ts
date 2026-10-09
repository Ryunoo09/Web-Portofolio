"use server";

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

  // Honeypot check - if bot filled it, fail silently
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { ok: true, data: undefined };
  }

  // In Fase 2 stub: simulate 400ms server network latency
  await new Promise((resolve) => setTimeout(resolve, 400));

  return { ok: true, data: undefined };
}

export async function markMessageRead(_id: string): Promise<ActionResult> {
  return { ok: true, data: undefined };
}

export async function deleteMessage(_id: string): Promise<ActionResult> {
  return { ok: true, data: undefined };
}
