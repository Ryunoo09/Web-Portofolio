import { z } from "zod";

/** Tanggal wajib dari `<input type="date">`. */
export const requiredDateInput = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Tanggal wajib diisi dalam format YYYY-MM-DD.");

/** Tanggal opsional dari `<input type="date">`; "" berarti belum diisi. */
export const optionalDateInput = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal harus YYYY-MM-DD.")
  .or(z.literal(""));

/** URL http(s) valid, atau "" bila kolom dikosongkan. */
export const urlOrEmpty = z.string().url("URL tidak valid").optional().or(z.literal(""));

/** "" → null agar kolom Postgres tidak menyimpan teks kosong. */
export function emptyToNull(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}
