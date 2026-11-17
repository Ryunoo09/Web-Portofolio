import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2Contact } from "../components/V2Contact";
import { V2Footer } from "../components/V2Footer";

const mockProfile = {
  id: 1,
  fullName: "Rakha Yuda Wicaksono",
  headline: "Software Engineer & Backend Developer",
  bio: null,
  avatarUrl: null,
  resumeUrl: null,
  resumeUrlEn: null,
  email: "rakha@example.com",
  location: "Brebes, Jawa Tengah, Indonesia",
  socialLinks: [
    { platform: "github", url: "https://github.com/rakha" },
    { platform: "linkedin", url: "https://linkedin.com/in/rakha" },
  ],
  whatsappNumber: null,
  whatsappMessage: null,
  seoTitle: null,
  seoDescription: null,
};

describe("V2Contact", () => {
  it("renders the contact section heading and info card", () => {
    render(<V2Contact profile={mockProfile as never} />);

    expect(screen.getByText(/KONTAK/i)).toBeInTheDocument();
    expect(screen.getByText("Brebes, Jawa Tengah, Indonesia")).toBeInTheDocument();
    expect(screen.getByText("rakha@example.com")).toBeInTheDocument();
  });

  it("renders the contact form fields", () => {
    render(<V2Contact profile={mockProfile as never} />);

    expect(screen.getByLabelText(/Nama/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText(/Pesan/i).length).toBeGreaterThan(0);
  });
});

describe("V2Footer", () => {
  it("renders the footer with copyright and brand", () => {
    render(<V2Footer />);

    expect(screen.getByText(/rakha\.dev/i)).toBeInTheDocument();
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });
});
