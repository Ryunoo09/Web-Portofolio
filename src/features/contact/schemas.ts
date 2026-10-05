import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi").max(100),
  email: z.string().email("Email tidak valid").max(200),
  subject: z.string().max(200).optional(),
  message: z.string().min(5, "Pesan terlalu pendek").max(5000),
  // Honeypot anti-spam: harus kosong. Disembunyikan di UI.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
