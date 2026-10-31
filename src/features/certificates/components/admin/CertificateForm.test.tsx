import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CertificateForm } from "./CertificateForm";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

vi.mock("../../server/actions", () => ({
  createCertificate: vi.fn(),
  updateCertificate: vi.fn(),
  uploadCertificateImage: vi.fn(),
}));

describe("CertificateForm", () => {
  it("menampilkan field deskripsi", () => {
    render(<CertificateForm />);

    expect(screen.getByLabelText("Deskripsi")).toBeInTheDocument();
    expect(screen.getByText(/Ringkasan isi sertifikat/i)).toBeInTheDocument();
  });

  it("mengisi nilai awal deskripsi saat mode ubah", () => {
    render(
      <CertificateForm
        certificate={{
          id: "c1",
          title: "AWS Certified Developer",
          issuer: "Amazon Web Services",
          description: "Bukti kompetensi pengembangan aplikasi cloud.",
          issuedAt: "2025-04-01",
          credentialUrl: null,
          imageUrl: null,
          sortOrder: 0,
          isPublished: true,
        }}
      />,
    );

    expect(screen.getByLabelText("Deskripsi")).toHaveValue(
      "Bukti kompetensi pengembangan aplikasi cloud.",
    );
    expect(screen.getByRole("button", { name: "Simpan Perubahan" })).toBeInTheDocument();
  });
});
