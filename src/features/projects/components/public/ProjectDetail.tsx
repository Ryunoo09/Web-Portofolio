import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Layers,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/shared/components";
import { TechStackList } from "./TechStackList";
import { ProjectGallery } from "./ProjectGallery";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { sanitizeHtml } from "@/shared/lib/sanitize";
import type { Project } from "../../types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const stack = project.skills.map((s) => s.name);
  const description = project.descriptionHtml ? sanitizeHtml(project.descriptionHtml) : null;

  return (
    <article className="space-y-12">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-gold inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Kembali ke Daftar Proyek</span>
        </Link>

        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border/70 hover:border-gold/50 rounded-full"
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-1.5 size-4" />
                <span>Source Code</span>
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button
              asChild
              size="sm"
              className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-full font-medium"
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
                <ArrowUpRight className="ml-1.5 size-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        {project.isFeatured && (
          <Badge variant="outline" className="border-gold/40 text-gold bg-gold/5">
            Proyek Unggulan
          </Badge>
        )}

        {project.startedAt && (
          <span className="text-muted-foreground flex items-center gap-1 text-xs">
            <Calendar className="size-3.5" />
            <span>
              Mulai:{" "}
              {new Date(project.startedAt).toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </span>
        )}

        <h1 className="text-foreground font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed sm:text-xl">
          {project.summary}
        </p>

        {stack.length > 0 && (
          <div className="pt-2">
            <TechStackList stack={stack} />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.projectType && (
            <Badge variant="outline" className="border-border/80 text-muted-foreground">
              {project.projectType}
            </Badge>
          )}
          {project.role && (
            <Badge variant="outline" className="border-border/80 text-muted-foreground">
              {project.role}
            </Badge>
          )}
          {project.teamSize && (
            <Badge
              variant="outline"
              className="border-border/80 text-muted-foreground flex items-center gap-1"
            >
              <Users className="size-3" aria-hidden="true" />
              <span>{project.teamSize} orang</span>
            </Badge>
          )}
          {project.isDeployed && (
            <Badge
              variant="outline"
              className="border-gold/40 text-gold bg-gold/5 flex items-center gap-1"
            >
              <BadgeCheck className="size-3" aria-hidden="true" />
              <span>Digunakan pengguna</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Cover terunggah; placeholder arsitektur hanya bila belum ada gambar. */}
      {project.coverImageUrl ? (
        <div className="border-border/80 relative aspect-video w-full overflow-hidden rounded-2xl border shadow-2xl">
          <Image
            src={project.coverImageUrl}
            alt={project.coverImageAlt ?? project.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="border-border/80 via-navy-card relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#e5c158_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-15" />
          <div className="border-border/40 relative z-10 flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="text-muted-foreground ml-2 font-mono text-xs">
                https://{project.slug}.dev
              </span>
            </div>
            <span className="text-gold/80 font-mono text-xs">Architecture Preview</span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center p-6 text-center">
            <div className="border-gold/40 bg-card/60 text-gold mb-4 flex size-20 items-center justify-center rounded-3xl border shadow-xl backdrop-blur-md">
              <Layers className="size-10" aria-hidden="true" />
            </div>
            <h2 className="text-foreground font-heading text-2xl font-bold">{project.title}</h2>
            <p className="text-muted-foreground mt-2 max-w-md text-sm">{project.summary}</p>
          </div>

          <div className="text-muted-foreground border-border/40 relative z-10 flex items-center justify-between border-t pt-4 text-xs">
            <span>Target Platform: Web &amp; Mobile Responsive</span>
            <span className="text-gold font-medium">Production Ready</span>
          </div>
        </div>
      )}

      {/* Detailed Description */}
      <div className="space-y-6">
        <h2 className="text-foreground font-heading text-2xl font-bold">
          Ringkasan &amp; Gambaran Arsitektur
        </h2>
        {description ? (
          <div
            className="text-muted-foreground [&_a]:text-gold [&_h2]:text-foreground [&_h2]:font-heading space-y-4 text-base leading-relaxed [&_a]:underline [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <p className="text-muted-foreground text-base leading-relaxed">{project.summary}</p>
        )}
      </div>

      {(project.problem || project.solution) && (
        <div className="grid gap-6 sm:grid-cols-2">
          {project.problem && (
            <div className="space-y-2">
              <h2 className="text-foreground font-heading text-xl font-bold">Latar Belakang</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="space-y-2">
              <h2 className="text-foreground font-heading text-xl font-bold">Solusi</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{project.solution}</p>
            </div>
          )}
        </div>
      )}

      {project.features.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-foreground font-heading text-xl font-bold">Fitur Utama</h2>
          <ul className="text-muted-foreground grid gap-2 text-base leading-relaxed sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="bg-gold mt-2 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.outcomes.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-foreground font-heading text-xl font-bold">Hasil &amp; Dampak</h2>
          <ul className="grid gap-2 text-base leading-relaxed sm:grid-cols-2">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="border-gold/30 bg-gold/5 text-muted-foreground flex gap-2 rounded-lg border p-3"
              >
                <CheckCircle2 className="text-gold mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.challenges && (
        <div className="space-y-2">
          <h2 className="text-foreground font-heading text-xl font-bold">Tantangan</h2>
          <p className="text-muted-foreground text-base leading-relaxed">{project.challenges}</p>
        </div>
      )}

      <ProjectGallery images={project.images} projectTitle={project.title} />
    </article>
  );
}
