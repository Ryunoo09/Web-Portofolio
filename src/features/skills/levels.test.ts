import { describe, expect, it } from "vitest";
import { getSkillLevelLabel, SKILL_LEVELS } from "./levels";

describe("getSkillLevelLabel", () => {
  it.each([
    [1, "Pemula"],
    [2, "Dasar"],
    [3, "Menengah"],
    [4, "Mahir"],
    [5, "Ahli"],
  ])("memetakan level %i ke %s", (level, label) => {
    expect(getSkillLevelLabel(level)).toBe(label);
  });

  it("mengembalikan 'Belum dinilai' untuk level di luar skala", () => {
    expect(getSkillLevelLabel(0)).toBe("Belum dinilai");
    expect(getSkillLevelLabel(6)).toBe("Belum dinilai");
  });

  it("menjaga urutan skala untuk dropdown admin", () => {
    expect(SKILL_LEVELS.map((item) => item.value)).toEqual([1, 2, 3, 4, 5]);
  });
});
