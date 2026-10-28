import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import type { Project } from "@/features/projects";
import type { Profile } from "../../types";
import { MetricRail } from "./MetricRail";
import { SignalPanel } from "./SignalPanel";

interface HeroProps {
  profile: Profile | null;
  latestProject: Pick<Project, "slug" | "title"> | null;
}

/**
 * Hero beranda 7/5: identitas, value prop, dua CTA, tiga metrik, dan panel status.
 * H1 adalah value prop (lihat rencana heading 04 §12.2); nama dan peran jadi baris mono di atasnya.
 */
export function Hero({ profile, latestProject }: HeroProps) {
  const name = profile?.fullName ?? siteConfig.name;
  const resumeUrl = profile?.resumeUrl ?? "/resume.pdf";
  const location = profile?.location ?? siteConfig.location;

  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16" aria-labelledby="hero-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span className="text-foreground">{name}</span>
            <span className="text-border" aria-hidden="true">
              /
            </span>
            <span className="text-gold-muted">{siteConfig.role}</span>
          </p>

          <h1
            id="hero-title"
            className="text-foreground font-heading mt-5 max-w-[16ch] text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-6xl md:text-[4rem] md:leading-[0.98]"
          >
            Backend, data, dan otomasi yang dipakai di lapangan.
          </h1>

          <p className="text-muted-foreground mt-6 max-w-[46ch] text-lg leading-relaxed md:text-[1.375rem]">
            {siteConfig.valueProp}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                <span>Baca studi kasus</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={resumeUrl} download className="flex items-center gap-2">
                <Download className="size-4" aria-hidden="true" />
                <span>Unduh CV</span>
              </a>
            </Button>
          </div>

          <MetricRail metrics={siteConfig.metrics} />
        </div>

        <div className="lg:col-span-5">
          <SignalPanel location={location} latestProject={latestProject} />
        </div>
      </div>
    </section>
  );
}
