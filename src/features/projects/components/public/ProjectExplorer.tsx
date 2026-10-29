"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  PROJECT_DOMAINS,
  PROJECT_DOMAIN_LABELS,
  PROJECT_TYPES,
  projectTypeToParam,
  resolveProjectType,
  type ProjectDomain,
} from "@/shared/lib/taxonomy";
import { cn } from "@/shared/lib/utils";
import { CaseGrid, CaseGridEmpty } from "./CaseGrid";
import type { Project } from "../../types";

interface ProjectExplorerProps {
  projects: readonly Project[];
}

const ALL = "all";

function normalizeDomain(param: string | null): ProjectDomain | typeof ALL {
  return param && PROJECT_DOMAINS.includes(param as ProjectDomain) ? (param as ProjectDomain) : ALL;
}

function normalizeType(param: string | null): string {
  return resolveProjectType(param) ? param! : ALL;
}

function DomainChip({
  value,
  label,
  active,
  onSelect,
}: {
  value: string;
  label: string;
  active: boolean;
  onSelect: (key: "domain", value: string) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect("domain", value)}
      className={cn(
        "border-border focus-visible:ring-ring inline-flex min-h-11 items-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-surface text-muted-foreground hover:bg-surface-2 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}

/**
 * Explorer studi kasus: filter domain + tipe di memori (9 proyek), URL disinkronkan
 * dengan `router.replace(..., { scroll: false })`, dan back/forward tetap terbaca.
 */
export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const domain = normalizeDomain(searchParams.get("domain"));
  const type = normalizeType(searchParams.get("type"));

  const filtered = React.useMemo(
    () =>
      projects.filter(
        (project) =>
          (domain === ALL || project.domain === domain) &&
          (type === ALL || projectTypeToParam(project.projectType ?? "") === type),
      ),
    [projects, domain, type],
  );

  const hasFilter = domain !== ALL || type !== ALL;

  function navigate(key: "domain" | "type", value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === ALL) params.delete(key);
    else params.set(key, value);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function reset() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="group"
            aria-label="Filter domain"
            className="flex flex-wrap items-center gap-1.5"
          >
            <DomainChip value={ALL} label="Semua" active={domain === ALL} onSelect={navigate} />
            {PROJECT_DOMAINS.map((value) => (
              <DomainChip
                key={value}
                value={value}
                label={PROJECT_DOMAIN_LABELS[value]}
                active={domain === value}
                onSelect={navigate}
              />
            ))}
          </div>

          <p
            aria-live="polite"
            className="text-muted-foreground shrink-0 font-mono text-[11px] tracking-[0.14em] uppercase"
          >
            {filtered.length} proyek
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="case-type-filter"
            className="text-muted-foreground shrink-0 text-xs font-medium"
          >
            Tipe proyek
          </label>
          <select
            id="case-type-filter"
            value={type}
            onChange={(event) => navigate("type", event.target.value)}
            className="border-input bg-surface text-foreground focus-visible:ring-ring min-h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
          >
            <option value={ALL}>Semua tipe</option>
            {PROJECT_TYPES.map((value) => (
              <option key={value} value={projectTypeToParam(value) ?? value}>
                {value}
              </option>
            ))}
          </select>

          {hasFilter && (
            <button
              type="button"
              onClick={reset}
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex min-h-11 items-center rounded-md text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <CaseGridEmpty onReset={reset} />
      ) : (
        <>
          <CaseGrid projects={filtered} />
          <p className="text-muted-foreground text-sm">
            Butuh studi kasus lain?{" "}
            <Link
              href="/contact"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Hubungi saya
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
