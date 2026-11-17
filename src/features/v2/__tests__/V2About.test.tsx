import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2About } from "../components/V2About";

const mockProfile = {
  id: 1,
  fullName: "Rakha Yuda Wicaksono",
  headline: "Software Engineer & Backend Developer",
  bio: "Fresh graduate Teknologi Rekayasa Komputer, Politeknik Negeri Semarang.",
  avatarUrl: null,
  resumeUrl: null,
  resumeUrlEn: null,
  email: "rakha@example.com",
  location: "Brebes, Jawa Tengah, Indonesia",
  socialLinks: [],
  whatsappNumber: null,
  whatsappMessage: null,
  seoTitle: null,
  seoDescription: null,
};

const mockSkills = [
  { id: "1", name: "Python", category: "Backend", level: 4 },
  { id: "2", name: "FastAPI", category: "Backend", level: 4 },
  { id: "3", name: "PostgreSQL", category: "Database", level: 3 },
  { id: "4", name: "YOLO26", category: "ML", level: 3 },
];

describe("V2About", () => {
  it("renders the section badge and heading", () => {
    render(<V2About profile={mockProfile as never} skills={mockSkills} />);

    expect(screen.getByText(/TENTANG SAYA/i)).toBeInTheDocument();
  });

  it("renders the profile summary card with headline", () => {
    render(<V2About profile={mockProfile as never} skills={mockSkills} />);

    expect(screen.getByText(/Ringkasan Profil/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Software Engineer/i).length).toBeGreaterThan(0);
  });

  it("renders the collaboration card", () => {
    render(<V2About profile={mockProfile as never} skills={mockSkills} />);

    expect(screen.getByText(/Mari Terkoneksi/i)).toBeInTheDocument();
  });

  it("renders the professional contribution grid", () => {
    render(<V2About profile={mockProfile as never} skills={mockSkills} />);

    expect(screen.getByText(/Kontribusi/i)).toBeInTheDocument();
  });

  it("renders tech stack chips from skills array", () => {
    render(<V2About profile={mockProfile as never} skills={mockSkills} />);

    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("YOLO26")).toBeInTheDocument();
  });
});
