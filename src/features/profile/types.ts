export type Profile = {
  id: number;
  fullName: string;
  headline: string;
  bio: string | null;
  avatarUrl: string | null;
  resumeUrl: string | null;
  email: string | null;
  location: string | null;
  socialLinks: { platform: string; url: string }[];
  seoTitle: string | null;
  seoDescription: string | null;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  description: string | null;
  location: string | null;
  startedAt: string;
  endedAt: string | null;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string | null;
  description: string | null;
  startedAt: string | null;
  endedAt: string | null;
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
