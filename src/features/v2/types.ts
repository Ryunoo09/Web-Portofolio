// Tipe data & prop untuk komponen antarmuka V2 (Karin-style gold 60-30-10).
import type { Profile } from "@/features/profile";

export type V2Stats = {
  /** Nilai metrik pertama, mis. "3+". */
  operationalSystems: string;
  /** Nilai metrik kedua, mis. "88,62%". */
  predictiveAccuracy: string;
  /** Nilai metrik ketiga, mis. "10 → 2 mnt". */
  timeCut: string;
};

export type V2NavbarProps = {
  activeSection?: string;
};

export type V2HeroProps = {
  profile: Profile | null;
  stats?: V2Stats;
};

export type V2AboutProps = {
  profile: Profile | null;
  skills?: { id: string; name: string; category: string; level: number }[];
};

export type V2FeaturedProjectsProps = {
  projects: {
    id: string;
    slug: string;
    title: string;
    summary: string;
    skills: { id: string; name: string }[];
    domain: string | null;
  }[];
};

export type V2EducationExperienceProps = {
  education: {
    id: string;
    institution: string;
    degree: string;
    field: string | null;
    description: string | null;
    startedAt: string | null;
    endedAt: string | null;
  }[];
  experiences: {
    id: string;
    company: string;
    role: string;
    description: string | null;
    location: string | null;
    startedAt: string;
    endedAt: string | null;
  }[];
};

export type V2CertificatesProps = {
  certificates: {
    id: string;
    title: string;
    issuer: string;
    description: string | null;
    credentialUrl: string | null;
  }[];
};

export type V2ContactProps = {
  profile: Profile | null;
};
