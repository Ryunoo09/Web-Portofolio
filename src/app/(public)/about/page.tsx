import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { JsonLd, PageContainer, SectionIntro } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import { aboutPageNode } from "@/shared/lib/seo/structured-data";
import { siteConfig } from "@/shared/constants/siteConfig";
import { formatPeriod } from "@/shared/lib/utils";
import {
  AboutProof,
  CredentialRow,
  ExperienceTimeline,
  Principles,
  getCertificates,
  getEducation,
  getExperiences,
  getProfile,
} from "@/features/profile";
import { getPublishedOrganizations } from "@/features/organizations";
import { LanguageList, getPublishedLanguages } from "@/features/languages";
import { getPublishedProjects } from "@/features/projects";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Tentang Rakha — Backend & Data Engineer",
  description:
    "Pengalaman backend di Indosat Ooredoo Hutchison, pendidikan Teknologi Rekayasa Komputer, dan cara kerja Rakha Yuda Wicaksono.",
  path: "/about",
});

export default async function AboutPage() {
  const [profile, experiences, educationList, certificates, organizations, languages, projects] =
    await Promise.all([
      getProfile(),
      getExperiences(),
      getEducation(),
      getCertificates(),
      getPublishedOrganizations(),
      getPublishedLanguages(),
      getPublishedProjects(),
    ]);

  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";
  const name = profile?.fullName ?? siteConfig.name;
  const role = profile?.headline ?? siteConfig.role;

  // Angka dari data + metrik terkurasi; fakta nol tidak ditampilkan.
  const facts = [
    { value: String(projects.length), label: "studi kasus" },
    ...siteConfig.metrics
      .slice(0, 2)
      .map((metric) => ({ value: metric.value, label: metric.label })),
  ].filter((fact) => fact.value !== "0");

  return (
    <PageContainer className="space-y-12 py-8 md:py-12">
      <JsonLd
        id="about-jsonld"
        data={aboutPageNode({
          alumniOf: [...new Set(educationList.map((education) => education.institution))],
          worksFor: [...new Set(experiences.map((experience) => experience.company))],
          knowsLanguage: languages.map((language) => language.name),
        })}
      />

      <header className="space-y-4">
        <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
          {siteConfig.location} · {siteConfig.availability}
        </p>
        <SectionIntro
          as="h1"
          title="Tentang Rakha"
          description="Backend & Data Engineer yang membangun sistem sampai dipakai."
        />
      </header>

      <AboutProof
        bio={profile?.bio ?? null}
        facts={facts}
        avatarUrl={profile?.avatarUrl ?? null}
        name={name}
        role={role}
      />

      {experiences.length > 0 && (
        <section className="space-y-4" aria-labelledby="pengalaman-title">
          <h2
            id="pengalaman-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Pengalaman
          </h2>
          <ExperienceTimeline experiences={experiences} />
        </section>
      )}

      <section className="space-y-4" aria-labelledby="prinsip-title">
        <h2
          id="prinsip-title"
          className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Prinsip
        </h2>
        <Principles />
      </section>

      {educationList.length > 0 && (
        <section className="space-y-4" aria-labelledby="pendidikan-title">
          <h2
            id="pendidikan-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Pendidikan
          </h2>
          <ul className="border-border divide-border divide-y border-y">
            {educationList.map((education) => (
              <CredentialRow
                key={education.id}
                title={education.degree}
                subtitle={education.institution}
                meta={education.field}
                period={formatPeriod(education.startedAt, education.endedAt)}
                description={education.description}
              />
            ))}
          </ul>
        </section>
      )}

      {certificates.length > 0 && (
        <section className="space-y-4" aria-labelledby="sertifikasi-title">
          <h2
            id="sertifikasi-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Sertifikasi
          </h2>
          <ul className="border-border divide-border divide-y border-y">
            {certificates.map((certificate) => (
              <CredentialRow
                key={certificate.id}
                title={certificate.title}
                subtitle={certificate.issuer}
                period={
                  certificate.issuedAt
                    ? String(new Date(certificate.issuedAt).getUTCFullYear())
                    : null
                }
                href={certificate.credentialUrl}
                imageUrl={certificate.imageUrl}
              />
            ))}
          </ul>
        </section>
      )}

      {organizations.length > 0 && (
        <section className="space-y-4" aria-labelledby="organisasi-title">
          <h2
            id="organisasi-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Organisasi
          </h2>
          <ul className="border-border divide-border divide-y border-y">
            {organizations.map((organization) => (
              <CredentialRow
                key={organization.id}
                title={organization.name}
                subtitle={organization.role}
                meta={organization.memberCount ? `${organization.memberCount}+ anggota` : null}
                period={formatPeriod(organization.startedAt, organization.endedAt)}
                description={organization.description}
              />
            ))}
          </ul>
        </section>
      )}

      {languages.length > 0 && (
        <section className="space-y-4" aria-labelledby="bahasa-title">
          <h2
            id="bahasa-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Bahasa
          </h2>
          <LanguageList languages={languages} />
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/contact" className="flex items-center gap-2">
            <span>Hubungi saya</span>
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
