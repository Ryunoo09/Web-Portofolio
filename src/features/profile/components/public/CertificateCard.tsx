import * as React from "react";
import { Award, ArrowUpRight, CheckCircle } from "lucide-react";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import type { CertificateItem } from "@/shared/constants/dummyData";

interface CertificateCardProps {
  certificate: CertificateItem;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="card-luxury border-border/80 bg-card flex flex-col justify-between p-5 sm:p-6">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-10 shrink-0 items-center justify-center rounded-xl border">
            <Award className="size-5" />
          </div>
          <Badge
            variant="outline"
            className="border-border/70 text-muted-foreground font-mono text-[10px]"
          >
            {certificate.issueDate}
          </Badge>
        </div>

        <h3 className="text-foreground font-heading mt-4 line-clamp-2 text-base font-bold sm:text-lg">
          {certificate.title}
        </h3>
        <p className="text-gold/90 mt-1 text-xs font-medium">{certificate.issuer}</p>

        <div className="text-muted-foreground mt-3 flex items-center gap-1.5 font-mono text-xs">
          <CheckCircle className="size-3.5 text-emerald-400" />
          <span>ID: {certificate.badgeCode}</span>
        </div>
      </div>

      {certificate.credentialUrl && (
        <div className="border-border/40 mt-5 border-t pt-3">
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 transition-colors hover:underline"
          >
            <span>Verifikasi Sertifikat</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      )}
    </Card>
  );
}
