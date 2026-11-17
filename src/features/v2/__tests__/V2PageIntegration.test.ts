import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = "C:\\FILE CODE\\WEB Portofolio\\portfolio\\.worktrees\\portfolio-v2";

describe("V2 page integration", () => {
  it("provides a dedicated v2 route", () => {
    const v2 = join(repoRoot, "src", "app", "(public)", "v2", "page.tsx");
    expect(existsSync(v2)).toBe(true);
    const content = readFileSync(v2, "utf-8");
    expect(content).toContain("export default");
    expect(content).toContain("V2Navbar");
    expect(content).toContain("V2Hero");
    expect(content).toContain("V2About");
    expect(content).toContain("V2FeaturedProjects");
    expect(content).toContain("V2EducationExperience");
    expect(content).toContain("V2Certificates");
    expect(content).toContain("V2Contact");
    expect(content).toContain("V2Footer");
  });

  it("provides metadata for the v2 route", () => {
    const v2 = join(repoRoot, "src", "app", "(public)", "v2", "page.tsx");
    const content = readFileSync(v2, "utf-8");
    expect(content).toContain("export const metadata");
  });
});
