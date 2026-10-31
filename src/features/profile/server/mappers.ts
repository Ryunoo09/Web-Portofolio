import type { Database } from "@/shared/types/database";
import type { Certificate, Education, Experience, Profile } from "../types";

type Row<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];

export function toProfile(row: Row<"profile">): Profile {
  return {
    id: row.id,
    fullName: row.full_name,
    headline: row.headline,
    bio: row.bio,
    avatarUrl: row.avatar_url,
    resumeUrl: row.resume_url,
    email: row.email,
    location: row.location,
    // social_links tersimpan sebagai jsonb: [{ platform, url }]
    socialLinks: (row.social_links ?? []) as { platform: string; url: string }[],
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
  };
}

export function toExperience(row: Row<"experiences">): Experience {
  return {
    id: row.id,
    company: row.company,
    role: row.role,
    description: row.description,
    location: row.location,
    startedAt: row.started_at,
    endedAt: row.ended_at,
  };
}

export function toEducation(row: Row<"education">): Education {
  return {
    id: row.id,
    institution: row.institution,
    degree: row.degree,
    field: row.field,
    description: row.description,
    startedAt: row.started_at,
    endedAt: row.ended_at,
  };
}

export function toCertificate(row: Row<"certificates">): Certificate {
  return {
    id: row.id,
    title: row.title,
    issuer: row.issuer,
    description: row.description,
    issuedAt: row.issued_at,
    credentialUrl: row.credential_url,
    imageUrl: row.image_url,
  };
}
