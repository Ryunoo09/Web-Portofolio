import type { Metadata } from "next";
import { JsonLd, PageContainer } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import {
  jsonLdGraph,
  personNode,
  profilePageNode,
  webSiteNode,
} from "@/shared/lib/seo/structured-data";
import { getCertificates, getEducation, getExperiences, getProfile } from "@/features/profile";
import { getSkills } from "@/features/skills";
import { HOME_CASE_SLUGS, getPublishedProjects, pickProjectsBySlug } from "@/features/projects";
import {
  V2Navbar,
  V2Hero,
  V2About,
  V2FeaturedProjects,
  V2EducationExperience,
  V2Certificates,
  V2Contact,
  V2Footer,
} from "@/features/v2";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Rakha Yuda Wicaksono — Software Engineer & Backend Developer",
  description:
    "Portofolio V2 Rakha Yuda Wicaksono. Python, FastAPI, PostgreSQL, pipeline data, dan computer vision untuk proses yang lebih cepat.",
  path: "/v2",
});

export default async function HomePageV2() {
  const [profile, projects, skills, education, experiences, certificates] = await Promise.all([
    getProfile(),
    getPublishedProjects(),
    getSkills(),
    getEducation(),
    getExperiences(),
    getCertificates(),
  ]);

  const featuredProjects = pickProjectsBySlug(projects, HOME_CASE_SLUGS).slice(0, 4);
  const stats = {
    operationalSystems: "3+",
    predictiveAccuracy: "88,62%",
    timeCut: "10 → 2 mnt",
  };

  return (
    <PageContainer>
      <JsonLd
        id="home-v2-jsonld"
        data={jsonLdGraph([webSiteNode(), personNode(), profilePageNode()])}
      />

      <div className="pb-16 md:pb-24">
        <V2Navbar />
        <V2Hero profile={profile} stats={stats} />
        <V2About profile={profile} skills={skills} />
        <V2FeaturedProjects projects={featuredProjects} />
        <div className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-8">
            <V2EducationExperience education={education} experiences={experiences} />
          </div>
        </div>
        <V2Certificates certificates={certificates} />
        <V2Contact profile={profile} />
      </div>

      <V2Footer />
    </PageContainer>
  );
}
