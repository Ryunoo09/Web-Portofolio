"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ExperienceFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

export async function createExperience(_input: ExperienceFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateExperience(
  _id: string,
  _input: ExperienceFormValues,
): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteExperience(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
