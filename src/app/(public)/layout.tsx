import type { ReactNode } from "react";
import { PublicShell } from "@/shared/components";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicShell>{children}</PublicShell>;
}
