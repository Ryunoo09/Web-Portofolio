# HANDOFF — Web Portfolio Project

> Dokumen serah-terima. **Baca ini dulu** sebelum melanjutkan pekerjaan setelah context di-clear.

---

## 🎯 ATURAN WAJIB

### 1. Skill yang HARUS selalu diterapkan

| Skill ID              | Kapan digunakan                                                           |
| --------------------- | ------------------------------------------------------------------------- |
| `clean-code`          | Setiap menulis/mengubah kode (SRP, KISS, YAGNI, guard clause, self-check) |
| `ponytail`            | Setiap task coding — solusi terkecil yang lengkap, hapus > tambah         |
| `code-reviewer`       | Review sebelum & sesudah eksekusi                                         |
| `fullstack-developer` | Fitur end-to-end (DB → API → UI)                                          |
| `senior-fullstack`    | Arsitektur & kualitas                                                     |
| `ui-ux-pro-max`       | Saat menyentuh desain/tampilan                                            |
| `frontend-design`     | Arah visual (font, layout, warna)                                         |
| `frontend-developer`  | Implementasi UI kompleks                                                  |
| `senior-frontend`     | Kualitas frontend                                                         |
| `ui-design-system`    | Token/komponen baru ikut design system (permintaan 2026-10-18)            |
| `ui-ux-designer`      | Audit visual & a11y setelah UI berubah                                    |
| `senior-security`     | RLS/policy, sanitasi, validasi input di batas kepercayaan                 |
| `webapp-testing`      | Verifikasi manual alur publik & admin di browser                          |
| `test-engineer`       | Update/perluas unit & komponen test, cek regresi                          |

### 2. Workflow Git (permintaan eksplisit)

- **SETIAP perubahan kode → commit + push ke GitHub.**
- Format **Conventional Commits** (dipaksa `commitlint`):
  `feat|fix|refactor|perf|test|docs|style|build|ci|chore(scope): pesan`
- `husky` pre-commit menjalankan `lint-staged` (eslint --fix + prettier).
- ⚠️ Di PowerShell, commit tetap **berhasil** meski output hook tampak "error"
  (`NativeCommandError` dari stderr) — abaikan exit code.

---

## 📦 PROJECT

| Item   | Nilai                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path   | `C:\FILE CODE\WEB Portofolio\portfolio`                                                                                                                 |
| Repo   | `https://github.com/Ryunoo09/Web-Portofolio.git` (branch `main`)                                                                                        |
| Stack  | Next.js **16.3.8** (App Router, Turbopack) · React **19.2.8** · TypeScript strict · Tailwind **v4** · shadcn/ui (new-york) · Supabase · pnpm **12.9.1** |
| Bahasa | UI Indonesia                                                                                                                                            |
| Tema   | Luxury gold + midnight navy, default **dark**                                                                                                           |

> ⚠️ **Next.js 16 berbeda dari versi lama.** `middleware` → **`proxy.ts`**. Sesuai `AGENTS.md`,
> **baca `node_modules/next/dist/docs/` sebelum menulis kode Next.**

---

## 🔑 SUPABASE

