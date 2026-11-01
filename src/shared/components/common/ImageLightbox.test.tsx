import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ImageLightbox } from "./ImageLightbox";

describe("ImageLightbox", () => {
  it("menampilkan foto ukuran penuh setelah thumbnail ditekan", async () => {
    const user = userEvent.setup();
    render(
      <ImageLightbox src="https://example.com/foto.jpg" alt="Foto rapat">
        <span>thumbnail</span>
      </ImageLightbox>,
    );

    expect(screen.queryByRole("dialog")).toBeNull();

    await user.click(screen.getByRole("button", { name: "Perbesar: Foto rapat" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByAltText("Foto rapat")).toBeInTheDocument();
  });
});
