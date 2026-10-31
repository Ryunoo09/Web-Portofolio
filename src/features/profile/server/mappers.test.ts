import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toCertificate, toProfile } from "./mappers";

type ProfileRow = Database["public"]["Tables"]["profile"]["Row"];

const profileRow: ProfileRow = {
  id: 1,
  full_name: "Rakha Pratama",
  headline: "Full-Stack Engineer",
  bio: "Membangun aplikasi web.",
  avatar_url: "https://demo.supabase.co/avatar.png",
  resume_url: null,
  email: "halo@example.com",
  location: "Jakarta",
  social_links: [{ platform: "github", url: "https://github.com/ryunoo09" }],
  seo_title: "Rakha — Engineer",
  seo_description: "Portofolio Rakha.",
  updated_at: "2024-01-01T00:00:00Z",
};

describe("toProfile", () => {
  it("memetakan kolom snake_case ke camelCase termasuk SEO", () => {
    const profile = toProfile(profileRow);

    expect(profile.fullName).toBe("Rakha Pratama");
    expect(profile.avatarUrl).toBe("https://demo.supabase.co/avatar.png");
    expect(profile.socialLinks).toEqual([
      { platform: "github", url: "https://github.com/ryunoo09" },
    ]);
    expect(profile.seoTitle).toBe("Rakha — Engineer");
  });

  it("memakai array kosong bila social_links null", () => {
    expect(toProfile({ ...profileRow, social_links: null }).socialLinks).toEqual([]);
  });
});

describe("toCertificate", () => {
  it("memetakan gambar sertifikat yang dipakai kartu publik", () => {
    const certificate = toCertificate({
      id: "c1",
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      description: "Bukti kompetensi pengembangan aplikasi cloud.",
      issued_at: "2024-03-01",
      credential_url: null,
      image_url: "https://demo.supabase.co/cert.png",
      sort_order: 0,
      is_published: true,
      created_at: "2024-03-01T00:00:00Z",
      updated_at: "2024-03-01T00:00:00Z",
    });

    expect(certificate.imageUrl).toBe("https://demo.supabase.co/cert.png");
    expect(certificate.description).toBe("Bukti kompetensi pengembangan aplikasi cloud.");
  });
});
