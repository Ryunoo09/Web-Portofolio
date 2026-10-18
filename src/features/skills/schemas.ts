import { z } from "zod";

export const skillFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(60),
  category: z.string().min(2, "Kategori minimal 2 karakter").max(40),
  level: z.number().int().min(1, "Pilih tingkat 1-5").max(5, "Tingkat maksimal 5"),
  sortOrder: z.number().int().min(0, "Urutan minimal 0"),
  isPublished: z.boolean(),
  isLearning: z.boolean(),
});

export type SkillFormValues = z.infer<typeof skillFormSchema>;