| Item         | Nilai                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Project ref  | `kggrbhvbowszljemvxan`                                                                                                               |
| URL          | `https://kggrbhvbowszljemvxan.supabase.co`                                                                                           |
| `.env.local` | Terisi: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`             |
| Migrasi      | ✅ `0001_init` (11 tabel) · `0002_rls` · `0003_storage` — sudah diterapkan                                                           |
| Tipe DB      | ✅ `src/shared/types/database.ts` (hasil `pnpm db:types`)                                                                            |
| Seed         | ✅ 6 proyek · 12 skill · 3 pengalaman · 1 pendidikan · 3 sertifikat · 1 profil                                                       |
| Akun admin   | Email: `admin@example.com` · user_id: `3840f40e-6746-4256-83d5-b407b96d98b2` · **password: lihat password manager (JANGAN commit!)** |

**Tabel:** `admins`, `profile`, `skills`, `projects`, `project_images`, `project_skills`,
`experiences`, `education`, `certificates`, `contact_messages`, `posts`.

> 🔴 **Tindakan yang belum dipastikan:** matikan **"Allow new users to sign up"** di Supabase Auth,
> dan ganti password admin.

---

## 🎨 DESAIN

- **Font heading:** ~~Playfair Display~~ → **Space Grotesk** (CSS var `--font-heading`, class `font-heading`)
- Body: **Plus Jakarta Sans** · Mono: **JetBrains Mono**
- Design system: `design-system/portfolio/MASTER.md`

---

## ✅ STATUS PER FASE

| Fase                  | Status                                                                   |
| --------------------- | ------------------------------------------------------------------------ |
| 1. Fondasi + Supabase | ✅ **SELESAI**                                                           |
| 2. Halaman publik     | ✅ **SELESAI** — data asli dari Supabase, `dummyData.ts` **dihapus**     |
| 3. Dashboard admin    | ✅ **SELESAI** — auth, 5 CRUD, upload gambar, edit profil, inbox pesan   |
| 4. SEO & performa     | 🟡 Sebagian (metadata, sitemap dinamis); JSON-LD & OG image masih stub   |
| 5. Testing            | 🟢 Unit + komponen + E2E publik & axe jalan; E2E admin menunggu akun uji |
| 6. Deployment         | 🔴 File ada, belum dijalankan                                            |

### Detail Fase 3

**Sudah semua:** `login`/`logout`, guard `getCurrentAdmin()` + `requireAdmin()`, `proxy.ts`
(refresh sesi + proteksi), layout admin + sidebar responsif (drawer di mobile), halaman
**Ringkasan** (hitungan semua konten + 5 pesan terbaru). CRUD **Proyek** (termasuk unggah
**cover + galeri** ke Supabase Storage), **Keahlian**, **Pengalaman**, **Pendidikan**,
**Sertifikat** (termasuk gambar), **Edit Profil** (avatar, CV PDF, tautan sosial, SEO), dan
**Kotak masuk pesan** (tandai dibaca/belum, hapus).

**Belum:** Reorder galeri/skill dengan drag & drop (A-12) dan CRUD Blog (A-13) — sengaja
ditunda ke Fase 2; Tiptap (A-10) dilewati, deskripsi proyek tetap `<Textarea>` HTML.

---

## 🧠 KEPUTUSAN PENTING

1. **Font:** Space Grotesk (dipilih user).
2. **UI diselaraskan ke skema DB** — field rekaan yang tidak ada di DB dihapus:
   `category`, `tagline`, `highlights`, `challenges`, `solution`, `proficiency`,
   `achievements`, `technologies`, `grade`, `relevantCourses`, `badgeCode`, statistik hero.
   - **Filter proyek = berdasarkan skill** (bukan kategori).
   - Skill `level` = skala **1–5**.
3. **Struktur route admin pakai route group `(dashboard)`** agar login di luar layout guard
   → mencegah redirect loop:

   ```
   app/admin/layout.tsx              → hanya metadata noindex
   app/admin/login/page.tsx          → /admin/login (tanpa guard)
   app/admin/(dashboard)/layout.tsx  → guard getCurrentAdmin() + sidebar
   app/admin/(dashboard)/**          → /admin, /admin/projects, dst.
   ```

---

## 🏗️ ATURAN ARSITEKTUR (dipaksa ESLint)

- Arah dependensi satu arah: `app → features → shared`
- `shared/` **tidak boleh** impor `features/` atau `app/`
- `features/` **tidak boleh** impor `app/`
- Impor lintas fitur **hanya lewat barrel** `@/features/<nama>` (bukan file internal)
- Hanya `features/*/server/*` & `shared/lib/supabase/*` yang boleh bicara ke Supabase
- `admin.ts` (service role) memakai `import "server-only"`
- Pola Server Action: **(1) requireAdmin → (2) validasi Zod → (3) DB → (4) revalidate → (5) `ActionResult`**

---

## ⚠️ GOTCHAS

1. **`contact_messages` insert JANGAN pakai `.select()`** — anon tak punya izin SELECT (RLS) → gagal.
   Insert biasa OK.
2. **Setelah memindah/menghapus file route, hapus `.next`:**
   `Remove-Item -Recurse -Force .next` → jika tidak, `typecheck` error
   "Cannot find module .next/types/validator".
3. **`supabase link`** hanya butuh **20 huruf ref** (tanpa URL, tanpa `<>`).
   Untuk `supabase gen types` di Windows pakai `cmd /c "... > file"` agar encoding tidak rusak.
4. **Di-ignore git:** `.env.local`, `.opencode/`, `.agents/`, `docs/`, `node_modules/`,
   `supabase/.temp/`, `.next/`.
   - 🔴 Karena `docs/` di-ignore, `PLANNING-PORTOFOLIO.md` & `PANDUAN-PROJECT-KOSONG.md`
     hanya ada **lokal** (sumber kebenaran arsitektur).
5. PowerShell menampilkan stderr git sebagai error — **commit tetap berhasil**.
6. **Vitest tidak membersihkan DOM Testing Library sendiri** (karena `globals: true` tidak dipakai).
   `vitest.setup.ts` sudah memanggil `afterEach(cleanup)`; tanpa itu id `htmlFor`
   bertumpuk antar-tes dan query bisa mengembalikan elemen lama.
7. **`server-only` di unit test**: `vitest.config.mts` meng-alias `server-only` ke
   `node_modules/server-only/empty.js` (Vitest tak memakai kondisi ekspor `react-server`).
8. **Radix (Dialog/Select) di jsdom** butuh stub `ResizeObserver`,
   `hasPointerCapture/setPointerCapture/releasePointerCapture`, dan `scrollIntoView` —
   sudah ada di `vitest.setup.ts`.
9. **Playwright**: `expect.timeout` 15 detik karena kompilasi pertama Turbopack bisa > 5 detik
   (soft navigation baru mengubah URL setelah RSC payload datang). `playwright-report/` &
   `test-results/` sudah di-ignore git.
10. **commitlint `subject-case`**: subject harus diawali huruf kecil.
    `feat(admin): CRUD ...` **ditolak** → pakai `feat(admin): tambah CRUD ...`.
11. **`next/image` + `unoptimized`** dipakai untuk pratinjau di `ImageUploadField`, jadi host
    gambar non-Supabase tetap aman di form admin.

---

## 🗺️ ROADMAP LANJUTAN

### Tahap 3 — CRUD Admin ✅ **SELESAI**

1. CRUD **Projects** + upload cover & galeri ke Storage ✅
2. Integrasi **Tiptap** — **dilewati (D2)**, tetap `<Textarea>` + `sanitizeHtml`
3. ~~CRUD **Skills**~~ ✅
4. CRUD **Experiences / Education / Certificates** ✅ (+ gambar sertifikat)
5. Edit **Profile** (avatar, CV, social links, SEO) ✅
6. **Inbox pesan** (baca/tandai/hapus) ✅
7. **Revalidasi** di semua action (`shared/lib/revalidate.ts`) ✅
8. UX admin: sidebar responsif, header konsisten, aria di semua form, tabel sticky,
   ringkasan lengkap, dialog hapus dengan fokus ✅

### Tahap 4 — SEO & Kualitas (lanjutkan di sini)

JSON-LD (Person, WebSite, Project) · `generateMetadata` semua halaman · `opengraph-image`
nyata memakai cover proyek · header keamanan + CSP · rate-limit login ·
drag & drop urutan (A-12) · CRUD Blog (A-13)

### Tahap 5 — Deployment

CI/CD (GitHub Actions → GHCR → VPS) · setup VPS · DNS Cloudflare · monitoring uptime ·
Google Search Console

---

## 🧪 PERINTAH VERIFIKASI WAJIB (sebelum commit)

```bash
pnpm lint        # harus 0 error, 0 warning
pnpm typecheck   # harus bersih
pnpm test        # harus lulus (Vitest: unit + komponen, colocated src/**/*.test.ts(x))
pnpm build       # harus sukses
pnpm test:e2e    # Playwright: alur publik + axe; blok admin di-skip tanpa akun uji
```

> **Storage**: bucket `portfolio-media` publik; unggah hanya lewat Server Action dengan sesi
> admin (`shared/lib/storage.ts`). Batas 5 MB/berkas, `serverActions.bodySizeLimit` 6 MB.
> Ganti cover/gambar lama otomatis menghapus objek lama; hapus entitas menghapus berkasnya.

---

## 🚧 UTANG TEKNIS (sengaja dilewati, tercatat)

- **Reorder galeri/skill (A-12)** masih lewat input angka `sort_order`; ada komentar
  `shortcut:` di `features/projects/server/actions.ts`.
- **Tiptap (A-10)** dilewati — deskripsi proyek tetap `<Textarea>` HTML + `sanitizeHtml`.
- **Kolom `icon` keahlian** belum dirender di UI mana pun, jadi belum diekspos di form
  admin (update tidak menyentuh kolom itu, nilai lama tetap utuh). Lihat
  `features/skills/server/actions.ts`.
- **`opengraph-image.tsx`** masih teks statis "Portofolio"; cover proyek belum dipakai
  sebagai OG image.
- **Login belum ada rate-limit kustom.**
- **Proxy tidak me-redirect admin yang sudah login** dari `/admin/login` (sengaja, hindari loop).
- **AboutContent** — grid "Prinsip & Filosofi" masih hardcoded (DB tak punya kolomnya).
- **`features/projects/seo.ts`** & **`shared/lib/seo/jsonLd.ts`** masih stub.
- **`getTopSkills(4)`** = 4 skill pertama by `sort_order` (skema skill tak punya `featured`).
- **E2E alur admin di-skip** sampai ada akun uji: isi `E2E_ADMIN_EMAIL` &
  `E2E_ADMIN_PASSWORD` di `.env.local`, lalu `e2e/admin-flow.spec.ts` ikut berjalan.
- **Duplikasi tipe/mapper** antara `features/profile` (konsumsi halaman publik) dan
  `features/{experiences,education,certificates}` (CRUD admin) untuk tabel yang sama.
  Menyatukan ownership domain perlu refactor terpisah.
- **Test mappers** memakai fixture manual; belum ada tes integrasi ke Supabase.

---

## 🗓️ RIWAYAT SESI

### Sesi 2026-10-17 — Eksekusi `docs/PLANNING-ADMIN-CRUD.md` (Tahap 3 selesai)

**Permintaan:** "tolong eksekusi planning docs/PLANNING-ADMIN-CRUD.md", lalu "buatkan ringkasan
percakapan agar sesi berikutnya tahu apa yang sudah dikerjakan".

**Hasil:** P0–P6 planning dieksekusi penuh, semua verifikasi hijau, 10 commit ter-push ke `main`.

| Commit    | Isi                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `99ae5f6` | P0 fondasi: `bodySizeLimit` 6 MB, `shared/lib/storage.ts` (+22 test), `ImageUploadField`, `AdminPageHeader`, `FieldError`, sidebar responsif, `loading.tsx` |
| `03aaf86` | P1 unggah cover + galeri proyek (admin → Storage → tampil publik)                                                                                           |
| `bbc75b9` | P2 CRUD Pengalaman/Pendidikan/Sertifikat + `ConfirmDeleteDialog` & `FormField` bersama                                                                      |
| `4fe793a` | P3 edit Profil (avatar, CV PDF, tautan sosial, SEO)                                                                                                         |
| `1d74779` | P4 kotak masuk pesan + badge belum dibaca di sidebar                                                                                                        |
| `4eb42b0` | P5 ringkasan semua konten + 5 pesan terbaru                                                                                                                 |
| `bda814f` | P6 unit/komponen test (61) + E2E publik & axe                                                                                                               |
| `4421f5c` | fix a11y: halaman publik belum punya `<h1>`, urutan heading melompat                                                                                        |
| `095e490` | docs: handoff Tahap 3 selesai                                                                                                                               |
| `e7d5084` | chore: hapus komentar TODO usang, rapikan selector E2E inbox                                                                                                |

**Keputusan/penyimpangan yang perlu diketahui:**

- **Bukan** `admin.ts` (service role) yang dipakai upload, tapi `createServerSupabase()`
  (sesi admin) — policy Storage cek `public.is_admin()`, jadi service role tak diperlukan.
- `uploadProjectImage`/`uploadCertificate*`/`uploadProfile*` mengembalikan
  `ActionResult<string>` (URL), **bukan** `ActionResult<{ url: string }>` seperti draft planning
  — supaya cocok dengan prop `upload` di `ImageUploadField`.
- `revalidateDashboard()` **tidak** dibuat (redundan: `revalidateMessages()` sudah mencakup
  `/admin`). `revalidateProfile()` tidak menyentuh `/contact` karena halaman itu hanya
  memakai `siteConfig`, bukan data profil.
- **`getContactMessage(id)` tidak dibuat** — inbox menerima seluruh daftar sebagai prop,
  jadi fungsi itu akan jadi kode mati.
- Dialog hapus tidak lagi satu file per fitur: `DeleteProjectDialog` & `DeleteSkillDialog`
  **dihapus**, diganti `shared/components/common/ConfirmDeleteDialog.tsx`.
- `SectionHeading` mendapat prop `as="h1"`; judul kartu (`ProjectCard`, `SkillCard`, footer)
  dinaikkan ke `h2` supaya urutan heading valid (temuan axe).

**Bukti verifikasi:** `pnpm lint` 0 error/0 warning · `pnpm typecheck` bersih ·
`pnpm test` 61 test / 17 file lolos · `pnpm build` sukses (24 route) ·
`pnpm test:e2e` 9 lolos + 4 di-skip (blok admin, butuh `E2E_ADMIN_EMAIL`/`E2E_ADMIN_PASSWORD`).

**Belum diverifikasi manusia:** alur admin di browser (login → unggah cover/galeri → tampil di
`/projects` → hapus). Ini bagian D3 yang memang direncanakan manual. Uji juga edit profil,
sertifikat bergambar, dan inbox pesan.

**Titik mulai berikutnya:** Tahap 4 (SEO & Kualitas) — lihat bagian di bawah.

---

### Sesi 2026-10-18 — Mengisi data asli dari CV ke website (Fase 1–3 kode selesai)

**Permintaan:** pahami `docs/isi_website/02_DATA_DIRI_CV.md` lalu buat planning memasukkan datanya ke
website (gambar diunggah manual nanti); wajib pakai skill `clean-code`, `ponytail`, `code-reviewer`,
`senior-fullstack`, `ui-design-system`, `ui-ux-designer`, `senior-security`, `webapp-testing`,
`test-engineer`.

**Planning:** `docs/PLANNING-ISI-DATA-CV.md` (lokal — `docs/` di-ignore git).

**Keputusan pemilik:** (1) tambah kolom detail proyek + tampilkan di UI; (2) input via file SQL baru
`docs/isi_website/03_seed_dari_cv.sql`; (3) organisasi/bahasa/prestasi ditunda; (4) level skill
dipetakan rasional (M=4–5, C=3, D=2); (5) data dummy diganti total; (6) FastAPI (4) & Flutter (2)
ditampilkan; (7) `credential_url` sertifikat Dicoding diisi pola resmi; (8) unggulan = Skripsi +
Elang HUB + Big Data.

| Commit    | Isi                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `3166d8f` | `feat(projects)` migrasi `0004_project_details.sql` (9 kolom) + tipe, mapper, query, Zod, form admin, UI detail + badge kartu + test |
| `d45de38` | `chore(config)` identitas situs (nama, kontak, sosial), prinsip `AboutContent`, salinan halaman publik                               |

**9 kolom baru `projects`:** `project_type`, `role`, `team_size`, `problem`, `solution`,
`features[]`, `outcomes[]`, `challenges`, `is_deployed`. RLS lama sudah aman (level baris).

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` 63 lolos (17 file) ·
`pnpm build` sukses (24 route, `SKIP_DB_FETCH=1`). **Belum** diverifikasi terhadap DB asli.

