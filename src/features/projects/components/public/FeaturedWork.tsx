import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "@/shared/components";
import type { Project } from "../../types";
import { CaseCard } from "./CaseCard";

interface FeaturedWorkProps {
  projects: readonly Project[];
}

/**
 * Tiga studi kasus beranda: satu feature (7 kolom) + dua standard (5 kolom).
 * Tidak ada placeholder — bila proyek kurang, grid menyesuaikan.
 */
export function FeaturedWork({ projects }: FeaturedWorkProps) {
  if (projects.length === 0) return null;

  const feature = projects[0];
  if (!feature) return null;
  const rest = projects.slice(1);

  return (
    <section aria-labelledby="featured-work-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          id="featured-work-title"
          title="Bukti, bukan daftar teknologi."
          description="Tiga studi kasus dengan masalah, peran, dan hasil yang bisa diperiksa."
        />
        <Link
          href="/projects"
          className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex shrink-0 items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span>Lihat semua proyek</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
        <CaseCard project={feature} variant="feature" priority className="lg:col-span-7" />

        {rest.length > 0 && (
          <div className="grid gap-6 lg:col-span-5">
            {rest.map((project) => (
              <CaseCard key={project.id} project={project} variant="standard" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
