import type { Metadata } from "next";
import { PageContainer, SectionHeading } from "@/shared/components";
import { buildMetadata } from "@/shared/lib/seo/buildMetadata";
import {
  AboutContent,
  ExperienceTimeline,
  EducationCard,
  CertificateCard,
  getExperiences,
  getEducation,
  getCertificates,
} from "@/features/profile";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Saya & Riwayat Profesional",
  description:
    "Mengenal lebih dekat latar belakang, filosofi rekayasa perangkat lunak, pengalaman kerja, dan sertifikasi keahlian.",
  path: "/about",
});

export default async function AboutPage() {
  const [experiences, educationList, certificates] = await Promise.all([
    getExperiences(),
    getEducation(),
    getCertificates(),
  ]);

  return (
    <PageContainer size="narrow" className="space-y-16 py-12 md:py-16">
      {/* 1. Header & Bio */}
      <section>
        <SectionHeading
          badge="Profil Profesional"
          title="Tentang"
          highlight="Saya & Filosofi Kerja"
          description="Dedikasi pada kode bersih, keamanan sistem, dan pengalaman pengguna tingkat tinggi."
        />
        <AboutContent />
      </section>

      {/* 2. Work Experiences */}
      <section className="space-y-6">
        <h2 className="text-foreground font-heading text-2xl font-bold">
          Pengalaman Kerja &amp; Kontribusi
        </h2>
        <ExperienceTimeline experiences={experiences} />
      </section>

      {/* 3. Education */}
      <section className="space-y-6">
        <h2 className="text-foreground font-heading text-2xl font-bold">Pendidikan Formal</h2>
        <div className="grid grid-cols-1 gap-6">
          {educationList.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </section>

      {/* 4. Certificates */}
      <section className="space-y-6">
        <h2 className="text-foreground font-heading text-2xl font-bold">
          Sertifikasi &amp; Kualifikasi Profesional
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
