import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { CapabilityBoard, getLearningSkills, getSkills } from "@/features/skills";
import { getProfile } from "@/features/profile";
import { getPublishedProjects } from "@/features/projects";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Keahlian",
  description:
    "Keahlian teknis yang dipakai di proyek nyata: backend, data, computer vision, dan otomasi — setiap klaim diarahkan ke studi kasus.",
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
