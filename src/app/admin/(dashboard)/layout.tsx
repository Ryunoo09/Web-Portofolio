import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { AdminSidebar } from "@/features/auth/admin";
import { getCurrentAdmin } from "@/features/auth";
import { countUnreadMessages } from "@/features/contact";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  // Pengecekan aman (bukan hanya proxy): sesi + keanggotaan tabel admins.
  const admin = await getCurrentAdmin();
  if (!admin) redirect(ROUTES.admin.login);

  const unreadCount = await countUnreadMessages();

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar email={admin.email} unreadCount={unreadCount} />
      <div className="min-w-0 flex-1 p-4 sm:p-6 md:p-10">{children}</div>
    </div>
  );
}
