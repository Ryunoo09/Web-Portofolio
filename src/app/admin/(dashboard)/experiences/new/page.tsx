import { AdminPageHeader } from "@/shared/components";
import { ExperienceForm } from "@/features/experiences";

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
