import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/shared/components";
import { TechStackList } from "./TechStackList";
import { Card } from "@/shared/components/ui/card";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const stack = project.skills.map((s) => s.name);
  const year = project.startedAt ? new Date(project.startedAt).getFullYear() : "";

  return (
    <Card className="group card-luxury border-border/80 bg-card relative flex flex-col justify-between overflow-hidden rounded-xl border p-0 transition-all duration-300">
      {/* Card Header visual placeholder / preview */}
      <div className="border-border/60 via-navy-card relative flex aspect-video w-full flex-col justify-between overflow-hidden border-b bg-gradient-to-br from-slate-900 to-slate-950 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(#e5c158_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-muted-foreground font-mono text-xs">{project.slug}</span>

          {project.isFeatured && (
            <span className="border-gold/40 bg-gold/15 text-gold inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold">
              <Sparkles className="size-3" />
              <span>Unggulan</span>
            </span>
          )}
        </div>

        {/* Center decorative illustration */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <div className="border-gold/30 bg-card/50 text-gold group-hover:border-gold flex size-14 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <FolderGit2 className="size-7" />
          </div>
        </div>

        <div className="text-muted-foreground relative z-10 flex items-center justify-between font-mono text-xs">
          <span>Arsitektur Web</span>
          <span>{year}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <Link
            href={`/projects/${project.slug}`}
            className="group-hover:text-gold inline-block transition-colors"
          >
            <h3 className="text-foreground font-heading line-clamp-1 text-xl font-bold tracking-tight">
              {project.title}
            </h3>
          </Link>
          <p className="text-muted-foreground mt-2 line-clamp-2 text-xs leading-relaxed sm:text-sm">
            {project.summary}
          </p>
        </div>

        {stack.length > 0 && (
          <div className="border-border/50 mt-5 border-t pt-4">
            <TechStackList stack={stack} limit={4} />
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="mt-4 flex items-center justify-between pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-gold inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 hover:gap-1.5"
          >
            <span>Detail Proyek</span>
            <ArrowUpRight className="size-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-md p-1.5 transition-colors"
                aria-label={`Lihat kode sumber ${project.title}`}
              >
                <GithubIcon className="size-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-secondary hover:text-gold rounded-md p-1.5 transition-colors"
                aria-label={`Kunjungi demo langsung ${project.title}`}
              >
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
