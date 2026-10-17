import { createServerSupabase } from "@/shared/lib/supabase/server";
import type { ContactMessage } from "../types";
import { toContactMessage } from "./mappers";

/** Semua pesan masuk, terbaru lebih dulu (butuh sesi admin). */
export async function getContactMessages(): Promise<ContactMessage[]> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Gagal memuat pesan: ${error.message}`);
  return data.map(toContactMessage);
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
