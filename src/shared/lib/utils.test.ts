import { describe, expect, it } from "vitest";
import { formatPeriod, slugify } from "./utils";

describe("slugify", () => {
  it("mengubah teks menjadi slug", () => {
    expect(slugify("Aplikasi Deteksi FAT Box!")).toBe("aplikasi-deteksi-fat-box");
  });

  it("membuang tanda diakritik dan tanda hubung berlebih", () => {
    expect(slugify("  Café -- Ñandú  ")).toBe("cafe-nandu");
  });
});

describe("formatPeriod", () => {
  it("menampilkan rentang tahun", () => {
    expect(formatPeriod("2022-01-01", "2024-06-30")).toBe("2022 — 2024");
  });

  it("menampilkan 'Sekarang' bila tanggal akhir kosong", () => {
    expect(formatPeriod("2024-01-01", null)).toBe("2024 — Sekarang");
  });
});
