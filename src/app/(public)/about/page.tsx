import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import {
  AboutContent,
  ExperienceTimeline,
  EducationCard,
  CertificateCard,
  getProfile,
  getExperiences,
  getEducation,
  getCertificates,
} from "@/features/profile";
import { getPublishedOrganizations, OrganizationCard } from "@/features/organizations";
import { getPublishedLanguages, LanguageList } from "@/features/languages";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Tentang Saya & Riwayat Profesional",
  description:
    "Mengenal lebih dekat latar belakang, filosofi rekayasa perangkat lunak, pengalaman kerja, dan sertifikasi keahlian.",
  path: "/about",
});

export default async function AboutPage() {
  const [profile, experiences, educationList, certificates, organizations, languages] =
    await Promise.all([
      getProfile(),
      getExperiences(),
      getEducation(),
      getCertificates(),
      getPublishedOrganizations(),
      getPublishedLanguages(),
    ]);

  return (
    <PageContainer className="space-y-12 py-8 md:py-12">
      {/* 1. Header & Bio */}
      <section>
        <SectionHeading
          as="h1"
          badge="Profil Profesional"
          title="Tentang"
          highlight="Saya & Filosofi Kerja"
          description="Latar belakang, pengalaman kerja, pendidikan, dan sertifikasi yang membentuk cara saya membangun perangkat lunak."
        />
        <AboutContent bio={profile?.bio ?? null} />
      </section>

      {/* 2. Work Experiences */}
      {experiences.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-foreground font-heading text-2xl font-bold">
            Pengalaman Kerja &amp; Kontribusi
          </h2>
          <ExperienceTimeline experiences={experiences} />
        </section>
      )}

      {/* 3. Education */}
      {educationList.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-foreground font-heading text-2xl font-bold">Pendidikan Formal</h2>
          <div className="grid grid-cols-1 gap-5">
            {educationList.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </section>
      )}

      {/* 4. Organizations */}
      {organizations.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-foreground font-heading text-2xl font-bold">
            Organisasi &amp; Kepanitiaan
          </h2>
          <div className="grid grid-cols-1 gap-5">
            {organizations.map((organization) => (
              <OrganizationCard key={organization.id} organization={organization} />
            ))}
          </div>
        </section>
      )}

      {/* 5. Languages */}
      {languages.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-foreground font-heading text-2xl font-bold">Bahasa</h2>
          <LanguageList languages={languages} />
        </section>
      )}

      {/* 6. Certificates */}
      {certificates.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-foreground font-heading text-2xl font-bold">
            Sertifikasi &amp; Kualifikasi Profesional
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </section>
      )}
    </PageContainer>
  );
}
