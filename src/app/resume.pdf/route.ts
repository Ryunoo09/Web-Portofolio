import { getProfile } from "@/features/profile";
import { buildCvFilename } from "@/shared/lib/cv";

export const dynamic = "force-dynamic";

function notFound() {
  return new Response("CV belum tersedia.", { status: 404 });
}

/**
 * Semua tautan lama memakai `/resume.pdf`. Route ini membaca URL CV dari profil
 * Supabase agar admin cukup mengganti berkas lewat `/admin/profile`, tanpa
 * menyimpan PDF di repo publik dan tanpa deploy ulang.
 */
export async function GET(request: Request) {
  const profile = await getProfile().catch(() => null);
  const resumeUrl = profile?.resumeUrl;

  if (!resumeUrl) return notFound();

  const filename = buildCvFilename(profile?.fullName);

  let target: URL;
  try {
    target = new URL(resumeUrl);
  } catch {
    return notFound();
  }

  const isSelf = target.origin === new URL(request.url).origin && target.pathname === "/resume.pdf";
  if (!["http:", "https:"].includes(target.protocol) || isSelf) return notFound();

  const upstream = await fetch(target, { cache: "no-store" });
  const contentType = upstream.headers.get("content-type") ?? "";

  if (!upstream.ok || !upstream.body || !contentType.includes("application/pdf")) {
    return new Response("CV tidak dapat diunduh.", { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
