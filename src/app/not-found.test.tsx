import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

vi.mock("next/navigation", () => ({
  usePathname: () => "/halaman-tidak-ada",
}));

describe("halaman 404", () => {
  it("memakai kerangka publik, satu H1, dan dua jalan keluar", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Halaman tidak ditemukan." }),
    ).toBeVisible();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Kembali ke beranda" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Lihat proyek" })).toHaveAttribute("href", "/projects");
    expect(screen.getByText("Error 404")).toBeInTheDocument();
  });
});
