import type { SiteMetric } from "@/shared/constants/siteConfig";

interface MetricRailProps {
  metrics: readonly SiteMetric[];
}

/**
 * Tiga metrik hero. Angka tidak diberi gradient/glow; detail menyebut sumbernya
 * supaya klaim bisa dilacak.
 */
export function MetricRail({ metrics }: MetricRailProps) {
  return (
    <ul className="border-border divide-border mt-10 grid grid-cols-1 divide-y border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {metrics.map((metric) => (
        <li key={metric.label} className="py-4 sm:px-5">
          <p className="font-heading text-foreground text-2xl font-semibold tracking-tight tabular-nums">
            {metric.value}
          </p>
          <p className="text-muted-foreground text-[13px]">{metric.label}</p>
          {metric.detail && (
            <p className="text-muted-foreground mt-0.5 font-mono text-[11px]">{metric.detail}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
