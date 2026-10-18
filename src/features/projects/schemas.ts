import { z } from "zod";
import { urlOrEmpty } from "@/shared/lib/validation";

export const projectFormSchema = z
  .object({
    title: z.string().min(3, "Judul minimal 3 karakter").max(120),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug hanya huruf kecil, angka, dan tanda hubung"),
    summary: z.string().min(10).max(300),
    descriptionHtml: z.string().optional(),
    repoUrl: urlOrEmpty,
    demoUrl: urlOrEmpty,
    coverImageUrl: urlOrEmpty,
    coverImageAlt: z.string().max(160, "Teks alternatif maksimal 160 karakter").optional(),
    skillIds: z.array(z.string().uuid()),
    isFeatured: z.boolean(),
    isPublished: z.boolean(),
    projectType: z.string().max(40).optional(),
    role: z.string().max(60).optional(),
    teamSize: z.number().int().min(1, "Minimal 1 orang").max(999).optional(),
    problem: z.string().max(600).optional(),
    solution: z.string().max(600).optional(),
    challenges: z.string().max(600).optional(),
    features: z.array(z.string().max(200)).default([]),
    outcomes: z.array(z.string().max(200)).default([]),
    isDeployed: z.boolean(),
    seoTitle: z.string().max(70).optional(),
    seoDescription: z.string().max(160).optional(),
  })
  .superRefine((values, ctx) => {
    if (values.coverImageUrl && !values.coverImageAlt?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["coverImageAlt"],
        message: "Teks alternatif wajib diisi bila cover diunggah.",
      });
    }
  });

export type ProjectFormValues = z.input<typeof projectFormSchema>;
