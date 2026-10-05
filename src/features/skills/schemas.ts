import { z } from "zod";

export const skillFormSchema = z.object({
  // TODO: tambahkan field form
});

export type SkillFormValues = z.infer<typeof skillFormSchema>;
