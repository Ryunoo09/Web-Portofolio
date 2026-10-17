import { z } from "zod";
import { optionalDateInput } from "@/shared/lib/validation";

export const educationFormSchema = z
  .object({
    institution: z.string().min(1, "Nama institusi wajib diisi").max(160),
    degree: z.string().min(1, "Jenjang wajib diisi").max(160),
    field: z.string().max(120).optional(),
    startedAt: optionalDateInput,
    endedAt: optionalDateInput,
    description: z.string().max(2000).optional(),
    sortOrder: z.number().int().min(0, "Urutan minimal 0"),
    isPublished: z.boolean(),
  })
  .superRefine((values, ctx) => {
    if (values.startedAt && values.endedAt && values.endedAt < values.startedAt) {
      ctx.addIssue({
        code: "custom",
        path: ["endedAt"],
        message: "Tanggal selesai tidak boleh sebelum tanggal mulai.",
      });
    }
  });

export type EducationFormValues = z.input<typeof educationFormSchema>;
