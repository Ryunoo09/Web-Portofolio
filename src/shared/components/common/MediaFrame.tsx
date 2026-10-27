import * as React from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

interface MediaFrameProps {
  src?: string | null;
  alt: string;
  aspect?: "16/9" | "16/10" | "4/3" | "1/1";
  priority?: boolean;
  sizes: string;
  caption?: string;
  fallback: React.ReactNode;
  className?: string;
}

const aspectClasses = {
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
} as const;

/**
 * Gambar + fallback jujur. `src` null tidak pernah merender `<img src="">`.
 * `aspect-ratio` wajib untuk mencegah CLS.
 */
export function MediaFrame({
  src,
  alt,
  aspect = "16/9",
  priority = false,
  sizes,
  caption,
  fallback,
  className,
}: MediaFrameProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div
        className={cn(
          "bg-surface-2 border-border relative w-full overflow-hidden rounded-lg border",
          aspectClasses[aspect],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0">{fallback}</div>
        )}
      </div>
      {caption && <figcaption className="text-muted-foreground text-xs">{caption}</figcaption>}
    </figure>
  );
}
