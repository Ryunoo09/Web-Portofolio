import * as React from "react";
import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { getSkillLevelLabel } from "../../levels";
import type { Skill } from "../../types";

const LEVEL_STEPS = [1, 2, 3, 4, 5];

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

interface SkillsByCategoryProps {
  skills: Skill[];
}

/** Satu kartu per kategori — jauh lebih ringkas daripada satu kartu per skill. */
export function SkillsByCategory({ skills }: SkillsByCategoryProps) {
  const groups = groupSkillsByCategory(skills);
  if (groups.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map(({ category, skills: items }) => (
        <Card key={category} className="card-luxury border-border/80 bg-card flex flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-foreground font-heading text-base font-bold tracking-tight">
              {category}
            </h2>
            <Badge
              variant="outline"
              className="border-gold/30 bg-gold/5 text-gold shrink-0 font-mono text-[11px]"
            >
              {items.length}
            </Badge>
          </div>

          <ul className="mt-4 space-y-2.5">
            {items.map((skill) => (
              <li key={skill.id} className="flex items-center justify-between gap-3">
                <span
                  className="text-foreground/90 min-w-0 flex-1 truncate text-sm"
                  title={skill.name}
                >
                  {skill.name}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="sr-only">Tingkat {skill.level} dari 5</span>
                  <span className="text-muted-foreground w-[4.5rem] text-right text-[11px]">
                    {getSkillLevelLabel(skill.level)}
                  </span>
                  <span className="flex items-center gap-1" aria-hidden="true">
                    {LEVEL_STEPS.map((step) => (
                      <span
                        key={step}
                        className={cn(
                          "size-1.5 rounded-full",
                          step <= skill.level ? "bg-gold" : "bg-border",
                        )}
                      />
                    ))}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
