import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ createPublicClient: vi.fn() }));

vi.mock("@/shared/lib/supabase/public", () => ({
  createPublicClient: mocks.createPublicClient,
}));

import { GET } from "./route";

/** Rantai query Supabase dipersingkat: hasilnya sudah ditentukan di muka. */
function client(result: unknown) {
  const builder = {
    select: () => builder,
    limit: () => builder,
    abortSignal: () => Promise.resolve(result),
  };

  return { from: () => builder };
}

beforeEach(() => {
  mocks.createPublicClient.mockReset();
});

describe("GET /api/health", () => {
  it("membalas 200 saat Supabase menjawab", async () => {
    mocks.createPublicClient.mockReturnValue(client({ data: [{ id: "1" }], error: null }));

    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ status: "ok", db: "ok" });
  });

  it("membalas 503 saat Supabase tak terjangkau", async () => {
    mocks.createPublicClient.mockReturnValue(client({ data: null, error: { message: "timeout" } }));

    const response = await GET();

    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ status: "degraded", db: "unreachable" });
  });
});
