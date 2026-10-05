import { ImageResponse } from "next/og";

export const alt = "Proyek";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: ambil judul proyek berdasarkan slug.
export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
      }}
    >
      Portofolio
    </div>,
    size,
  );
}
