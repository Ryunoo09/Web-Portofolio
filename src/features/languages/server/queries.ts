import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Language } from "../types";
import { toLanguage } from "./mappers";

/** Bahasa yang boleh tampil di halaman publik. */
export function getPublishedLanguages(): Promise<Language[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("languages")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat bahasa: ${error.message}`);
    return data.map(toLanguage);
  }, []);
}

/** Semua bahasa (termasuk draf) untuk admin. */
export async function getAllLanguages(): Promise<Language[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("languages").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat bahasa: ${error.message}`);
  return data.map(toLanguage);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countLanguages(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("languages")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung bahasa: ${error.message}`);
  return count ?? 0;
}
