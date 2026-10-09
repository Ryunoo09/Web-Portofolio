export type SkillCategory = "Frontend" | "Backend" | "Database & Cloud" | "DevOps & Tools";

export type SkillProficiency = "Advanced" | "Proficient" | "Familiar";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
  level: number;
  iconName: string;
  description: string;
  featured: boolean;
};
