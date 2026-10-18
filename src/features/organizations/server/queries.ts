import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Organization } from "../types";
import { toOrganization } from "./mappers";

/** Organisasi yang boleh tampil di halaman publik. */
export function getPublishedOrganizations(): Promise<Organization[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("organizations")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat organisasi: ${error.message}`);
    return data.map(toOrganization);
  }, []);
}

/** Semua organisasi (termasuk draf) untuk admin. */
export async function getAllOrganizations(): Promise<Organization[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("organizations").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat organisasi: ${error.message}`);
  return data.map(toOrganization);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countOrganizations(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("organizations")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung organisasi: ${error.message}`);
  return count ?? 0;
}
