import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Certificate } from "../types";
import { toCertificate } from "./mappers";

/** Sertifikat yang boleh tampil di halaman publik. */
export function getPublishedCertificates(): Promise<Certificate[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat sertifikat: ${error.message}`);
    return data.map(toCertificate);
  }, []);
}

/** Semua sertifikat (termasuk draf) untuk admin. */
export async function getAllCertificates(): Promise<Certificate[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("certificates").select("*").order("sort_order");

  if (error) throw new Error(`Gagal memuat sertifikat: ${error.message}`);
  return data.map(toCertificate);
}

/** Hitungan untuk dashboard admin (butuh sesi admin, termasuk data draf). */
export async function countCertificates(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("certificates")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(`Gagal menghitung sertifikat: ${error.message}`);
  return count ?? 0;
}
