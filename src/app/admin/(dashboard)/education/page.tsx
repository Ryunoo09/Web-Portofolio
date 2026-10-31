import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdminPage } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { EducationTable } from "@/features/education/admin";
import { getAllEducation } from "@/features/education";

export default async function AdminEducationPage() {
  await requireAdminPage();

  const educationList = await getAllEducation();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Pendidikan"
        description={`${educationList.length} riwayat pendidikan · tampil di halaman /about`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.education}/new`}>
              <Plus className="size-4" />
              Pendidikan Baru
            </Link>
          </Button>
        }
      />

      <EducationTable data={educationList} />
    </main>
  );
}
