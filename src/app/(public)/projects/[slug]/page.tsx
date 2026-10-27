import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageContainer } from "@/shared/components";
import {
  getProjectBySlug,
  getPublishedProjects,
  ProjectDetail,
  projectMetadata,
  ProjectJsonLd,
} from "@/features/projects";

export const revalidate = 3600;

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return projectMetadata(project);
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer size="narrow" className="space-y-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Proyek", href: "/projects" },
          { label: project.title },
        ]}
      />
      <ProjectDetail project={project} />
      <ProjectJsonLd project={project} />
    </PageContainer>
  );
}
