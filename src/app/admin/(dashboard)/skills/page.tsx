import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/components/ui/button";
import { SkillTable } from "@/features/skills/components/admin/SkillTable";
import { getAllSkills } from "@/features/skills/server/queries";

export default async function AdminSkillsPage() {
  const skills = await getAllSkills();

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground font-heading text-2xl font-bold">Kelola Keahlian</h1>
          <p className="text-muted-foreground text-sm">
            {skills.length} keahlian · dipakai sebagai filter proyek dan daftar di /skills
          </p>
        </div>
        <Button asChild>
          <Link href={ROUTES.admin.skills + "/new"}>
            <Plus className="size-4" />
            Keahlian Baru
          </Link>
        </Button>
      </div>

      <SkillTable data={skills} />
    </main>
  );
}
