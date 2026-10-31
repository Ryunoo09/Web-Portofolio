import { notFound } from "next/navigation";
import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader } from "@/shared/components/admin";
import { EducationForm } from "@/features/education/admin";
import { getAllEducation } from "@/features/education";

export default async function AdminEducationEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminPage();

  const educationList = await getAllEducation();
  const education = educationList.find((item) => item.id === id);

  if (!education) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Pendidikan" description={education.degree} />
      <EducationForm education={education} />
    </main>
  );
}
