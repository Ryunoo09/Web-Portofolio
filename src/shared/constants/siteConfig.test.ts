import { describe, expect, it } from "vitest";
import { siteConfig } from "./siteConfig";

describe("metrik hero", () => {
  it("memakai tiga metrik terverifikasi dan tidak menampilkan 500+", () => {
    expect(siteConfig.metrics).toHaveLength(3);
    expect(siteConfig.metrics[0]).toMatchObject({
      value: "3",
      label: "sistem operasional",
    });
    expect(JSON.stringify(siteConfig.metrics)).not.toContain("500+");
  });
});
