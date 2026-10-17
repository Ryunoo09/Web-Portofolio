export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string | null;
  credentialUrl: string | null;
  imageUrl: string | null;
  sortOrder: number;
  isPublished: boolean;
};
