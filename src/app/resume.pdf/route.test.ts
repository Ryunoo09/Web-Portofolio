import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getProfile: vi.fn(),
  fetch: vi.fn(),
}));

vi.mock("@/features/profile", () => ({
  getProfile: mocks.getProfile,
}));

vi.stubGlobal("fetch", mocks.fetch);

import { GET } from "./route";

const request = new Request("http://localhost:3000/resume.pdf");

function pdfResponse() {
  return new Response(new Uint8Array([37, 80, 68, 70]), {
    headers: { "content-type": "application/pdf" },
  });
}

beforeEach(() => {
  mocks.getProfile.mockReset();
  mocks.fetch.mockReset();
});

describe("GET /resume.pdf", () => {
  it("mengembalikan 404 bila profil belum punya CV", async () => {
    mocks.getProfile.mockResolvedValue({ resumeUrl: null });

    const response = await GET(request);

    expect(response.status).toBe(404);
    expect(mocks.fetch).not.toHaveBeenCalled();
  });

  it("mengirim PDF dari URL profil sebagai lampiran", async () => {
    mocks.getProfile.mockResolvedValue({
      resumeUrl: "https://example.supabase.co/storage/v1/object/public/portfolio-media/cv.pdf",
    });
    mocks.fetch.mockResolvedValue(pdfResponse());

    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/pdf");
    expect(response.headers.get("content-disposition")).toContain("attachment");
    expect(await response.text()).toContain("%PDF");
  });

  it("mengembalikan 502 bila sumber bukan PDF", async () => {
    mocks.getProfile.mockResolvedValue({
      resumeUrl: "https://example.supabase.co/storage/v1/object/public/portfolio-media/cv.pdf",
    });
    mocks.fetch.mockResolvedValue(
      new Response("<html>login</html>", { headers: { "content-type": "text/html" } }),
    );

    const response = await GET(request);

    expect(response.status).toBe(502);
  });
});
