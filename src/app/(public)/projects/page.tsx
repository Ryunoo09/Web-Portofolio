import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { getPublishedProjects, ProjectGrid } from "@/features/projects";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Daftar Proyek & Karya",
  description:
    "Eksplorasi proyek perangkat lunak — computer vision, analitik data, IoT, dan backend yang dipakai di lapangan.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <PageContainer className="space-y-8 py-8 md:py-12">
      <SectionHeading
        as="h1"
        badge="Portofolio Rekayasa"
        title="Daftar"
        highlight="Karya & Proyek"
        description="Semua proyek yang saya kerjakan — dari tugas kuliah dan skripsi hingga freelance untuk tim sales lapangan."
      />

      <ProjectGrid projects={projects} />
    </PageContainer>
  );
}
