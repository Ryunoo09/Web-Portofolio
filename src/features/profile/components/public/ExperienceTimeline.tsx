import * as React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import { formatPeriod } from "@/shared/lib/utils";
import type { Experience } from "../../types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="before:from-gold before:via-gold/40 relative space-y-8 before:absolute before:inset-0 before:left-3.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:to-transparent sm:before:left-4">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative flex items-start gap-4 pl-8 sm:gap-6 sm:pl-10">
          {/* Timeline node */}
          <div className="border-gold bg-background absolute top-1 left-1.5 flex size-5 -translate-x-1/2 items-center justify-center rounded-full border-2 sm:left-2">
            <div className="bg-gold size-2 rounded-full" />
          </div>

          <Card className="card-luxury border-border/80 bg-card w-full p-6">
            <div className="border-border/40 flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-gold font-mono text-xs font-medium tracking-wider uppercase">
                  {exp.company}
                </span>
                <h3 className="text-foreground font-heading text-xl font-bold">{exp.role}</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-border/80 text-muted-foreground flex items-center gap-1 text-xs"
                >
                  <Calendar className="size-3" />
                  <span>{formatPeriod(exp.startedAt, exp.endedAt)}</span>
                </Badge>
                {exp.location && (
                  <Badge
                    variant="outline"
                    className="border-border/80 text-muted-foreground flex items-center gap-1 text-xs"
                  >
                    <MapPin className="size-3" />
                    <span>{exp.location}</span>
                  </Badge>
                )}
              </div>
            </div>

            {exp.description && (
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                {exp.description}
              </p>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
