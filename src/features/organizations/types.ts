export type OrganizationImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
};

export type Organization = {
  id: string;
  name: string;
  role: string;
  description: string | null;
  startedAt: string | null;
  endedAt: string | null;
  memberCount: number | null;
  sortOrder: number;
  isPublished: boolean;
  images: OrganizationImage[];
};
