import { SkillForm } from "@/features/skills/components/admin/SkillForm";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminSkillNewPage() {
  const skills = await getAllSkills();
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-foreground font-heading text-2xl font-bold">Keahlian Baru</h1>
        <p className="text-muted-foreground text-sm">
          Keahlian yang dibuat langsung tersedia sebagai pilihan di form proyek.
        </p>
      </div>
      <SkillForm categories={categories} />
    </main>
  );
}
