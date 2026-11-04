import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { CvDownloadMenu } from "@/shared/components";

/**
 * Ajakan terakhir halaman beranda. Tanpa kata "Konsultasi" dan tanpa janji
 * tanggal ketersediaan.
 */
export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta-title" className="border-border border-t pt-10 md:pt-14">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2
            id="contact-cta-title"
            className="text-foreground font-heading max-w-[24ch] text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl"
          >
            Saya sedang membuka peluang Backend &amp; Data Engineer.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[62ch] text-sm leading-relaxed sm:text-base">
            Punya peran, proyek, atau pertanyaan teknis? Kirim pesan. Saya membalas maksimal 1×24
            jam kerja.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <span>Hubungi saya</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <CvDownloadMenu size="lg" />
        </div>
      </div>
    </section>
  );
}
