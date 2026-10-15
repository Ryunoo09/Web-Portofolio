import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground font-heading text-2xl font-bold">Kelola Proyek</h1>
          <p className="text-muted-foreground text-sm">{projects.length} proyek</p>
        </div>
        <Button asChild>
          <Link href={ROUTES.admin.projects + "/new"}>
            <Plus className="size-4" />
            Proyek Baru
          </Link>
        </Button>
      </div>

      <ProjectTable data={rows} />
    </main>
  );
}
