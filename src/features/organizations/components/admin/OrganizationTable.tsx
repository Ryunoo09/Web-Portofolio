"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog, StatusToggle } from "@/shared/components";
import { deleteOrganization, toggleOrganizationPublish } from "../../server/actions";
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
import type { Organization } from "../../types";

interface OrganizationTableProps {
  data: Organization[];
}

export function OrganizationTable({ data }: OrganizationTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Organisasi</TableHead>
            <TableHead>Periode</TableHead>
            <TableHead>Anggota</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((organization) => (
              <OrganizationRow key={organization.id} organization={organization} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada organisasi. Tambahkan pengalaman organisasi pertama Anda.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function OrganizationRow({ organization }: { organization: Organization }) {
  const editHref = `${ROUTES.admin.organizations}/${organization.id}/edit`;
  const period =
    organization.startedAt || organization.endedAt
      ? formatPeriod(organization.startedAt, organization.endedAt)
      : "—";

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          title={organization.name}
          className="hover:text-gold focus-visible:ring-ring block max-w-[22rem] truncate rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {organization.name}
        </Link>
        <span className="text-muted-foreground text-xs">{organization.role}</span>
      </TableCell>
      <TableCell className="font-mono text-xs">{period}</TableCell>
      <TableCell className="text-muted-foreground font-mono text-xs">
        {organization.memberCount ?? "—"}
      </TableCell>
      <TableCell className="font-mono text-xs">{organization.sortOrder}</TableCell>
      <TableCell>
        <StatusToggle
          id={organization.id}
          name={organization.name}
          isPublished={organization.isPublished}
          action={toggleOrganizationPublish}
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
              <span className="sr-only">Ubah organisasi {organization.name}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Organisasi"
            itemName={organization.name}
            ariaLabel={`Hapus organisasi ${organization.name}`}
            successMessage="Organisasi dihapus."
            onConfirm={() => deleteOrganization(organization.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
