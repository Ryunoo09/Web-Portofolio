import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface StackListProps {
  stack: string[];
  /** Jumlah chip yang ditampilkan; sisa dirangkum `+n`. Default 4. */
  limit?: number;
  className?: string;
}

/**
 * Chip stack netral. Bukan badge status.
 * Maksimal `limit` chip, sisanya `+n` dengan label aksesibel.
 */
export function StackList({ stack, limit = 4, className }: StackListProps) {
  const displayed = stack.slice(0, limit);
  const remaining = stack.length - displayed.length;

  return (
    <ul data-slot="stack-list" className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {displayed.map((item) => (
        <li
          key={item}
          className="border-border bg-surface-2 text-foreground rounded-md border px-2 py-0.5 font-mono text-[11px]"
        >
          {item}
        </li>
      ))}
      {remaining > 0 && (
        <li
          className="border-border text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-[11px]"
          aria-label={`${remaining} teknologi lainnya`}
        >
          +{remaining}
        </li>
      )}
    </ul>
  );
}
