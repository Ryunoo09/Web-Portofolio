import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 flex flex-col md:mb-14",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && (
        <div className="border-gold/30 bg-gold/5 text-gold mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          <span className="bg-gold size-1.5 animate-pulse rounded-full" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-foreground font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {title} {highlight && <span className="gold-gradient-text italic">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      )}

      <div
        className={cn(
          "from-gold via-gold/60 mt-4 h-0.5 w-12 bg-gradient-to-r to-transparent",
          isCenter && "mx-auto",
        )}
      />
    </div>
  );
}
