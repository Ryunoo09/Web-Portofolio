"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, X } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Menu mobile memakai `<dialog>` native: fokus terkurung, Escape menutup, dan
 * fokus kembali ke tombol pemicu tanpa pustaka dialog tambahan. Menutup saat
 * route berubah.
 */
export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const titleId = React.useId();

  React.useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // `<dialog>` modal tidak mengunci scroll halaman di belakangnya.
  React.useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => onOpenChange(false)}
      onClick={(event) => {
        if (event.target === dialogRef.current) onOpenChange(false);
      }}
      className="bg-background text-foreground border-border fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[min(100%,20rem)] max-w-none border-l p-0 backdrop:bg-black/60 md:hidden"
    >
      <div className="flex h-full flex-col">
        <div className="border-border flex items-center justify-between border-b py-2 pr-2 pl-4">
          <h2 id={titleId} className="font-heading text-lg">
            Menu
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Tutup menu"
            onClick={() => onOpenChange(false)}
          >
            <X className="size-5" aria-hidden="true" />
          </Button>
        </div>

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
      </div>
    </dialog>
  );
}
