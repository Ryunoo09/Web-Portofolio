import { z } from "zod";
import { CONTACT_INTENTS } from "./intents";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(100, "Nama maksimal 100 karakter."),
  email: z.string().trim().email("Email tidak valid.").max(200, "Email maksimal 200 karakter."),
  intent: z.enum(CONTACT_INTENTS, "Pilih jenis pesan."),
  subject: z
    .string()
    .trim()
    .min(3, "Topik minimal 3 karakter.")
    .max(120, "Topik maksimal 120 karakter."),
  message: z
    .string()
    .trim()
    .min(5, "Pesan minimal 5 karakter.")
    .max(2000, "Pesan maksimal 2.000 karakter."),
  // Honeypot anti-spam: harus kosong. Disembunyikan di UI.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
