import { NextResponse, type NextRequest } from "next/server";

// TODO (Fase 3): refresh sesi Supabase + redirect ke /admin/login bila belum login.
// Ini hanya lapis pertama; pengecekan wajib tetap ada di Server Action dan RLS.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
