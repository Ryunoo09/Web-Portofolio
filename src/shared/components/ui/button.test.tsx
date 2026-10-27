import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("memakai varian primary sebagai default", () => {
    render(<Button>Simpan</Button>);

    expect(screen.getByRole("button", { name: "Simpan" })).toHaveAttribute(
      "data-variant",
      "primary",
    );
  });

  it("mendukung varian danger", () => {
    render(<Button variant="danger">Hapus</Button>);

    expect(screen.getByRole("button", { name: "Hapus" })).toHaveAttribute("data-variant", "danger");
  });

  it("menonaktifkan tombol dan menandai aria-busy saat loading", () => {
    render(<Button loading>Simpan</Button>);

    const button = screen.getByRole("button", { name: "Simpan" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("memakai aria-disabled untuk asChild, bukan atribut disabled", () => {
    render(
      <Button asChild disabled>
        <a href="/tujuan">Buka</a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Buka" });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).not.toHaveAttribute("disabled");
  });

  it("memanggil onClick saat tombol aktif diklik", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Simpan</Button>);
    await user.click(screen.getByRole("button", { name: "Simpan" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
