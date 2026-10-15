import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { AdminSidebar, getCurrentAdmin } from "@/features/auth";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  // Pengecekan aman (bukan hanya proxy): sesi + keanggotaan tabel admins.
  const admin = await getCurrentAdmin();
  if (!admin) redirect(ROUTES.admin.login);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar email={admin.email} />
      <div className="min-w-0 flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
