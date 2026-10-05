import { z } from "zod";

export const experienceFormSchema = z.object({
  // TODO: tambahkan field form
});

export type ExperienceFormValues = z.infer<typeof experienceFormSchema>;
