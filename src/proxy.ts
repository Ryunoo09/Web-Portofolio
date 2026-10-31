import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "@/shared/constants/routes";
import { AUTH_COOKIE_OPTIONS, withSessionMaxAge } from "@/shared/lib/supabase/cookie-options";

/**
 * Semua response admin — termasuk redirect — tidak boleh masuk cache browser
 * atau CDN (satu sesi bisa tersaji ke pengguna lain) dan tidak boleh diindeks.
 */
function withAdminHeaders<T extends NextResponse>(response: T): T {
  response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

/**
 * Lapis pertama (optimistic): refresh sesi Supabase dan redirect bila belum
 * login. Tanpa query database — hanya cek sesi dari cookie. Pengecekan
 * keanggotaan admin yang sebenarnya ada di guard (getCurrentAdmin) dan RLS.
 */
export async function proxy(request: NextRequest) {
  const isLoginPath = request.nextUrl.pathname === ROUTES.admin.login;

  // `/admin/login` tidak dijaga di sini. Server Action login mem-`POST` ke path
  // ini; kalau proxy juga memanggil `getUser()` tanpa sesi, library auth bisa
  // memancarkan cookie penghapus yang berlomba dengan `Set-Cookie` sesi baru dari
  // Server Action — sesi yang baru dibuat lalu hilang (login acak gagal).
  // Halaman login sendiri sudah mengalihkan admin yang aktif ke `/admin`.
  if (isLoginPath) {
    return withAdminHeaders(NextResponse.next({ request }));
  }

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

  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = ROUTES.admin.login;

    // Redirect yang membuang cookie hasil refresh membuat sesi yang hampir
    // kedaluwarsa hilang dan pengguna terpaksa login ulang.
    const redirectResponse = NextResponse.redirect(url);
    response.cookies.getAll().forEach((cookie) => redirectResponse.cookies.set(cookie));
    authHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
    return withAdminHeaders(redirectResponse);
  }

  return withAdminHeaders(response);
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
