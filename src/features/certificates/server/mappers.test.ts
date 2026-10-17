import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toCertificate } from "./mappers";

type CertificateRow = Database["public"]["Tables"]["certificates"]["Row"];

const row: CertificateRow = {
  id: "c1",
  title: "AWS Certified Developer",
  issuer: "Amazon Web Services",
  issued_at: "2024-03-01",
  credential_url: "https://www.credly.com/badges/abc",
  image_url: "https://demo.supabase.co/cert.png",
  sort_order: 1,
  is_published: true,
  created_at: "2024-03-01T00:00:00Z",
  updated_at: "2024-03-01T00:00:00Z",
};

describe("toCertificate", () => {
  it("memetakan kolom snake_case ke camelCase termasuk gambar", () => {
    expect(toCertificate(row)).toEqual({
      id: "c1",
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      issuedAt: "2024-03-01",
      credentialUrl: "https://www.credly.com/badges/abc",
      imageUrl: "https://demo.supabase.co/cert.png",
      sortOrder: 1,
      isPublished: true,
    });
  });
});
