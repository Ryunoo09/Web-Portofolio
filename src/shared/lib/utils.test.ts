import { describe, expect, it } from "vitest";
import { slugify } from "./utils";

describe("slugify", () => {
  it("mengubah teks menjadi slug", () => {
    expect(slugify("Aplikasi Deteksi FAT Box!")).toBe("aplikasi-deteksi-fat-box");
  });

  it("membuang tanda diakritik dan tanda hubung berlebih", () => {
    expect(slugify("  Café -- Ñandú  ")).toBe("cafe-nandu");
  });
});
