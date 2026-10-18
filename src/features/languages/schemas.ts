import { z } from "zod";

/** Tingkat kemampuan bahasa (nilai kanonik yang disimpan di database). */
export const LANGUAGE_LEVELS = [
  { value: "Native", label: "Native / Penutur asli" },
  { value: "Fluent", label: "Fluent / Fasih" },
  { value: "Professional", label: "Professional / Profesional" },
  { value: "Intermediate", label: "Intermediate / Menengah" },
  { value: "Basic", label: "Basic / Dasar" },
] as const;

export const languageFormSchema = z.object({
  name: z.string().min(1, "Nama bahasa wajib diisi").max(80),
  level: z.string().min(1, "Tingkat wajib dipilih").max(40),
  score: z.string().max(80).optional(),
  sortOrder: z.number().int().min(0, "Urutan minimal 0"),
  isPublished: z.boolean(),
});

export type LanguageFormValues = z.input<typeof languageFormSchema>;
