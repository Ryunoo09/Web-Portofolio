import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { ContactMessage } from "../types";

// TODO (Fase 3): ambil pesan memakai klien server dengan sesi admin.
export async function getContactMessages(): Promise<ContactMessage[]> {
  return [];
}

/** Jumlah pesan belum dibaca untuk dashboard admin (butuh sesi admin). */
export async function countUnreadMessages(): Promise<number> {
  const supabase = await createServerSupabase();
  const { count, error } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })
    .eq("is_read", false);

  if (error) throw new Error(`Gagal menghitung pesan: ${error.message}`);
  return count ?? 0;
}
