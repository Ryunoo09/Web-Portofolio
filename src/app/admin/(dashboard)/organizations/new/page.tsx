import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader } from "@/shared/components/admin";
import { OrganizationForm } from "@/features/organizations/admin";

export default async function AdminOrganizationsNewPage() {
  await requireAdminPage();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Organisasi Baru"
        description="Organisasi berstatus terbit langsung tampil di halaman /about. Simpan dulu, lalu unggah foto di halaman ubah."
      />
      <OrganizationForm />
    </main>
  );
}
