"use client";

import * as React from "react";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export type TickerItem = {
  href: string;
  label: string;
  detail?: string;
};

interface SignalTickerProps {
  items: readonly TickerItem[];
}

function TickerLink({ item, duplicate = false }: { item: TickerItem; duplicate?: boolean }) {
  return (
    <li className="flex shrink-0 items-center gap-8">
      <Link
        href={item.href}
        tabIndex={duplicate ? -1 : undefined}
        className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex min-h-6 items-baseline gap-2 rounded-sm py-0.5 text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-none"
      >
        <span className="text-foreground">{item.label}</span>
        {item.detail && <span className="text-muted-foreground text-xs">— {item.detail}</span>}
      </Link>
      <span className="bg-border size-1 rounded-full" aria-hidden="true" />
    </li>
  );
}

/**
 * Ticker studi kasus nyata. Animasi CSS hanya di desktop, bisa dijeda, dan mati
 * saat `prefers-reduced-motion`. Mobile memakai daftar statis.
 */
export function SignalTicker({ items }: SignalTickerProps) {
  const [paused, setPaused] = React.useState(false);

  if (items.length === 0) return null;

  return (
    <section aria-label="Studi kasus" className="border-border border-y">
      <div className="flex flex-col gap-2 py-3 md:flex-row md:items-center md:gap-4">
        <span className="text-muted-foreground shrink-0 font-mono text-[11px] tracking-[0.14em] uppercase">
          Studi kasus
        </span>

        <ul className="grid flex-1 grid-cols-2 gap-x-4 gap-y-1.5 md:hidden">
          {items.map((item) => (
            <li key={item.href} className="min-w-0 truncate">
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="group relative hidden min-w-0 flex-1 overflow-hidden md:block">
          <div
            className={cn(
              "animate-ticker flex w-max group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none",
              paused && "[animation-play-state:paused]",
            )}
          >
            <ul className="flex shrink-0 items-center gap-8 pr-8">
              {items.map((item) => (
                <TickerLink key={item.href} item={item} />
              ))}
            </ul>
            <ul
              aria-hidden="true"
              className="flex shrink-0 items-center gap-8 pr-8 motion-reduce:hidden"
            >
              {items.map((item) => (
                <TickerLink key={`dup-${item.href}`} item={item} duplicate />
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? "Lanjutkan ticker" : "Jeda ticker"}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring relative z-10 hidden size-8 shrink-0 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none motion-reduce:hidden! md:inline-flex"
        >
          {paused ? (
            <Play className="size-4" aria-hidden="true" />
          ) : (
            <Pause className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
