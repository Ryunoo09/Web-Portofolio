import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { siteConfig } from "@/shared/constants/siteConfig";
import { ContactPanel } from "./ContactPanel";

const writeText = vi.fn<() => Promise<void>>().mockResolvedValue(undefined);

beforeEach(() => {
  writeText.mockClear();
});

function stubClipboard() {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
}

describe("ContactPanel", () => {
  it("menampilkan email, lokasi, jejaring, dan tautan CV", () => {
    render(<ContactPanel />);

    expect(screen.getByRole("heading", { name: "Informasi kontak" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteConfig.socials.email })).toHaveAttribute(
      "href",
      `mailto:${siteConfig.socials.email}`,
    );
    expect(screen.getByText(`${siteConfig.location} (WIB / UTC+7)`)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      siteConfig.socials.github,
    );
    expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute("href", "/resume.pdf");
  });

  it("menampilkan WhatsApp dari profil dengan pesan otomatis", () => {
    render(
      <ContactPanel
        profile={{
          whatsappNumber: "0812-3456-7890",
          whatsappMessage: "Halo Rakha",
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      "https://wa.me/6281234567890?text=Halo%20Rakha",
    );
  });

  it("menyalin email dan mengumumkannya lewat aria-live", async () => {
    const user = userEvent.setup();
    stubClipboard();
    render(<ContactPanel />);

    await user.click(screen.getByRole("button", { name: "Salin email" }));

    expect(writeText).toHaveBeenCalledWith(siteConfig.socials.email);
    expect(await screen.findByText("Email disalin")).toBeInTheDocument();
  });
});
