import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/shared/components";
import { ExperienceForm, getAllExperiences } from "@/features/experiences";

export default async function AdminExperienceEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experiences = await getAllExperiences();
  const experience = experiences.find((item) => item.id === id);

  if (!experience) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Pengalaman" description={experience.role} />
      <ExperienceForm experience={experience} />
    </main>
  );
}
