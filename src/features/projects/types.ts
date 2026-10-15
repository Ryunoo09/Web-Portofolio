export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  descriptionHtml: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
  startedAt: string | null;
  isFeatured: boolean;
  skills: { id: string; name: string }[];
};
