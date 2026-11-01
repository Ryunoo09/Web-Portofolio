import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Organization } from "../types";
import { toOrganization, type OrganizationWithRelations } from "./mappers";

/** Kolom + embed galeri foto untuk semua query organisasi. */
const ORGANIZATION_SELECT = "*, organization_images(id, url, alt, sort_order)";

/** Organisasi yang boleh tampil di halaman publik. */
export function getPublishedOrganizations(): Promise<Organization[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("organizations")
      .select(ORGANIZATION_SELECT)
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat organisasi: ${error.message}`);
    return (data as unknown as OrganizationWithRelations[]).map(toOrganization);
  }, []);
}

/** Semua organisasi (termasuk draf) untuk admin. */
export async function getAllOrganizations(): Promise<Organization[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("organizations")
    .select(ORGANIZATION_SELECT)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat organisasi: ${error.message}`);
  return (data as unknown as OrganizationWithRelations[]).map(toOrganization);
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
