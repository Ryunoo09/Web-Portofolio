import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import type { Project } from "@/features/projects";

interface SignalPanelProps {
  availability?: string;
  location?: string;
  focus?: readonly string[];
  latestProject: Pick<Project, "slug" | "title"> | null;
}

/**
 * Panel status di sisi kanan hero: status, lokasi, fokus, proyek terakhir, dan
 * satu tautan kontak. Dot statis, bukan indikator "live" palsu.
 */
export function SignalPanel({
  availability = siteConfig.availability,
  location = siteConfig.location,
  focus = siteConfig.focus,
  latestProject,
}: SignalPanelProps) {
  return (
    <aside className="border-border bg-card rounded-lg border p-5 md:p-6">
      <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
        Status
      </p>

      <p className="text-foreground mt-2 flex items-start gap-2 text-sm font-medium">
        <span className="bg-mint mt-1.5 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
        <span>{availability}</span>
      </p>

      <dl className="border-border divide-border mt-5 divide-y border-t text-sm">
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Lokasi</dt>
          <dd className="text-right">
            {location} · {siteConfig.timezone}
          </dd>
        </div>

        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Fokus</dt>
          <dd className="text-muted-foreground text-right font-mono text-[11px]">
            {focus.join(" · ")}
          </dd>
        </div>

        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Terakhir</dt>
          <dd className="min-w-0 text-right">
            {latestProject ? (
              <Link
                href={`/projects/${latestProject.slug}`}
                className="text-foreground hover:text-gold-muted focus-visible:ring-ring line-clamp-2 rounded-sm underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none"
              >
                {latestProject.title}
              </Link>
            ) : (
              <span className="text-muted-foreground">Studi kasus segera</span>
            )}
          </dd>
        </div>
      </dl>

      <Link
        href="/contact"
        className="text-gold-muted hover:text-foreground focus-visible:ring-ring mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        <span>Hubungi saya</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
