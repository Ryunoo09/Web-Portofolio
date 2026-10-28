import { AdminPageHeader } from "@/shared/components/admin";
import { CertificateForm } from "@/features/certificates/admin";

export default function AdminCertificateNewPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Sertifikat Baru"
        description="Sertifikat berstatus terbit langsung tampil di halaman /about."
      />
      <CertificateForm />
    </main>
  );
}
