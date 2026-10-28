import { EmptyState } from "@/shared/components";
import type { Project } from "../../types";
import { CaseCard } from "./CaseCard";

interface CaseGridProps {
  projects: readonly Project[];
}

/**
 * Grid studi kasus. Semua kartu standard agar pemindaian rata;
 * filter ada di `ProjectExplorer`, bukan di sini.
 */
export function CaseGrid({ projects }: CaseGridProps) {
  if (projects.length === 0) return null;

  return (
    <ul
      data-slot="case-grid"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
    >
      {projects.map((project) => (
        <li key={project.id} className="flex">
          <CaseCard project={project} variant="standard" headingLevel="h2" className="w-full" />
        </li>
      ))}
    </ul>
  );
}

/** Empty state filter: dipakai `ProjectExplorer` bila hasil filter kosong. */
export function CaseGridEmpty({ onReset }: { onReset?: () => void }) {
  return (
    <EmptyState
      title="Belum ada proyek dengan filter ini."
      description="Coba domain atau tipe lain, atau lihat semua studi kasus."
      action={
        onReset ? (
          <button
            type="button"
            onClick={onReset}
            className="border-border bg-surface-2 text-foreground hover:bg-accent focus-visible:ring-ring inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            Reset filter
          </button>
        ) : null
      }
    />
  );
}
