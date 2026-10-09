import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { getPublishedProjects, ProjectGrid } from "@/features/projects";

export const metadata: Metadata = buildMetadata({
  title: "Daftar Proyek & Karya",
  description:
    "Eksplorasi portofolio proyek perangkat lunak, sistem e-commerce, dashboard analitik, dan arsitektur web modern.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <PageContainer className="space-y-10 py-12 md:py-16">
      <SectionHeading
        badge="Portofolio Rekayasa"
        title="Daftar"
        highlight="Karya & Proyek"
        description="Semua proyek aplikasi web dan sistem perangkat lunak yang dirancang dengan dedikasi tinggi pada performa, skalabilitas, dan clean architecture."
      />

      <ProjectGrid projects={projects} />
    </PageContainer>
  );
}
