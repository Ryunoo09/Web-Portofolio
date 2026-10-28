import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Kondisi kosong yang jujur: judul + penjelasan + aksi opsional.
 * Tanpa ilustrasi, ikon besar, atau animasi.
 */
export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn("border-border border-y py-10 text-center", className)}
    >
      <p className="text-foreground font-heading text-base font-semibold">{title}</p>
      {description && (
        <p className="text-muted-foreground mx-auto mt-2 max-w-[52ch] text-sm leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}
