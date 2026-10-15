import { z } from "zod";

const urlOrEmpty = z.string().url().optional().or(z.literal(""));

export const projectFormSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter").max(120),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug hanya huruf kecil, angka, dan tanda hubung"),
  summary: z.string().min(10).max(300),
  descriptionHtml: z.string().optional(),
  repoUrl: urlOrEmpty,
  demoUrl: urlOrEmpty,
  skillIds: z.array(z.string().uuid()),
  isFeatured: z.boolean(),
  isPublished: z.boolean(),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProjectFormValues = z.input<typeof projectFormSchema>;
