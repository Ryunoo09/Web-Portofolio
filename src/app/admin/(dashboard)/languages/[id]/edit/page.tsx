import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/shared/components";
import { LanguageForm, getAllLanguages } from "@/features/languages";

export default async function AdminLanguagesEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const languages = await getAllLanguages();
  const language = languages.find((item) => item.id === id);

  if (!language) notFound();

  return (
    <main className="space-y-6">
      <AdminPageHeader title="Ubah Bahasa" description={language.name} />
      <LanguageForm language={language} />
    </main>
  );
}
