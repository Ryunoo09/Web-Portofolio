import Link from "next/link";
import { PageContainer, PublicShell } from "@/shared/components";
import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  return (
    <PublicShell>
      <PageContainer size="narrow" className="space-y-6 py-16 md:py-24">
        <p className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase">
          Error 404
        </p>

        <h1 className="text-foreground font-heading text-3xl font-semibold tracking-[-0.02em] sm:text-4xl md:text-5xl">
          Halaman tidak ditemukan.
        </h1>

        <p className="text-muted-foreground max-w-[52ch] text-sm leading-relaxed sm:text-base">
          Mungkin tautannya berubah atau halaman sudah dipindahkan.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg">
            <Link href="/">Kembali ke beranda</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/projects">Lihat proyek</Link>
          </Button>
        </div>
      </PageContainer>
    </PublicShell>
  );
}
