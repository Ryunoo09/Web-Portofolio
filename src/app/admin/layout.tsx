import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Guard sesi + sidebar ada di `(dashboard)/layout.tsx`, supaya `/admin/login`
  // tetap bisa diakses tanpa sesi (mencegah redirect loop).
  return (
    <div>
      {children}
      {/* Toast hanya dipakai form admin; halaman publik tidak perlu membawa sonner. */}
      <Toaster richColors position="top-right" />
    </div>
  );
}
