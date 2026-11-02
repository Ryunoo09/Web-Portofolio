import { describe, expect, it } from "vitest";
import { resolveSocialLinks } from "./social-links";

describe("resolveSocialLinks", () => {
  it("memakai fallback statis bila profil kosong", () => {
    const links = resolveSocialLinks(null);

    expect(links.map((link) => link.platform)).toEqual(["github", "linkedin"]);
  });

  it("menampilkan tautan dari dashboard dan menambahkan platform lain", () => {
    const links = resolveSocialLinks({
      socialLinks: [
        { platform: "GitHub", url: "https://github.com/rakha" },
        { platform: "instagram", url: "https://instagram.com/rakha" },
      ],
    });

    expect(links.map((link) => link.platform)).toEqual(["github", "linkedin", "instagram"]);
    expect(links[0]?.href).toBe("https://github.com/rakha");
    expect(links[2]?.label).toBe("Instagram");
  });

  it("WhatsApp dari kolom khusus menimpa entri JSON", () => {
    const links = resolveSocialLinks({
      socialLinks: [{ platform: "whatsapp", url: "https://wa.me/628111" }],
      whatsappNumber: "0812-3456-7890",
      whatsappMessage: "Halo Rakha",
    });

    const whatsapp = links.find((link) => link.platform === "whatsapp");
    expect(whatsapp?.href).toBe("https://wa.me/6281234567890?text=Halo%20Rakha");
  });

  it("melewati URL yang tidak valid", () => {
    const links = resolveSocialLinks({
      socialLinks: [{ platform: "website", url: "bukan-url" }],
    });

    expect(links.some((link) => link.platform === "website")).toBe(false);
  });
});
