import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceGalleryManager } from "./ExperienceGalleryManager";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

vi.mock("../../server/actions", () => ({
  createExperienceImage: vi.fn(),
  deleteExperienceImage: vi.fn(),
  updateExperienceImage: vi.fn(),
  uploadExperienceImage: vi.fn(),
}));

describe("ExperienceGalleryManager", () => {
  it("menampilkan keadaan kosong dan tombol pilih gambar", () => {
    render(<ExperienceGalleryManager experienceId="e1" images={[]} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Dokumentasi Pengalaman" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Belum ada dokumentasi/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pilih gambar" })).toBeInTheDocument();
  });

  it("menampilkan field teks alternatif untuk tiap gambar", () => {
    render(
      <ExperienceGalleryManager
        experienceId="e1"
        images={[
          { id: "i1", url: "https://demo.supabase.co/a.png", alt: "Rapat tim", sortOrder: 0 },
        ]}
      />,
    );

    expect(screen.getByDisplayValue("Rapat tim")).toBeInTheDocument();
    expect(screen.queryByText(/Belum ada dokumentasi/i)).toBeNull();
  });
});
