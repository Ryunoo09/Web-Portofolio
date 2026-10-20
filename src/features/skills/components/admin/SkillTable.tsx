"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog, StatusToggle } from "@/shared/components";
import { deleteSkill, toggleSkillPublish } from "../../server/actions";
import { getSkillLevelLabel } from "../../levels";
import { ROUTES } from "@/shared/constants/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import type { Skill } from "../../types";

interface SkillTableProps {
  data: Skill[];
}

export function SkillTable({ data }: SkillTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Tingkat</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((skill) => <SkillRowComponent key={skill.id} skill={skill} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada keahlian. Tambahkan keahlian pertama Anda dengan tombol &quot;Keahlian
                Baru&quot;.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function SkillRowComponent({ skill }: { skill: Skill }) {
  const editHref = `${ROUTES.admin.skills}/${skill.id}/edit`;

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          title={skill.name}
          className="hover:text-gold focus-visible:ring-ring block max-w-[22rem] truncate rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {skill.name}
        </Link>
      </TableCell>
      <TableCell>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary" className="text-xs">
            {skill.category}
          </Badge>
          {skill.isLearning && (
            <Badge variant="outline" className="border-gold/30 text-gold text-xs">
              Dipelajari
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell className="font-mono text-xs">
        {skill.level}/5 · {getSkillLevelLabel(skill.level)}
      </TableCell>
      <TableCell className="font-mono text-xs">{skill.sortOrder}</TableCell>
      <TableCell>
        <StatusToggle
          id={skill.id}
          name={skill.name}
          isPublished={skill.isPublished}
          action={toggleSkillPublish}
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
              <span className="sr-only">Ubah keahlian {skill.name}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Keahlian"
            itemName={skill.name}
            ariaLabel={`Hapus keahlian ${skill.name}`}
            successMessage="Keahlian dihapus."
            description="Keahlian ini juga akan dilepas dari semua proyek yang memakainya."
            onConfirm={() => deleteSkill(skill.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
