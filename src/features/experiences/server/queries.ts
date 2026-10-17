import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Experience } from "../types";
import { toExperience } from "./mappers";

/** Pengalaman yang boleh tampil di halaman publik. */
export function getPublishedExperiences(): Promise<Experience[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
    return data.map(toExperience);
  }, []);
}

/** Semua pengalaman (termasuk draf) untuk admin. */
export async function getAllExperiences(): Promise<Experience[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("experiences").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
  return data.map(toExperience);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countExperiences(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("experiences")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung pengalaman: ${error.message}`);
  return count ?? 0;
}
