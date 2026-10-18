import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { StatusToggle } from "./StatusToggle";

const { refreshMock } = vi.hoisted(() => ({ refreshMock: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: refreshMock }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

describe("StatusToggle", () => {
  it("menampilkan status terbit dan memanggil aksi untuk menjadikannya draf", async () => {
    const user = userEvent.setup();
    refreshMock.mockClear();
    const action = vi.fn().mockResolvedValue({ ok: true, data: undefined });

    render(<StatusToggle id="p1" name="Proyek Uji" isPublished action={action} />);

    const toggle = screen.getByRole("switch", { name: "Ubah status terbit: Proyek Uji" });
    expect(toggle).toBeChecked();
    expect(screen.getByText("Terbit")).toBeInTheDocument();

    await user.click(toggle);

    await waitFor(() => expect(action).toHaveBeenCalledWith("p1", false));
    await waitFor(() => expect(refreshMock).toHaveBeenCalledTimes(1));
    expect(toast.success).toHaveBeenCalled();
  });

  it("menerbitkan item yang masih draf", async () => {
    const user = userEvent.setup();
    const action = vi.fn().mockResolvedValue({ ok: true, data: undefined });

    render(<StatusToggle id="s1" name="Keahlian Uji" isPublished={false} action={action} />);

    const toggle = screen.getByRole("switch", { name: "Ubah status terbit: Keahlian Uji" });
    expect(toggle).not.toBeChecked();
    expect(screen.getByText("Draf")).toBeInTheDocument();

    await user.click(toggle);

    await waitFor(() => expect(action).toHaveBeenCalledWith("s1", true));
  });

  it("menampilkan galat dan tidak menyegarkan data bila aksi gagal", async () => {
    const user = userEvent.setup();
    refreshMock.mockClear();
    const action = vi.fn().mockResolvedValue({ ok: false, error: "Gagal mengubah status." });

    render(<StatusToggle id="e1" name="Pengalaman Uji" isPublished action={action} />);

    await user.click(screen.getByRole("switch", { name: "Ubah status terbit: Pengalaman Uji" }));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Gagal mengubah status."));
    expect(refreshMock).not.toHaveBeenCalled();
  });
});
