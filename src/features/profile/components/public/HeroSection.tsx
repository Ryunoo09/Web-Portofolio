import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import type { Profile } from "../../types";

interface HeroSectionProps {
  profile: Profile | null;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const name = profile?.fullName ?? siteConfig.name;
  const headline = profile?.headline ?? siteConfig.role;
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="flex max-w-4xl flex-col items-start space-y-8">
        {/* Availability Status Badge */}
        <div className="border-gold/30 bg-gold/10 text-gold inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
          <span className="bg-gold size-2 animate-ping rounded-full" />
          <span>{siteConfig.availability}</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-foreground font-heading text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
            Halo, saya <span className="text-foreground font-semibold">{name}</span> —{" "}
            {siteConfig.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
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
    </section>
  );
}
