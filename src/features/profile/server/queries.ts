import { createPublicClient } from "@/shared/lib/supabase/public";
import { withOfflineFallback } from "@/shared/lib/query";
import type { Certificate, Education, Experience, Profile } from "../types";
import { toCertificate, toEducation, toExperience, toProfile } from "./mappers";

export function getProfile(): Promise<Profile | null> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase.from("profile").select("*").maybeSingle();
    if (error) throw new Error(`Gagal memuat profil: ${error.message}`);
    return data ? toProfile(data) : null;
  }, null);
}

export function getExperiences(): Promise<Experience[]> {
  return withOfflineFallback(async () => {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .eq("is_published", true)
      .order("sort_order");

    if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
    return data.map(toExperience);
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
