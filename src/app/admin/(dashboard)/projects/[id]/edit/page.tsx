import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/shared/components";
import { getProjectById } from "@/features/projects/server/queries";
import { ProjectForm } from "@/features/projects/components/admin/ProjectForm";
import { ProjectGalleryManager } from "@/features/projects/components/admin/ProjectGalleryManager";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminProjectEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [project, skills] = await Promise.all([getProjectById(id), getAllSkills()]);

  if (!project) notFound();

  return (
    <main className="space-y-10">
      <AdminPageHeader title="Ubah Proyek" description={project.title} />
      <ProjectForm project={project} skills={skills} />
      <ProjectGalleryManager projectId={project.id} images={project.images} />
    </main>
  );
}
