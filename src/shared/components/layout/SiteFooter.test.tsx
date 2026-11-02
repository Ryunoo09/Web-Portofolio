import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("memakai fallback statis saat profil kosong", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Ryunoo09",
    );
  });

  it("menampilkan WhatsApp dari profil", () => {
    render(
      <SiteFooter
        profile={{
          email: "halo@example.com",
          location: "Brebes",
          whatsappNumber: "0812-3456-7890",
          whatsappMessage: "Halo Rakha",
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      "https://wa.me/6281234567890?text=Halo%20Rakha",
    );
    expect(screen.getByRole("link", { name: "halo@example.com" })).toHaveAttribute(
      "href",
      "mailto:halo@example.com",
    );
  });
});
