import Link from "next/link";
import { getProjectShortLabel, pickProjectsBySlug } from "@/features/projects";
import type { Project } from "@/features/projects";
import { slugify } from "@/shared/lib/utils";
import { CAPABILITY_GROUPS } from "../../capabilities";
import { getSkillLevelLabel } from "../../levels";
import type { Skill } from "../../types";

export type SkillCategoryGroup = {
  category: string;
  skills: Skill[];
};

/**
 * Kelompokkan skill per kategori. Urutan kategori mengikuti kemunculan pertama,
 * sehingga urutan `sort_order` dari database tetap terjaga.
 */
export function groupSkillsByCategory(skills: Skill[]): SkillCategoryGroup[] {
  const groups = new Map<string, Skill[]>();

  for (const skill of skills) {
    const bucket = groups.get(skill.category);
    if (bucket) bucket.push(skill);
    else groups.set(skill.category, [skill]);
  }

  return Array.from(groups, ([category, items]) => ({ category, skills: items }));
}

/** Indeks balik nama skill → proyek yang memakainya (cocokkan tanpa beda huruf besar). */
export function buildSkillProofIndex(projects: readonly Project[]): Map<string, Project[]> {
  const index = new Map<string, Project[]>();

  for (const project of projects) {
    for (const skill of project.skills) {
      const key = skill.name.trim().toLowerCase();
      const list = index.get(key) ?? [];
      list.push(project);
      index.set(key, list);
    }
  }

  return index;
}

const MAX_PROOFS = 2;

interface CapabilityBoardProps {
  skills: Skill[];
  learningSkills: Skill[];
  projects: readonly Project[];
}

/**
 * Papan kemampuan: statistik ringkas → 4 capability group dengan bukti proyek →
 * kategori teknis (rows) → sedang dipelajari. Tanpa progress bar dan tanpa kartu
 * per skill; skill tanpa proyek ditulis jujur "Belum ada studi kasus".
 */
export function CapabilityBoard({ skills, learningSkills, projects }: CapabilityBoardProps) {
  const categories = groupSkillsByCategory(skills);
  const proofIndex = buildSkillProofIndex(projects);

  return (
    <div className="space-y-10">
      <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
        {skills.length} keahlian · {categories.length} kategori · {learningSkills.length} sedang
        dipelajari
      </p>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {CAPABILITY_GROUPS.map((group) => {
          const proofs = pickProjectsBySlug(projects, group.proofSlugs);
          const id = `kemampuan-${slugify(group.title)}`;

          return (
            <section key={group.title} aria-labelledby={id} className="border-border border-t pt-4">
              <h2 id={id} className="text-foreground font-heading text-lg font-semibold">
                {group.title}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {group.description}
              </p>
              {proofs.length > 0 && (
                <p className="text-muted-foreground mt-3 text-xs">
                  Dipakai di{" "}
                  {proofs.map((project, index) => (
                    <span key={project.slug}>
                      {index > 0 && (index === proofs.length - 1 ? ", dan " : ", ")}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {getProjectShortLabel(project.slug, project.title)}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
              )}
            </section>
          );
        })}
      </div>

      <section aria-labelledby="kategori-teknis-title" className="space-y-5">
        <h2
          id="kategori-teknis-title"
          className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Kategori teknis
        </h2>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {categories.map(({ category, skills: items }) => {
            const id = `kategori-${slugify(category)}`;

            return (
              <section key={category} aria-labelledby={id}>
                <h3
                  id={id}
                  className="border-border flex items-baseline justify-between gap-3 border-b pb-2"
                >
                  <span className="text-foreground font-heading text-base font-semibold">
                    {category}
                  </span>
                  <span className="text-muted-foreground font-mono text-[11px] tabular-nums">
                    {items.length}
                  </span>
                </h3>

                <ul className="divide-border divide-y">
                  {items.map((skill) => {
                    const proofs = proofIndex.get(skill.name.trim().toLowerCase()) ?? [];
                    const extra = proofs.length - MAX_PROOFS;

                    return (
                      <li
                        key={skill.id}
                        className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span className="flex items-baseline gap-2">
                          <span className="text-foreground text-sm">{skill.name}</span>
                          <span className="text-muted-foreground text-[11px]">
                            {getSkillLevelLabel(skill.level)}
                          </span>
                        </span>

                        <span className="text-muted-foreground text-xs sm:text-right">
                          {proofs.length > 0 ? (
                            <>
                              <span className="sr-only">Dipakai di: </span>
                              {proofs.slice(0, MAX_PROOFS).map((project, index) => (
                                <span key={project.slug}>
                                  {index > 0 && ", "}
                                  <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                                  >
                                    {getProjectShortLabel(project.slug, project.title)}
                                  </Link>
                                </span>
                              ))}
                              {extra > 0 && <span> +{extra}</span>}
                            </>
                          ) : (
                            "Belum ada studi kasus"
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      {learningSkills.length > 0 && (
        <section aria-labelledby="sedang-dipelajari-title" className="space-y-3">
          <h2
            id="sedang-dipelajari-title"
            className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Sedang dipelajari
          </h2>
          <ul className="flex flex-wrap gap-2">
            {learningSkills.map((skill) => (
              <li
                key={skill.id}
                className="border-border bg-surface text-muted-foreground rounded-md border px-3 py-1.5 text-sm"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
