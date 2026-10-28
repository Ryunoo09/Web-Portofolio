import Link from "next/link";

interface ContactPathsProps {
  resumeUrl: string;
}

/** Dua jalur kontak sebagai baris bergaris, bukan dua kartu identik. */
export function ContactPaths({ resumeUrl }: ContactPathsProps) {
  return (
    <section aria-labelledby="jalur-kontak-title" className="space-y-4">
      <h2
        id="jalur-kontak-title"
        className="text-foreground font-heading text-xl font-semibold tracking-tight sm:text-2xl"
      >
        Pilih jalur
      </h2>

      <ul className="border-border divide-border divide-y border-y">
        <li className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6">
          <h3 className="text-foreground font-heading text-base font-semibold">Rekruter</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            CV, pengalaman, dan kesiapan untuk peran Backend/Data.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={resumeUrl}
              download
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Unduh CV
            </a>
            <a
              href="#kirim-pesan"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Email
            </a>
          </div>
        </li>

        <li className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6">
          <h3 className="text-foreground font-heading text-base font-semibold">Kolaborasi</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Proyek, otomasi, serta pekerjaan backend dan data.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#kirim-pesan"
              className="text-gold-muted hover:text-foreground focus-visible:ring-ring rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Hubungi saya
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
