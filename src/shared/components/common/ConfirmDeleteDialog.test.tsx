import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmDeleteDialog } from "./ConfirmDeleteDialog";

const { refreshMock } = vi.hoisted(() => ({ refreshMock: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: refreshMock }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

describe("ConfirmDeleteDialog", () => {
  it("memanggil aksi lalu menyegarkan data saat dikonfirmasi", async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn().mockResolvedValue({ ok: true, data: undefined });

    render(
      <ConfirmDeleteDialog
        title="Hapus Proyek"
        itemName="Nexus Commerce"
        ariaLabel="Hapus proyek Nexus Commerce"
        successMessage="Proyek dihapus."
        onConfirm={onConfirm}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Hapus proyek Nexus Commerce" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Nexus Commerce")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Hapus" }));

    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(refreshMock).toHaveBeenCalledTimes(1));
  });

  it("tidak menyegarkan data bila aksi gagal", async () => {
    const user = userEvent.setup();
    refreshMock.mockClear();
    const onConfirm = vi.fn().mockResolvedValue({ ok: false, error: "Gagal menghapus." });

    render(
      <ConfirmDeleteDialog
        title="Hapus Sertifikat"
        itemName="AWS"
        ariaLabel="Hapus sertifikat AWS"
        successMessage="Sertifikat dihapus."
        onConfirm={onConfirm}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Hapus sertifikat AWS" }));
    await user.click(screen.getByRole("button", { name: "Hapus" }));

    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1));
    expect(refreshMock).not.toHaveBeenCalled();
  });
});
