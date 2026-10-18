import * as React from "react";
import { Languages } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import type { Language } from "../../types";

interface LanguageListProps {
  languages: Language[];
}

/** Daftar bahasa sebagai chip: nama + tingkat + skor opsional. */
export function LanguageList({ languages }: LanguageListProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {languages.map((language) => (
        <li
          key={language.id}
          className="border-border/80 bg-card flex items-center gap-3 rounded-xl border px-4 py-3"
        >
          <Languages className="text-gold size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-foreground text-sm font-semibold">{language.name}</p>
            <p className="text-muted-foreground text-xs">
              {language.level}
              {language.score ? ` · ${language.score}` : ""}
            </p>
          </div>
          {language.score ? (
            <Badge
              variant="outline"
              className="border-gold/30 text-gold ml-1 font-mono text-[11px]"
            >
              {language.score}
            </Badge>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
