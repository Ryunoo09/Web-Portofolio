"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog } from "@/shared/components";
import { deleteEducation } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { formatPeriod } from "@/shared/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import type { Education } from "../../types";

interface EducationTableProps {
  data: Education[];
}

export function EducationTable({ data }: EducationTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Jenjang</TableHead>
            <TableHead>Bidang</TableHead>
            <TableHead>Periode</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((education) => <EducationRow key={education.id} education={education} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada pendidikan. Tambahkan riwayat pendidikan pertama Anda.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function EducationRow({ education }: { education: Education }) {
  const editHref = `${ROUTES.admin.education}/${education.id}/edit`;
  const period =
    education.startedAt || education.endedAt
      ? formatPeriod(education.startedAt, education.endedAt)
      : "—";

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          className="hover:text-gold focus-visible:ring-ring block rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {education.degree}
        </Link>
        <span className="text-muted-foreground text-xs">{education.institution}</span>
      </TableCell>
      <TableCell className="text-muted-foreground text-xs">{education.field ?? "—"}</TableCell>
      <TableCell className="font-mono text-xs">{period}</TableCell>
      <TableCell className="font-mono text-xs">{education.sortOrder}</TableCell>
      <TableCell>
        {education.isPublished ? (
          <Badge variant="default" className="bg-green-600 text-xs">
            Terbit
          </Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">
            Draf
          </Badge>
        )}
      </TableCell>
      <TableCell className="bg-card sticky right-0">
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link
              href={editHref}
              className="focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
            >
              <Edit className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Ubah pendidikan {education.degree}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Pendidikan"
            itemName={`${education.degree} di ${education.institution}`}
            ariaLabel={`Hapus pendidikan ${education.degree}`}
            successMessage="Pendidikan dihapus."
            onConfirm={() => deleteEducation(education.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
