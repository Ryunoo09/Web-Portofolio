export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  descriptionHtml: string | null;
  coverImageUrl: string | null;
  coverImageAlt: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  skills: { id: string; name: string }[];
  updatedAt: string;
};
