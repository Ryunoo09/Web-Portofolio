import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/shared/types/database";

/**
 * Klien service role: MELEWATI RLS. Hanya untuk server, pakai seperlunya.
 * Jangan pernah mengimpor berkas ini dari kode yang bisa terbawa ke browser.
 */
export function createAdminClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
