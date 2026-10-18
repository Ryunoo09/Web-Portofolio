export type Skill = {
  id: string;
  name: string;
  category: string;
  level: number; // skala 1-5
  iconName: string | null;
  sortOrder: number;
  isPublished: boolean;
  isLearning: boolean;
};
