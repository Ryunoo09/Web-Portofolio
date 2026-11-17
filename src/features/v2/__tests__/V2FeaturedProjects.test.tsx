import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { V2FeaturedProjects } from "../components/V2FeaturedProjects";

const mockProjects = [
  {
    id: "1",
    slug: "ftth-yolo26",
    title: "FTTH YOLO26",
    summary: "Sistem computer vision deteksi infrastruktur FTTH dengan YOLO26 & PaddleOCR.",
    skills: [
      { id: "1", name: "Python" },
      { id: "2", name: "YOLO26" },
    ],
    domain: "Computer Vision",
  },
  {
    id: "2",
    slug: "dse-ai",
    title: "DSE AI",
    summary: "Model prediksi akurasi 88,62% untuk sistem DSE.",
    skills: [{ id: "3", name: "FastAPI" }],
    domain: "ML",
  },
  {
    id: "3",
    slug: "sirata",
    title: "SIRATA",
    summary: "Sistem terintegrasi monitoring dan otomasi proses.",
    skills: [{ id: "4", name: "PostgreSQL" }],
    domain: "Backend",
  },
  {
    id: "4",
    slug: "big-data-88",
    title: "Big Data Pipeline",
    summary: "Pipeline data real-time dengan akurasi 88,62%.",
    skills: [{ id: "5", name: "Python" }],
    domain: "Data",
  },
];

describe("V2FeaturedProjects", () => {
  it("renders the section badge and all project titles", () => {
    render(<V2FeaturedProjects projects={mockProjects} />);

    expect(screen.getAllByText(/PROYEK/i).length).toBeGreaterThan(0);
    expect(screen.getByText("FTTH YOLO26")).toBeInTheDocument();
    expect(screen.getByText("DSE AI")).toBeInTheDocument();
    expect(screen.getByText("SIRATA")).toBeInTheDocument();
    expect(screen.getByText("Big Data Pipeline")).toBeInTheDocument();
  });

  it("renders the CTA link for case studies", () => {
    render(<V2FeaturedProjects projects={mockProjects} />);

    expect(screen.getAllByRole("link", { name: /Lihat Studi Kasus/i }).length).toBeGreaterThan(0);
  });

  it("renders skill chips on each project card", () => {
    render(<V2FeaturedProjects projects={mockProjects} />);

    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
  });
});
