import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CredentialRowProps {
  title: string;
  subtitle?: string | null;
  period?: string | null;
  description?: string | null;
  href?: string | null;
  linkLabel?: string;
  imageUrl?: string | null;
  meta?: string | null;
}

/**
 * Satu baris kredensial (pendidikan, sertifikat, organisasi). Tanpa kartu besar;
 * thumbnail 80×56 hanya dipakai bila sertifikat punya gambar.
 */
export function CredentialRow({
  title,
  subtitle,
  period,
  description,
  href,
  linkLabel = "Verifikasi sertifikat",
  imageUrl,
  meta,
}: CredentialRowProps) {
  return (
    <li className="grid gap-3 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5">
      {imageUrl && (
        <div className="bg-surface-2 relative h-14 w-20 shrink-0 overflow-hidden rounded-sm">
          <Image
            src={imageUrl}
            alt={`Sertifikat ${title}`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      )}

      <div className="min-w-0">
        <h3 className="text-foreground font-heading text-base font-semibold">{title}</h3>
        {subtitle && <p className="text-gold-muted mt-0.5 text-sm">{subtitle}</p>}
        {meta && <p className="text-muted-foreground mt-0.5 text-xs">{meta}</p>}
        {description && (
          <p className="text-muted-foreground mt-2 max-w-[68ch] text-sm leading-relaxed">
            {description}
          </p>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-gold-muted hover:text-foreground focus-visible:ring-ring mt-2 inline-flex items-center gap-1 rounded-sm text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <span>{linkLabel}</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </div>

      {period && (
        <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase sm:text-right">
          {period}
        </p>
      )}
    </li>
  );
}
