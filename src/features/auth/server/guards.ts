import "server-only";
import { redirect } from "next/navigation";
import { cache } from "react";
import { ROUTES } from "@/shared/constants/routes";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { AdminUser } from "../types";

/**
 * Sesi terverifikasi + terdaftar di tabel admins. Mengembalikan null bila
 * pengguna belum login atau bukan admin. Ini satu-satunya sumber kebenaran
 * otorisasi admin; jangan diganti dengan pembacaan cookie mentah.
 *
 * Dibungkus `cache()` agar layout dan page dalam satu request berbagi satu
 * hasil: guard per halaman tidak menambah query Supabase.
 */
export const getCurrentAdmin = cache(async (): Promise<AdminUser | null> => {
  const supabase = await createServerSupabase();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  const { data } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!data) return null;

  return { id: user.id, email: user.email ?? null };
});

/**
 * Guard halaman admin: redirect ke login bila bukan admin. Wajib dipanggil di
 * awal SETIAP page di bawah `(dashboard)` — layout tidak ikut dirender ulang
 * saat navigasi klien, jadi guard di layout saja tidak cukup.
 */
export async function requireAdminPage(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) redirect(ROUTES.admin.login);

  return admin;
}

/** Wajib dipanggil di awal SETIAP Server Action tulis. Gagal = lempar error. */
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Akses ditolak: admin belum terautentikasi.");
  }
  return admin;
}
