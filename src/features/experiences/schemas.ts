import { z } from "zod";
import { optionalDateInput, requiredDateInput } from "@/shared/lib/validation";

export const experienceFormSchema = z
  .object({
    company: z.string().min(1, "Nama perusahaan wajib diisi").max(120),
    role: z.string().min(1, "Posisi wajib diisi").max(120),
    startedAt: requiredDateInput,
    endedAt: optionalDateInput,
    location: z.string().max(120).optional(),
    description: z.string().max(2000).optional(),
    sortOrder: z.number().int().min(0, "Urutan minimal 0"),
    isPublished: z.boolean(),
  })
  .superRefine((values, ctx) => {
    if (values.endedAt && values.endedAt < values.startedAt) {
      ctx.addIssue({
        code: "custom",
        path: ["endedAt"],
        message: "Tanggal selesai tidak boleh sebelum tanggal mulai.",
      });
    }
  });

export type ExperienceFormValues = z.input<typeof experienceFormSchema>;
