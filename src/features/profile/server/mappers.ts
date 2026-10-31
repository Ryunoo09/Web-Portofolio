import type { Database } from "@/shared/types/database";
import type { Certificate, Education, Experience, ExperienceImage, Profile } from "../types";

type Row<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];

type ExperienceImageFields = Pick<Row<"experience_images">, "id" | "url" | "alt" | "sort_order">;

/** Baris pengalaman beserta dokumentasi hasil embed `experience_images(...)`. */
export type ExperienceWithImages = Row<"experiences"> & {
  experience_images: ExperienceImageFields[] | null;
};

export function toExperienceImage(row: ExperienceImageFields): ExperienceImage {
  return {
    id: row.id,
    url: row.url,
    alt: row.alt,
    sortOrder: row.sort_order,
  };
}

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

export function toExperience(row: ExperienceWithImages): Experience {
  return {
    id: row.id,
    company: row.company,
    role: row.role,
    description: row.description,
    location: row.location,
    startedAt: row.started_at,
    endedAt: row.ended_at,
    images: (row.experience_images ?? [])
      .map(toExperienceImage)
      .sort((a, b) => a.sortOrder - b.sortOrder),
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
