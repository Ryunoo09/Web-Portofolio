import type { Database } from "@/shared/types/database";
import type { Certificate } from "../types";

type CertificateRow = Database["public"]["Tables"]["certificates"]["Row"];

export function toCertificate(row: CertificateRow): Certificate {
  return {
    id: row.id,
    title: row.title,
    issuer: row.issuer,
    description: row.description,
    issuedAt: row.issued_at,
    credentialUrl: row.credential_url,
    imageUrl: row.image_url,
    sortOrder: row.sort_order,
    isPublished: row.is_published,
  };
}
