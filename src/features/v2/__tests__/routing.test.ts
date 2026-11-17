import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = "C:\\FILE CODE\\WEB Portofolio\\portfolio\\.worktrees\\portfolio-v2";

describe("v2 routing versioning", () => {
  it("keeps the original public home route intact", () => {
    const root = join(repoRoot, "src", "app", "(public)", "page.tsx");
    expect(existsSync(root)).toBe(true);
    const content = readFileSync(root, "utf-8");
    expect(content).toContain('id="home-jsonld"');
  });

  it("provides a dedicated v1 archive route", () => {
    const v1 = join(repoRoot, "src", "app", "(public)", "v1", "page.tsx");
    expect(existsSync(v1)).toBe(true);
    const content = readFileSync(v1, "utf-8");
    expect(content).toContain("export const metadata: Metadata");
    expect(content).toContain('id="home-v1-jsonld"');
    expect(content).toContain("/v1");
  });
});
