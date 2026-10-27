import type { ReactNode } from "react";
import { Navbar, Footer } from "@/shared/components";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <div className="site-aura" aria-hidden="true" />
      <div className="site-grid" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
