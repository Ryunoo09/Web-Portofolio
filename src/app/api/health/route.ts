import { createPublicClient } from "@/shared/lib/supabase/public";
import { HEALTH_TIMEOUT_MS } from "@/shared/lib/supabase/timeout";

export const dynamic = "force-dynamic";

/**
 * Healthcheck Docker & uptime monitor. Wajib menyentuh Supabase: endpoint yang
 * hanya membalas "ok" tanpa query membuat container tetap "sehat" padahal jalur
 * data sedang mati, dan kegagalan hanya terlihat saat admin membuka /admin.
 */
export async function GET() {
  const startedAt = Date.now();
  const { error } = await createPublicClient()
    .from("profile")
    .select("id")
    .limit(1)
    .abortSignal(AbortSignal.timeout(HEALTH_TIMEOUT_MS));

  if (error) {
    return Response.json(
      { status: "degraded", db: "unreachable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return Response.json(
    { status: "ok", db: "ok", latencyMs: Date.now() - startedAt },
    { headers: { "Cache-Control": "no-store" } },
  );
}
