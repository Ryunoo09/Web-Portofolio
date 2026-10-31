import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/shared/types/database";
import { AUTH_COOKIE_OPTIONS, withSessionMaxAge } from "./cookie-options";

/** Klien DENGAN cookies (sesi admin). Pakai di /admin dan Server Actions. */
export async function createServerSupabase() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions: AUTH_COOKIE_OPTIONS,
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (items) => {
          try {
            items.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, withSessionMaxAge(options)),
            );
          } catch {
            // Dipanggil dari Server Component: abaikan, sesi di-refresh oleh proxy.
          }
        },
      },
    },
  );
}
