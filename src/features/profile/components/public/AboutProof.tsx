export type AboutFact = {
  value: string;
  label: string;
};

interface AboutProofProps {
  bio: string | null;
  facts: readonly AboutFact[];
}

function toParagraphs(text: string | null): string[] {
  if (!text) return [];
  return text
    .replace(/\r\n?/g, "\n")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

/**
 * Bio + tiga fakta. Bio tidak pernah dikarang: bila kosong, tampilkan satu
 * kalimat jujur bahwa bio belum diisi.
 */
export function AboutProof({ bio, facts }: AboutProofProps) {
  const paragraphs = toParagraphs(bio);

  return (
    <div className="space-y-8">
      <div className="text-muted-foreground max-w-[68ch] space-y-4 text-base leading-relaxed sm:text-lg">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        ) : (
          <p>Bio belum diisi.</p>
        )}
      </div>

      {facts.length > 0 && (
        <dl className="border-border grid grid-cols-1 gap-4 border-y py-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <dt className="text-muted-foreground order-2 text-xs">{fact.label}</dt>
              <dd className="text-foreground font-heading order-1 text-2xl font-semibold tracking-tight tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
