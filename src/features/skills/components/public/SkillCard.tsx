import * as React from "react";
import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import type { SkillItem } from "@/shared/constants/dummyData";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="card-luxury border-border/80 bg-card relative flex flex-col justify-between overflow-hidden rounded-xl border p-5 transition-all duration-300 sm:p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="border-gold/30 bg-gold/5 text-gold font-mono text-[11px] font-medium"
          >
            {skill.category}
          </Badge>
          <span className="text-muted-foreground text-xs font-semibold">{skill.proficiency}</span>
        </div>

        <div>
          <h3 className="text-foreground font-heading text-lg font-bold tracking-tight">
            {skill.name}
          </h3>
          <p className="text-muted-foreground mt-1.5 line-clamp-2 text-xs leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Progress level bar */}
      <div className="border-border/40 mt-5 space-y-1.5 border-t pt-3">
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="text-muted-foreground">Kemahiran</span>
          <span className="text-gold font-semibold">{skill.level}%</span>
        </div>
        <div className="bg-secondary/80 h-1.5 w-full overflow-hidden rounded-full">
          <div
            className="from-gold via-gold/90 h-full rounded-full bg-gradient-to-r to-amber-300 transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
