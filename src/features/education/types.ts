export type EducationImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field: string | null;
  description: string | null;
  startedAt: string | null;
  endedAt: string | null;
  sortOrder: number;
  isPublished: boolean;
  images: EducationImage[];
};
