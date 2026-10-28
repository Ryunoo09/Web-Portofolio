import type { Language } from "../../types";

interface LanguageListProps {
  languages: Language[];
}

/** Bahasa sebagai chip: nama + tingkat + skor sebagai teks, tanpa progress bar. */
export function LanguageList({ languages }: LanguageListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {languages.map((language) => (
        <li
          key={language.id}
          className="border-border bg-surface flex items-baseline gap-2 rounded-md border px-3 py-1.5 text-sm"
        >
          <span className="text-foreground font-medium">{language.name}</span>
          <span className="text-muted-foreground text-xs">
            {language.level}
            {language.score ? ` · ${language.score}` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}
