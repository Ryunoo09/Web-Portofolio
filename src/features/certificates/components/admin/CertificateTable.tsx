"use client";

import Link from "next/link";
import { Edit } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ConfirmDeleteDialog, StatusToggle } from "@/shared/components";
import { deleteCertificate, toggleCertificatePublish } from "../../server/actions";
import { ROUTES } from "@/shared/constants/routes";
import { formatDate } from "@/shared/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import type { Certificate } from "../../types";

interface CertificateTableProps {
  data: Certificate[];
}

export function CertificateTable({ data }: CertificateTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sertifikat</TableHead>
            <TableHead>Terbit</TableHead>
            <TableHead>Gambar</TableHead>
            <TableHead>Urutan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="bg-card sticky right-0 text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((certificate) => (
              <CertificateRow key={certificate.id} certificate={certificate} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                Belum ada sertifikat. Tambahkan kualifikasi pertama Anda.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function CertificateRow({ certificate }: { certificate: Certificate }) {
  const editHref = `${ROUTES.admin.certificates}/${certificate.id}/edit`;

  return (
    <TableRow>
      <TableCell>
        <Link
          href={editHref}
          title={certificate.title}
          className="hover:text-gold focus-visible:ring-ring block max-w-[22rem] truncate rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          {certificate.title}
        </Link>
        <span className="text-muted-foreground text-xs">{certificate.issuer}</span>
      </TableCell>
      <TableCell className="font-mono text-xs">
        {certificate.issuedAt ? formatDate(certificate.issuedAt) : "—"}
      </TableCell>
      <TableCell className="text-xs">
        {certificate.imageUrl ? (
          <a
            href={certificate.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold focus-visible:ring-ring rounded-sm underline underline-offset-4 focus-visible:ring-2 focus-visible:outline-none"
          >
            Lihat berkas
          </a>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </TableCell>
      <TableCell className="font-mono text-xs">{certificate.sortOrder}</TableCell>
      <TableCell>
        <StatusToggle
          id={certificate.id}
          name={certificate.title}
          isPublished={certificate.isPublished}
          action={toggleCertificatePublish}
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
              <span className="sr-only">Ubah sertifikat {certificate.title}</span>
            </Link>
          </Button>
          <ConfirmDeleteDialog
            title="Hapus Sertifikat"
            itemName={certificate.title}
            ariaLabel={`Hapus sertifikat ${certificate.title}`}
            successMessage="Sertifikat dihapus."
            description="Gambar sertifikat juga dihapus dari penyimpanan."
            onConfirm={() => deleteCertificate(certificate.id)}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
