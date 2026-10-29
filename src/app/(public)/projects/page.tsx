import { Suspense } from "react";
import type { Metadata } from "next";
import { JsonLd, PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { collectionPageNode } from "@/shared/lib/seo/structured-data";
import { isProjectDomain, resolveProjectType } from "@/shared/lib/taxonomy";
import { getPublishedProjects, ProjectExplorer } from "@/features/projects";

type ProjectsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined): string | null {
  return typeof value === "string" ? value : null;
}

function hasActiveFilter(params: Record<string, string | string[] | undefined>): boolean {
  return (
    isProjectDomain(firstParam(params.domain)) ||
    resolveProjectType(firstParam(params.type)) !== null
  );
}

/** URL filter (`?domain=`/`?type=`) tetap bisa dibuka langsung tapi tidak diindeks. */
export async function generateMetadata({ searchParams }: ProjectsPageProps): Promise<Metadata> {
  const params = await searchParams;

  return buildMetadata({
    title: "Proyek Backend, Data & Computer Vision — Rakha",
    description:
      "Sembilan studi kasus backend, data, computer vision, dan otomasi: FTTH, DSE AI, SIRATA, big data kualitas air, dan lainnya.",
    path: "/projects",
    ...(hasActiveFilter(params) ? { robots: { index: false, follow: true } } : {}),
  });
}

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <PageContainer className="space-y-8 py-8 md:py-12">
      <JsonLd
        id="projects-jsonld"
        data={collectionPageNode({
          name: "Karya & Proyek",
          path: "/projects",
          items: projects.map((project) => ({
            name: project.title,
            path: `/projects/${project.slug}`,
          })),
        })}
      />

      <SectionIntro
        as="h1"
        title="Karya & Proyek"
        description="Semua sistem yang saya bangun — dari computer vision dan data hingga backend yang dipakai tim sales."
      />

      {/* `useSearchParams` wajib punya Suspense di server page. */}
      <Suspense fallback={null}>
        <ProjectExplorer projects={projects} />
      </Suspense>
    </PageContainer>
  );
}
