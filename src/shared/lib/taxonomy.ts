/** Taksonomi domain proyek: satu domain utama per proyek, sisanya jadi tag. */
export const PROJECT_DOMAINS = [
  "backend-system",
  "data-big-data",
  "computer-vision",
  "applied-ai",
  "automation",
  "iot",
] as const;

export type ProjectDomain = (typeof PROJECT_DOMAINS)[number];

export const PROJECT_DOMAIN_LABELS: Record<ProjectDomain, string> = {
  "backend-system": "Backend & API",
  "data-big-data": "Data & Big Data",
  "computer-vision": "Computer Vision",
  "applied-ai": "Applied AI",
  automation: "Automation",
  iot: "IoT",
};

export const PROJECT_DOMAIN_OPTIONS = PROJECT_DOMAINS.map((value) => ({
  value,
  label: PROJECT_DOMAIN_LABELS[value],
}));

/** Fallback untuk baris lama/baru yang kolom `domain`-nya masih null. */
const DOMAIN_BY_SLUG: Record<string, ProjectDomain> = {
  "validasi-ftth-yolo26-paddleocr": "computer-vision",
  "analisis-prediktif-kualitas-air": "data-big-data",
  sirata: "backend-system",
  campevent: "backend-system",
  "soil-ai": "iot",
  "dse-ai": "applied-ai",
  "elang-hub": "backend-system",
  aifi: "backend-system",
  "chatbot-report-automation": "automation",
};

export function isProjectDomain(value: string | null | undefined): value is ProjectDomain {
  return value !== null && value !== undefined && PROJECT_DOMAINS.includes(value as ProjectDomain);
}

/** Domain tersimpan menang; jika null/tidak dikenal, pakai peta slug. */
export function resolveProjectDomain(slug: string, stored?: string | null): ProjectDomain | null {
  if (isProjectDomain(stored)) return stored;
  return DOMAIN_BY_SLUG[slug] ?? null;
}

export function getProjectDomainLabel(domain: string | null | undefined): string | null {
  return isProjectDomain(domain) ? PROJECT_DOMAIN_LABELS[domain] : null;
}
