/**
 * Nomor WhatsApp disimpan tanpa `+` dan tanpa `0` di depan.
 * `0812...`, `+62 812...`, dan `812...` semuanya menjadi `62812...`.
 */
export function normalizeWhatsAppNumber(raw: string | null | undefined): string {
  const digits = raw?.replace(/\D/g, "") ?? "";
  if (!digits) return "";
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("8")) return `62${digits}`;
  return digits;
}

/** URL `wa.me` dengan pesan pembuka opsional. */
export function buildWhatsAppUrl(
  number: string | null | undefined,
  message?: string | null,
): string | null {
  const normalized = normalizeWhatsAppNumber(number);
  if (!normalized) return null;

  const base = `https://wa.me/${normalized}`;
  const text = message?.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
