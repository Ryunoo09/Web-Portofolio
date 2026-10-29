"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

const emptySubscribe = () => () => {};

interface ThemeSwitchProps {
  className?: string;
}

/**
 * Toggle dark/light 44×44 dengan label dinamis.
 * Placeholder 44×44 tanpa ikon agar tidak ada layout shift.
 */
export function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={cn("border-border/40 size-11 shrink-0 rounded-md border", className)}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      data-slot="theme-switch"
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      className={cn(
        "border-border/40 text-foreground hover:border-gold/50 hover:text-gold size-11 shrink-0 rounded-md border transition-opacity duration-150",
        className,
      )}
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </Button>
  );
}
