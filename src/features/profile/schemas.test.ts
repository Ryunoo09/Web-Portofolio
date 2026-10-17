import { describe, expect, it } from "vitest";
import { profileFormSchema } from "./schemas";

const valid = {
  fullName: "Rakha Pratama",
  headline: "Full-Stack Engineer",
  bio: "Membangun aplikasi web.",
  email: "",
  location: "Jakarta",
  avatarUrl: "",
  resumeUrl: "",
  socialLinks: [],
  seoTitle: "",
  seoDescription: "",
};

describe("profileFormSchema", () => {
  it("menerima profil tanpa email dan tanpa tautan sosial", () => {
    expect(profileFormSchema.safeParse(valid).success).toBe(true);
  });

  it("menerima tautan sosial yang lengkap", () => {
    const result = profileFormSchema.safeParse({
      ...valid,
      socialLinks: [{ platform: "github", url: "https://github.com/ryunoo09" }],
    });
    expect(result.success).toBe(true);
  });

  it("menolak email yang tidak valid", () => {
    expect(profileFormSchema.safeParse({ ...valid, email: "bukan-email" }).success).toBe(false);
  });

  it("menolak tautan sosial tanpa platform", () => {
    const result = profileFormSchema.safeParse({
      ...valid,
      socialLinks: [{ platform: "", url: "https://github.com/ryunoo09" }],
    });
    expect(result.success).toBe(false);
  });

  it("menolak tautan sosial dengan URL tidak valid", () => {
    const result = profileFormSchema.safeParse({
      ...valid,
      socialLinks: [{ platform: "github", url: "github.com/ryunoo09" }],
    });
    expect(result.success).toBe(false);
  });
});
