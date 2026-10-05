import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter").max(120),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug hanya huruf kecil, angka, dan tanda hubung"),
  summary: z.string().min(10).max(300),
  descriptionHtml: z.string().optional(),
  repoUrl: z.string().url().optional().or(z.literal("")),
  demoUrl: z.string().url().optional().or(z.literal("")),
  skillIds: z.array(z.string().uuid()).default([]),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(false),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;
