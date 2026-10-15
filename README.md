# Web Portofolio + Dashboard Admin

Website portofolio pribadi **Rakha W.** — Full-Stack Developer — lengkap dengan **dashboard admin** untuk mengelola seluruh konten tanpa menyentuh kode.

Dibangun dengan Next.js (App Router) + Supabase + TypeScript strict. Halaman publik dioptimalkan untuk SEO dan performa; dashboard admin dilindungi autentikasi berlapis.

- **Bahasa antarmuka:** Indonesia
- **Tema:** luxury gold + midnight navy, default dark

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Prasyarat](#prasyarat)
- [Cara Menjalankan](#cara-menjalankan)
  - [1. Clone & instal dependensi](#1-clone--instal-dependensi)
  - [2. Siapkan Supabase](#2-siapkan-supabase)
  - [3. Konfigurasi environment](#3-konfigurasi-environment)
  - [4. Buat akun admin](#4-buat-akun-admin)
  - [5. Jalankan dev server](#5-jalankan-dev-server)
- [Environment Variables](#environment-variables)
- [Perintah (Scripts)](#perintah-scripts)
- [Struktur Proyek](#struktur-proyek)
- [Arsitektur & Aturan Kode](#arsitektur--aturan-kode)
- [Pengujian](#pengujian)
- [Deployment](#deployment)
- [Dokumen Terkait](#dokumen-terkait)

---

## Fitur

### Halaman Publik

| Rute               | Deskripsi                                                      |
| ------------------ | -------------------------------------------------------------- |
| `/`                | Beranda: hero, proyek unggulan, ringkasan skill, ajakan kontak |
| `/projects`        | Daftar proyek dalam grid, filter berdasarkan skill             |
| `/projects/[slug]` | Detail proyek: deskripsi, galeri, tech stack, tautan repo/demo |
| `/about`           | Bio, pengalaman, pendidikan, sertifikat, unduh CV              |
| `/skills`          | Daftar skill yang dikelompokkan per kategori                   |
| `/contact`         | Form kirim pesan + tautan sosial media                         |

### Dashboard Admin (`/admin`)

| Rute                  | Deskripsi                                           |
| --------------------- | --------------------------------------------------- |
| `/admin/login`        | Login email + password (Supabase Auth)              |
| `/admin`              | Ringkasan: jumlah proyek, skill, pesan belum dibaca |
| `/admin/projects`     | CRUD proyek: buat, ubah, hapus, publish/unpublish   |
| `/admin/skills`       | CRUD skill: nama, kategori, level, ikon, urutan     |
| `/admin/experiences`  | CRUD pengalaman kerja                               |
| `/admin/education`    | CRUD pendidikan                                     |
| `/admin/certificates` | CRUD sertifikat                                     |
| `/admin/profile`      | Edit profil: nama, headline, bio, foto, CV, sosial  |
| `/admin/messages`     | Kotak masuk pesan dari form kontak                  |

> **Status:** halaman publik dan autentikasi admin selesai. CRUD Proyek selesai; CRUD modul lain dan editor rich text (Tiptap) menyusul. Lihat [Tahap pengembangan](#dokumen-terkait).

---

## Teknologi

| Lapisan                   | Teknologi                                         |
| ------------------------- | ------------------------------------------------- |
| Framework                 | Next.js **16.3.8** (App Router, Turbopack)        |
| UI Runtime                | React **19.2.8**                                  |
| Bahasa                    | TypeScript (strict)                               |
| Styling                   | Tailwind CSS **v4** + shadcn/ui (gaya _new-york_) |
| Database / Auth / Storage | Supabase (cloud)                                  |
| Form & Validasi           | React Hook Form + Zod                             |
| Package manager           | pnpm                                              |
| Kualitas kode             | ESLint, Prettier, Husky, lint-staged, commitlint  |
| Testing                   | Vitest (unit) + Playwright (E2E)                  |

---

## Prasyarat

- **Node.js 22+** — [unduh](https://nodejs.org/)
- **pnpm** — aktifkan lewat `corepack enable` (versi dipatok di `packageManager`)
- **Supabase CLI** — tersedia lewat dependensi proyek (`pnpm exec supabase`); opsional pasang global bila perlu
- **Git**

---

## Cara Menjalankan

### 1. Clone & instal dependensi

```bash
git clone https://github.com/Ryunoo09/Web-Portofolio.git
cd portfolio
pnpm install
```

### 2. Siapkan Supabase

Semua tabel, kebijakan RLS, dan bucket storage didefinisikan sebagai migrasi di `supabase/migrations/`.

1. Buat proyek baru di [supabase.com](https://supabase.com) (atau pakai yang sudah ada), lalu catat **Project Ref**-nya.
2. Tautkan proyek lokal ke proyek Supabase:

   ```bash
   pnpm exec supabase link --project-ref <project-ref>
   ```

3. Terapkan migrasi (`0001_init`, `0002_rls`, `0003_storage`):

   ```bash
   pnpm exec supabase db push
   ```

   Untuk mengisi data contoh saat pengembangan, tambahkan flag seed:

   ```bash
   pnpm exec supabase db push --include-seed
   ```

4. (Opsional) Buat ulang tipe TypeScript setelah skema berubah:

   ```bash
   pnpm db:types
   ```

> **Penting:** matikan **"Allow new users to sign up"** di Supabase → Authentication agar tidak ada pendaftaran publik.

### 3. Konfigurasi environment

Salin contoh lalu isi nilainya (lihat [Environment Variables](#environment-variables)):

```bash
cp .env.example .env.local
```

Ambil `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, dan `SUPABASE_SERVICE_ROLE_KEY` dari Supabase → **Project Settings → API**.

> ⚠️ `SUPABASE_SERVICE_ROLE_KEY` melewati RLS. Jangan pernah memberi awalan `NEXT_PUBLIC_` atau membocorkannya ke klien.

### 4. Buat akun admin

1. Di Supabase → **Authentication → Users**, buat satu user (email + password kuat).
2. Salin **User UID**-nya, lalu daftarkan sebagai admin lewat SQL Editor:

   ```sql
   insert into public.admins (user_id) values ('<uuid-user>');
   ```

Hanya user yang terdaftar di tabel `admins` yang bisa mengakses `/admin`.

### 5. Jalankan dev server

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk situs publik dan [http://localhost:3000/admin](http://localhost:3000/admin) untuk dashboard.

---

## Environment Variables

| Variabel                        | Wajib | Awalan publik | Deskripsi                                                             |
| ------------------------------- | :---: | :-----------: | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          |  ✅   |      Ya       | URL kanonik situs (mis. `http://localhost:3000` atau domain produksi) |
| `NEXT_PUBLIC_SUPABASE_URL`      |  ✅   |      Ya       | URL proyek Supabase                                                   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` |  ✅   |      Ya       | Kunci anon (aman bila RLS benar)                                      |
| `SUPABASE_SERVICE_ROLE_KEY`     |  ✅   |   **Tidak**   | Kunci service role — server-only, melewati RLS                        |

Variabel `NEXT_PUBLIC_*` **ditanam saat build**. Untuk Docker, teruskan sebagai _build args_.

---

## Perintah (Scripts)

| Perintah         | Aksi                                                   |
| ---------------- | ------------------------------------------------------ |
| `pnpm dev`       | Menjalankan dev server (Turbopack) di `localhost:3000` |
| `pnpm build`     | Build produksi (output _standalone_)                   |
| `pnpm start`     | Menjalankan hasil build produksi                       |
| `pnpm lint`      | ESLint seluruh proyek                                  |
| `pnpm typecheck` | Pemeriksaan tipe TypeScript (`tsc --noEmit`)           |
| `pnpm format`    | Memformat berkas dengan Prettier                       |
| `pnpm test`      | Menjalankan unit test (Vitest)                         |
| `pnpm test:e2e`  | Menjalankan E2E test (Playwright)                      |
| `pnpm db:types`  | Regenerasi tipe DB dari Supabase (`--linked`)          |

Jalankan `pnpm lint && pnpm typecheck && pnpm test && pnpm build` sebelum commit/push. `husky` menjalankan `lint-staged` (ESLint + Prettier) otomatis saat `git commit`.

---

## Struktur Proyek

```text
.
├─ src/
│  ├─ app/                        # Routing Next.js (App Router)
│  │  ├─ (public)/                # Route group halaman publik
│  │  ├─ admin/
│  │  │  ├─ login/                # Di luar layout guard (hindari loop)
│  │  │  └─ (dashboard)/          # Guard getCurrentAdmin() + sidebar
│  │  ├─ api/health/              # Endpoint health check
│  │  ├─ layout.tsx               # Root layout
│  │  ├─ sitemap.ts · robots.ts   # SEO
│  │  └─ error.tsx · not-found.tsx
│  ├─ features/                   # Kode per fitur (UI, data, skema, tipe)
│  │  ├─ auth/  projects/  skills/  profile/
│  │  ├─ experiences/  education/  certificates/  contact/
│  ├─ shared/                     # Kode lintas fitur (dipakai oleh features/)
│  │  ├─ components/              # ui/ (shadcn), layout/, common/
│  │  ├─ lib/                     # supabase/, seo/, sanitize, revalidate, utils
│  │  ├─ constants/               # siteConfig, routes
│  │  └─ types/                   # database.ts (hasil generate), action-result
│  └─ proxy.ts                    # Refresh sesi + proteksi rute admin (pengganti middleware)
├─ supabase/
│  ├─ migrations/                 # 0001_init · 0002_rls · 0003_storage
│  └─ seed.sql                    # Data contoh untuk development
├─ e2e/                           # Test Playwright
├─ design-system/                 # Design token & MASTER.md
├─ Dockerfile · docker-compose.yml · Caddyfile
└─ .github/workflows/             # ci.yml · deploy.yml
```

Setiap fitur mengekspor API publiknya lewat barrel `index.ts` — kode di luar fitur mengimpor dari `@/features/<nama>`, bukan berkas internal.

---

## Arsitektur & Aturan Kode

Aturan berikut **dipaksa oleh ESLint**:

- Arah dependensi satu arah: `app → features → shared`.
- `shared/` tidak boleh mengimpor `features/` atau `app/`; `features/` tidak boleh mengimpor `app/`.
- Impor lintas fitur **hanya** lewat barrel `@/features/<nama>`.
- Hanya `features/*/server/*` dan `shared/lib/supabase/*` yang boleh berbicara ke Supabase.
- `shared/lib/supabase/admin.ts` (service role) memakai `import "server-only"`.

**Pola Server Action** — setiap aksi tulis mengikuti urutan tetap:

1. `requireAdmin()` — verifikasi sesi admin
2. Validasi input dengan **Zod**
3. Operasi database
4. `revalidatePath` untuk halaman publik terkait
5. Kembalikan `ActionResult`

**Keamanan berlapis admin:** proxy (`proxy.ts`) → guard layout (`getCurrentAdmin()`) → `requireAdmin()` di setiap action → RLS di database. HTML rich text disanitasi di server sebelum disimpan/dirender.

---

## Pengujian

```bash
pnpm test      # Unit test (Vitest)
pnpm test:e2e  # E2E test (Playwright)
```

Konfigurasi: `vitest.config.mts` dan `playwright.config.ts`.

---

## Deployment

Target: satu VPS kecil + Docker + Caddy sebagai reverse proxy/HTTPS, dengan Cloudflare untuk DNS/CDN. Build dilakukan di CI (GitHub Actions), bukan di VPS.

| Berkas                     | Fungsi                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| `Dockerfile`               | Build multi-stage (pnpm, output _standalone_, user non-root)                                      |
| `docker-compose.yml`       | Layanan `web` + `caddy` dengan health check                                                       |
| `Caddyfile`                | Reverse proxy, HTTPS otomatis, header keamanan                                                    |
| `.github/workflows/ci.yml` | Lint, typecheck, test, build pada setiap PR/push (build dijalankan offline via `SKIP_DB_FETCH=1`) |

Langkah ringkas:

```bash
# Di VPS, setelah image tersedia di GHCR:
docker compose pull
docker compose up -d
```

Ganti `namaanda.com` di `Caddyfile` dengan domain Anda, dan `<username>` di `docker-compose.yml` dengan akun GitHub Anda. Pastikan `.env` di VPS berisi variabel yang sama seperti `.env.local` (izin file `600`).

> Catatan: Supabase tier gratis dapat **dijeda otomatis** bila tidak aktif. Tambahkan cron/pemantau uptime ringan ke `/api/health` untuk mencegahnya.

---

## Dokumen Terkait

- `HANDOFF.md` — status per fase, keputusan penting, dan gotchas proyek.
- `docs/PLANNING-PORTOFOLIO.md` — perencanaan lengkap (arkitektur, skema DB, keamanan, deployment).
- `design-system/portfolio/MASTER.md` — panduan identitas visual.

---

## Lisensi

Proyek pribadi. Belum ada lisensi terbuka — hubungi pemilik repositori untuk penggunaan.
