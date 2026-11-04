import * as React from "react";
import { cn, toListTree, type ListItemNode } from "@/shared/lib/utils";

interface BulletPointsProps {
  /** Satu baris = satu poin; baris menjorok menjadi sub-poin. Penanda `-`/`•` di depan dibuang. */
  text: string | null;
  className?: string;
}

function BulletList({ items, className }: { items: ListItemNode[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={`${item.text}-${index}`}>
          <div className="flex gap-2">
            <span className="bg-gold mt-2 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
            <span>{item.text}</span>
          </div>
          {item.children.length > 0 && (
            <BulletList items={item.children} className="mt-1.5 space-y-1.5 pl-4" />
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Teks deskripsi sebagai daftar berbutir. Baris yang menjorok tampil sebagai
 * sub-poin. Bila hanya satu baris, tampil sebagai paragraf biasa supaya kalimat
 * panjang tidak menjadi "poin" tunggal yang janggal.
 */
export function BulletPoints({ text, className }: BulletPointsProps) {
  const items = toListTree(text);
  if (items.length === 0) return null;

  const [first] = items;
  if (items.length === 1 && first && first.children.length === 0) {
    return <p className={className}>{first.text}</p>;
  }

  return <BulletList items={items} className={cn("space-y-1.5", className)} />;
}
