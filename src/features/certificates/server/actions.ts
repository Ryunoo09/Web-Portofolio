"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { CertificateFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

export async function createCertificate(_input: CertificateFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateCertificate(
  _id: string,
  _input: CertificateFormValues,
): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteCertificate(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
