import { z } from "zod";
import { urlOrEmpty } from "@/shared/lib/validation";

export const profileFormSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi").max(100),
  headline: z.string().min(1, "Headline wajib diisi").max(160),
  bio: z.string().max(5000).optional(),
  email: z.string().email("Email tidak valid").optional().or(z.literal("")),
  location: z.string().max(100).optional(),
  avatarUrl: urlOrEmpty,
  resumeUrl: urlOrEmpty,
  socialLinks: z.array(
    z.object({
      platform: z.string().min(1, "Nama platform wajib diisi").max(40),
      url: z.string().url("URL tautan tidak valid"),
    }),
  ),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
