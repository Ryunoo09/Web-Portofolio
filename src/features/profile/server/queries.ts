import { createPublicClient } from "@/shared/lib/supabase/public";
import type { Certificate, Education, Experience, Profile } from "../types";
import { toCertificate, toEducation, toExperience, toProfile } from "./mappers";

export async function getProfile(): Promise<Profile | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase.from("profile").select("*").maybeSingle();
  if (error) throw new Error(`Gagal memuat profil: ${error.message}`);
  return data ? toProfile(data) : null;
}

export async function getExperiences(): Promise<Experience[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .eq("is_published", true)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat pengalaman: ${error.message}`);
  return data.map(toExperience);
}

export async function getEducation(): Promise<Education[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("education")
    .select("*")
    .eq("is_published", true)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat pendidikan: ${error.message}`);
  return data.map(toEducation);
}

export async function getCertificates(): Promise<Certificate[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("is_published", true)
    .order("sort_order");

  if (error) throw new Error(`Gagal memuat sertifikat: ${error.message}`);
  return data.map(toCertificate);
}
