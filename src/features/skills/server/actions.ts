"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { SkillFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

export async function createSkill(_input: SkillFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateSkill(_id: string, _input: SkillFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteSkill(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
