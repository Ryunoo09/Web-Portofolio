import { CV_DOWNLOAD_PATHS } from "@/shared/constants/downloads";
import { cn } from "@/shared/lib/utils";

interface CvDownloadLinksProps {
  className?: string;
}

/** Dua tautan CV untuk tempat teks (footer dan panel kontak). */
export function CvDownloadLinks({ className }: CvDownloadLinksProps) {
  return (
    <span className={cn("inline-flex flex-wrap items-center gap-x-2 gap-y-1", className)}>
      <a
        href={CV_DOWNLOAD_PATHS.id}
        download
        className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        CV Bahasa Indonesia
      </a>
      <span className="text-border" aria-hidden="true">
        /
      </span>
      <a
        href={CV_DOWNLOAD_PATHS.en}
        download
        className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        CV Bahasa Inggris
      </a>
    </span>
  );
}
