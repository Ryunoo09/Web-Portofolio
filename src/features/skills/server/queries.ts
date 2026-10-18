import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Skill } from "../types";
import { toSkill } from "./mappers";

function findSkills(limit?: number): Promise<Skill[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    let query = supabase
      .from("skills")
      .select("*")
      .eq("is_published", true)
      .eq("is_learning", false)
      .order("sort_order");
    if (limit) query = query.limit(limit);

    const { data, error } = await query;
    if (error) throw new Error(`Gagal memuat keahlian: ${error.message}`);
    return data.map(toSkill);
  }, []);
}

export function getSkills(): Promise<Skill[]> {
  return findSkills();
}

/** Keahlian yang tampil ringkas di beranda. */
export function getTopSkills(limit = 4): Promise<Skill[]> {
  return findSkills(limit);
}

/** Keahlian yang sedang dipelajari — ditampilkan terpisah di /skills. */
export function getLearningSkills(): Promise<Skill[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("is_published", true)
      .eq("is_learning", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat keahlian yang dipelajari: ${error.message}`);
    return data.map(toSkill);
  }, []);
}

/** Semua keahlian (termasuk draf) untuk form admin. */
export async function getAllSkills(): Promise<Skill[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("skills").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat keahlian: ${error.message}`);
  return data.map(toSkill);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countSkills(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("skills")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung keahlian: ${error.message}`);
  return count ?? 0;
}
