import { StackList } from "@/shared/components";
import { formatMonthPeriod } from "@/shared/lib/utils";
import { resolveProjectStatus } from "../../case";
import type { Project } from "../../types";

interface CaseFactsProps {
  project: Project;
}

const STATUS_LABELS = {
  live: "Live",
  private: "Kode privat",
  "in-progress": "Sedang dikerjakan",
  archived: "Arsip",
} as const;

/** Kolom fakta: ikhtisar data studi kasus dalam `<dl>`. Tidak mengulang narasi. */
export function CaseFacts({ project }: CaseFactsProps) {
  const rows = [
    { term: "Peran", value: project.role ?? "—" },
    {
      term: "Tim",
      value: project.teamSize ? `${project.teamSize} orang` : "—",
    },
    { term: "Periode", value: formatMonthPeriod(project.startedAt, project.endedAt) },
    { term: "Konteks", value: project.projectType ?? "—" },
    { term: "Status", value: STATUS_LABELS[resolveProjectStatus(project)] },
  ];

  return (
    <section aria-labelledby="case-facts-title" className="border-border border-t pt-6">
      <h2
        id="case-facts-title"
        className="text-muted-foreground mb-3 font-mono text-[11px] tracking-[0.14em] uppercase"
      >
        Fakta
      </h2>

      <dl className="divide-border divide-y text-sm">
        {rows.map((row) => (
          <div key={row.term} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="text-muted-foreground shrink-0 text-xs">{row.term}</dt>
            <dd className="text-foreground text-right">{row.value}</dd>
          </div>
        ))}
      </dl>

      {project.skills.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-muted-foreground text-xs">Stack</p>
          <StackList stack={project.skills.map((skill) => skill.name)} limit={999} />
        </div>
      )}
    </section>
  );
}
