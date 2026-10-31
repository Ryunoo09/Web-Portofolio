import { createPublicClient } from "@/shared/lib/supabase/public";
import { createServerSupabase } from "@/shared/lib/supabase/server";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Certificate, Education, Experience, Profile } from "../types";
import {
  toCertificate,
  toEducation,
  toExperience,
  toProfile,
  type ExperienceWithImages,
} from "./mappers";

export function getProfile(): Promise<Profile | null> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase.from("profile").select("*").maybeSingle();
    if (error) throw new Error(`Gagal memuat profil: ${error.message}`);
    return data ? toProfile(data) : null;
  }, null);
}

/** Profil apa adanya (tanpa filter) untuk form admin. */
export async function getProfileForAdmin(): Promise<Profile | null> {
  const supabase = await createServerSupabase();
  const { data, error } = await supabase.from("profile").select("*").maybeSingle();

  if (error) throw new Error(`Gagal memuat profil: ${error.message}`);
  return data ? toProfile(data) : null;
}

export function getExperiences(): Promise<Experience[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("experiences")
      .select("*, experience_images(id, url, alt, sort_order)")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
    return (data as unknown as ExperienceWithImages[]).map(toExperience);
  }, []);
}

export function getEducation(): Promise<Education[]> {
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

export function getCertificates(): Promise<Certificate[]> {
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
