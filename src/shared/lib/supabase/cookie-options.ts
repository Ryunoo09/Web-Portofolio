/**
 * Opsi cookie sesi Supabase, satu sumber untuk proxy dan Server Component.
 * `maxAge` sengaja tidak ada di sini: `applyServerStorage()` di `@supabase/ssr`
 * selalu menimpanya dengan bawaan 400 hari, jadi durasi sesi dipaksakan lewat
 * `withSessionMaxAge()`.
 */

/** Durasi sesi admin: 12 jam, diperbarui setiap token di-refresh oleh proxy. */
export const AUTH_SESSION_MAX_AGE = 60 * 60 * 12;

export const AUTH_COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https://") ?? false,
} as const;

/**
 * Timpa `maxAge` bawaan library dengan `AUTH_SESSION_MAX_AGE`. `maxAge: 0`
 * dipakai library untuk menghapus cookie sesi lama — nilai itu dibiarkan apa
 * adanya agar logout tetap membersihkan seluruh chunk cookie.
 */
export function withSessionMaxAge<T extends { maxAge?: number }>(
  options: T,
): T & { maxAge: number } {
  return { ...options, maxAge: options.maxAge === 0 ? 0 : AUTH_SESSION_MAX_AGE };
}
