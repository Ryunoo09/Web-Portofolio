import * as React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import type { EducationItem } from "@/shared/constants/dummyData";

interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="card-luxury border-border/80 bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl border">
            <GraduationCap className="size-6" />
          </div>
          <div>
            <h3 className="text-foreground font-heading text-lg font-bold sm:text-xl">
              {education.degree}
            </h3>
            <p className="text-gold/90 text-sm font-medium">{education.institution}</p>
          </div>
        </div>

        <Badge
          variant="outline"
          className="border-border/80 text-muted-foreground flex shrink-0 items-center gap-1 text-xs"
        >
          <Calendar className="size-3" />
          <span>{education.period}</span>
        </Badge>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
        <Award className="size-4" />
        <span>{education.grade}</span>
      </div>

      <p className="text-muted-foreground mt-3 text-xs leading-relaxed sm:text-sm">
        {education.description}
      </p>

      <div className="border-border/40 mt-4 flex flex-wrap gap-1.5 border-t pt-3">
        {education.relevantCourses.map((c) => (
          <span
            key={c}
            className="border-border/60 bg-secondary/50 text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-[11px]"
          >
            {c}
          </span>
        ))}
      </div>
    </Card>
  );
}
