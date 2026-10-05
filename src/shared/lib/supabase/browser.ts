import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/shared/types/database";

/** Klien browser. Jarang dipakai; utamakan Server Component/Action. */
export function createBrowserSupabase() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
