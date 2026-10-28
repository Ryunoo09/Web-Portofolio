"use client";

import * as React from "react";
import { cn } from "@/shared/lib/utils";

export type ErrorSummaryEntry = {
  /** `id` elemen input yang dituju anchor. */
  id: string;
  message: string;
};

interface ErrorSummaryProps {
  errors: ErrorSummaryEntry[];
  title?: string;
  className?: string;
}

/**
 * Ringkasan error form: fokus otomatis saat error pertama muncul, tiap entri
 * menautkan ke field-nya. Fokus hanya diambil sekali per kemunculan agar tidak
 * merebut fokus saat pengguna memperbaiki isian.
 */
export function ErrorSummary({
  errors,
  title = "Ada isian yang perlu diperbaiki.",
  className,
}: ErrorSummaryProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const hadErrors = React.useRef(false);
  const titleId = React.useId();

  React.useEffect(() => {
    if (errors.length > 0 && !hadErrors.current) ref.current?.focus();
    hadErrors.current = errors.length > 0;
  }, [errors.length]);

  if (errors.length === 0) return null;

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      aria-labelledby={titleId}
      className={cn(
        "border-destructive/50 bg-destructive/5 focus-visible:ring-ring rounded-md border p-4 focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
    >
      <p id={titleId} className="text-destructive text-sm font-semibold">
        {title}
      </p>
      <ul className="mt-2 space-y-1">
        {errors.map((error) => (
          <li key={error.id}>
            <a
              href={`#${error.id}`}
              className="text-destructive focus-visible:ring-ring rounded-sm text-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
            >
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
