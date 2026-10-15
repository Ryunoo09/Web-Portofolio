"use server";

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
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return { error: "Email atau password salah." };
  }

  redirect(ROUTES.admin.root);
}

export async function logout(): Promise<void> {
  const supabase = await createServerSupabase();
  await supabase.auth.signOut();
  redirect(ROUTES.admin.login);
}
