/** Jenis pesan kontak. Dipisah dari `schemas.ts` agar klien tidak menarik zod. */
export const CONTACT_INTENTS = ["recruiter", "collaboration", "other"] as const;

export type ContactIntent = (typeof CONTACT_INTENTS)[number];

export const CONTACT_INTENT_LABELS: Record<ContactIntent, string> = {
  recruiter: "Rekruter",
  collaboration: "Kolaborasi",
  other: "Lainnya",
};

export function isContactIntent(value: string): value is ContactIntent {
  return CONTACT_INTENTS.includes(value as ContactIntent);
}
