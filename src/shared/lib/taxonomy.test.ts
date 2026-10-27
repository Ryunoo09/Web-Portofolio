import { describe, expect, it } from "vitest";
import {
  getProjectDomainLabel,
  isProjectDomain,
  PROJECT_DOMAIN_OPTIONS,
  resolveProjectDomain,
} from "./taxonomy";

describe("taxonomy proyek", () => {
  it("mengenali enam domain yang didukung", () => {
    expect(PROJECT_DOMAIN_OPTIONS).toHaveLength(6);
    expect(isProjectDomain("computer-vision")).toBe(true);
    expect(isProjectDomain("mobile")).toBe(false);
  });

  it("domain tersimpan menang atas peta slug", () => {
    expect(resolveProjectDomain("sirata", "iot")).toBe("iot");
  });

  it("memakai fallback slug saat domain null", () => {
    expect(resolveProjectDomain("validasi-ftth-yolo26-paddleocr", null)).toBe("computer-vision");
    expect(resolveProjectDomain("analisis-prediktif-kualitas-air")).toBe("data-big-data");
    expect(resolveProjectDomain("chatbot-report-automation", null)).toBe("automation");
  });

  it("mengembalikan null untuk slug yang tidak dikenal", () => {
    expect(resolveProjectDomain("proyek-baru", null)).toBeNull();
  });

  it("memberi label yang bisa dibaca manusia", () => {
    expect(getProjectDomainLabel("backend-system")).toBe("Backend & API");
    expect(getProjectDomainLabel(null)).toBeNull();
  });
});
