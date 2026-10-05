import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  // TODO (Fase 3): sidebar + guard sesi memakai getCurrentAdmin().
  return <div>{children}</div>;
}
