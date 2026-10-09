import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Button } from "@/shared/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="flex max-w-4xl flex-col items-start space-y-8">
        {/* Availability Status Badge */}
        <div className="border-gold/30 bg-gold/10 text-gold inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
          <span className="bg-gold size-2 animate-ping rounded-full" />
          <span>{siteConfig.availability}</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-foreground font-serif text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Merancang Sistem Web <span className="gold-gradient-text italic">Skalabel</span> &amp;
            Antarmuka <span className="gold-gradient-text italic">Elegan</span>.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
            Halo, saya <span className="text-foreground font-semibold">{siteConfig.name}</span> —
            Full-Stack Software Engineer spesialis ekosistem{" "}
            <span className="text-gold font-medium">Next.js</span>,{" "}
            <span className="text-gold font-medium">TypeScript</span>, dan arsitektur database
            modern. Berkomitmen menghadirkan produk digital performa tinggi dengan standar ketat.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            asChild
            size="lg"
            className="bg-gold text-primary-foreground shadow-gold/20 hover:bg-gold/90 cursor-pointer rounded-full px-7 font-semibold shadow-lg transition-all duration-200"
          >
            <Link href="/projects" className="flex items-center gap-2">
              <span>Lihat Karya & Proyek</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border/80 hover:border-gold/50 hover:bg-gold/5 cursor-pointer rounded-full px-6 font-semibold transition-all duration-200"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <span>Hubungi Saya</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-foreground cursor-pointer rounded-full"
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileDown className="text-gold size-4" />
              <span>Unduh CV</span>
            </a>
          </Button>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="border-border/40 grid w-full grid-cols-2 gap-4 border-t pt-10 sm:grid-cols-4 sm:gap-6">
          <div className="space-y-1">
            <div className="text-gold flex items-center gap-2">
              <Code2 className="size-4" />
              <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                4+ Thn
              </span>
            </div>
            <p className="text-muted-foreground text-xs">Pengalaman Rekayasa Web</p>
          </div>

          <div className="space-y-1">
            <div className="text-gold flex items-center gap-2">
              <Terminal className="size-4" />
              <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">20+</span>
            </div>
            <p className="text-muted-foreground text-xs">Proyek Sukses Dipublikasi</p>
          </div>

          <div className="space-y-1">
            <div className="text-gold flex items-center gap-2">
              <Cpu className="size-4" />
              <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">99%</span>
            </div>
            <p className="text-muted-foreground text-xs">Rata-rata Skor Lighthouse</p>
          </div>

          <div className="space-y-1">
            <div className="text-gold flex items-center gap-2">
              <Sparkles className="size-4" />
              <span className="text-foreground font-serif text-2xl font-bold sm:text-3xl">
                100%
              </span>
            </div>
            <p className="text-muted-foreground text-xs">Dedikasi Kualitas Kode</p>
          </div>
        </div>
      </div>
    </section>
  );
}
