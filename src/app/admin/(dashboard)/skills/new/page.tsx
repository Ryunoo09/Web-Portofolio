import { AdminPageHeader } from "@/shared/components";
import { SkillForm } from "@/features/skills/components/admin/SkillForm";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminSkillNewPage() {
  const skills = await getAllSkills();
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Keahlian Baru"
        description="Keahlian yang dibuat langsung tersedia sebagai pilihan di form proyek."
      />
      <SkillForm categories={categories} />
    </main>
  );
}
