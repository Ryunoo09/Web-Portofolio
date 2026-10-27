import type { Metadata } from "next";
import { JsonLd } from "@/shared/components/common/JsonLd";
import { siteConfig } from "@/shared/constants/siteConfig";
import { getProjectDomainLabel } from "@/shared/lib/taxonomy";
import { buildMetadata } from "@/shared/lib/seo";
import type { Project } from "./types";

/** `seo_title`/`seo_description` menang; fallback judul/ringkasan proyek. */
export function projectMetadata(project: Project): Metadata {
  return buildMetadata({
    title: project.seoTitle?.trim() || project.title,
    description: project.seoDescription?.trim() || project.summary,
    path: `/projects/${project.slug}`,
  });
}

/** Data `CreativeWork` untuk halaman studi kasus proyek. */
export function projectJsonLd(project: Project): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription?.trim() || project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    dateCreated: project.startedAt ?? undefined,
    genre: getProjectDomainLabel(project.domain) ?? undefined,
    keywords: project.skills.map((skill) => skill.name),
    codeRepository: project.repoUrl ?? undefined,
    image: project.coverImageUrl ?? undefined,
    inLanguage: "id-ID",
  };
}

export function ProjectJsonLd({ project }: { project: Project }) {
  return <JsonLd data={projectJsonLd(project)} id="project-jsonld" />;
}
