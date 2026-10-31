import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/features/auth";
import { LoginForm } from "@/features/auth/admin";
import { ROUTES } from "@/shared/constants/routes";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  // Sesi panjang bisa masih aktif walau pengguna merasa belum/sudah keluar.
  // Redirect hanya bila benar-benar admin — user auth non-admin akan loop bila
  // redirect dilakukan di proxy berdasarkan `user` saja.
  const admin = await getCurrentAdmin();
  if (admin) redirect(ROUTES.admin.root);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-foreground font-heading text-2xl font-bold">Panel Admin</h1>
          <p className="text-muted-foreground text-sm">
            Masuk untuk mengelola konten portofolio Anda.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
