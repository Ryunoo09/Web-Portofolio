import * as React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { siteConfig } from "@/shared/constants/siteConfig";
import { PageContainer } from "@/shared/components/common/PageContainer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/40 bg-card/40 mt-auto border-t transition-colors">
      <PageContainer className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="border-gold/40 bg-card text-gold flex size-8 items-center justify-center rounded-lg border font-serif text-base font-bold">
                R
              </div>
              <span className="text-foreground font-serif text-lg font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Membangun aplikasi web berperforma tinggi, skalabel, dan elegan dengan pendekatan
              clean code dan arsitektur modern berbasis Next.js dan TypeScript.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
              <span>{siteConfig.availability}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-foreground font-serif text-sm font-semibold tracking-wider uppercase">
              Navigasi
            </h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold underline-offset-4 transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h3 className="text-foreground font-serif text-sm font-semibold tracking-wider uppercase">
              Koneksi
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="text-muted-foreground hover:text-gold flex items-center gap-2 transition-colors"
                >
                  <Mail className="text-gold/70 size-4" />
                  <span>{siteConfig.socials.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="text-gold/70 size-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="text-muted-foreground/60 size-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="text-gold/70 size-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="text-muted-foreground/60 size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border/30 text-muted-foreground mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row">
          <p>
            &copy; {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-gold size-3.5" />
            <span>Built with Next.js App Router, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
