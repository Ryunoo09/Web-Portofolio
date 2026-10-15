import { notFound } from "next/navigation";
import { getProjectById } from "@/features/projects/server/queries";
import { ProjectForm } from "@/features/projects/components/admin/ProjectForm";
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
    <main className="space-y-6">
      <div>
        <h1 className="text-foreground font-heading text-2xl font-bold">Ubah Proyek</h1>
        <p className="text-muted-foreground text-sm">{project.title}</p>
      </div>
      <ProjectForm
        project={{
          id: project.id,
          title: project.title,
          slug: project.slug,
          summary: project.summary,
          descriptionHtml: project.descriptionHtml,
          repoUrl: project.repoUrl,
          demoUrl: project.demoUrl,
          isFeatured: project.isFeatured,
          isPublished: project.isPublished,
          skillIds: project.skills.map((s) => s.id),
        }}
        skills={skills}
      />
    </main>
  );
}
