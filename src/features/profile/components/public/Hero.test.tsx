import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("memakai value prop sebagai H1 dan menampilkan nama serta peran", () => {
    render(<Hero profile={null} latestProject={null} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Backend, data, dan otomasi yang dipakai di lapangan.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Rakha Yuda Wicaksono")).toBeInTheDocument();
    expect(screen.getByText("Backend & Data Engineer")).toBeInTheDocument();
  });

  it("menampilkan tiga metrik tanpa angka 500+", () => {
    render(<Hero profile={null} latestProject={null} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("sistem operasional")).toBeInTheDocument();
    expect(screen.getByText("88,62%")).toBeInTheDocument();
    expect(screen.getByText("10 → 2")).toBeInTheDocument();
    expect(screen.queryByText(/500\+/)).not.toBeInTheDocument();
  });

  it("menampilkan panel status, lokasi, dan proyek terakhir", () => {
    render(
      <Hero
        profile={null}
        latestProject={{ slug: "validasi-ftth-yolo26-paddleocr", title: "Validasi FTTH" }}
      />,
    );

    const panel = screen.getByRole("complementary");
    expect(panel).toHaveTextContent("Terbuka untuk Backend & Data Engineer");
    expect(panel).toHaveTextContent("Brebes, Jawa Tengah, Indonesia · WIB");
    expect(panel).toHaveTextContent("Python · FastAPI · PostgreSQL");
    expect(screen.getByRole("link", { name: "Validasi FTTH" })).toHaveAttribute(
      "href",
      "/projects/validasi-ftth-yolo26-paddleocr",
    );
    expect(screen.getByRole("link", { name: /Hubungi saya/ })).toHaveAttribute("href", "/contact");
  });

  it("menampilkan dua CTA: studi kasus dan unduh CV", () => {
    render(<Hero profile={null} latestProject={null} />);

    expect(screen.getByRole("link", { name: /Baca studi kasus/ })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: /Unduh CV/ })).toHaveAttribute("href", "/resume.pdf");
    expect(screen.getByText("Studi kasus segera")).toBeInTheDocument();
  });
});
