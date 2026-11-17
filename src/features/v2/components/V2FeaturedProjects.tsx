import Link from "next/link";
import type { V2FeaturedProjectsProps } from "../types";

export function V2FeaturedProjects({ projects }: V2FeaturedProjectsProps) {
  return (
    <section id="proyek" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Section badge */}
        <div className="mb-12 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            PROYEK
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <h2 className="font-heading mb-10 text-3xl font-bold text-[#0F172A]">Proyek Unggulan</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl border-l-4 border-[#C59B27] bg-[#FDFBF9] p-6 shadow-sm transition hover:shadow-md md:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">{project.title}</h3>
                  {project.domain && (
                    <span className="mt-1 inline-block rounded-full bg-[#FEF3C7] px-3 py-0.5 text-xs font-medium text-[#8A6A1F]">
                      {project.domain}
                    </span>
                  )}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="shrink-0 rounded-full bg-[#C59B27] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#8A6A1F]"
                >
                  Lihat Studi Kasus →
                </Link>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{project.summary}</p>

              {project.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full border border-[#FEF3C7] bg-white px-3 py-1 text-xs font-medium text-[#475569]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
