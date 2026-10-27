import * as React from "react";
import { Bot, Database, HeartHandshake, ShieldCheck } from "lucide-react";
import { Card } from "@/shared/components/ui/card";

interface AboutContentProps {
  bio: string | null;
}

const principles = [
  {
    icon: Bot,
    title: "AI & Otomasi untuk Masalah Nyata",
    description:
      "Menerapkan computer vision dan otomasi untuk menggantikan proses manual yang lambat dan rawan kesalahan.",
  },
  {
    icon: Database,
    title: "Berbasis Data",
    description:
      "Mulai dari pembersihan dan analisis data hingga evaluasi model dengan metrik yang jelas dan dapat diuji.",
  },
  {
    icon: ShieldCheck,
    title: "Backend Rapi & Aman",
    description:
      "Validasi input, otorisasi berbasis peran, dan struktur kode modular agar mudah dirawat serta dikembangkan.",
  },
  {
    icon: HeartHandshake,
    title: "Kolaborasi & Belajar Berkelanjutan",
    description:
      "Terbiasa bekerja dalam tim lintas peran dan terus mempelajari teknologi baru untuk menyelesaikan masalah.",
  },
];

export function AboutContent({ bio }: AboutContentProps) {
  const paragraphs = (bio ?? "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-12">
      {/* Bio Paragraphs */}
      <div className="text-muted-foreground max-w-3xl space-y-6 text-base leading-relaxed sm:text-lg">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>Bio belum diisi. Silakan isi melalui dashboard admin.</p>
        )}
      </div>

      {/* Principles Grid */}
      <div className="space-y-6">
        <h2 className="text-foreground font-heading text-2xl font-bold">
          Prinsip &amp; Filosofi Kerja
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="border-border/80 bg-card flex flex-col justify-between p-6"
              >
                <div>
                  <div className="border-gold/30 bg-gold/10 text-gold mb-4 flex size-10 items-center justify-center rounded-xl border">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-foreground font-heading text-lg font-bold">{item.title}</h3>
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
