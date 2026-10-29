import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "../../types";

interface ProofStripProps {
  project: Project | null;
}

/** Angka terverifikasi Big Data Kualitas Air (04 §11.1). */
const PROOF_STATS = [
  { value: "1,2 juta+", label: "baris data" },
  { value: "88,62%", label: "akurasi model" },
  { value: "0,86", label: "AUC" },
] as const;

/**
 * Strip bukti angka. Tidak dirender bila proyek sumbernya tidak ada —
 * angka tanpa rujukan tidak boleh tampil.
 */
export function ProofStrip({ project }: ProofStripProps) {
  if (!project) return null;

  return (
    <section aria-labelledby="proof-strip-title" className="border-border border-y">
      <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
            Bukti data
          </p>
          <h2
            id="proof-strip-title"
            className="text-foreground font-heading mt-2 text-lg font-semibold"
          >
            {project.title}
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PROOF_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-muted-foreground text-[13px]">{stat.label}</dt>
                <dd className="font-heading text-gold-muted text-2xl font-semibold tracking-tight tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex shrink-0 items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span>Baca studi kasus</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
