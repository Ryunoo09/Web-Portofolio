export type Experience = {
  id: string;
  company: string;
  role: string;
  description: string | null;
  location: string | null;
  startedAt: string;
  endedAt: string | null;
  sortOrder: number;
  isPublished: boolean;
};
