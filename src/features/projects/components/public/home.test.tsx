import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeProject } from "../../fixtures/project";
import { CaseCard } from "./CaseCard";
import { FeaturedWork } from "./FeaturedWork";
import { ProofStrip } from "./ProofStrip";
import { SignalTicker } from "./SignalTicker";

describe("CaseCard", () => {
  it("menampilkan domain, tipe, tahun, dan satu tautan utama ke studi kasus", () => {
    render(<CaseCard project={makeProject()} />);

    expect(screen.getByText("Computer Vision · Skripsi · 2026")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Contoh Proyek" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contoh Proyek" })).toHaveAttribute(
      "href",
      "/projects/contoh-proyek",
    );
    expect(screen.getByText("+1")).toHaveAttribute("aria-label", "1 teknologi lainnya");
  });

  it("menyembunyikan blok hasil bila proyek belum punya outcome", () => {
    render(<CaseCard project={makeProject({ outcomes: [] })} variant="feature" />);

    expect(screen.queryByText(/Hasil/i)).not.toBeInTheDocument();
    expect(
      screen.getByText("Peran: Full Stack · 1 orang · Mar 2026 — Agu 2026"),
    ).toBeInTheDocument();
  });

  it("menampilkan outcome pertama bila tersedia", () => {
    render(<CaseCard project={makeProject({ outcomes: ["Waktu turun 10 → 2 menit"] })} />);

    expect(screen.getByText("Waktu turun 10 → 2 menit")).toBeInTheDocument();
  });
});

describe("FeaturedWork", () => {
  it("merender satu feature dan dua kartu standard", () => {
    const projects = [
      makeProject({ id: "a", slug: "a", title: "Proyek A" }),
      makeProject({ id: "b", slug: "b", title: "Proyek B" }),
      makeProject({ id: "c", slug: "c", title: "Proyek C" }),
    ];

    render(<FeaturedWork projects={projects} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Bukti, bukan daftar teknologi." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Proyek A" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Proyek B" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Proyek C" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Lihat semua proyek/ })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("tidak merender apa pun tanpa proyek", () => {
    const { container } = render(<FeaturedWork projects={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});

describe("ProofStrip", () => {
  it("menampilkan tiga angka bukti dan tautan studi kasus", () => {
    render(<ProofStrip project={makeProject({ slug: "air", title: "Big Data Air" })} />);

    expect(screen.getByText("1,2 juta+")).toBeInTheDocument();
    expect(screen.getByText("88,62%")).toBeInTheDocument();
    expect(screen.getByText("0,86")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Baca studi kasus/ })).toHaveAttribute(
      "href",
      "/projects/air",
    );
  });

  it("tidak merender angka tanpa proyek sumber", () => {
    const { container } = render(<ProofStrip project={null} />);

    expect(container).toBeEmptyDOMElement();
  });
});

describe("SignalTicker", () => {
  const items = [
    { href: "/projects/a", label: "Validasi FTTH" },
    { href: "/projects/b", label: "DSE AI" },
  ];

  it("menampilkan label proyek dan bisa dijeda", async () => {
    const user = userEvent.setup();
    render(<SignalTicker items={items} />);

    expect(screen.getAllByText("Validasi FTTH").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DSE AI").length).toBeGreaterThan(0);

    const button = screen.getByRole("button", { name: "Jeda ticker" });
    expect(button).toHaveAttribute("aria-pressed", "false");

    await user.click(button);

    expect(screen.getByRole("button", { name: "Lanjutkan ticker" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("tidak dirender tanpa proyek", () => {
    const { container } = render(<SignalTicker items={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("menautkan setiap label ke halaman proyeknya", () => {
    render(<SignalTicker items={items} />);

    expect(screen.getAllByRole("link", { name: "Validasi FTTH" })[0]).toHaveAttribute(
      "href",
      "/projects/a",
    );
  });
});
