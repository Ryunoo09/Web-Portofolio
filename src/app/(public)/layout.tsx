import type { ReactNode } from "react";
import { getProfile } from "@/features/profile";
import { PublicShell } from "@/shared/components";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const profile = await getProfile();

  return <PublicShell profile={profile}>{children}</PublicShell>;
}
