import { describe, expect, it } from "vitest";
import { certificateFormSchema } from "./schemas";

const valid = {
  title: "AWS Certified Developer",
  issuer: "Amazon Web Services",
  issuedAt: "",
  credentialUrl: "",
  imageUrl: "",
  sortOrder: 0,
  isPublished: true,
};

describe("certificateFormSchema", () => {
  it("menerima data tanpa URL verifikasi", () => {
    expect(certificateFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima URL verifikasi yang valid", () => {
    const result = certificateFormSchema.safeParse({
      ...valid,
      credentialUrl: "https://www.credly.com/badges/abc",
    });
    expect(result.success).toBe(true);
  });

  it("menolak URL verifikasi yang tidak valid", () => {
    expect(certificateFormSchema.safeParse({ ...valid, credentialUrl: "bukan-url" }).success).toBe(
      false,
    );
  });

  it("menolak penerbit yang kosong", () => {
    expect(certificateFormSchema.safeParse({ ...valid, issuer: "" }).success).toBe(false);
  });
});
