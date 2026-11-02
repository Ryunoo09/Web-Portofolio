import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, normalizeWhatsAppNumber } from "./whatsapp";

describe("normalizeWhatsAppNumber", () => {
  it("mengubah nomor lokal 08 menjadi 628", () => {
    expect(normalizeWhatsAppNumber("0812-3456-7890")).toBe("6281234567890");
  });

  it("membuang spasi dan tanda + pada format internasional", () => {
    expect(normalizeWhatsAppNumber("+62 812 3456 7890")).toBe("6281234567890");
  });

  it("menambahkan 62 pada nomor yang diawali 8", () => {
    expect(normalizeWhatsAppNumber("81234567890")).toBe("6281234567890");
  });

  it("mengembalikan string kosong bila nomor kosong", () => {
    expect(normalizeWhatsAppNumber(null)).toBe("");
    expect(normalizeWhatsAppNumber("   ")).toBe("");
  });
});

describe("buildWhatsAppUrl", () => {
  it("mengembalikan null tanpa nomor", () => {
    expect(buildWhatsAppUrl(null, "Halo")).toBeNull();
  });

  it("menyusun URL wa.me tanpa pesan", () => {
    expect(buildWhatsAppUrl("0812-3456-7890")).toBe("https://wa.me/6281234567890");
  });

  it("meng-encode pesan pembuka", () => {
    expect(buildWhatsAppUrl("0812-3456-7890", "Halo & salam")).toBe(
      "https://wa.me/6281234567890?text=Halo%20%26%20salam",
    );
  });
});
