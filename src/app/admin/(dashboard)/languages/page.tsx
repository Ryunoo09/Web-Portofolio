import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdminPage } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { AdminPageHeader } from "@/shared/components/admin";
import { Button } from "@/shared/components/ui/button";
import { LanguageTable } from "@/features/languages/admin";
import { getAllLanguages } from "@/features/languages";

export default async function AdminLanguagesPage() {
  await requireAdminPage();

  const languages = await getAllLanguages();

  return (
    <main className="space-y-6">
      <AdminPageHeader
        title="Kelola Bahasa"
        description={`${languages.length} bahasa · tampil di halaman /about`}
        action={
          <Button asChild>
            <Link href={`${ROUTES.admin.languages}/new`}>
              <Plus className="size-4" />
              Bahasa Baru
            </Link>
          </Button>
        }
      />

      <LanguageTable data={languages} />
    </main>
  );
}
