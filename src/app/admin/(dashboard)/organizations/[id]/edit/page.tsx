import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/shared/components/admin";
import { OrganizationForm } from "@/features/organizations/admin";
import { getAllOrganizations } from "@/features/organizations";

export default async function AdminOrganizationsEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const organizations = await getAllOrganizations();
  const organization = organizations.find((item) => item.id === id);

  if (!organization) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Organisasi" description={organization.name} />
      <OrganizationForm organization={organization} />
    </main>
  );
}
