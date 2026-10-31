import { requireAdminPage } from "@/features/auth";
import { AdminPageHeader } from "@/shared/components/admin";
import { LanguageForm } from "@/features/languages/admin";

export default async function AdminLanguagesNewPage() {
  await requireAdminPage();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Bahasa Baru"
        description="Bahasa berstatus terbit langsung tampil di halaman /about."
      />
      <LanguageForm />
    </main>
  );
}
