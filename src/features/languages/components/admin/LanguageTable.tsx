"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog } from "@/shared/components";
import { deleteLanguage } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import type { Language } from "../../types";

interface LanguageTableProps {
  data: Language[];
}

export function LanguageTable({ data }: LanguageTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bahasa</TableHead>
            <TableHead>Tingkat</TableHead>
            <TableHead>Skor</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((language) => <LanguageRow key={language.id} language={language} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada bahasa. Tambahkan kemampuan bahasa pertama Anda.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function LanguageRow({ language }: { language: Language }) {
  const editHref = `${ROUTES.admin.languages}/${language.id}/edit`;

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          className="hover:text-gold focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {language.name}
        </Link>
      </TableCell>
      <TableCell className="text-muted-foreground text-xs">{language.level}</TableCell>
      <TableCell className="font-mono text-xs">{language.score ?? "—"}</TableCell>
      <TableCell className="font-mono text-xs">{language.sortOrder}</TableCell>
      <TableCell>
        {language.isPublished ? (
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
              <span className="sr-only">Ubah bahasa {language.name}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Bahasa"
            itemName={language.name}
            ariaLabel={`Hapus bahasa ${language.name}`}
            successMessage="Bahasa dihapus."
            onConfirm={() => deleteLanguage(language.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
