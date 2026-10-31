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
      <p className="text-muted-foreground max-w-xl text-sm">
        Simpan pengalaman dulu, lalu tambah dokumentasi di halaman ubah.
      </p>
    </main>
  );
}
