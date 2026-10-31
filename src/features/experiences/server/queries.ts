import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Experience } from "../types";
import { toExperience, type ExperienceWithRelations } from "./mappers";

const EXPERIENCE_SELECT = "*, experience_images(id, url, alt, sort_order)";

/** Pengalaman yang boleh tampil di halaman publik. */
export function getPublishedExperiences(): Promise<Experience[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("experiences")
      .select(EXPERIENCE_SELECT)
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
    return (data as unknown as ExperienceWithRelations[]).map(toExperience);
  }, []);
}

/** Semua pengalaman (termasuk draf) untuk admin. */
export async function getAllExperiences(): Promise<Experience[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("experiences")
    .select(EXPERIENCE_SELECT)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
  return (data as unknown as ExperienceWithRelations[]).map(toExperience);
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
