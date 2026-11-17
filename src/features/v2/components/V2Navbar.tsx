"use client";

import Link from "next/link";
import { siteConfig } from "@/shared/constants/siteConfig";
import { CvDownloadMenu } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import type { V2NavbarProps } from "../types";

const NAV_ITEMS = [
  { label: "Beranda", href: "/v2", id: "beranda" },
  { label: "Tentang", href: "/v2#tentang", id: "tentang" },
  { label: "Portfolio", href: "/v2#proyek", id: "proyek" },
  { label: "Pendidikan", href: "/v2#pendidikan", id: "pendidikan" },
  { label: "Pengalaman", href: "/v2#pengalaman", id: "pengalaman" },
  { label: "Skill", href: "/v2#skill", id: "skill" },
  { label: "Kontak", href: "/v2#kontak", id: "kontak" },
];

export function V2Navbar({ activeSection = "beranda" }: V2NavbarProps) {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 md:px-8">
      <nav
        aria-label="Navigasi utama V2"
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between rounded-full border border-white/60 bg-white/90 px-5 shadow-sm backdrop-blur-md md:px-7"
      >
        <Link href="/v2" className="font-heading text-xl font-bold tracking-tight text-[#0F172A]">
          rakha.dev
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className={isActive ? "hidden lg:block" : ""}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  data-active={isActive || undefined}
                  className={cn(
                    "flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors",
                    "data-[active]:bg-[#FEF3C7] data-[active]:font-bold data-[active]:text-[#8A6A1F]",
                    "text-[#475569] hover:text-[#0F172A]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <CvDownloadMenu
            variant="secondary"
            size="sm"
            className="rounded-full border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#FDFBF9]"
          />
        </div>
      </nav>

      <p className="sr-only">{siteConfig.description}</p>
    </header>
  );
}
