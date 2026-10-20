import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillCard } from "./SkillCard";
import type { Skill } from "../../types";

function makeSkill(level: number): Skill {
  return {
    id: "1",
    name: "Python",
    category: "Bahasa Pemrograman",
    level,
    iconName: null,
    sortOrder: 1,
    isPublished: true,
    isLearning: false,
  };
}

describe("SkillCard", () => {
  it("menampilkan label kriteria beserta angka tingkat", () => {
    render(<SkillCard skill={makeSkill(4)} />);

    expect(screen.getByRole("heading", { name: "Python" })).toBeInTheDocument();
    expect(screen.getByText("Mahir")).toBeInTheDocument();
    expect(screen.getByText("· 4/5")).toBeInTheDocument();
  });

  it("tidak menampilkan angka bila tingkat belum diisi", () => {
    render(<SkillCard skill={makeSkill(0)} />);

    expect(screen.getByText("Belum dinilai")).toBeInTheDocument();
    expect(screen.queryByText(/0\/5/)).not.toBeInTheDocument();
  });
});
