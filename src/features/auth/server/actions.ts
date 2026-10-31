"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { loginSchema } from "../schemas";

export type LoginState = { error: string | null };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Email atau password tidak valid." };
  }

  const supabase = await createServerSupabase();
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error || !data.user) {
    return { error: "Email atau password salah." };
  }

  // Sesi Supabase bisa dimiliki akun mana pun (mis. sisa pendaftaran lama);
  // akses admin hanya untuk user yang terdaftar di tabel `admins`.
  const { data: adminRow } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", data.user.id)
    .maybeSingle();

  if (!adminRow) {
    await supabase.auth.signOut();
    return { error: "Akun ini tidak memiliki akses admin." };
  }

  redirect(ROUTES.admin.root);
}

export async function logout(): Promise<void> {
  const supabase = await createServerSupabase();
  const { error } = await supabase.auth.signOut();

  // Bila sign-out global gagal (mis. jaringan), hapus sesi lokal juga supaya
  // cookie tidak tertinggal dan pengguna benar-benar keluar perangkat ini.
  if (error) await supabase.auth.signOut({ scope: "local" });

  // Halaman admin yang sudah dirender tidak boleh tersaji ulang dari cache router.
  revalidatePath("/admin", "layout");
  redirect(ROUTES.admin.login);
}
