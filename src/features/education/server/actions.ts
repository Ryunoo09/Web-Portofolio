"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { EducationFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

export async function createEducation(_input: EducationFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateEducation(
  _id: string,
  _input: EducationFormValues,
): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteEducation(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
