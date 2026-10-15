import { ProjectForm } from "@/features/projects/components/admin/ProjectForm";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminProjectNewPage() {
  const skills = await getAllSkills();

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-foreground font-heading text-2xl font-bold">Proyek Baru</h1>
        <p className="text-muted-foreground text-sm">Buat proyek portofolio baru.</p>
      </div>
      <ProjectForm skills={skills} />
    </main>
  );
}
