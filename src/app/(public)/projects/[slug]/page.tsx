import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { getProjectBySlug, getPublishedProjects, ProjectDetail } from "@/features/projects";

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

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer size="narrow" className="py-12 md:py-16">
      <ProjectDetail project={project} />
    </PageContainer>
  );
}
