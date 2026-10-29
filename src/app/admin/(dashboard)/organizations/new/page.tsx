import { AdminPageHeader } from "@/shared/components/admin";
import { OrganizationForm } from "@/features/organizations/admin";

export default function AdminOrganizationsNewPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Organisasi Baru"
        description="Organisasi berstatus terbit langsung tampil di halaman /about."
      />
      <OrganizationForm />
    </main>
  );
}
