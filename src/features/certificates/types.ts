export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description: string | null;
  issuedAt: string | null;
  credentialUrl: string | null;
  imageUrl: string | null;
  sortOrder: number;
  isPublished: boolean;
};
