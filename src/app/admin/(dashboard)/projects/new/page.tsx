import { AdminPageHeader } from "@/shared/components/admin";
import { ProjectForm } from "@/features/projects/components/admin/ProjectForm";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminProjectNewPage() {
  const skills = await getAllSkills();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Proyek Baru" description="Buat proyek portofolio baru." />
      <ProjectForm skills={skills} />
    </main>
  );
}
