import { describe, expect, it } from "vitest";
import { buildCvFilename } from "./cv";

describe("buildCvFilename", () => {
  it("memakai nama lengkap dari profil", () => {
    expect(buildCvFilename("Rakha Yuda Wicaksono")).toBe("CV ATS Rakha Yuda Wicaksono.pdf");
  });

  it("memakai fallback bila nama kosong", () => {
    expect(buildCvFilename(null)).toBe("CV ATS Rakha Yuda Wicaksono.pdf");
  });

  it("membuang karakter yang tidak valid untuk nama berkas", () => {
    expect(buildCvFilename('Rakha / "Yuda"')).toBe("CV ATS Rakha Yuda.pdf");
  });
});
