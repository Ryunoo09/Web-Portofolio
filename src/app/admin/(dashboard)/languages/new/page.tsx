import { AdminPageHeader } from "@/shared/components";
import { LanguageForm } from "@/features/languages";

export default function AdminLanguagesNewPage() {
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
