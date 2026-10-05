import { z } from "zod";

export const certificateFormSchema = z.object({
  // TODO: tambahkan field form
});

export type CertificateFormValues = z.infer<typeof certificateFormSchema>;
