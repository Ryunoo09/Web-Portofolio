import { Suspense } from "react";
import type { Metadata } from "next";
import { PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
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
    title: "Karya & Proyek",
    description:
      "Semua sistem yang saya bangun — dari computer vision dan data hingga backend yang dipakai tim sales.",
    path: "/projects",
    ...(hasActiveFilter(params) ? { robots: { index: false, follow: true } } : {}),
  });
}

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <PageContainer className="space-y-8 py-8 md:py-12">
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
