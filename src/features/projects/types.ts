export type ProjectImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  descriptionHtml: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
  coverImageUrl: string | null;
  coverImageAlt: string | null;
  startedAt: string | null;
  endedAt: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
  sortOrder: number;
  projectType: string | null;
  role: string | null;
  teamSize: number | null;
  problem: string | null;
  solution: string | null;
  features: string[];
  outcomes: string[];
  challenges: string | null;
  isDeployed: boolean;
  skills: { id: string; name: string }[];
  images: ProjectImage[];
};
