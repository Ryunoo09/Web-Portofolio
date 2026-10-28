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
    render(<ContactPanel resumeUrl="/resume.pdf" />);

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

  it("menyalin email dan mengumumkannya lewat aria-live", async () => {
    const user = userEvent.setup();
    stubClipboard();
    render(<ContactPanel resumeUrl="/resume.pdf" />);

    await user.click(screen.getByRole("button", { name: "Salin email" }));

    expect(writeText).toHaveBeenCalledWith(siteConfig.socials.email);
    expect(await screen.findByText("Email disalin")).toBeInTheDocument();
  });
});
