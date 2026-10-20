import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillsByCategory, groupSkillsByCategory } from "./SkillsByCategory";
import type { Skill } from "../../types";

function makeSkill(
  id: string,
  name: string,
  category: string,
  level: number,
  sortOrder: number,
): Skill {
  return {
    id,
    name,
    category,
    level,
    iconName: null,
    sortOrder,
    isPublished: true,
    isLearning: false,
  };
}

describe("groupSkillsByCategory", () => {
  it("mengelompokkan skill dan menjaga urutan kemunculan kategori", () => {
    const groups = groupSkillsByCategory([
      makeSkill("1", "Python", "Bahasa Pemrograman", 4, 1),
      makeSkill("2", "Laravel", "Framework & Library", 4, 2),
      makeSkill("3", "PHP", "Bahasa Pemrograman", 4, 3),
    ]);

    expect(groups.map((group) => group.category)).toEqual([
      "Bahasa Pemrograman",
      "Framework & Library",
    ]);
    expect(groups[0]?.skills.map((skill) => skill.name)).toEqual(["Python", "PHP"]);
  });

  it("mengembalikan array kosong bila tidak ada skill", () => {
    expect(groupSkillsByCategory([])).toEqual([]);
  });
});

describe("SkillsByCategory", () => {
  it("menampilkan satu kartu per kategori beserta jumlah dan tingkatnya", () => {
    render(
      <SkillsByCategory
        skills={[
          makeSkill("1", "Python", "Bahasa Pemrograman", 4, 1),
          makeSkill("2", "PHP", "Bahasa Pemrograman", 4, 2),
          makeSkill("3", "Laravel", "Framework & Library", 3, 3),
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: "Bahasa Pemrograman" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Framework & Library" })).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    // Tingkat tetap terbaca pembaca layar walau penandanya hanya titik-titik visual.
    expect(screen.getAllByText("Tingkat 4 dari 5")).toHaveLength(2);
    expect(screen.getByText("Tingkat 3 dari 5")).toBeInTheDocument();
    // Kriteria tingkat tampil sebagai teks, bukan hanya warna/titik.
    expect(screen.getAllByText("Mahir")).toHaveLength(2);
    expect(screen.getByText("Menengah")).toBeInTheDocument();
  });

  it("tidak merender apa pun bila daftar skill kosong", () => {
    const { container } = render(<SkillsByCategory skills={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
