/**
 * Batas waktu panggilan Supabase. Tanpa ini request admin (auth + belasan query)
 * bisa menggantung sampai proxy memutus upstream — pengguna melihat 502 dari
 * Cloudflare, bukan halaman aplikasi.
 */
const QUERY_TIMEOUT_MS = 8_000;
const STORAGE_TIMEOUT_MS = 60_000;

export const SUPABASE_TIMEOUT_MS = QUERY_TIMEOUT_MS;
export const PROXY_AUTH_TIMEOUT_MS = 5_000;
export const HEALTH_TIMEOUT_MS = 2_500;

function urlOf(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.href;
  return input.url;
}

/** Batas waktu efektif untuk satu request; unggah berkas dapat jatah longgar. */
export function timeoutFor(input: RequestInfo | URL, fallbackMs: number): number {
  return urlOf(input).includes("/storage/v1/") ? STORAGE_TIMEOUT_MS : fallbackMs;
}

/**
 * `fetch` dengan batas waktu, siap diinjeksi lewat `global: { fetch }`.
 *
 * Unggah/hapus berkas memakai klien yang sama (`shared/lib/storage.ts`), jadi
 * request ke `/storage/v1/*` diberi batas jauh lebih longgar daripada query.
 */
export function createTimedFetch(timeoutMs: number): typeof fetch {
  return (input, init) => {
    const timeout = AbortSignal.timeout(timeoutFor(input, timeoutMs));
    const signal = init?.signal ? AbortSignal.any([init.signal, timeout]) : timeout;

    return fetch(input, { ...init, signal });
  };
}

/** Klien query/auth di halaman & Server Action. */
export const supabaseFetch = createTimedFetch(SUPABASE_TIMEOUT_MS);

/** Middleware: harus gagal cepat supaya redirect login tidak ikut menunggu. */
export const proxyAuthFetch = createTimedFetch(PROXY_AUTH_TIMEOUT_MS);
