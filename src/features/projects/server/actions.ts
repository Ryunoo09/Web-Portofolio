"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ProjectFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

// TODO: urutan wajib tiap action: requireAdmin -> validasi Zod -> DB -> revalidate -> hasil
// (lihat PLANNING-PORTOFOLIO.md bagian 11.4).
export async function createProject(_input: ProjectFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateProject(_id: string, _input: ProjectFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteProject(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
