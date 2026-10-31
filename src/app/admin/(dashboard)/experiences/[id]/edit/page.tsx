import { notFound } from "next/navigation";
import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader } from "@/shared/components/admin";
import { ExperienceForm, ExperienceGalleryManager } from "@/features/experiences/admin";
import { getAllExperiences } from "@/features/experiences";

export default async function AdminExperienceEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminPage();

  const experiences = await getAllExperiences();
  const experience = experiences.find((item) => item.id === id);

  if (!experience) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Pengalaman" description={experience.role} />
      <ExperienceForm experience={experience} />
      <ExperienceGalleryManager experienceId={experience.id} images={experience.images} />
    </main>
  );
}
