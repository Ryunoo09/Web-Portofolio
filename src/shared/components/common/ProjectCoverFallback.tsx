import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { StackList } from "./StackList";

interface ProjectCoverFallbackProps {
  title: string;
  domain?: string | null;
  stack?: string[];
  className?: string;
}

/**
 * Fallback cover tipografis: domain + judul + stack.
 * Tidak memakai browser chrome palsu atau screenshot yang tidak nyata.
 */
export function ProjectCoverFallback({
  title,
  domain,
  stack = [],
  className,
}: ProjectCoverFallbackProps) {
  return (
    <div
      data-slot="project-cover-fallback"
      className={cn(
        "bg-surface-2 text-foreground absolute inset-0 flex flex-col justify-between gap-6 p-5 sm:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase">
          {domain ?? "Proyek"}
        </span>
        <span className="border-border bg-surface text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-[10px]">
          Cover menyusul
        </span>
      </div>

      <p className="font-heading text-lg leading-snug font-semibold tracking-tight sm:text-xl">
        {title}
      </p>

      {stack.length > 0 && <StackList stack={stack} limit={3} className="justify-start" />}
    </div>
  );
}
