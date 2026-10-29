import { AdminPageHeader } from "@/shared/components/admin";
import { ExperienceForm } from "@/features/experiences/admin";

export default function AdminExperienceNewPage() {
  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Pengalaman Baru"
        description="Pengalaman berstatus terbit langsung tampil di halaman /about."
      />
      <ExperienceForm />
    </main>
  );
}
