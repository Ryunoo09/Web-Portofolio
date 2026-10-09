import { DUMMY_SKILLS, type SkillItem } from "@/shared/constants/dummyData";

export async function getSkills(): Promise<SkillItem[]> {
  return DUMMY_SKILLS;
}

export async function getFeaturedSkills(): Promise<SkillItem[]> {
  return DUMMY_SKILLS.filter((s) => s.featured);
}
