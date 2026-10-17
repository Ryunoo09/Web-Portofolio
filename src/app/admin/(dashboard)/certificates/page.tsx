import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { CertificateTable, getAllCertificates } from "@/features/certificates";

export default async function AdminCertificatesPage() {
  const certificates = await getAllCertificates();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Sertifikat"
        description={`${certificates.length} sertifikat · tampil di halaman /about`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.certificates}/new`}>
              <Plus className="size-4" />
              Sertifikat Baru
            </Link>
          </Button>
        }
      />

      <CertificateTable data={certificates} />
    </main>
  );
}
