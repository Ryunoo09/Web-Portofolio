import { z } from "zod";

export const educationFormSchema = z.object({
  // TODO: tambahkan field form
});

export type EducationFormValues = z.infer<typeof educationFormSchema>;
