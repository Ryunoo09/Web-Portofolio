import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ImageUploadField } from "./ImageUploadField";

const PUBLIC_URL =
  "https://demo.supabase.co/storage/v1/object/public/portfolio-media/projects/a.png";

function selectFile(input: HTMLElement, file: File) {
  fireEvent.change(input, { target: { files: [file] } });
}

describe("ImageUploadField", () => {
  it("menolak berkas lebih dari 5 MB tanpa memanggil upload", async () => {
    const upload = vi.fn();
    render(
      <ImageUploadField label="Gambar Cover" value={null} onChange={vi.fn()} upload={upload} />,
    );

    const tooBig = new File([new Uint8Array(5 * 1024 * 1024 + 1)], "besar.png", {
      type: "image/png",
    });
    selectFile(screen.getByLabelText("Gambar Cover"), tooBig);

    expect(await screen.findByRole("alert")).toHaveTextContent("5 MB");
    expect(upload).not.toHaveBeenCalled();
  });

  it("mengunggah berkas kecil lalu melaporkan URL-nya", async () => {
    const upload = vi.fn().mockResolvedValue({ ok: true, data: PUBLIC_URL });
    const onChange = vi.fn();
    render(
      <ImageUploadField label="Gambar Cover" value={null} onChange={onChange} upload={upload} />,
    );

    const small = new File([new Uint8Array(1024)], "kecil.png", { type: "image/png" });
    selectFile(screen.getByLabelText("Gambar Cover"), small);

    await waitFor(() => expect(upload).toHaveBeenCalledWith(small));
    await waitFor(() => expect(onChange).toHaveBeenCalledWith(PUBLIC_URL));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("menampilkan pesan galat dari server", async () => {
    const upload = vi.fn().mockResolvedValue({ ok: false, error: "Gagal mengunggah berkas." });
    render(<ImageUploadField label="Avatar" value={null} onChange={vi.fn()} upload={upload} />);

    const small = new File([new Uint8Array(1024)], "kecil.png", { type: "image/png" });
    selectFile(screen.getByLabelText("Avatar"), small);

    expect(await screen.findByRole("alert")).toHaveTextContent("Gagal mengunggah berkas.");
  });

  it("memberi nama aksesibel pada tombol pemicu", () => {
    render(<ImageUploadField label="Avatar" value={null} onChange={vi.fn()} upload={vi.fn()} />);

    expect(screen.getByRole("button", { name: "Pilih berkas" })).toBeInTheDocument();
  });
});
