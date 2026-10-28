import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FACTS = [
  "Magang · Indosat Ooredoo Hutchison · 2025",
  "Politeknik Negeri Semarang",
  "Brebes, Jawa Tengah",
] as const;

/**
 * Strip konteks manusia: pengalaman industri, pendidikan, dan lokasi.
 * Bukan empat kartu ikon — hanya teks dan satu tautan ke profil.
 */
export function AboutStrip() {
  return (
    <section aria-labelledby="about-strip-title" className="grid gap-8 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-7">
        <h2
          id="about-strip-title"
          className="text-foreground font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Dari Indosat ke lapangan.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[62ch] text-sm leading-relaxed sm:text-base">
          Magang Backend Developer di Divisi Automation, PT Indosat Ooredoo Hutchison (Circle Java),
          2025. Membangun chatbot report, Elang HUB, AIFI, dan DSE AI untuk tim sales lapangan.
        </p>
        <Link
          href="/about"
          className="text-gold-muted hover:text-foreground focus-visible:ring-ring mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span>Baca profil lengkap</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="border-border divide-border divide-y border-y text-sm md:col-span-5 md:self-start">
        {FACTS.map((fact) => (
          <li key={fact} className="py-3">
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}
