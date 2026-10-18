import * as React from "react";
import { cn, toListItems } from "@/shared/lib/utils";

interface BulletPointsProps {
  /** Satu baris = satu poin; penanda `-`/`•` di depan dibuang. */
  text: string | null;
  className?: string;
}

/**
 * Teks deskripsi sebagai daftar berbutir. Bila hanya satu baris, tampil sebagai
 * paragraf biasa supaya kalimat panjang tidak menjadi "poin" tunggal yang janggal.
 */
export function BulletPoints({ text, className }: BulletPointsProps) {
  const items = toListItems(text);
  if (items.length === 0) return null;

  if (items.length === 1) {
    return <p className={className}>{items[0]}</p>;
  }

  return (
    <ul className={cn("space-y-1.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="bg-gold mt-2 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
