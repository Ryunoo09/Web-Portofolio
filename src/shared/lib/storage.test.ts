import { describe, expect, it } from "vitest";
import {
  assertAllowedFile,
  buildObjectPath,
  pathFromPublicUrl,
  publicUrl,
  removeFiles,
} from "./storage";

function makeFile(name: string, type: string, size: number): File {
  return new File([new Uint8Array(size)], name, { type });
}

describe("assertAllowedFile", () => {
  it.each(["image/jpeg", "image/png", "image/webp", "image/avif"])("menerima %s", (type) => {
    expect(() => assertAllowedFile(makeFile("foto.png", type, 1024))).not.toThrow();
  });

  it("menolak MIME di luar whitelist", () => {
    expect(() => assertAllowedFile(makeFile("virus.exe", "application/x-msdownload", 10))).toThrow(
      /tidak didukung/,
    );
  });

  it("menolak berkas kosong", () => {
    expect(() => assertAllowedFile(makeFile("kosong.png", "image/png", 0))).toThrow(/kosong/);
  });

  it("menolak berkas lebih dari 5 MB", () => {
    expect(() =>
      assertAllowedFile(makeFile("besar.png", "image/png", 5 * 1024 * 1024 + 1)),
    ).toThrow(/5 MB/);
  });

  it("menerima PDF hanya bila kind document diminta", () => {
    const pdf = makeFile("cv.pdf", "application/pdf", 1024);
    expect(() => assertAllowedFile(pdf, ["document"])).not.toThrow();
    expect(() => assertAllowedFile(pdf)).toThrow(/tidak didukung/);
  });
});

describe("buildObjectPath", () => {
  it("tidak memakai nama asli pengguna", () => {
    const path = buildObjectPath("projects", makeFile("../../rahasia.png", "image/png", 10));
    expect(path).not.toContain("rahasia");
    expect(path).not.toContain("..");
  });

  it("selalu berada di folder yang diminta dan memakai ekstensi whitelist", () => {
    const path = buildObjectPath("certificates", makeFile("sertifikat.jpeg", "image/jpeg", 10));
    expect(path.startsWith("certificates/")).toBe(true);
    expect(path.endsWith(".jpg")).toBe(true);
    expect(path.split("/")).toHaveLength(2);
  });
});

describe("pathFromPublicUrl", () => {
  it("mengembalikan path objek dari URL publik media", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://demo.supabase.co";
    const url = publicUrl("projects/abc.jpg");
    expect(pathFromPublicUrl(url)).toBe("projects/abc.jpg");
  });

  it("mengembalikan null bila URL bukan milik bucket media", () => {
    expect(pathFromPublicUrl("https://cdn.example.com/gambar.png")).toBeNull();
    expect(pathFromPublicUrl(null)).toBeNull();
  });
});

describe("removeFiles", () => {
  it("tidak memanggil Storage saat tidak ada URL valid", async () => {
    let called = false;
    const supabase = {
      storage: {
        from: () => ({
          remove: async () => {
            called = true;
            return { error: null };
          },
        }),
      },
    };

    await removeFiles(supabase as never, ["https://cdn.example.com/a.png", null]);
    expect(called).toBe(false);
  });

  it("hanya mengirim path milik bucket media", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://demo.supabase.co";
    let received: string[] = [];
    const supabase = {
      storage: {
        from: () => ({
          remove: async (paths: string[]) => {
            received = paths;
            return { error: null };
          },
        }),
      },
    };

    await removeFiles(supabase as never, [
      publicUrl("projects/a.jpg"),
      "https://cdn.example.com/b.png",
    ]);
    expect(received).toEqual(["projects/a.jpg"]);
  });
});
