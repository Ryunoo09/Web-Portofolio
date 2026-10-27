import * as React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { formatPeriod } from "@/shared/lib/utils";
import type { Education } from "../../types";

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  const period = formatPeriod(education.startedAt, education.endedAt);

  return (
    <Card className="border-border/80 bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl border">
            <GraduationCap className="size-6" />
          </div>
          <div>
            <h3 className="text-foreground font-heading text-lg font-bold sm:text-xl">
              {education.degree}
            </h3>
            <p className="text-gold-muted text-sm font-medium">{education.institution}</p>
            {education.field && (
              <p className="text-muted-foreground mt-0.5 text-xs">{education.field}</p>
            )}
          </div>
        </div>

        <Badge
          variant="outline"
          className="border-border/80 text-muted-foreground flex shrink-0 items-center gap-1 text-xs"
        >
          <Calendar className="size-3" />
          <span>{period}</span>
        </Badge>
      </div>

      {education.description && (
        <p className="text-muted-foreground mt-4 text-xs leading-relaxed sm:text-sm">
          {education.description}
        </p>
      )}
    </Card>
  );
}
