import type { V2EducationExperienceProps } from "../types";

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
}

export function V2EducationExperience({ education, experiences }: V2EducationExperienceProps) {
  return (
    <div className="space-y-16">
      {/* Education */}
      <section id="pendidikan" className="py-4">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            PENDIDIKAN
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative rounded-2xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#475569]">{edu.degree}</p>
                  {edu.field && <p className="mt-0.5 text-xs text-[#8A6A1F]">{edu.field}</p>}
                </div>
                <span className="text-xs font-medium text-[#475569]">
                  {formatDate(edu.startedAt)} — {formatDate(edu.endedAt)}
                </span>
              </div>
              {edu.description && (
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="pengalaman" className="py-4">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-full border border-[#C59B27]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8A6A1F]">
            PENGALAMAN
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C59B27]/40 to-transparent" />
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-2xl border-l-4 border-[#C59B27] bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A]">{exp.company}</h3>
                  <p className="mt-1 text-sm font-medium text-[#475569]">{exp.role}</p>
                  {exp.location && (
                    <p className="mt-0.5 text-xs text-[#8A6A1F]">📍 {exp.location}</p>
                  )}
                </div>
                <span className="text-xs font-medium text-[#475569]">
                  {formatDate(exp.startedAt)} — {exp.endedAt ? formatDate(exp.endedAt) : "Sekarang"}
                </span>
              </div>
              {exp.description && (
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