**⚠️ MENUNGGU TINDAKAN MANUAL (butuh password DB / SQL Editor):**

1. Jalankan `supabase/migrations/0004_project_details.sql` (atau `pnpm exec supabase db push`).
2. Jalankan `docs/isi_website/03_seed_dari_cv.sql` (Supabase SQL Editor → Run).
3. `pnpm db:types` (regen tipe; `database.ts` sekarang sudah dipatch manual dengan bentuk yang sama).
4. Baru `pnpm build` + `pnpm test:e2e` (yang menyentuh DB) bisa diverifikasi jujur.

**TODO:**

- Jalankan langkah 1–4 di atas.
- Unggah manual: avatar, PDF CV (⚠️ `resume_url` null → tombol "Unduh CV" menunjuk `/resume.pdf`
  yang belum ada), cover + galeri 9 proyek, 10 gambar sertifikat.
- Verifikasi 1–2 URL sertifikat Dicoding (`https://www.dicoding.com/certificates/<ID>`).
- Ditunda: organisasi PCC, bahasa + TOEIC 685, prestasi/lomba, skill yang sedang dipelajari.

---

## ▶️ CARA MEMULAI SESI BERIKUTNYA

> "Lanjutkan Tahap 4 (SEO & Kualitas): JSON-LD Person/WebSite/Project, `generateMetadata`
> lengkap, `opengraph-image` memakai cover proyek, dan header keamanan/CSP. Terapkan skill
> clean-code, ponytail, fullstack-developer, senior-fullstack, code-reviewer,
> frontend-developer, senior-frontend, ui-ux-pro-max. Verifikasi `pnpm lint && pnpm typecheck
&& pnpm test && pnpm build && pnpm test:e2e`, lalu commit + push setiap perubahan."
>
> Saat akun uji sudah siap: isi `E2E_ADMIN_EMAIL` & `E2E_ADMIN_PASSWORD` di `.env.local`,
> jalankan `pnpm test:e2e`, dan pastikan blok admin di `e2e/admin-flow.spec.ts` hijau.
