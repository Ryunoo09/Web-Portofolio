import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer, SectionHeading } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { HeroSection, getProfile } from "@/features/profile";
import { getFeaturedProjects, ProjectCard } from "@/features/projects";
import { getTopSkills, SkillCard } from "@/features/skills";

export const revalidate = 3600;

export default async function HomePage() {
  const [profile, featuredProjects, topSkills] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getTopSkills(4),
  ]);

  return (
    <PageContainer className="space-y-14 py-8 md:space-y-20 md:py-12">
      {/* 1. Hero Section */}
      <HeroSection profile={profile} />

      {/* 2. Featured Projects */}
      <section>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            badge="Portofolio Karya"
            title="Proyek"
            highlight="Unggulan"
            description="Koleksi sistem dan aplikasi pilihan — dari computer vision dan analitik data hingga backend yang dipakai di lapangan."
            className="mb-0"
          />
          <Button
            asChild
            variant="outline"
            className="border-border/80 hover:border-gold/50 shrink-0 rounded-full"
          >
            <Link href="/projects" className="flex items-center gap-1.5">
              <span>Semua Proyek</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* 3. Core Tech Stack Skills */}
      <section>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            badge="Keahlian Utama"
            title="Spesialisasi"
            highlight="Teknologi"
            description="Teknologi inti yang saya pakai untuk membangun backend, mengolah data, dan mengotomasi proses."
            className="mb-0"
          />
          <Button
            asChild
            variant="outline"
            className="border-border/80 hover:border-gold/50 shrink-0 rounded-full"
          >
            <Link href="/skills" className="flex items-center gap-1.5">
              <span>Semua Keahlian</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topSkills.map((s) => (
            <SkillCard key={s.id} skill={s} />
          ))}
        </div>
      </section>

      {/* 4. Contact Climax CTA */}
      <section className="border-gold/30 from-card via-card to-gold/5 relative space-y-6 overflow-hidden rounded-3xl border bg-gradient-to-br p-8 text-center shadow-xl sm:p-12 md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5c158_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="relative z-10 mx-auto max-w-2xl space-y-4">
          <span className="border-gold/40 bg-gold/10 text-gold-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
            Terbuka untuk Peluang
          </span>
          <h2 className="text-foreground font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tertarik Bekerja Sama?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            Saya terbuka untuk peluang magang, kontrak, maupun posisi penuh waktu di bidang backend,
            data, dan otomasi. Mari berdiskusi.
          </p>
          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground shadow-gold/20 hover:bg-gold/90 rounded-full px-8 font-semibold shadow-lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Hubungi Saya</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
