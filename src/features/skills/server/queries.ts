import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { Skill } from "../types";
import { toSkill } from "./mappers";

async function findSkills(limit?: number): Promise<Skill[]> {
  const supabase = createPublicClient();
  let query = supabase.from("skills").select("*").eq("is_published", true).order("sort_order");
  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) throw new Error(`Gagal memuat keahlian: ${error.message}`);
  return data.map(toSkill);
}

export function getSkills(): Promise<Skill[]> {
  return findSkills();
}

/** Keahlian yang tampil ringkas di beranda. */
export function getTopSkills(limit = 4): Promise<Skill[]> {
  return findSkills(limit);
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
