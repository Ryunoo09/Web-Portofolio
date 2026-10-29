import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/admin";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
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
