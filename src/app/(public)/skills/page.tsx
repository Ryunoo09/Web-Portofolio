import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { getSkills, SkillsGrid } from "@/features/skills";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Keahlian & Penguasaan Teknologi",
  description:
    "Daftar kemampuan teknis meliputi Frontend (Next.js, React), Backend (Node.js, Python), Basis Data, dan DevOps.",
  path: "/skills",
});

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <PageContainer className="space-y-10 py-12 md:py-16">
      <SectionHeading
        as="h1"
        badge="Kompetensi Teknis"
        title="Keahlian &amp;"
        highlight="Penguasaan Teknologi"
        description="Teknologi dan tools yang saya gunakan sehari-hari untuk merancang arsitektur aplikasi tangguh dan scalable."
      />

      <SkillsGrid skills={skills} />
    </PageContainer>
  );
}
