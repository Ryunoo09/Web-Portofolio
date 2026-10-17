import { notFound } from "next/navigation";
import { SkillForm } from "@/features/skills/components/admin/SkillForm";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminSkillEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const skills = await getAllSkills();
  const skill = skills.find((item) => item.id === id);

  if (!skill) notFound();

  const categories = [...new Set(skills.map((item) => item.category))];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-foreground font-heading text-2xl font-bold">Ubah Keahlian</h1>
        <p className="text-muted-foreground text-sm">{skill.name}</p>
      </div>
      <SkillForm skill={skill} categories={categories} />
    </main>
  );
}
