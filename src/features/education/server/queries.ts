import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Education } from "../types";
import { toEducation } from "./mappers";

/** Pendidikan yang boleh tampil di halaman publik. */
export function getPublishedEducation(): Promise<Education[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("education")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat pendidikan: ${error.message}`);
    return data.map(toEducation);
  }, []);
}

/** Semua pendidikan (termasuk draf) untuk admin. */
export async function getAllEducation(): Promise<Education[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("education").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat pendidikan: ${error.message}`);
  return data.map(toEducation);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countEducation(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("education")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung pendidikan: ${error.message}`);
  return count ?? 0;
}
