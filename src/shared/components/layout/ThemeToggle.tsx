"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/shared/components/ui/button";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground size-9 rounded-full"
        aria-label="Toggle theme"
      >
        <span className="size-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border-border/40 text-foreground hover:border-gold/40 hover:bg-gold/10 hover:text-gold relative size-9 cursor-pointer rounded-full border transition-colors"
      aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      id="theme-toggle-btn"
    >
      {isDark ? (
        <Sun className="text-gold size-4 scale-100 rotate-0 transition-transform duration-300" />
      ) : (
        <Moon className="text-foreground size-4 scale-100 rotate-0 transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
