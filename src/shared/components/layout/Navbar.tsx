"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-border/40 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          id="navbar-brand-link"
        >
          <div className="border-gold/40 bg-card text-gold group-hover:border-gold font-heading flex size-9 items-center justify-center rounded-lg border text-lg font-bold shadow-xs">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-foreground font-heading text-base font-bold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-gold text-[10px] font-medium tracking-widest uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 text-sm font-medium md:flex"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative cursor-pointer rounded-md px-3.5 py-1.5 transition-all duration-200",
                  isActive
                    ? "text-gold font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="bg-gold absolute right-3.5 bottom-0 left-3.5 h-0.5 rounded-full shadow-xs" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="bg-gold/15 text-gold border-gold/40 hover:bg-gold hover:text-primary-foreground cursor-pointer rounded-full border px-4 text-xs font-semibold transition-all duration-200"
          >
            <Link href="/contact" className="flex items-center gap-1.5">
              <span>Konsultasi</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Actions & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground size-9 cursor-pointer rounded-md"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-border/60 bg-card/95 animate-in slide-in-from-top-2 border-b px-4 pt-3 pb-6 shadow-xl backdrop-blur-lg duration-200 md:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-base transition-colors",
                    isActive
                      ? "bg-gold/10 text-gold font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="text-gold size-4" />}
                </Link>
              );
            })}
            <div className="border-border/40 mt-3 border-t pt-3">
              <Button
                asChild
                onClick={closeMobileMenu}
                className="bg-gold text-primary-foreground hover:bg-gold/90 w-full justify-center rounded-lg py-2 font-semibold transition-colors"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Hubungi Saya</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
