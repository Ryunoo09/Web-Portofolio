import * as React from "react";
import { cn } from "@/shared/lib/utils";

export type Status = "live" | "private" | "in-progress" | "archived";

interface StatusBadgeProps {
  status: Status;
  label?: string;
  className?: string;
}

const statusMap: Record<Status, { label: string; className: string; dotClassName: string }> = {
  live: {
    label: "Live",
    className: "border-mint/30 bg-mint/10 text-mint",
    dotClassName: "bg-mint",
  },
  private: {
    label: "Kode privat",
    className: "border-border bg-surface-2 text-muted-foreground",
    dotClassName: "border border-current bg-transparent",
  },
  "in-progress": {
    label: "Sedang dikerjakan",
    className: "border-gold/40 bg-gold/10 text-gold-muted",
    dotClassName: "bg-gold",
  },
  archived: {
    label: "Arsip",
    className: "border-border bg-surface-2 text-muted-foreground",
    dotClassName: "border border-current bg-transparent",
  },
};

/**
 * Badge status saja: live/private/in-progress/archived.
 * Jangan dipakai untuk kategori, tech stack, atau eyebrow.
 */
export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = statusMap[status];

  return (
    <span
      data-slot="status-badge"
      data-status={status}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold",
        config.className,
        className,
      )}
    >
      <span
        className={cn("size-1.5 shrink-0 rounded-full", config.dotClassName)}
        aria-hidden="true"
      />
      <span>{label ?? config.label}</span>
    </span>
  );
}
