import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileDown, MapPin, UserRound } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import type { Profile } from "../../types";

interface HeroSectionProps {
  profile: Profile | null;
}

/** Teknologi utama yang ditonjolkan di kartu profil. */
const HERO_STACK = ["Python", "FastAPI", "Laravel", "PostgreSQL"];

export function HeroSection({ profile }: HeroSectionProps) {
  const name = profile?.fullName ?? siteConfig.name;
  const headline = profile?.headline ?? siteConfig.role;
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";
  const avatarUrl = profile?.avatarUrl ?? null;
  const location = profile?.location ?? siteConfig.location;

  return (
    <section className="relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* Kolom kiri: judul utama (left-side bias dipertahankan) */}
        <div className="flex flex-col items-start space-y-7">
          <div className="border-gold/30 bg-gold/10 text-gold inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <span className="bg-gold size-2 animate-ping rounded-full" />
            <span>{siteConfig.availability}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-foreground font-heading text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl">
              {headline}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
              Halo, saya <span className="text-foreground font-semibold">{name}</span>.{" "}
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground shadow-gold/20 hover:bg-gold/90 cursor-pointer rounded-full px-7 font-semibold shadow-lg transition-all duration-200"
            >
              <Link href="/projects" className="flex items-center gap-2">
                <span>Lihat Karya &amp; Proyek</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/80 hover:border-gold/50 hover:bg-gold/5 cursor-pointer rounded-full px-6 font-semibold transition-all duration-200"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Hubungi Saya</span>
              </Link>
            </Button>

            {resumeUrl && (
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground cursor-pointer rounded-full"
              >
                <a
                  href={resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileDown className="text-gold size-4" />
                  <span>Unduh CV</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Kolom kanan: kartu profil — mengisi ruang yang tadinya kosong. */}
        <aside className="card-luxury border-border/80 bg-card w-full rounded-2xl border p-6">
          <div className="flex items-center gap-4">
            <div className="border-gold/30 bg-gold/10 text-gold relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={`Foto ${name}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <UserRound className="size-7" aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-foreground font-heading truncate text-lg font-bold">{name}</p>
              <p className="text-muted-foreground flex items-center gap-1 text-xs">
                <MapPin className="size-3 shrink-0" aria-hidden="true" />
                <span className="truncate">{location}</span>
              </p>
            </div>
          </div>

          <dl className="border-border/50 mt-5 grid grid-cols-2 gap-4 border-t pt-5">
            <div>
              <dt className="text-muted-foreground text-xs">Fokus</dt>
              <dd className="text-foreground mt-0.5 text-sm font-semibold">Backend &amp; Data</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs">Status</dt>
              <dd className="text-gold mt-0.5 text-sm font-semibold">Terbuka untuk peluang</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {HERO_STACK.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border/80 text-muted-foreground text-[11px]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
