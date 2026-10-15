import { createPublicClient } from "@/shared/lib/supabase/public";
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
