import * as React from "react";
import { Building2, Calendar, Users } from "lucide-react";
import { BulletPoints } from "@/shared/components";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { formatPeriod } from "@/shared/lib/utils";
import type { Organization } from "../../types";

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  const period = formatPeriod(organization.startedAt, organization.endedAt);

  return (
    <Card className="border-border/80 bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="border-gold/30 bg-gold/10 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl border">
            <Building2 className="size-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-foreground font-heading text-lg font-bold sm:text-xl">
              {organization.name}
            </h3>
            <p className="text-gold-muted text-sm font-medium">{organization.role}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <Badge
            variant="outline"
            className="border-border/80 text-muted-foreground flex items-center gap-1 text-xs"
          >
            <Calendar className="size-3" aria-hidden="true" />
            <span>{period}</span>
          </Badge>
          {organization.memberCount ? (
            <Badge
              variant="outline"
              className="border-border/80 text-muted-foreground flex items-center gap-1 text-xs"
            >
              <Users className="size-3" aria-hidden="true" />
              <span>{organization.memberCount}+ anggota</span>
            </Badge>
          ) : null}
        </div>
      </div>

      {organization.description && (
        <BulletPoints
          text={organization.description}
          className="text-muted-foreground mt-4 text-xs leading-relaxed sm:text-sm"
        />
      )}
    </Card>
  );
}
