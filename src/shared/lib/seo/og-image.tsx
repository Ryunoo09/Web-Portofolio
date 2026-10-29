import { ImageResponse } from "next/og";
import { siteConfig } from "@/shared/constants/siteConfig";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const BACKGROUND = "#070b12";
const FOREGROUND = "#f4efe4";
const MUTED = "#9aa3b2";
const GOLD = "#e8c468";

type OgMetric = { value: string; label: string };

type OgImageOptions = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  metrics?: readonly OgMetric[];
};

/**
 * Renderer OG bersama (1200×630, navy + gold) untuk beranda/about/skills/
 * projects/contact. Halaman proyek memakai renderer sendiri yang memuat judul
 * proyek dan outcome.
 */
export function renderOgImage({
  eyebrow = "PORTOFOLIO",
  title,
  subtitle,
  metrics,
}: OgImageOptions) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BACKGROUND,
        color: FOREGROUND,
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span style={{ color: GOLD, letterSpacing: 3 }}>{eyebrow}</span>
        <span style={{ color: MUTED }}>{siteConfig.location}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 56 : 72,
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div style={{ display: "flex", fontSize: 34, color: GOLD, maxWidth: 1000 }}>
            {subtitle}
          </div>
        )}
      </div>

      {metrics && metrics.length > 0 ? (
        <div style={{ display: "flex", gap: 64 }}>
          {metrics.map((metric) => (
            <div key={metric.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 40, fontWeight: 600 }}>{metric.value}</span>
              <span style={{ fontSize: 20, color: MUTED }}>{metric.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", fontSize: 22, color: MUTED }}>
          Backend &amp; Data Engineer
        </div>
      )}
    </div>,
    OG_SIZE,
  );
}
