"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { ThemeSwitch } from "./ThemeSwitch";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Header publik: solid 64px, tanpa blur, `aria-current`, CTA Unduh CV,
 * dan Sheet menu di mobile.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="border-border bg-background sticky top-0 z-40 w-full border-b">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <span
            aria-hidden="true"
            className="border-gold/40 bg-card text-gold font-heading flex size-8 items-center justify-center rounded-md border text-sm font-bold"
          >
            RYW
          </span>
          <span className="text-foreground font-heading text-base font-semibold tracking-tight">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="bg-gold absolute right-3 bottom-0 left-3 h-0.5 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitch />
          <Button asChild variant="secondary" size="sm">
            <Link href="/resume.pdf" download className="flex items-center gap-2">
              <Download className="size-4" aria-hidden="true" />
              <span>Unduh CV</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="text-foreground size-11 rounded-md"
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <MobileMenu open={open} onOpenChange={setOpen} />
    </header>
  );
}
