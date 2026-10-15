import * as React from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Card } from "@/shared/components/ui/card";
import type { ExperienceItem } from "@/shared/constants/dummyData";

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
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
                  <span>{exp.period}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="border-border/80 text-muted-foreground flex items-center gap-1 text-xs"
                >
                  <MapPin className="size-3" />
                  <span>{exp.location}</span>
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{exp.description}</p>

            <div className="mt-4 space-y-2">
              <h4 className="text-foreground/80 text-xs font-semibold tracking-wider uppercase">
                Pencapaian Kunci:
              </h4>
              <ul className="space-y-1.5">
                {exp.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="text-gold mt-0.5 size-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-border/40 mt-5 flex flex-wrap gap-1.5 border-t pt-3">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border-border/60 bg-secondary/60 text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
