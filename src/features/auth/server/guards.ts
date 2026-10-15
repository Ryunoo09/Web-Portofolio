import "server-only";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { AdminUser } from "../types";

/**
 * Sesi terverifikasi + terdaftar di tabel admins. Mengembalikan null bila
 * pengguna belum login atau bukan admin. Ini satu-satunya sumber kebenaran
 * otorisasi admin; jangan diganti dengan pembacaan cookie mentah.
 */
export async function getCurrentAdmin(): Promise<AdminUser | null> {
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
}

/** Wajib dipanggil di awal SETIAP Server Action tulis. Gagal = lempar error. */
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Akses ditolak: admin belum terautentikasi.");
  }
  return admin;
}
