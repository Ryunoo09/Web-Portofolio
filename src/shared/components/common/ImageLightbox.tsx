"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

/**
 * Thumbnail yang bisa ditekan untuk melihat foto ukuran penuh tanpa dipotong.
 * Memakai Dialog (Radix) yang sudah ada: Esc/klik luar menutup, fokus terjaga.
 */
export function ImageLightbox({ src, alt, children }: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Perbesar: ${alt}`}
          className="focus-visible:ring-ring block w-full cursor-zoom-in rounded-lg focus-visible:ring-2 focus-visible:outline-none"
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="border-0 bg-transparent p-0 shadow-none sm:max-w-5xl">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative h-[80vh] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
