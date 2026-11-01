import { describe, expect, it } from "vitest";
import { PROXY_AUTH_TIMEOUT_MS, SUPABASE_TIMEOUT_MS, timeoutFor } from "./timeout";

describe("timeoutFor", () => {
  it("memakai batas query untuk request biasa", () => {
    expect(timeoutFor("https://x.supabase.co/rest/v1/profile", SUPABASE_TIMEOUT_MS)).toBe(8_000);
    expect(timeoutFor(new URL("https://x.supabase.co/auth/v1/user"), PROXY_AUTH_TIMEOUT_MS)).toBe(
      5_000,
    );
  });

  it("memberi batas longgar untuk unggah/hapus berkas", () => {
    // Klien yang sama dipakai uploadFile(): 8 dtk akan memutus unggahan sah.
    expect(timeoutFor("https://x.supabase.co/storage/v1/object/portfolio-media/a.jpg", 8_000)).toBe(
      60_000,
    );
    expect(
      timeoutFor(new Request("https://x.supabase.co/storage/v1/object/portfolio-media"), 8_000),
    ).toBe(60_000);
  });
});
