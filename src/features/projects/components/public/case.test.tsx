import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { makeProject } from "../../fixtures/project";
import { CaseGrid } from "./CaseGrid";
import { CaseNext } from "./CaseNext";
import { CaseStudy } from "./CaseStudy";

describe("CaseGrid", () => {
  it("merender satu kartu per proyek dengan tautan judul", () => {
    render(
      <CaseGrid
        projects={[
          makeProject({ id: "a", slug: "a", title: "Proyek A" }),
          makeProject({ id: "b", slug: "b", title: "Proyek B" }),
        ]}
      />,
    );

    expect(screen.getByRole("heading", { level: 2, name: "Proyek A" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Proyek B" })).toHaveAttribute("href", "/projects/b");
  });

  it("tidak merender placeholder bila kosong", () => {
    const { container } = render(<CaseGrid projects={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe("CaseStudy", () => {
  it("merender section yang punya data dan menyembunyikan hasil yang kosong", () => {
    const project = makeProject({
      problem: "Pengecekan manual.\n\nWaktu tim lama.",
      solution: "Sistem otomatis.",
      features: ["Fitur A", "Fitur B"],
      outcomes: [],
      challenges: "Data terbatas.",
    });

    render(<CaseStudy project={project} nextProject={null} />);

    expect(screen.getByRole("heading", { level: 1, name: "Contoh Proyek" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Masalah" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Peran & batasan" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Solusi" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Tantangan & pelajaran" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Hasil" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Galeri" })).not.toBeInTheDocument();
    expect(screen.getByText("Fitur A")).toBeInTheDocument();
    expect(screen.getByText("Dikerjakan sendiri")).toBeInTheDocument();
  });

  it("merender hasil dan galeri bila datanya ada", () => {
    const project = makeProject({
      outcomes: ["Akurasi 88,62%", "AUC 0,86"],
      images: [{ id: "i1", url: "/covers/a.png", alt: "Tampilan utama", sortOrder: 0 }],
    });

    render(<CaseStudy project={project} nextProject={null} />);

    expect(screen.getByText("Akurasi 88,62%")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Galeri" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Tampilan utama" })).toBeInTheDocument();
  });

  it("menyajikan fakta, status privat, dan tautan kode", () => {
    const project = makeProject({ repoUrl: null, outcomes: [] });

    render(<CaseStudy project={project} nextProject={null} />);

    expect(screen.getAllByText("Kode privat").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Hubungi saya/ }).length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: /Lihat kode/ })).not.toBeInTheDocument();
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByText("Peran")).toBeInTheDocument();
    expect(screen.getByText("Full Stack")).toBeInTheDocument();
    expect(screen.getByText("Mar 2026 — Agu 2026")).toBeInTheDocument();
  });

  it("menampilkan proyek berikutnya ketika tersedia", () => {
    render(
      <CaseStudy
        project={makeProject()}
        nextProject={makeProject({ id: "b", slug: "proyek-b", title: "Proyek Berikutnya" })}
      />,
    );

    expect(screen.getByRole("link", { name: /Proyek Berikutnya/ })).toHaveAttribute(
      "href",
      "/projects/proyek-b",
    );
  });
});

describe("CaseNext", () => {
  it("menawarkan jalan keluar ketika proyek berikutnya tidak ada", () => {
    render(<CaseNext project={null} />);

    expect(screen.getByRole("link", { name: "Lihat semua proyek" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Hubungi saya" })).toHaveAttribute("href", "/contact");
  });
});
