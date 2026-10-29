import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { SkillTable } from "@/features/skills/components/admin/SkillTable";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminSkillsPage() {
  const skills = await getAllSkills();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Keahlian"
        description={`${skills.length} keahlian · dipakai sebagai filter proyek dan daftar di /skills`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.skills}/new`}>
              <Plus className="size-4" />
              Keahlian Baru
            </Link>
          </Button>
        }
      />

      <SkillTable data={skills} />
    </main>
  );
}
