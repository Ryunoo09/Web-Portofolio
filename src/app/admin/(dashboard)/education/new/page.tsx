import { AdminPageHeader } from "@/shared/components";
import { EducationForm } from "@/features/education";

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
