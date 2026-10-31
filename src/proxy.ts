import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "@/shared/constants/routes";
import { AUTH_COOKIE_OPTIONS, withSessionMaxAge } from "@/shared/lib/supabase/cookie-options";

/**
 * Lapis pertama (optimistic): refresh sesi Supabase dan redirect bila belum
 * login. Tanpa query database — hanya cek sesi dari cookie. Pengecekan
 * keanggotaan admin yang sebenarnya ada di guard (getCurrentAdmin) dan RLS.
 */
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  // Header no-store dari @supabase/ssr; ikut disalin bila response diganti redirect.
  const authHeaders = new Headers();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions: AUTH_COOKIE_OPTIONS,
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet, headers) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, withSessionMaxAge(options)),
          );
          // Library mengirim header no-store tiap kali menulis cookie sesi.
          Object.entries(headers).forEach(([key, value]) => {
            authHeaders.set(key, value);
            response.headers.set(key, value);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoginPath = request.nextUrl.pathname === ROUTES.admin.login;
  if (!user && !isLoginPath) {
    const url = request.nextUrl.clone();
    url.pathname = ROUTES.admin.login;

    // Redirect yang membuang cookie hasil refresh membuat sesi yang hampir
    // kedaluwarsa hilang dan pengguna terpaksa login ulang.
    const redirectResponse = NextResponse.redirect(url);
    response.cookies.getAll().forEach((cookie) => redirectResponse.cookies.set(cookie));
    authHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
    return redirectResponse;
  }

  return response;
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
