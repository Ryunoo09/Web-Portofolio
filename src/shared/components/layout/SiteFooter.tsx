import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { resolveSocialLinks, type SocialProfile } from "@/shared/lib/social-links";
import { PageContainer } from "@/shared/components/common/PageContainer";
import { CvDownloadLinks } from "../common/CvDownloadLinks";
import { SocialLinks } from "../common/SocialLinks";

interface SiteFooterProps {
  profile?: SocialProfile | null;
}

/**
 * Footer publik: 3 kolom, copy Backend/Data, tanpa badge/gradient.
 */
export function SiteFooter({ profile }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const socialLinks = resolveSocialLinks(profile);
  const email = profile?.email?.trim() || siteConfig.socials.email;
  const location = profile?.location?.trim() || siteConfig.location;

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
              Software Engineer yang membangun backend dan data untuk masalah nyata.
            </p>
            <p className="text-muted-foreground text-sm">{location}</p>
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
                  href={`mailto:${email}`}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <SocialLinks links={socialLinks} />
              </li>
              <li>
                <CvDownloadLinks className="text-sm" />
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
