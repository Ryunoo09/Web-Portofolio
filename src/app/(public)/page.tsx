import type { Metadata } from "next";
import { JsonLd, PageContainer } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import {
  jsonLdGraph,
  personNode,
  profilePageNode,
  webSiteNode,
} from "@/shared/lib/seo/structured-data";
import { AboutStrip, ContactCta, Hero, getProfile } from "@/features/profile";
import {
  Capabilities,
  FeaturedWork,
  HOME_CASE_SLUGS,
  HOME_TICKER_ITEMS,
  PROOF_PROJECT_SLUG,
  ProofStrip,
  SignalTicker,
  getProjectShortLabel,
  getPublishedProjects,
  pickProjectsBySlug,
} from "@/features/projects";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Rakha Yuda Wicaksono — Software Engineer & Data Engineer",
  description:
    "Portofolio Rakha Yuda Wicaksono, Software Engineer & Data Engineer di Brebes. Python, FastAPI, PostgreSQL, pipeline data, dan computer vision untuk proses yang lebih cepat.",
  path: "/",
});

export default async function HomePage() {
  const [profile, projects] = await Promise.all([getProfile(), getPublishedProjects()]);

  const caseProjects = pickProjectsBySlug(projects, HOME_CASE_SLUGS);
  const proofProject = pickProjectsBySlug(projects, [PROOF_PROJECT_SLUG])[0] ?? null;
  const latestProject = caseProjects[0] ?? projects[0] ?? null;
  const latestSignalProject = latestProject
    ? {
        slug: latestProject.slug,
        title: getProjectShortLabel(latestProject.slug, latestProject.title),
      }
    : null;
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";

  const publishedSlugs = new Set(projects.map((project) => project.slug));
  const tickerItems = HOME_TICKER_ITEMS.flatMap(({ slug, label, detail }) =>
    publishedSlugs.has(slug) ? [{ href: `/projects/${slug}`, label, detail }] : [],
  );

  return (
    <PageContainer className="pb-16 md:pb-24">
      <JsonLd
        id="home-jsonld"
        data={jsonLdGraph([webSiteNode(), personNode(), profilePageNode()])}
      />

      <Hero profile={profile} latestProject={latestSignalProject} />

      <SignalTicker items={tickerItems} />

      <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
        <FeaturedWork projects={caseProjects} />
        <ProofStrip project={proofProject} />
        <Capabilities projects={projects} />
        <AboutStrip />
        <ContactCta resumeUrl={resumeUrl} />
      </div>
    </PageContainer>
  );
}
