import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Cover terunggah, atau placeholder dekoratif bila belum ada gambar. */}
      <div className="border-border/60 relative aspect-video w-full overflow-hidden border-b bg-gradient-to-br from-slate-900 to-slate-950">
        {project.coverImageUrl ? (
          <>
            <Image
              src={project.coverImageUrl}
              alt={project.coverImageAlt ?? project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(#e5c158_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-gold/30 bg-card/50 text-gold group-hover:border-gold flex size-14 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <FolderGit2 className="size-7" aria-hidden="true" />
              </div>
            </div>
          </>
        )}

        <div className="relative z-10 flex items-center justify-between p-6">
          <span className="text-muted-foreground font-mono text-xs">{project.slug}</span>

          {project.isFeatured && (
            <span className="border-gold/40 bg-gold/15 text-gold inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold">
              <Sparkles className="size-3" aria-hidden="true" />
              <span>Unggulan</span>
            </span>
          )}
        </div>

        {!project.coverImageUrl && (
          <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-6 font-mono text-xs">
            <span>Arsitektur Web</span>
            <span>{year}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <Link
            href={`/projects/${project.slug}`}
            className="group-hover:text-gold focus-visible:ring-ring inline-block rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <h2 className="text-foreground font-heading line-clamp-1 text-xl font-bold tracking-tight">
              {project.title}
            </h2>
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
            className="text-gold focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-xs font-semibold transition-all duration-200 hover:gap-1.5 focus-visible:ring-2 focus-visible:outline-none"
          >
            <span>Detail Proyek</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring rounded-md p-1.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                aria-label={`Lihat kode sumber ${project.title}`}
              >
                <GithubIcon className="size-4" aria-hidden="true" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:bg-secondary hover:text-gold focus-visible:ring-ring rounded-md p-1.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                aria-label={`Kunjungi demo langsung ${project.title}`}
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
