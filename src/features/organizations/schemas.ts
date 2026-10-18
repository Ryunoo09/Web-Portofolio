import { z } from "zod";
import { optionalDateInput } from "@/shared/lib/validation";

export const organizationFormSchema = z
  .object({
    name: z.string().min(1, "Nama organisasi wajib diisi").max(160),
    role: z.string().min(1, "Peran wajib diisi").max(120),
    description: z.string().max(2000).optional(),
    startedAt: optionalDateInput,
    endedAt: optionalDateInput,
    memberCount: z.number().int().min(0, "Jumlah minimal 0").max(100000).optional(),
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

export type OrganizationFormValues = z.input<typeof organizationFormSchema>;
