import { describe, expect, it } from "vitest";
import { formatMonthPeriod, formatPeriod, slugify, toListItems } from "./utils";

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

describe("formatMonthPeriod", () => {
  it("menampilkan rentang bulan dan tahun", () => {
    expect(formatMonthPeriod("2026-03-01", "2026-08-31")).toBe("Mar 2026 — Agu 2026");
  });

  it("menampilkan 'Sekarang' bila tanggal akhir kosong", () => {
    expect(formatMonthPeriod("2026-03-01", null)).toBe("Mar 2026 — Sekarang");
  });

  it("tetap menampilkan tanggal akhir bila tanggal mulai kosong", () => {
    expect(formatMonthPeriod(null, "2026-08-31")).toBe("Agu 2026");
  });

  it("mengembalikan teks kosong bila kedua tanggal kosong", () => {
    expect(formatMonthPeriod(null, null)).toBe("");
  });

  it("tidak menggeser bulan karena zona waktu", () => {
    expect(formatMonthPeriod("2026-03-01", "2026-03-31")).toBe("Mar 2026 — Mar 2026");
  });
});

describe("toListItems", () => {
  it("memecah satu baris menjadi satu poin", () => {
    expect(toListItems("Poin satu\nPoin dua")).toEqual(["Poin satu", "Poin dua"]);
  });

  it("membuang penanda daftar, spasi berlebih, dan baris kosong", () => {
    expect(toListItems("- Satu\n\n• Dua\n  * Tiga  ")).toEqual(["Satu", "Dua", "Tiga"]);
  });

  it("mengembalikan array kosong untuk teks kosong atau null", () => {
    expect(toListItems(null)).toEqual([]);
    expect(toListItems("   ")).toEqual([]);
  });

  it("tetap satu poin bila deskripsi berupa satu paragraf", () => {
    expect(toListItems("Satu paragraf panjang tanpa baris baru.")).toEqual([
      "Satu paragraf panjang tanpa baris baru.",
    ]);
  });
});
