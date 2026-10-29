"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";
import { siteConfig } from "@/shared/constants/siteConfig";

interface ContactPanelProps {
  resumeUrl: string;
}

/** Panel informasi kontak: email + salin, lokasi, waktu respons, jejaring. */
export function ContactPanel({ resumeUrl }: ContactPanelProps) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.socials.email);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section aria-labelledby="info-kontak-title" className="space-y-4">
      <h2 id="info-kontak-title" className="text-foreground font-heading text-xl font-semibold">
        Informasi kontak
      </h2>

      <dl className="border-border divide-border divide-y border-y text-sm">
        <div className="flex items-start justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Email</dt>
          <dd className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="text-foreground hover:text-gold-muted focus-visible:ring-ring rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {siteConfig.socials.email}
            </a>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={copyEmail}
              aria-label="Salin email"
            >
              {copied ? (
                <Check className="text-mint size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
            </Button>
          </dd>
        </div>

        <div className="flex items-start justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Lokasi</dt>
          <dd className="text-foreground text-right">{siteConfig.location} (WIB / UTC+7)</dd>
        </div>

        <div className="flex items-start justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Waktu respons</dt>
          <dd className="text-foreground text-right">Maksimal 1×24 jam kerja</dd>
        </div>

        <div className="flex items-start justify-between gap-4 py-3">
          <dt className="text-muted-foreground shrink-0 text-xs">Jejaring</dt>
          <dd className="flex flex-wrap items-center justify-end gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <GithubIcon className="size-3.5" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <LinkedinIcon className="size-3.5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={resumeUrl}
              download
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              CV
            </a>
          </dd>
        </div>
      </dl>

      <p aria-live="polite" className="text-muted-foreground text-xs">
        {copied ? "Email disalin" : ""}
      </p>
    </section>
  );
}
