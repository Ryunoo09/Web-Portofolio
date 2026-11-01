import { notFound } from "next/navigation";
import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader, GalleryManager } from "@/shared/components/admin";
import { EducationForm } from "@/features/education/admin";
import {
  createEducationImage,
  deleteEducationImage,
  getAllEducation,
  updateEducationImage,
  uploadEducationImage,
} from "@/features/education";

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
      <GalleryManager
        title="Foto Pendidikan"
        hint="Tambahkan foto kampus, kegiatan, atau momen studi. Isi teks alternatif agar gambar terbaca screen reader."
        emptyText="Belum ada foto. Tambahkan foto pertama Anda."
        parentId={education.id}
        images={education.images}
        upload={uploadEducationImage}
        create={createEducationImage}
        update={updateEducationImage}
        remove={deleteEducationImage}
      />
    </main>
  );
}
