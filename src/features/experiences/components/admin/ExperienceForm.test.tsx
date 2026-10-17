import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExperienceForm } from "./ExperienceForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

vi.mock("../../server/actions", () => ({
  createExperience: vi.fn(),
  updateExperience: vi.fn(),
}));

describe("ExperienceForm", () => {
  it("menampilkan galat aksesibel dan tidak mengirim saat form kosong", async () => {
    const user = userEvent.setup();
    const { createExperience } = await import("../../server/actions");

    render(<ExperienceForm />);

    await user.click(screen.getByRole("button", { name: "Buat Pengalaman" }));

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toBeGreaterThan(0);
    expect(screen.getByLabelText("Posisi")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Posisi")).toHaveAccessibleDescription(/wajib diisi/i);
    expect(createExperience).not.toHaveBeenCalled();
  });

  it("mengisi data awal saat mode ubah", () => {
    render(
      <ExperienceForm
        experience={{
          id: "e1",
          company: "PT Maju Jaya",
          role: "Backend Engineer",
          description: null,
          location: "Jakarta",
          startedAt: "2023-01-01",
          endedAt: null,
          sortOrder: 2,
          isPublished: false,
        }}
      />,
    );

    expect(screen.getByLabelText("Posisi")).toHaveValue("Backend Engineer");
    expect(screen.getByLabelText("Perusahaan")).toHaveValue("PT Maju Jaya");
    expect(screen.getByRole("button", { name: "Simpan Perubahan" })).toBeInTheDocument();
  });
});
