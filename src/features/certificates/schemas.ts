import { z } from "zod";
import { optionalDateInput, urlOrEmpty } from "@/shared/lib/validation";

export const certificateFormSchema = z.object({
  title: z.string().min(1, "Nama sertifikat wajib diisi").max(160),
  issuer: z.string().min(1, "Penerbit wajib diisi").max(160),
  description: z.string().max(500, "Deskripsi maksimal 500 karakter").optional(),
  issuedAt: optionalDateInput,
  credentialUrl: urlOrEmpty,
  imageUrl: urlOrEmpty,
  sortOrder: z.number().int().min(0, "Urutan minimal 0"),
  isPublished: z.boolean(),
});

export type CertificateFormValues = z.input<typeof certificateFormSchema>;
