"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog, StatusToggle } from "@/shared/components";
import { deleteExperience, toggleExperiencePublish } from "../../server/actions";
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
import type { Experience } from "../../types";

interface ExperienceTableProps {
  data: Experience[];
}

export function ExperienceTable({ data }: ExperienceTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Posisi</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Periode</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((experience) => <ExperienceRow key={experience.id} experience={experience} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada pengalaman. Tambahkan riwayat kerja pertama Anda.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function ExperienceRow({ experience }: { experience: Experience }) {
  const editHref = `${ROUTES.admin.experiences}/${experience.id}/edit`;
  const period =
    experience.startedAt || experience.endedAt
      ? formatPeriod(experience.startedAt, experience.endedAt)
      : "—";

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          title={experience.role}
          className="hover:text-gold focus-visible:ring-ring block max-w-[22rem] truncate rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {experience.role}
        </Link>
        <span className="text-muted-foreground text-xs">{experience.company}</span>
      </TableCell>
      <TableCell className="text-muted-foreground text-xs">{experience.location ?? "—"}</TableCell>
      <TableCell className="font-mono text-xs">{period}</TableCell>
      <TableCell className="font-mono text-xs">{experience.sortOrder}</TableCell>
      <TableCell>
        <StatusToggle
          id={experience.id}
          name={experience.role}
          isPublished={experience.isPublished}
          action={toggleExperiencePublish}
        />
      </TableCell>
      <TableCell className="bg-card sticky right-0">
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link
              href={editHref}
              className="focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
            >
              <Edit className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Ubah pengalaman {experience.role}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Pengalaman"
            itemName={`${experience.role} di ${experience.company}`}
            ariaLabel={`Hapus pengalaman ${experience.role}`}
            successMessage="Pengalaman dihapus."
            onConfirm={() => deleteExperience(experience.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
