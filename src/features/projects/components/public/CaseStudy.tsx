import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, MediaFrame, ProjectCoverFallback, StatusBadge } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { sanitizeHtml } from "@/shared/lib/sanitize";
import { getProjectDomainLabel } from "@/shared/lib/taxonomy";
import { formatMonthPeriod } from "@/shared/lib/utils";
import { resolveProjectStatus } from "../../case";
import type { Project } from "../../types";
import { CaseFacts } from "./CaseFacts";
import { CaseNext } from "./CaseNext";
import { CaseToc } from "./CaseToc";

interface CaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

function toParagraphs(text: string | null): React.ReactNode[] {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => <p key={index}>{block}</p>);
}

function CaseSection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-border scroll-mt-24 border-t pt-8 first:border-t-0 first:pt-0"
    >
      <h2
        id={`${id}-title`}
        className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
      >
        {label}
      </h2>
      <div className="text-muted-foreground mt-4 max-w-[68ch] text-sm leading-relaxed sm:text-base">
        {children}
      </div>
    </section>
  );
}

/**
 * Studi kasus proyek: header, media, fakta, TOC, dan section yang hanya dirender
 * bila datanya ada. Section “Hasil” disembunyikan ketika `outcomes` kosong
 * (keputusan konten 27 Okt 2026) — tanpa “metrik menyusul” atau placeholder.
 */
export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  const stack = project.skills.map((skill) => skill.name);
  const description = project.descriptionHtml ? sanitizeHtml(project.descriptionHtml) : null;

  const problem = toParagraphs(project.problem);
  const challenge = toParagraphs(project.challenges);

  const roleBullets = [
    project.role ? `Peran: ${project.role}` : null,
    project.teamSize
      ? project.teamSize === 1
        ? "Dikerjakan sendiri"
        : `Tim: ${project.teamSize} orang`
      : null,
    project.startedAt ? `Periode: ${formatMonthPeriod(project.startedAt, project.endedAt)}` : null,
    project.projectType ? `Konteks: ${project.projectType}` : null,
    project.repoUrl ? "Kode dipublikasikan" : "Kode privat",
  ].filter(Boolean);

  const sectionNodes: { id: string; label: string; node: React.ReactNode }[] = [
    {
      id: "masalah",
      label: "Masalah",
      node: problem.length > 0 ? problem : <p>Kondisi awal proyek belum ditulis.</p>,
    },
    {
      id: "peran",
      label: "Peran & batasan",
      node: (
        <ul className="space-y-2">
          {roleBullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="bg-border mt-2 size-1 shrink-0 rounded-full" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "solusi",
      label: "Solusi",
      node: (
        <>
          {toParagraphs(project.solution)}
          {project.features.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="bg-gold mt-2 size-1 shrink-0 rounded-full" aria-hidden="true" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    ...(description
      ? [
          {
            id: "deskripsi",
            label: "Deskripsi & arsitektur",
            node: <p dangerouslySetInnerHTML={{ __html: description }} />,
          },
        ]
      : []),
    ...(project.outcomes.length > 0
      ? [
          {
            id: "hasil",
            label: "Hasil",
            node: (
              <ul className="border-border divide-border divide-y">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="text-foreground py-2.5 text-base font-medium">
                    {outcome}
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
    ...(challenge.length > 0
      ? [{ id: "tantangan", label: "Tantangan & pelajaran", node: challenge }]
      : []),
  ];

  const tocSections = sectionNodes.map(({ id, label }) => ({ id, label }));

  return (
    <article className="space-y-8">
      <header className="border-border border-b pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
            {[
              getProjectDomainLabel(project.domain) ?? "Proyek",
              project.projectType,
              project.startedAt ? new Date(project.startedAt).getUTCFullYear() : null,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <StatusBadge status={resolveProjectStatus(project)} />
        </div>

        <h1 className="text-foreground font-heading mt-3 text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
          {project.title}
        </h1>

        <p className="text-muted-foreground mt-4 max-w-[68ch] text-base leading-relaxed sm:text-lg">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <Button asChild size="lg">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <span>Buka demo</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="lg" variant={project.demoUrl ? "secondary" : "primary"}>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
                <span>Lihat kode</span>
              </a>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            variant={project.demoUrl || project.repoUrl ? "secondary" : "primary"}
          >
            <Link href="/contact" className="flex items-center gap-2">
              <span>Hubungi saya</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </header>

      <MediaFrame
        src={project.coverImageUrl}
        alt={project.coverImageAlt ?? project.title}
        aspect="16/9"
        priority
        sizes="(min-width: 1024px) 100vw, 100vw"
        fallback={
          <ProjectCoverFallback
            title={project.title}
            domain={getProjectDomainLabel(project.domain)}
            stack={stack}
          />
        }
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="space-y-8 lg:order-2 lg:col-span-4 lg:self-start">
          <CaseToc sections={tocSections} />
          <CaseFacts project={project} />
        </aside>

        <div className="space-y-8 lg:order-1 lg:col-span-8">
          {sectionNodes.map((section) => (
            <CaseSection key={section.id} id={section.id} label={section.label}>
              {section.node}
            </CaseSection>
          ))}

          {project.images.length > 0 && (
            <section
              id="galeri"
              aria-labelledby="galeri-title"
              className="border-border scroll-mt-24 border-t pt-8"
            >
              <h2
                id="galeri-title"
                className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Galeri
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <li key={image.id}>
                    <MediaFrame
                      src={image.url}
                      alt={image.alt || `${project.title} — gambar ${index + 1}`}
                      aspect="16/10"
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      fallback={
                        <span className="text-muted-foreground font-mono text-[11px]">
                          {getProjectDomainLabel(project.domain) ?? "Proyek"}
                        </span>
                      }
                      caption={image.alt || undefined}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <CaseNext project={nextProject} />
    </article>
  );
}
