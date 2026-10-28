import { AdminPageHeader } from "@/shared/components/admin";
import { EducationForm } from "@/features/education/admin";

export default function AdminEducationNewPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Pendidikan Baru"
        description="Riwayat berstatus terbit langsung tampil di halaman /about."
      />
      <EducationForm />
    </main>
  );
}
