import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { PageContainer } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <PageContainer size="narrow" className="space-y-6 text-center">
        <div className="border-gold/40 bg-gold/10 text-gold mx-auto flex size-20 items-center justify-center rounded-3xl border shadow-lg backdrop-blur-md">
          <Compass className="size-10" />
        </div>

        <div className="space-y-3">
          <span className="text-gold font-mono text-sm font-bold tracking-widest uppercase">
            Error 404
          </span>
          <h1 className="text-foreground font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mx-auto max-w-md text-base leading-relaxed">
            Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau alamat URL yang
            dimasukkan kurang tepat.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            asChild
            className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-full px-6 font-semibold"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="size-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-border/80 hover:border-gold/50 rounded-full"
          >
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              <span>Jelajahi Proyek</span>
            </Link>
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
