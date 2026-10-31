import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdminPage } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { ExperienceTable } from "@/features/experiences/admin";
import { getAllExperiences } from "@/features/experiences";

export default async function AdminExperiencesPage() {
  await requireAdminPage();

  const experiences = await getAllExperiences();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Pengalaman"
        description={`${experiences.length} pengalaman · tampil di halaman /about`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.experiences}/new`}>
              <Plus className="size-4" />
              Pengalaman Baru
            </Link>
          </Button>
        }
      />

      <ExperienceTable data={experiences} />
    </main>
  );
}
