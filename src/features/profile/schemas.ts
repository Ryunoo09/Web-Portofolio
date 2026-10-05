import { z } from "zod";

export const profileFormSchema = z.object({
  fullName: z.string().min(1).max(100),
  headline: z.string().min(1).max(160),
  bio: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().max(100).optional(),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
