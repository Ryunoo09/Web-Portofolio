import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { JsonLd, PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { collectionPageNode } from "@/shared/lib/seo/structured-data";
import { slugify } from "@/shared/lib/utils";
import {
  CAPABILITY_GROUPS,
  CapabilityBoard,
  getLearningSkills,
  getSkills,
} from "@/features/skills";
import { getProfile } from "@/features/profile";
import { getPublishedProjects } from "@/features/projects";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Keahlian Backend, Data & AI — Rakha",
  description:
    "Python, FastAPI, Laravel, PostgreSQL, PySpark, YOLO, dan n8n — dikelompokkan berdasarkan proyek yang membuktikannya.",
  path: "/skills",
});

export default async function SkillsPage() {
  const [skills, learningSkills, projects, profile] = await Promise.all([
    getSkills(),
    getLearningSkills(),
    getPublishedProjects(),
    getProfile(),
  ]);

  const categoryCount = new Set(skills.map((skill) => skill.category)).size;
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";

  return (
    <PageContainer className="space-y-10 py-8 md:py-12">
      <JsonLd
        id="skills-jsonld"
        data={collectionPageNode({
          name: "Keahlian",
          path: "/skills",
          items: CAPABILITY_GROUPS.map((group) => ({
            name: group.title,
            path: `/skills#kemampuan-${slugify(group.title)}`,
          })),
        })}
      />

      <SectionIntro
        as="h1"
        title="Keahlian"
        description={`${skills.length} keahlian dalam ${categoryCount} kategori. Setiap klaim diarahkan ke proyek bila ada.`}
      />

      <CapabilityBoard skills={skills} learningSkills={learningSkills} projects={projects} />

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/projects" className="flex items-center gap-2">
            <span>Lihat proyek</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={resumeUrl} download className="flex items-center gap-2">
            <span>Unduh CV</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </PageContainer>
  );
}
