import { notFound } from "next/navigation";
import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader, GalleryManager } from "@/shared/components/admin";
import { OrganizationForm } from "@/features/organizations/admin";
import {
  createOrganizationImage,
  deleteOrganizationImage,
  getAllOrganizations,
  updateOrganizationImage,
  uploadOrganizationImage,
} from "@/features/organizations";

export default async function AdminOrganizationsEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminPage();

  const organizations = await getAllOrganizations();
  const organization = organizations.find((item) => item.id === id);

  if (!organization) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Organisasi" description={organization.name} />
      <OrganizationForm organization={organization} />
      <GalleryManager
        title="Foto Organisasi"
        hint="Tambahkan foto kegiatan organisasi. Isi teks alternatif agar gambar terbaca screen reader."
        emptyText="Belum ada foto. Tambahkan foto pertama Anda."
        parentId={organization.id}
        images={organization.images}
        upload={uploadOrganizationImage}
        create={createOrganizationImage}
        update={updateOrganizationImage}
        remove={deleteOrganizationImage}
      />
    </main>
  );
}
