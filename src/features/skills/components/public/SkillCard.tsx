import * as React from "react";
import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import { getSkillLevelLabel } from "../../levels";
import type { Skill } from "../../types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="border-border/80 bg-card relative flex flex-col justify-between overflow-hidden rounded-xl border p-4 transition-all duration-300">
      <div className="space-y-2.5">
        <Badge
          variant="outline"
          className="border-gold/30 bg-gold/5 text-gold font-mono text-[11px] font-medium"
        >
          {skill.category}
        </Badge>

        <h2 className="text-foreground font-heading text-base font-bold tracking-tight">
          {skill.name}
        </h2>
      </div>

      {/* Tingkat kemahiran (skala 1-5) */}
      <div className="border-border/40 mt-3 space-y-1.5 border-t pt-3">
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="text-muted-foreground">Kemahiran</span>
          <span>
            <span className="text-gold font-semibold">{getSkillLevelLabel(skill.level)}</span>
            {skill.level >= 1 && <span className="text-muted-foreground"> · {skill.level}/5</span>}
          </span>
        </div>
        <div className="bg-secondary/80 h-1.5 w-full overflow-hidden rounded-full">
          <div
            className="from-gold via-gold/90 h-full rounded-full bg-gradient-to-r to-amber-300 transition-all duration-500"
            style={{ width: `${skill.level * 20}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
