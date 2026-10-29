import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/features/projects";
import { getProjectDomainLabel } from "@/shared/lib/taxonomy";

export const alt = "Studi kasus proyek Rakha Yuda Wicaksono";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BACKGROUND = "#070b12";
const FOREGROUND = "#f4efe4";
const MUTED = "#9aa3b2";
const GOLD = "#e8c468";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

/** Potong teks panjang agar tetap muat tanpa memotong kata di tengah. */
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}

export default async function OpengraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BACKGROUND,
          color: FOREGROUND,
          fontSize: 56,
        }}
      >
        Studi kasus tidak ditemukan
      </div>,
      size,
    );
  }

  const domain = getProjectDomainLabel(project.domain);
  const highlight = project.outcomes[0] ?? project.projectType ?? "Studi kasus";

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
        <span style={{ color: GOLD, letterSpacing: 3 }}>RAKHA YUDA WICAKSONO</span>
        <span style={{ color: MUTED }}>{domain ?? "Studi Kasus"}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: project.title.length > 90 ? 48 : 60,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {truncate(project.title, 130)}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: GOLD, maxWidth: 1000 }}>
          {truncate(highlight, 110)}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: MUTED,
        }}
      >
        <span>Studi kasus</span>
        <span>Backend &amp; Data Engineer</span>
      </div>
    </div>,
    size,
  );
}
