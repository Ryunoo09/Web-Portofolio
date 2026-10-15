/**
 * Membungkus query data publik. Saat **build offline** (`SKIP_DB_FETCH=1`,
 * dipakai CI tanpa akses Supabase) query dilewati dan mengembalikan `fallback`
 * sehingga `next build` selesai tanpa jaringan; data asli mengisi halaman saat
 * runtime lewat ISR. Di luar mode ini error tetap dilempar apa adanya, sehingga
 * build produksi tidak diam-diam menghasilkan halaman kosong.
 */
export function withOfflineFallback<T>(run: () => Promise<T>, fallback: T): Promise<T> {
  return process.env.SKIP_DB_FETCH === "1" ? Promise.resolve(fallback) : run();
}
