import type { ReactNode } from "react";
import { SiteFooter, SiteHeader, SkipLink } from "@/shared/components";

export default function PublicLayout({ children }: { children: ReactNode }) {
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
