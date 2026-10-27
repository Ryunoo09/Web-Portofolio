import * as React from "react";

/**
 * Skip link ke `#main-content`. Hanya terlihat saat keyboard focus.
 */
export function SkipLink() {
  return (
    <a
      data-slot="skip-link"
      href="#main-content"
      className="bg-background text-foreground border-border focus:ring-ring sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:ring-2 focus:outline-none"
    >
      Lewati ke konten utama
    </a>
  );
}
