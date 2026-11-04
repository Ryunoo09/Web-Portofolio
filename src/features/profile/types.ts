export type Profile = {
  id: number;
  fullName: string;
  headline: string;
  bio: string | null;
  avatarUrl: string | null;
  /** CV bahasa Indonesia. Nama kolom lama di database tetap `resume_url`. */
  resumeUrl: string | null;
  resumeUrlEn: string | null;
  email: string | null;
  location: string | null;
  socialLinks: { platform: string; url: string }[];
  whatsappNumber: string | null;
  whatsappMessage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

export type ExperienceImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  description: string | null;
  location: string | null;
  startedAt: string;
  endedAt: string | null;
  images: ExperienceImage[];
};

export type EducationImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string | null;
  description: string | null;
  startedAt: string | null;
  endedAt: string | null;
  images: EducationImage[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description: string | null;
  issuedAt: string | null;
  credentialUrl: string | null;
  imageUrl: string | null;
};
