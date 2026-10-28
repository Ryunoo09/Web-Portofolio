import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectDomainLabel } from "@/shared/lib/taxonomy";
import type { Project } from "../../types";

interface CaseNextProps {
  project: Pick<Project, "slug" | "title" | "summary" | "domain"> | null;
}

/** CTA penutup studi kasus: proyek berikutnya, atau jalan keluar yang jujur. */
export function CaseNext({ project }: CaseNextProps) {
  return (
    <section aria-labelledby="case-next-title" className="border-border border-t pt-8 md:pt-10">
      {project ? (
        <Link
          href={`/projects/${project.slug}`}
          className="group border-border bg-surface hover:border-gold/60 focus-visible:ring-ring flex flex-col gap-1 rounded-lg border p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div className="min-w-0">
            <p
              id="case-next-title"
              className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase"
            >
              Proyek berikutnya
            </p>
            <p className="text-foreground font-heading mt-1 truncate text-lg font-semibold">
              {project.title}
            </p>
            <p className="text-muted-foreground mt-0.5 truncate text-sm">{project.summary}</p>
          </div>
          <span className="text-gold-muted inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold">
            <span className="hidden sm:inline">
              {getProjectDomainLabel(project.domain) ?? "Studi kasus"}
            </span>
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      ) : (
        <div>
          <p
            id="case-next-title"
            className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase"
          >
            Sampai di sini
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Lihat semua proyek
            </Link>
            <Link
              href="/contact"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Hubungi saya
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
