import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { ProjectImage } from "../../types";

interface ProjectGalleryProps {
  images: ProjectImage[];
  /** Dipakai sebagai cadangan teks alternatif bila admin belum mengisinya. */
  projectTitle?: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-foreground font-heading flex items-center gap-2 text-2xl font-bold">
        <ImageIcon className="text-gold size-5" aria-hidden="true" />
        Galeri Proyek
      </h2>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => {
          const alt = image.alt || `${projectTitle ?? "Proyek"} — gambar ${index + 1}`;

          return (
            <li key={image.id}>
              <figure className="card-luxury border-border/80 bg-card overflow-hidden rounded-xl border">
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-ring group relative block aspect-video focus-visible:ring-2 focus-visible:outline-none"
                  aria-label={`Buka gambar ${index + 1} di tab baru`}
                >
                  <Image
                    src={image.url}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                <figcaption className="flex items-start justify-between gap-3 px-4 py-3">
                  <span className="text-muted-foreground line-clamp-2 text-xs">{alt}</span>
                  <a
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold focus-visible:ring-ring inline-flex shrink-0 items-center gap-1 rounded-sm text-xs font-semibold focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span>Buka</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
