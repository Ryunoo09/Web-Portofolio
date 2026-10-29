import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "@/shared/components/common/SkipLink";

/**
 * Kerangka halaman publik: skip link, aura/grid dekoratif, header, `<main>`,
 * dan footer. Dipakai layout `(public)` dan halaman 404 supaya keduanya punya
 * landmark + navigasi yang sama.
 */
export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <SkipLink />
      <div className="site-aura" aria-hidden="true" />
      <div className="site-grid" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="relative z-10 flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
