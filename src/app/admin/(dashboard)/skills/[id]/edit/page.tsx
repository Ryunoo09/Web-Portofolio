import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/shared/components";
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
      <AdminPageHeader title="Ubah Keahlian" description={skill.name} />
      <SkillForm skill={skill} categories={categories} />
    </main>
  );
}
