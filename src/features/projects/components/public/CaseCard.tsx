import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame, ProjectCoverFallback, StackList } from "@/shared/components";
import { getProjectDomainLabel } from "@/shared/lib/taxonomy";
import { cn, formatMonthPeriod } from "@/shared/lib/utils";
import type { Project } from "../../types";

interface CaseCardProps {
  project: Project;
  variant?: "feature" | "standard";
  /** `true` hanya untuk kartu feature di atas fold. */
  priority?: boolean;
  headingLevel?: "h2" | "h3";
  className?: string;
}

function projectYear(project: Project): string | null {
  return project.startedAt ? String(new Date(project.startedAt).getUTCFullYear()) : null;
}

function projectMeta(project: Project): string {
  return [
    getProjectDomainLabel(project.domain) ?? "Proyek",
    project.projectType,
    projectYear(project),
  ]
    .filter(Boolean)
    .join(" · ");
}

function projectCredits(project: Project, withPeriod: boolean): string | null {
  const credits = [
    project.role ? `Peran: ${project.role}` : null,
    project.teamSize ? `${project.teamSize} orang` : null,
    withPeriod ? formatMonthPeriod(project.startedAt, project.endedAt) : null,
  ].filter(Boolean);

  return credits.length > 0 ? credits.join(" · ") : null;
}

/**
 * Kartu studi kasus. Satu tautan utama (judul) yang menutupi seluruh kartu;
 * outcome hanya dirender jika memang ada — FTTH sengaja tidak punya outcome.
 */
export function CaseCard({
  project,
  variant = "standard",
  priority = false,
  headingLevel: Heading = "h3",
  className,
}: CaseCardProps) {
  const isFeature = variant === "feature";
  const stack = project.skills.map((skill) => skill.name);
  const outcome = project.outcomes[0];
  // Tanpa cover asli, kartu standard tidak perlu blok media besar yang mengulang
  // judul dan stack. Kartu feature tetap memakai fallback tipografis sebagai jangkar.
  const showMedia = isFeature || Boolean(project.coverImageUrl);

  return (
    <article
      data-slot="case-card"
      className={cn(
        "group border-border bg-card focus-within:border-gold/60 hover:border-gold/60 relative flex flex-col overflow-hidden rounded-lg border transition-colors",
        className,
      )}
    >
      {showMedia && (
        <MediaFrame
          src={project.coverImageUrl}
          alt={project.coverImageAlt ?? project.title}
          aspect={isFeature ? "16/9" : "16/10"}
          sizes={
            isFeature
              ? "(min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          }
          priority={priority}
          framed={false}
          fallback={
            <ProjectCoverFallback
              title={project.title}
              domain={getProjectDomainLabel(project.domain)}
              stack={stack}
            />
          }
        />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-muted-foreground font-mono text-[11px]">{projectMeta(project)}</p>

        <Heading
          className={cn(
            "font-heading mt-2 font-semibold tracking-tight",
            isFeature ? "text-xl sm:text-2xl" : "line-clamp-2 text-lg",
          )}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:ring-ring rounded-sm after:absolute after:inset-0 focus-visible:ring-2 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </Heading>

        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
          {project.summary}
        </p>

        {outcome && (
          <div
            className={cn(
              "border-gold/50 mt-4 border-l-2 pl-3",
              !isFeature && "text-sm leading-relaxed",
            )}
          >
            <p className={cn("text-foreground", isFeature && "text-base font-medium")}>{outcome}</p>
          </div>
        )}

        <div className="mt-auto pt-5">
          {stack.length > 0 && <StackList stack={stack} limit={4} />}

          <div className="border-border mt-4 flex items-center justify-between gap-4 border-t pt-3">
            <p className="text-muted-foreground min-w-0 truncate font-mono text-[11px]">
              {projectCredits(project, isFeature)}
            </p>
            <span className="text-gold-muted inline-flex shrink-0 items-center gap-1 text-xs font-semibold">
              {isFeature ? "Baca studi kasus" : "Detail"}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
