<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Wajib dibaca sebelum menulis kode

1. **`HANDOFF.md`** — status tiap fase, keputusan, gotchas, utang teknis, dan **riwayat sesi**
   (apa yang sudah dikerjakan sesi sebelumnya + titik mulai berikutnya).
2. **`docs/PLANNING-PORTOFOLIO.md`** — sumber kebenaran arsitektur (hanya lokal, `docs/` di-ignore git).

Setiap perubahan kode wajib diverifikasi dengan `pnpm lint && pnpm typecheck && pnpm test &&
pnpm build` (dan `pnpm test:e2e` bila menyentuh halaman/test), lalu commit + push ke `main`.
