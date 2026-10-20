export const SKILL_LEVELS = [
  { value: 1, label: "Pemula" },
  { value: 2, label: "Dasar" },
  { value: 3, label: "Menengah" },
  { value: 4, label: "Mahir" },
  { value: 5, label: "Ahli" },
] as const;

/** Label untuk skala 1–5; 0/kosong berarti belum dinilai. */
export function getSkillLevelLabel(level: number): string {
  return SKILL_LEVELS.find((item) => item.value === level)?.label ?? "Belum dinilai";
}
