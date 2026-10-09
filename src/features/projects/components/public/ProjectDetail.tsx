import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldAlert,
  Lightbulb,
  Calendar,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/shared/components";
import { TechStackList } from "./TechStackList";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import type { ProjectItem } from "@/shared/constants/dummyData";

interface ProjectDetailProps {
  project: ProjectItem;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
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
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border/70 hover:border-gold/50 rounded-full"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-1.5 size-4" />
                <span>Source Code</span>
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-full font-medium"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
                <ArrowUpRight className="ml-1.5 size-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="border-gold/40 text-gold bg-gold/5">
            {project.category}
          </Badge>
          <span className="text-muted-foreground flex items-center gap-1 text-xs">
            <Calendar className="size-3.5" />
            <span>
              Rilis:{" "}
              {new Date(project.publishedAt).toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </span>
        </div>

        <h1 className="text-foreground font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed sm:text-xl">
          {project.tagline}
        </p>

        <div className="pt-2">
          <TechStackList stack={project.techStack} />
        </div>
      </div>

      {/* Main Mockup Container */}
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
            <Layers className="size-10" />
          </div>
          <h2 className="text-foreground font-serif text-2xl font-bold">{project.title}</h2>
          <p className="text-muted-foreground mt-2 max-w-md text-sm">{project.description}</p>
        </div>

        <div className="text-muted-foreground border-border/40 relative z-10 flex items-center justify-between border-t pt-4 text-xs">
          <span>Target Platform: Web & Mobile Responsive</span>
          <span className="text-gold font-medium">99.9% Lighthouse Score</span>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="space-y-6">
        <h2 className="text-foreground font-serif text-2xl font-bold">
          Ringkasan & Gambaran Arsitektur
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">{project.longDescription}</p>
      </div>

      {/* Highlights */}
      <div className="space-y-4">
        <h2 className="text-foreground font-serif text-2xl font-bold">
          Fitur Utama & Keunggulan Teknis
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.highlights.map((highlight, index) => (
            <div
              key={index}
              className="border-border/70 bg-card hover:border-gold/30 flex items-start gap-3 rounded-xl border p-4 transition-colors"
            >
              <CheckCircle2 className="text-gold mt-0.5 size-5 shrink-0" />
              <span className="text-foreground/90 text-sm leading-snug">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Challenge & Solution */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="card-luxury border-amber-500/20 bg-amber-500/5 p-6">
          <div className="mb-3 flex items-center gap-3 font-semibold text-amber-500">
            <ShieldAlert className="size-5" />
            <h3 className="text-base">Tantangan Teknis</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.challenges}</p>
        </Card>

        <Card className="card-luxury border-gold/30 bg-gold/5 p-6">
          <div className="text-gold mb-3 flex items-center gap-3 font-semibold">
            <Lightbulb className="size-5" />
            <h3 className="text-base">Solusi & Hasil</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
        </Card>
      </div>
    </article>
  );
}
