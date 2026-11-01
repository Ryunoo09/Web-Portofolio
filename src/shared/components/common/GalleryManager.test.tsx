import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ActionResult } from "@/shared/types/action-result";
import { GalleryManager } from "./GalleryManager";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const ok = async (): Promise<ActionResult> => ({ ok: true, data: undefined });
const upload = async (): Promise<ActionResult<string>> => ({
  ok: true,
  data: "https://cdn.test/a.png",
});

function renderGallery(images: { id: string; url: string; alt: string }[] = []) {
  return render(
    <GalleryManager
      title="Foto Pendidikan"
      hint="Isi teks alternatif."
      emptyText="Belum ada foto."
      parentId="p1"
      images={images}
      upload={upload}
      create={ok}
      update={ok}
      remove={ok}
    />,
  );
}

describe("GalleryManager", () => {
  it("menampilkan keadaan kosong dan tombol pilih gambar", () => {
    renderGallery();

    expect(screen.getByRole("heading", { level: 2, name: "Foto Pendidikan" })).toBeInTheDocument();
    expect(screen.getByText("Belum ada foto.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pilih gambar" })).toBeInTheDocument();
  });

  it("menampilkan field teks alternatif untuk tiap gambar", () => {
    renderGallery([{ id: "i1", url: "https://cdn.test/a.png", alt: "Gedung kampus" }]);

    expect(screen.getByDisplayValue("Gedung kampus")).toBeInTheDocument();
    expect(screen.queryByText("Belum ada foto.")).toBeNull();
  });
});
