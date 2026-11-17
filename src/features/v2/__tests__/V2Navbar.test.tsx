import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2Navbar } from "../components/V2Navbar";

describe("V2Navbar", () => {
  it("renders the brand logo and core navigation labels", () => {
    render(<V2Navbar />);

    expect(screen.getByText("rakha.dev")).toBeInTheDocument();
    for (const label of [
      "Beranda",
      "Tentang",
      "Portfolio",
      "Pendidikan",
      "Pengalaman",
      "Skill",
      "Kontak",
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("marks the active section via aria-current and data-active", () => {
    render(<V2Navbar activeSection="Portfolio" />);

    const activeLink = screen.getByRole("link", { name: "Portfolio" });
    expect(activeLink).toHaveAttribute("aria-current", "page");
    expect(activeLink).toHaveAttribute("data-active", "");
  });

  it("does not mark non-active sections", () => {
    render(<V2Navbar activeSection="Portfolio" />);

    const inactiveLink = screen.getByRole("link", { name: "Beranda" });
    expect(inactiveLink).not.toHaveAttribute("aria-current");
    expect(inactiveLink).not.toHaveAttribute("data-active");
  });

  it("renders the CV download dropdown trigger", () => {
    render(<V2Navbar />);

    expect(screen.getByRole("button", { name: /Unduh CV/i })).toBeInTheDocument();
  });
});
