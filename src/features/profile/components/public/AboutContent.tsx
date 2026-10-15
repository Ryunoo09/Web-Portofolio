import * as React from "react";
import { ShieldCheck, Zap, HeartHandshake, Compass } from "lucide-react";
import { Card } from "@/shared/components/ui/card";

export function AboutContent() {
  const principles = [
    {
      icon: Zap,
      title: "Performa Sub-Detik",
      description:
        "Setiap byte dan query dioptimalkan untuk meminimalkan waktu rendering dan Time to Interactive (TTI).",
    },
    {
      icon: ShieldCheck,
      title: "Keamanan Berbasis Desain",
      description:
        "Menerapkan Row-Level Security, otentikasi zero-trust, dan validasi input ketat di setiap layer.",
    },
    {
      icon: Compass,
      title: "Arsitektur Modular",
      description:
        "Struktur kode terorganisir per domain bisnis memastikan kemudahan refactoring dan skalabilitas jangka panjang.",
    },
    {
      icon: HeartHandshake,
      title: "Kolaborasi Transparan",
      description:
        "Komunikasi aktif, dokumentasi komprehensif, dan pengiriman kode tepat waktu dengan pengujian otomatis.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Bio Paragraphs */}
      <div className="text-muted-foreground space-y-6 text-base leading-relaxed sm:text-lg">
        <p>
          Saya adalah seorang insinyur perangkat lunak dengan ketertarikan mendalam pada
          persimpangan antara arsitektur sistem backend yang kokoh dan estetika frontend modern.
          Karier saya dimulai dari kecintaan membangun solusi yang tidak hanya fungsional, tetapi
          juga memberikan pengalaman penggunaan yang mulus dan intuitif.
        </p>
        <p>
          Dalam keseharian, saya berfokus pada teknologi modern seperti Next.js App Router,
          TypeScript, React Server Components, serta basis data PostgreSQL dengan Supabase. Saya
          percaya bahwa kode yang hebat harus bersih, mudah dipelihara (maintainable), dan memiliki
          performa tinggi tanpa kompromi.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="space-y-6">
        <h3 className="text-foreground font-heading text-2xl font-bold">
          Prinsip &amp; Filosofi Kerja
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="card-luxury border-border/80 bg-card flex flex-col justify-between p-6"
              >
                <div>
                  <div className="border-gold/30 bg-gold/10 text-gold mb-4 flex size-10 items-center justify-center rounded-xl border">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="text-foreground font-heading text-lg font-bold">{item.title}</h4>
                  <p className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
