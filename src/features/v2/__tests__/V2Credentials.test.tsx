import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2EducationExperience } from "../components/V2EducationExperience";
import { V2Certificates } from "../components/V2Certificates";

const mockEducation = [
  {
    id: "1",
    institution: "Politeknik Negeri Semarang",
    degree: "D4 Teknologi Rekayasa Komputer",
    field: "Teknologi Rekayasa Komputer",
    description: "Fokus pada rekayasa sistem dan otomasi.",
    startedAt: "2022-07",
    endedAt: "2026-05",
    images: [],
  },
];

const mockExperiences = [
  {
    id: "1",
    company: "Indosat",
    role: "Data Engineer Intern",
    description: "Membangun pipeline data dan dashboard monitoring.",
    location: "Jakarta",
    startedAt: "2025-01",
    endedAt: null,
    images: [],
  },
];

const mockCertificates = [
  {
    id: "1",
    title: "MTCNA",
    issuer: "Mikrotik",
    description: "Sertifikasi jaringan MikroTik.",
    issuedAt: "2024",
    credentialUrl: "https://example.com/mtcna",
    imageUrl: null,
  },
  {
    id: "2",
    title: "Big Data SOLUSI247",
    issuer: "SOLUSI247",
    description: "Program sertifikasi big data.",
    issuedAt: "2025",
    credentialUrl: "https://example.com/bigdata",
    imageUrl: null,
  },
];

describe("V2EducationExperience", () => {
  it("renders education and experience sections", () => {
    render(
      <V2EducationExperience
        education={mockEducation as never[]}
        experiences={mockExperiences as never[]}
      />,
    );

    expect(screen.getByText(/PENDIDIKAN/i)).toBeInTheDocument();
    expect(screen.getByText("Politeknik Negeri Semarang")).toBeInTheDocument();
    expect(screen.getByText(/PENGALAMAN/i)).toBeInTheDocument();
    expect(screen.getByText("Indosat")).toBeInTheDocument();
  });
});

describe("V2Certificates", () => {
  it("renders certificate cards with issuer and credential link", () => {
    render(<V2Certificates certificates={mockCertificates as never[]} />);

    expect(screen.getAllByText(/SERTIFIKASI/i).length).toBeGreaterThan(0);
    expect(screen.getByText("MTCNA")).toBeInTheDocument();
    expect(screen.getByText("Mikrotik")).toBeInTheDocument();
    expect(screen.getByText("Big Data SOLUSI247")).toBeInTheDocument();
  });
});
