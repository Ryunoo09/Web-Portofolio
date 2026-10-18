import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { Badge } from "@/shared/components/ui/badge";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { getLearningSkills, getSkills, SkillsGrid } from "@/features/skills";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Keahlian & Penguasaan Teknologi",
  description:
    "Daftar kemampuan teknis: bahasa pemrograman, framework, basis data, cloud/DevOps, IoT, serta data & machine learning.",
  path: "/skills",
});

export default async function SkillsPage() {
  const [skills, learningSkills] = await Promise.all([getSkills(), getLearningSkills()]);

  return (
    <PageContainer className="space-y-12 py-8 md:py-12">
      <SectionHeading
        as="h1"
        badge="Kompetensi Teknis"
        title="Keahlian &amp;"
        highlight="Penguasaan Teknologi"
        description="Teknologi dan tools yang saya pakai untuk membangun backend, mengolah data, dan mengembangkan solusi IoT."
      />

      <SkillsGrid skills={skills} />

      {learningSkills.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-foreground font-heading text-2xl font-bold">Sedang Dipelajari</h2>
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
            Teknologi yang sedang saya pelajari dan belum saya cantumkan sebagai keahlian utama.
          </p>
          <ul className="flex flex-wrap gap-2">
            {learningSkills.map((skill) => (
              <li key={skill.id}>
                <Badge variant="outline" className="border-border/80 text-muted-foreground text-xs">
                  {skill.name}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageContainer>
  );
}
