import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/shared/components";
import type { Project } from "../../types";

interface CapabilitiesProps {
  projects: readonly Project[];
}

/**
 * Tiga baris kemampuan utama. Bukti hanya ditautkan bila proyeknya benar-benar
 * ada; jika tidak, tulis "Bukti menyusul" tanpa tautan palsu.
 */
const CAPABILITIES = [
  {
    name: "Backend & API",
    description: "API yang aman, validasi input, otorisasi peran, dan database yang bisa dirawat.",
    stack: "FastAPI · Laravel · PostgreSQL",
    proofs: [
      { slug: "validasi-ftth-yolo26-paddleocr", label: "Validasi FTTH" },
      { slug: "sirata", label: "SIRATA" },
      { slug: "dse-ai", label: "DSE AI" },
    ],
  },
  {
    name: "Data & Automation",
    description: "Pipeline data, pembersihan, evaluasi model, dan otomasi laporan.",
    stack: "PySpark · pandas · n8n",
    proofs: [
      { slug: "analisis-prediktif-kualitas-air", label: "Big Data Kualitas Air" },
      { slug: "chatbot-report-automation", label: "Chatbot Report" },
    ],
  },
  {
    name: "Applied AI & CV",
    description: "Deteksi objek, OCR, dan evaluasi model untuk menggantikan pengecekan manual.",
    stack: "YOLO26 · PaddleOCR · evaluasi model",
    proofs: [
      { slug: "validasi-ftth-yolo26-paddleocr", label: "Validasi FTTH" },
      { slug: "dse-ai", label: "DSE AI" },
    ],
  },
] as const;

export function Capabilities({ projects }: CapabilitiesProps) {
  const published = new Set(projects.map((project) => project.slug));

  return (
    <section aria-labelledby="capabilities-title">
      <SectionIntro
        id="capabilities-title"
        title="Cara saya mengirim sistem."
        description="Tiga area kerja utama, masing-masing dengan proyek yang bisa diperiksa."
      />

      <div className="border-border mt-8 border-t">
        {CAPABILITIES.map((capability) => (
          <div
            key={capability.name}
            className="border-border grid gap-3 border-b py-6 md:grid-cols-12 md:gap-6"
          >
            <h3 className="text-foreground font-heading text-lg font-semibold md:col-span-3">
              {capability.name}
            </h3>

            <div className="md:col-span-5">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
              <p className="text-muted-foreground mt-2 font-mono text-[11px]">{capability.stack}</p>
            </div>

            <div className="md:col-span-4">
              <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
                Bukti
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {capability.proofs.map((proof) =>
                  published.has(proof.slug) ? (
                    <li key={proof.slug}>
                      <Link
                        href={`/projects/${proof.slug}`}
                        className="text-gold-muted hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        <span>{proof.label}</span>
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ) : null,
                )}
                {capability.proofs.every((proof) => !published.has(proof.slug)) && (
                  <li className="text-muted-foreground text-sm">Bukti menyusul</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
