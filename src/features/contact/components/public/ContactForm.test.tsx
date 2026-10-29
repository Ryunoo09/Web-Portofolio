import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { submitContactMessage } from "../../server/actions";
import { ContactForm } from "./ContactForm";

vi.mock("../../server/actions", () => ({
  submitContactMessage: vi.fn(),
}));

const mockedSubmit = vi.mocked(submitContactMessage);

beforeEach(() => {
  mockedSubmit.mockReset();
});

describe("ContactForm", () => {
  it("memakai label terlihat, intent, dan honeypot tersembunyi", () => {
    const { container } = render(<ContactForm />);

    expect(screen.getByLabelText("Nama")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Saya menghubungi untuk")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Rekruter" })).toBeInTheDocument();
    expect(screen.getByLabelText("Topik")).toBeInTheDocument();
    expect(screen.getByLabelText("Pesan")).toBeInTheDocument();
    expect(container.querySelector("#website")).not.toBeVisible();
  });

  it("menampilkan ringkasan error dan menerima fokus saat isian kosong", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Kirim pesan" }));

    const summary = await screen.findByRole("alert");
    expect(summary).toHaveFocus();
    expect(summary).toHaveTextContent("Ada isian yang perlu diperbaiki.");
    expect(screen.getByRole("link", { name: "Nama minimal 2 karakter." })).toHaveAttribute(
      "href",
      "#name",
    );
    expect(mockedSubmit).not.toHaveBeenCalled();
  });

  it("mengirim intent dan menampilkan panel sukses", async () => {
    mockedSubmit.mockResolvedValue({ ok: true, data: undefined });
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nama"), "Budi Santoso");
    await user.type(screen.getByLabelText("Email"), "budi@example.com");
    await user.selectOptions(screen.getByLabelText("Saya menghubungi untuk"), "collaboration");
    await user.type(screen.getByLabelText("Topik"), "Kolaborasi proyek");
    await user.type(screen.getByLabelText("Pesan"), "Halo, saya ingin berdiskusi.");
    await user.click(screen.getByRole("button", { name: "Kirim pesan" }));

    const success = await screen.findByRole("status");
    expect(success).toHaveTextContent("Pesan terkirim.");
    expect(mockedSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ intent: "collaboration", name: "Budi Santoso" }),
    );

    await user.click(screen.getByRole("button", { name: "Kirim pesan lain" }));
    expect(screen.getByLabelText("Nama")).toHaveValue("");
  });

  it("menampilkan pesan server tanpa membocorkan detail", async () => {
    mockedSubmit.mockResolvedValue({
      ok: false,
      error: "Pesan belum terkirim. Coba lagi atau email langsung.",
    });
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Nama"), "Budi Santoso");
    await user.type(screen.getByLabelText("Email"), "budi@example.com");
    await user.type(screen.getByLabelText("Topik"), "Kolaborasi proyek");
    await user.type(screen.getByLabelText("Pesan"), "Halo, saya ingin berdiskusi.");
    await user.click(screen.getByRole("button", { name: "Kirim pesan" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Pesan belum terkirim. Coba lagi atau email langsung.",
    );
  });
});
