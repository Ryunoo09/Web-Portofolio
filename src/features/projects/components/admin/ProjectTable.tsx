"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { DeleteProjectDialog } from "./DeleteProjectDialog";
import { ROUTES } from "@/shared/constants/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export type ProjectRow = {
  id: string;
  title: string;
  slug: string;
  isPublished: boolean;
  isFeatured: boolean;
  skills: { id: string; name: string }[];
  createdAt: string;
};

interface ProjectTableProps {
  data: ProjectRow[];
}

export function ProjectTable({ data }: ProjectTableProps) {
  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Unggulan</TableHead>
              <TableHead>Keahlian</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((project) => <ProjectRowComponent key={project.id} project={project} />)
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground h-24 text-center">
                  Belum ada proyek.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function ProjectRowComponent({ project }: { project: ProjectRow }) {
  return (
    <TableRow>
      <TableCell>
        <Link
          href={`${ROUTES.admin.projects}/${project.id}/edit`}
          className="hover:text-gold font-medium transition-colors"
        >
          {project.title}
        </Link>
      </TableCell>
      <TableCell>
        {project.isPublished ? (
          <Badge variant="default" className="bg-green-600 text-xs">
            Terbit
          </Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">
            Draf
          </Badge>
        )}
      </TableCell>
      <TableCell>
        {project.isFeatured ? (
          <Badge variant="outline" className="border-gold/30 text-gold text-xs">
            Unggulan
          </Badge>
        ) : (
          <span className="text-muted-foreground text-xs">—</span>
        )}
      </TableCell>
      <TableCell>
        <div className="flex max-w-48 flex-wrap gap-1">
          {project.skills.slice(0, 3).map((s) => (
            <Badge key={s.id} variant="secondary" className="text-xs">
              {s.name}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <span className="text-muted-foreground text-xs">+{project.skills.length - 3}</span>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href={`${ROUTES.admin.projects}/${project.id}/edit`}>
              <Edit className="size-3.5" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <DeleteProjectDialog project={project} />
        </div>
      </TableCell>
    </TableRow>
  );
}
