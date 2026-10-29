import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { siteConfig } from "@/shared/constants/siteConfig";
import { PageContainer } from "@/shared/components/common/PageContainer";

/**
 * Footer publik: 3 kolom, copy Backend/Data, tanpa badge/gradient.
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface mt-auto border-t">
      <PageContainer className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-8">
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="border-gold/40 bg-card text-gold font-heading flex size-8 items-center justify-center rounded-md border text-sm font-bold"
              >
                RYW
              </span>
              <span className="text-foreground font-heading text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Backend, data, dan otomasi untuk masalah nyata.
            </p>
            <p className="text-muted-foreground text-sm">{siteConfig.location}</p>
          </div>

          <nav aria-label="Navigasi footer" className="space-y-3 md:col-span-3">
            <h2 className="text-foreground font-heading text-sm font-semibold">Navigasi</h2>
            <ul className="text-muted-foreground space-y-2 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 md:col-span-4">
            <h2 className="text-foreground font-heading text-sm font-semibold">Kontak</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span>{siteConfig.socials.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="size-4 shrink-0" />
                  <span>GitHub</span>
                  <ArrowUpRight className="size-3 shrink-0" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="size-4 shrink-0" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-3 shrink-0" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Download className="size-4 shrink-0" aria-hidden="true" />
                  <span>Unduh CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}
          </p>
          <p>Dibangun dengan Next.js, Supabase, Tailwind.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
