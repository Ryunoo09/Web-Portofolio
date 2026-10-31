import { notFound } from "next/navigation";
import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader } from "@/shared/components/admin";
import { CertificateForm } from "@/features/certificates/admin";
import { getAllCertificates } from "@/features/certificates";

export default async function AdminCertificateEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminPage();

  const certificates = await getAllCertificates();
  const certificate = certificates.find((item) => item.id === id);

  if (!certificate) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Sertifikat" description={certificate.title} />
      <CertificateForm certificate={certificate} />
    </main>
  );
}
