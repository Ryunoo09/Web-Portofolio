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
