"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet";
import { cn } from "@/shared/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Menu mobile berbasis Sheet: fokus trap + Escape + scroll lock dari Radix.
 * Menutup saat route berubah agar fokus kembali ke trigger.
 */
export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();

  React.useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-background w-[min(100%,20rem)] gap-0 p-0">
        <SheetHeader className="border-border border-b pr-14">
          <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
          <SheetDescription className="sr-only">Navigasi utama situs</SheetDescription>
        </SheetHeader>

        <nav
          aria-label="Navigasi mobile"
          className="flex flex-1 flex-col gap-1 overflow-y-auto p-4"
        >
          {siteConfig.navLinks.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-md px-3 text-base transition-colors",
                  active
                    ? "bg-surface-2 text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-border border-t p-4">
          <Button asChild variant="secondary" className="w-full justify-center">
            <Link href="/resume.pdf" download className="flex items-center gap-2">
              <Download className="size-4" aria-hidden="true" />
              <span>Unduh CV</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
