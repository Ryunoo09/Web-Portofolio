import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(value: string | Date, locale = "id-ID"): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(value));
}

/** Rentang tahun, mis. "2022 — 2024". Akhir kosong berarti masih berjalan. */
export function formatPeriod(start: string | null, end: string | null): string {
  const from = start ? new Date(start).getFullYear() : null;
  const to = end ? new Date(end).getFullYear() : "Sekarang";
  return from ? `${from} — ${to}` : String(to);
}

/**
 * Pecah teks deskripsi menjadi poin: satu baris = satu poin. Penanda daftar di
 * awal baris (`-`, `•`, `*`) dibuang agar penulisan bebas tetap rapi.
 */
export function toListItems(value: string | null | undefined): string[] {
  return (value ?? "")
    .split("\n")
    .map((line) => line.trim().replace(/^[-•*]\s+/, ""))
    .filter(Boolean);
}
