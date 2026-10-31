import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdminPage } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { OrganizationTable } from "@/features/organizations/admin";
import { getAllOrganizations } from "@/features/organizations";

export default async function AdminOrganizationsPage() {
  await requireAdminPage();

  const organizations = await getAllOrganizations();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Organisasi"
        description={`${organizations.length} organisasi · tampil di halaman /about`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.organizations}/new`}>
              <Plus className="size-4" />
              Organisasi Baru
            </Link>
          </Button>
        }
      />

      <OrganizationTable data={organizations} />
    </main>
  );
}
