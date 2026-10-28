"use client";

import * as React from "react";
import { cn } from "@/shared/lib/utils";

export type CaseTocSection = {
  id: string;
  label: string;
};

interface CaseTocProps {
  sections: readonly CaseTocSection[];
}

/**
 * Daftar isi studi kasus. Desktop sticky dengan `IntersectionObserver`;
 * mobile `<details>`. Tidak dirender bila section < 3.
 */
export function CaseToc({ sections }: CaseTocProps) {
  const [active, setActive] = React.useState<string | null>(null);
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  React.useEffect(() => {
    if (sections.length < 3) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-96px 0px -60% 0px" },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 3) return null;

  const links = (
    <ul className="border-border space-y-0.5 border-l pl-3">
      {sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            aria-current={active === section.id ? "location" : undefined}
            onClick={() => {
              if (detailsRef.current) detailsRef.current.open = false;
            }}
            className={cn(
              "text-muted-foreground hover:text-foreground focus-visible:ring-ring flex min-h-11 items-center gap-2 rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
              active === section.id && "text-foreground font-medium",
            )}
          >
            <span className="font-mono text-[11px] tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{section.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details ref={detailsRef} className="border-border rounded-md border lg:hidden">
        <summary className="focus-visible:ring-ring flex min-h-11 cursor-pointer items-center px-3 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none">
          Daftar isi studi kasus
        </summary>
        <div className="px-3 pb-3">{links}</div>
      </details>

      <nav aria-label="Daftar isi studi kasus" className="hidden lg:block">
        <p className="text-muted-foreground mb-2 font-mono text-[11px] tracking-[0.14em] uppercase">
          Daftar isi
        </p>
        {links}
      </nav>
    </>
  );
}
