import { BulletPoints, MediaFrame } from "@/shared/components";
import { formatMonthPeriod } from "@/shared/lib/utils";
import type { Experience } from "../../types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

/** Pengalaman kerja sebagai `<ol>` kronologis: periode di kiri, isi di kanan. */
export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <ol className="border-border divide-border divide-y border-y">
      {experiences.map((experience) => (
        <li key={experience.id} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
          <div className="text-muted-foreground space-y-1 font-mono text-[11px] tracking-[0.14em] uppercase">
            <p>{formatMonthPeriod(experience.startedAt, experience.endedAt)}</p>
            {experience.location && <p>{experience.location}</p>}
          </div>

          <div>
            <h3 className="text-foreground font-heading text-lg font-semibold">
              {experience.role}
            </h3>
            <p className="text-gold-muted mt-0.5 text-sm font-medium">{experience.company}</p>
            {experience.description && (
              <BulletPoints
                text={experience.description}
                className="text-muted-foreground mt-3 text-sm leading-relaxed"
              />
            )}
            {experience.images.length > 0 && (
              <ul
                data-slot="experience-gallery"
                className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3"
              >
                {experience.images.map((image) => (
                  <li key={image.id}>
                    <MediaFrame
                      src={image.url}
                      alt={image.alt}
                      aspect="4/3"
                      sizes="(min-width: 640px) 220px, 45vw"
                      fallback={null}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
