import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2Hero } from "../components/V2Hero";

const mockProfile = {
  id: 1,
  fullName: "Rakha Yuda Wicaksono",
  headline: "Software Engineer & Backend Developer",
  bio: "Fresh graduate Teknologi Rekayasa Komputer, Politeknik Negeri Semarang.",
  avatarUrl: "/avatars/rakha.jpg",
  resumeUrl: "/cv/rakha-ind.pdf",
  resumeUrlEn: "/cv/rakha-en.pdf",
  email: "rakha@example.com",
  location: "Brebes, Jawa Tengah, Indonesia",
  socialLinks: [{ platform: "github", url: "https://github.com/rakha" }],
  whatsappNumber: "+6281234567890",
  whatsappMessage: "Halo",
  seoTitle: null,
  seoDescription: null,
};

const mockStats = {
  operationalSystems: "3",
  predictiveAccuracy: "88,62%",
  timeCut: "10 → 2 mnt",
};

describe("V2Hero", () => {
  it("renders the availability pill and greeting", () => {
    render(<V2Hero profile={mockProfile as never} stats={mockStats} />);

    expect(screen.getByText(/Terbuka/i)).toBeInTheDocument();
    expect(screen.getByText(/Halo/i)).toBeInTheDocument();
  });

  it("renders the name as H1 with real profile data", () => {
    render(<V2Hero profile={mockProfile as never} stats={mockStats} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Rakha Yuda Wicaksono" }),
    ).toBeInTheDocument();
  });

  it("renders both CTA buttons", () => {
    render(<V2Hero profile={mockProfile as never} stats={mockStats} />);

    expect(screen.getByRole("link", { name: /Hubungi Saya/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Lihat Studi Kasus/i })).toBeInTheDocument();
  });

  it("renders the three metric cards with values", () => {
    render(<V2Hero profile={mockProfile as never} stats={mockStats} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("88,62%")).toBeInTheDocument();
    expect(screen.getByText("10 → 2 mnt")).toBeInTheDocument();
  });

  it("renders floating tech badges around the avatar", () => {
    render(<V2Hero profile={mockProfile as never} stats={mockStats} />);

    expect(screen.getByText("FastAPI & PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Computer Vision YOLO26")).toBeInTheDocument();
  });
});
