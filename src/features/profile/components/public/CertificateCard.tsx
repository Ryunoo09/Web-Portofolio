import * as React from "react";
import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import type { Certificate } from "../../types";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const year = certificate.issuedAt ? new Date(certificate.issuedAt).getFullYear() : "";

  return (
    <Card className="border-border/80 bg-card flex flex-col justify-between overflow-hidden p-0">
      {certificate.imageUrl && (
        <div className="bg-secondary relative aspect-video w-full">
          <Image
            src={certificate.imageUrl}
            alt={`Sertifikat ${certificate.title}`}
            fill
            sizes="(min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="border-gold/30 bg-gold/10 text-gold flex size-10 shrink-0 items-center justify-center rounded-xl border">
              <Award className="size-5" aria-hidden="true" />
            </div>
            {year && (
              <Badge
                variant="outline"
                className="border-border/70 text-muted-foreground font-mono text-[10px]"
              >
                {year}
              </Badge>
            )}
          </div>

          <h3 className="text-foreground font-heading mt-4 line-clamp-2 text-base font-bold sm:text-lg">
            {certificate.title}
          </h3>
          <p className="text-gold-muted mt-1 text-xs font-medium">{certificate.issuer}</p>
        </div>

        {certificate.credentialUrl && (
          <div className="border-border/40 mt-5 border-t pt-3">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm text-xs font-semibold underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              <span>Verifikasi Sertifikat</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
