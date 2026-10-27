import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface SectionIntroProps {
  title: string;
  highlight?: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  /**
   * Tingkat judul. Default `h2`.
   * `h1` hanya untuk header halaman sampai halaman publik dirapikan di M6.
   */
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}

/**
 * Pengganti `SectionHeading`: tanpa badge, dot pulse, gradient, atau garis.
 * Hanya judul + deskripsi + aksi opsional.
 */
export function SectionIntro({
  title,
  highlight,
  description,
  action,
  align = "left",
  as: Heading = "h2",
  className,
  id,
}: SectionIntroProps) {
  const isCenter = align === "center";
  const titleSize =
    Heading === "h1" ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl md:text-4xl";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Heading
        id={id}
        className={cn(
          "text-foreground font-heading max-w-3xl font-semibold tracking-tight",
          titleSize,
        )}
      >
        {title} {highlight && <span className="text-gold-muted">{highlight}</span>}
      </Heading>

      {description && (
        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      )}

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
