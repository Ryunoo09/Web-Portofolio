"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { PageContainer } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <PageContainer size="narrow" className="space-y-6 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-3xl border border-red-500/30 bg-red-500/10 text-red-400 shadow-lg backdrop-blur-md">
          <AlertTriangle className="size-10" />
        </div>

        <div className="space-y-3">
          <span className="font-mono text-sm font-bold tracking-widest text-red-400 uppercase">
            Sistem Mengalami Kendala
          </span>
          <h1 className="text-foreground font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Terjadi Kesalahan Tak Terduga
          </h1>
          <p className="text-muted-foreground mx-auto max-w-md text-base leading-relaxed">
            Terjadi kendala saat memproses permintaan Anda. Anda dapat mencoba memuat ulang halaman
            ini.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            onClick={() => reset()}
            className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-full px-6 font-semibold"
          >
            <RotateCcw className="mr-2 size-4" />
            <span>Coba Lagi</span>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-border/80 hover:border-gold/50 rounded-full"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="size-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
