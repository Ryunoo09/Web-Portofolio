import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { ProjectTable } from "@/features/projects/components/admin/ProjectTable";
import { getAllProjects } from "@/features/projects/server/queries";
import type { ProjectRow } from "@/features/projects/components/admin/ProjectTable";

export default async function AdminProjectsPage() {
  const projects = await getAllProjects();

  const rows: ProjectRow[] = projects.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    isPublished: p.isPublished,
    isFeatured: p.isFeatured,
    skills: p.skills,
    createdAt: p.createdAt,
  }));

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Proyek"
        description={`${projects.length} proyek`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.projects}/new`}>
              <Plus className="size-4" />
              Proyek Baru
            </Link>
          </Button>
        }
      />

      <ProjectTable data={rows} />
    </main>
  );
}
