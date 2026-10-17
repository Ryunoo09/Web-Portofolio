"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { DeleteSkillDialog } from "./DeleteSkillDialog";
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
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((skill) => <SkillRowComponent key={skill.id} skill={skill} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada keahlian.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function SkillRowComponent({ skill }: { skill: Skill }) {
  return (
    <TableRow>
      <TableCell>
        <Link
          href={`${ROUTES.admin.skills}/${skill.id}/edit`}
          className="hover:text-gold font-medium transition-colors"
        >
          {skill.name}
        </Link>
      </TableCell>
      <TableCell>
        <Badge variant="secondary" className="text-xs">
          {skill.category}
        </Badge>
      </TableCell>
      <TableCell className="font-mono text-xs">{skill.level}/5</TableCell>
      <TableCell className="font-mono text-xs">{skill.sortOrder}</TableCell>
      <TableCell>
        {skill.isPublished ? (
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
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href={`${ROUTES.admin.skills}/${skill.id}/edit`}>
              <Edit className="size-3.5" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <DeleteSkillDialog skill={skill} />
        </div>
      </TableCell>
    </TableRow>
  );
}
