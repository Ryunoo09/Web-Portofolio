"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog, StatusToggle } from "@/shared/components/admin";
import { deleteProject, toggleProjectPublish } from "../../server/actions";
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Judul</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Unggulan</TableHead>
            <TableHead>Keahlian</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((project) => <ProjectRowComponent key={project.id} project={project} />)
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-muted-foreground h-24 text-center">
                Belum ada proyek. Tambahkan proyek pertama Anda dengan tombol &quot;Proyek
                Baru&quot;.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function ProjectRowComponent({ project }: { project: ProjectRow }) {
  const editHref = `${ROUTES.admin.projects}/${project.id}/edit`;

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          title={project.title}
          className="hover:text-gold focus-visible:ring-ring block max-w-[22rem] truncate rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </TableCell>
      <TableCell>
        <StatusToggle
          id={project.id}
          name={project.title}
          isPublished={project.isPublished}
          action={toggleProjectPublish}
        />
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
      <TableCell className="bg-card sticky right-0">
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link
              href={editHref}
              className="focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
            >
              <Edit className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Ubah proyek {project.title}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Proyek"
            itemName={project.title}
            ariaLabel={`Hapus proyek ${project.title}`}
            successMessage="Proyek dihapus."
            description="Gambar cover dan galeri proyek ini juga dihapus dari penyimpanan."
            onConfirm={() => deleteProject(project.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
