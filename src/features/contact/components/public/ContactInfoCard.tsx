"use client";

import * as React from "react";
import { Mail, MapPin, Clock, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components";
import { toast } from "sonner";
import { siteConfig } from "@/shared/constants/siteConfig";
import { Card } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";

export function ContactInfoCard() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.socials.email);
      setCopied(true);
      toast.success("Alamat email disalin ke clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin email");
    }
  };

  return (
    <Card className="card-luxury border-border/80 bg-card space-y-6 p-6 sm:p-8">
      <div>
        <h2 className="text-foreground font-heading text-xl font-bold sm:text-2xl">
          Informasi Kontak
        </h2>
        <p className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">
          Jangan ragu untuk menghubungi jika Anda memiliki proyek baru, tawaran kolaborasi, atau
          sekadar berdiskusi tentang rekayasa perangkat lunak.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {/* Email item */}
        <div className="border-border/60 bg-secondary/30 flex items-start justify-between gap-3 rounded-lg border p-3.5">
          <div className="flex items-center gap-3">
            <div className="border-gold/30 bg-gold/10 text-gold flex size-9 shrink-0 items-center justify-center rounded-lg border">
              <Mail className="size-4" />
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-[11px] uppercase">Email</p>
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="text-foreground hover:text-gold text-sm font-semibold transition-colors"
              >
                {siteConfig.socials.email}
              </a>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyEmail}
            className="text-muted-foreground hover:text-foreground size-8 cursor-pointer rounded-md"
            aria-label="Salin alamat email"
          >
            {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
          </Button>
        </div>

        {/* Location item */}
        <div className="border-border/60 bg-secondary/30 flex items-center gap-3 rounded-lg border p-3.5">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-9 shrink-0 items-center justify-center rounded-lg border">
            <MapPin className="size-4" />
          </div>
          <div>
            <p className="text-muted-foreground font-mono text-[11px] uppercase">Lokasi</p>
            <p className="text-foreground text-sm font-semibold">
              {siteConfig.location} (WIB / UTC+7)
            </p>
          </div>
        </div>

        {/* Response time guarantee */}
        <div className="border-border/60 bg-secondary/30 flex items-center gap-3 rounded-lg border p-3.5">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-9 shrink-0 items-center justify-center rounded-lg border">
            <Clock className="size-4" />
          </div>
          <div>
            <p className="text-muted-foreground font-mono text-[11px] uppercase">Waktu Respon</p>
            <p className="text-foreground text-sm font-semibold">Maksimal 1x24 jam kerja</p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="border-border/50 border-t pt-4">
        <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
          Jejaring Sosial &amp; Portofolio Kode
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border/70 hover:border-gold/50 rounded-full"
          >
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubIcon className="text-gold size-4" />
              <span>GitHub</span>
              <ArrowUpRight className="text-muted-foreground size-3" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border/70 hover:border-gold/50 rounded-full"
          >
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <LinkedinIcon className="text-gold size-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="text-muted-foreground size-3" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
