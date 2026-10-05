import "server-only";
import type { AdminUser } from "../types";

// TODO: implementasi memakai createServerSupabase().auth.getUser()
// lalu cek keberadaan user di tabel admins (lihat PLANNING-PORTOFOLIO.md bagian 9).
export async function getCurrentAdmin(): Promise<AdminUser | null> {
  return null;
}

/**
 * Wajib dipanggil di awal SETIAP Server Action tulis.
 * Stub ini menolak semua akses (deny-by-default) sampai diimplementasikan.
 */
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Akses ditolak: admin belum terautentikasi.");
  }
  return admin;
}
