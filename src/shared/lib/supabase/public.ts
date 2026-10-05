import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/shared/types/database";

/**
 * Klien TANPA cookies untuk query publik.
 * Wajib dipakai di halaman publik agar halaman tetap statis/ISR.
 */
export function createPublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );
}
