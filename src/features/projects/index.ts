// API publik fitur "projects". Kode di luar fitur hanya boleh mengimpor dari sini.
export { getPublishedProjects, getProjectBySlug, countProjects } from "./server/queries";
export {
  HOME_CASE_SLUGS,
  HOME_TICKER_ITEMS,
  PROOF_PROJECT_SLUG,
  pickProjectsBySlug,
  getProjectShortLabel,
} from "./home";
export { ProjectGrid } from "./components/public/ProjectGrid";
export { ProjectCard } from "./components/public/ProjectCard";
export { ProjectDetail } from "./components/public/ProjectDetail";
export { ProjectGallery } from "./components/public/ProjectGallery";
export { TechStackList } from "./components/public/TechStackList";
export { CaseCard } from "./components/public/CaseCard";
export { FeaturedWork } from "./components/public/FeaturedWork";
export { ProofStrip } from "./components/public/ProofStrip";
export { Capabilities } from "./components/public/Capabilities";
export { SignalTicker } from "./components/public/SignalTicker";
export { ProjectTable } from "./components/admin/ProjectTable";
export { ProjectForm } from "./components/admin/ProjectForm";
export { ProjectGalleryManager } from "./components/admin/ProjectGalleryManager";
export { projectMetadata, ProjectJsonLd } from "./seo";
export type { ProjectDomain } from "@/shared/lib/taxonomy";
export type { Project, ProjectImage } from "./types";
