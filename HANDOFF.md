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
| Migrasi      | ✅ `0001`–`0008` terpasang di project linked (rincian di catatan sesi 2026-10-31)                                                    |
| Tipe DB      | ✅ `src/shared/types/database.ts` (hasil `pnpm db:types`)                                                                            |
| Seed         | ✅ 6 proyek · 12 skill · 3 pengalaman · 1 pendidikan · 3 sertifikat · 1 profil                                                       |
| Akun admin   | Email: `admin@example.com` · user_id: `3840f40e-6746-4256-83d5-b407b96d98b2` · **password: lihat password manager (JANGAN commit!)** |

**Tabel:** `admins`, `profile`, `skills`, `projects`, `project_images`, `project_skills`,
`experiences`, `experience_images`, `education`, `organizations`, `languages`, `certificates`,
`contact_messages`, `posts`.

> 🔴 **Tindakan yang belum dipastikan:** matikan **"Allow new users to sign up"** di Supabase Auth,
> dan ganti password admin.

---

## 🎨 DESAIN

- **Font heading:** ~~Playfair Display~~ → **Space Grotesk** (CSS var `--font-heading`, class `font-heading`)
- Body: **Plus Jakarta Sans** · Mono: **JetBrains Mono** (`--font-jetbrains` → `--font-mono`)
- Design system: `design-system/portfolio/MASTER.md`
- Redesign 2026: arah **Signal Room** (dark-first) + light **Daylight Ledger**; rencana di `docs/redesign/` (lokal). M1 memasang token baru di `src/app/globals.css`.

---

## ✅ STATUS PER FASE

| Fase                  | Status                                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Fondasi + Supabase | ✅ **SELESAI**                                                                                                                                                                                            |
| 2. Halaman publik     | ✅ **SELESAI** — data asli dari Supabase, `dummyData.ts` **dihapus**                                                                                                                                      |
| 3. Dashboard admin    | ✅ **SELESAI** — auth, 5 CRUD, upload gambar, edit profil, inbox pesan                                                                                                                                    |
| 4. SEO & performa     | 🟡 Sebagian — detail proyek sudah JSON-LD/OG; schema & OG rute lain menyusul (M7)                                                                                                                         |
| 5. Testing            | 🟢 Unit + komponen + E2E publik, admin, & axe jalan (18 tes)                                                                                                                                              |
| 6. Deployment         | 🟡 Siap (NPM + CI/CD tertulis) — menunggu setup VPS & secrets                                                                                                                                             |
| 7. Redesign 2026      | 🟡 **M0–M8 selesai** — token, primitive, layout, data/SEO/domain, beranda, proyek, about/skills/contact, motion/SEO/performa/header, QA & rilis (preview lokal); merge produksi menunggu CV + persetujuan |

### Detail Fase 3

**Sudah semua:** `login`/`logout`, guard `getCurrentAdmin()` + `requireAdmin()`, `proxy.ts`
(refresh sesi + proteksi), layout admin + sidebar responsif (drawer di mobile), halaman
**Ringkasan** (hitungan semua konten + 5 pesan terbaru). CRUD **Proyek** (termasuk unggah
**cover + galeri** ke Supabase Storage), **Keahlian**, **Pengalaman** (termasuk **galeri
dokumentasi** di halaman ubah), **Pendidikan**, **Sertifikat** (termasuk gambar dan
**deskripsi** yang tampil di `/about`), **Edit Profil** (avatar, CV PDF, tautan sosial, SEO), dan
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
   `pnpm typecheck` sekarang menjalankan `next typegen` lebih dulu; jika
   `.next/dev/types/validator.ts` korup, hapus `.next` lalu ulangi `pnpm typecheck`.
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
12. **Visual regression** memakai snapshot viewport Windows di
    `e2e/visual.spec.ts-snapshots/`. Font `display: "optional"` tidak deterministik → tes memuat
    font lalu reload. Jangan menambah `--update-snapshots` ke CI Linux tanpa baseline Linux.
13. **Lighthouse** di host pengembangan ini berbeban (±46 Chrome milik pengguna). Skor M8
    92–100, tetapi LCP mobile 2,5–3,1 s; ukur ulang di CI/idle sebelum menganggap gate LCP tutup.
14. **`/resume.pdf` belum ada.** Tautan unduh CV sengaja memakai `<a download>`, bukan `next/link`,
    agar tidak ada prefetch RSC 404 yang menurunkan Best-practices.

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

JSON-LD `Person`/`WebSite`/schema halaman lain · `generateMetadata` semua halaman · OG semua rute
(detail proyek sudah dinamis di M3) · header keamanan + CSP · rate-limit login ·
drag & drop urutan (A-12) · CRUD Blog (A-13)

### Tahap 5 — Deployment 🟡 (tertulis, menunggu dijalankan)

Panduan operasional lengkap: **`DEPLOY.md`** (di root repo, ikut ter-commit).

Arsitektur: `Cloudflare → Nginx Proxy Manager → container portfolio-web:3000`.

- ✅ `Dockerfile` (standalone, build-args `NEXT_PUBLIC_*`)
- ✅ `docker-compose.yml` — **NPM** (Caddyfile dihapus), network eksternal `npm-net`,
  `container_name: portfolio-web`, healthcheck `/api/health`, rotasi log, `IMAGE_TAG` untuk rollback
- ✅ `.github/workflows/ci.yml` — lint/typecheck/test/build tiap PR & push
- ✅ `.github/workflows/deploy.yml` — push ke `main` → build+push GHCR → SSH → `compose pull/up`
  → tunggu healthcheck. Di-gate oleh Variable `DEPLOY_ENABLED=true` agar push sebelum setup tidak gagal.
- ⏳ Sisa: setup VPS, `npm-net`, proxy host NPM, Variables/Secrets GitHub, package GHCR dijadikan Public

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
  `shortcut:` di `features/projects/server/actions.ts`. **Galeri dokumentasi pengalaman** juga
  belum punya drag & drop urutan (hanya `sort_order` otomatis) dan belum punya lightbox.
- **Tiptap (A-10)** dilewati — deskripsi proyek tetap `<Textarea>` HTML + `sanitizeHtml`.
- **Kolom `icon` keahlian** belum dirender di UI mana pun, jadi belum diekspos di form
  admin (update tidak menyentuh kolom itu, nilai lama tetap utuh). Lihat
  `features/skills/server/actions.ts`.
- **OG image** baru ada untuk detail proyek (`opengraph-image.tsx` dinamis, judul + domain +
  outcome). Beranda/about/skills/contact belum punya OG; cover proyek belum dipakai sebagai
  gambar OG. Alt OG masih statis. Dikerjakan di M7.
- **Login belum ada rate-limit kustom.**
- **Proxy tidak memeriksa sesi di `/admin/login`** (sengaja: `getUser()` di sana berlomba dengan
  `Set-Cookie` dari Server Action login). Pengalihan admin aktif dikerjakan halaman login lewat
  `getCurrentAdmin()`, bukan proxy, agar user auth non-admin tidak terjebak loop.
- **Balapan baca-sesi `@supabase/ssr`** — di bawah beban paralel, sesi yang baru ditulis Server
  Action login sesekali belum terbaca pada request berikutnya (`Auth session missing!` walau cookie
  sudah ada di jar; terbukti di dev maupun build produksi). Karena itu asersi "admin aktif yang
  membuka `/admin/login` diarahkan ke `/admin`" sengaja tidak di-e2e-kan. Perilakunya ada di kode;
  uji ulang setelah `@supabase/ssr` dinaikkan versinya.
  **Koreksi:** akarnya bukan sesi gagal dibaca. Instrumentasi membuktikan setiap request yang gagal
  datang dengan header `Cookie` kosong — sesi sudah dicabut sebelumnya. Pelakunya `signOut()` tanpa
  scope (= `global`), yang mencabut semua sesi akun sehingga tes logout paralel melempar tes lain ke
  login. Sudah diperbaiki `signOut({ scope: "local" })` dan asersi tadi dikembalikan. Utang yang
  tersisa hanya jaringan `Auth session missing!` di E2E 3× paralel (artefak stres, bukan perilaku app).
- **AboutContent** — grid "Prinsip & Filosofi" masih hardcoded (DB tak punya kolomnya).
- **JSON-LD baru di detail proyek** (`CreativeWork` + `BreadcrumbList`). `Person`/`WebSite` di
  beranda dan schema halaman lain belum dipasang (M7).
- **`getTopSkills(4)`** = 4 skill pertama by `sort_order` (skema skill tak punya `featured`).
- **Duplikasi tipe/mapper** antara `features/profile` (konsumsi halaman publik) dan
  `features/{experiences,education,certificates}` (CRUD admin) untuk tabel yang sama.
  Menyatukan ownership domain perlu refactor terpisah. Sejak `0008_experience_images`, tipe
  `ExperienceImage` dan mapper dokumentasi juga terduplikasi di kedua fitur tersebut.
- **Test mappers** memakai fixture manual; belum ada tes integrasi ke Supabase.
- **`/resume.pdf` belum diunggah** → tombol Unduh CV masih 404 (blocker rilis M8).
- **Lighthouse LCP mobile** 2,5–3,1 s di host berbeban; perlu pengukuran CI/idle.
- **Visual baseline** hanya Windows; CI Linux butuh baseline terpisah.
- **Kunci `service_role` Supabase lama** sudah terekspos lewat repo variable publik (sudah diganti
  ke `anon`); rotasi kunci harus dilakukan di dashboard Supabase.

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

**Verifikasi (DB asli, setelah migrasi + seed dijalankan):** `pnpm lint` 0 · `pnpm typecheck` 0 ·
`pnpm test` 63 lolos (17 file) · `pnpm build` sukses (24 route, 9 proyek ter-prerender) ·
`pnpm test:e2e` 9 lolos + 4 di-skip (blok admin) · `pnpm db:types` menghasilkan berkas **identik**
dengan patch manual `database.ts` (diff kosong).

**Data DB (diverifikasi via REST):** 9 proyek (unggulan: Skripsi, Big Data, Elang HUB), 51 skill,
1 pengalaman, 2 pendidikan, 10 sertifikat, profil terisi — data dummy sudah 0.

**TODO:**

- Unggah manual: avatar, PDF CV (⚠️ `resume_url` null → tombol "Unduh CV" menunjuk `/resume.pdf`
  yang belum ada), cover + galeri 9 proyek, 10 gambar sertifikat.
- Verifikasi 1–2 URL sertifikat Dicoding (`https://www.dicoding.com/certificates/<ID>`).
- Ditunda: organisasi PCC, bahasa + TOEIC 685, prestasi/lomba, skill yang sedang dipelajari.

---

### Sesi 2026-10-18 (lanjutan) — Blok E2E admin diaktifkan + planning lanjutan

**Permintaan:** buatkan planning untuk menambah konten organisasi/bahasa/dll (buat skema bila belum ada),
perbaiki UI/UX yang terlalu banyak white space, selalu pakai skill yang diminta, dan gunakan akun
E2E `admin@example.com` (kredensial diberikan pemilik).

**Hasil:**

- Planning baru: **`docs/PLANNING-KONTEN-TAMBAHAN-DAN-UIUX.md`** (lokal, `docs/` di-ignore git).
- Blok E2E admin **aktif dan hijau** — sebelumnya tidak pernah benar-benar jalan.

| Commit    | Isi                                                                                 |
| --------- | ----------------------------------------------------------------------------------- |
| `be8e626` | `test(e2e)` muat kredensial dari `.env.local`, blok admin bersihkan datanya sendiri |

**Akar masalah yang ditemukan (blok admin tak pernah jalan sejak Tahap 3):**

- `playwright.config.ts` **tidak** memuat `.env.local` → `E2E_ADMIN_EMAIL` selalu kosong → 4 test di-skip.
  Diperbaiki dengan pembaca `.env.local` scoped (tanpa dependensi baru).
- Test pendidikan **tidak membersihkan** baris "E2E Kampus …" → menumpuk di `/about`.
- Test proyek: slug diisi manual lalu ditimpa auto-slug dari judul → URL detail 404; unggahan belum
  selesai saat submit. Diperbaiki (tunggu tombol "Ganti berkas", pakai auto-slug).
- Test inbox: hanya jalan bila sudah ada pesan, dan tak pernah menghapusnya. Kini membuat pesannya
  sendiri lewat `/contact` lalu menghapusnya.
- Label "Alamat Email" di `/contact` bentrok dengan tombol "Salin alamat email" → pakai role textbox.
- a11y `/admin/projects` gagal karena **race dengan `loading.tsx`** (axe memindai saat fallback masih
  tampil). Diperbaiki dengan menunggu `<h1>` sebelum memindai. _(Bukan masalah layout — setiap halaman
  admin sudah punya `<main>`-nya sendiri.)_

**Kredensial:** `E2E_ADMIN_EMAIL` / `E2E_ADMIN_PASSWORD` ditulis ke `.env.local` (gitignored, tidak dikomit).

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` 63 lolos · `pnpm test:e2e`
**13 lolos / 0 di-skip** · DB bersih (9 proyek, 2 pendidikan, 0 pesan, 0 sisa data uji).

**TODO (sisa sesi ini):** eksekusi `docs/PLANNING-KONTEN-TAMBAHAN-DAN-UIUX.md` (organisasi, bahasa,
`skills.is_learning`, lalu refinement white space). Unggahan manual (avatar, PDF CV, cover, gambar
sertifikat) tetap menunggu pemilik.

---

### Sesi 2026-10-18 (lanjutan 2) — Eksekusi konten tambahan + refinement UI/UX

**Permintaan:** setujui planning lalu eksekusi: organisasi, bahasa, dll (buat skema bila belum ada) dan
rapatkan white space halaman publik.

**Planning yang dieksekusi:** `docs/PLANNING-KONTEN-TAMBAHAN-DAN-UIUX.md`.

| Commit    | Isi                                                                                                                                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `78bb74c` | `feat(db)` migrasi `0005_extra_sections.sql`: tabel `organizations` + `languages`, kolom `skills.is_learning`, RLS + trigger, patch `database.ts` & `routes.ts`                                                |
| `fe0c19d` | `feat(content)` fitur `organizations` & `languages` lengkap (tipe→schemas→queries→mappers→actions→admin CRUD→publik), section di `/about`, section "Sedang Dipelajari" di `/skills`, sidebar + ringkasan admin |
| `5053741` | `style(ui)` rapatkan white space (container, irama vertikal, hero 2 kolom, kartu proyek `h-32`, kartu skill `p-4`, footer)                                                                                     |
| `45276a8` | `test(e2e)` alur CRUD organisasi & bahasa + cek a11y halaman admin baru                                                                                                                                        |

**Data baru (diverifikasi via REST):** 1 organisasi (PCC), 2 bahasa (Indonesia/Native, Inggris/Intermediate
· TOEIC 685), 5 skill `is_learning` (Next.js, GraphQL, NestJS, Playwright, Express JS) → total skill **56**.

**Dampak UI (screenshot full-page 1440×900, sebelum → sesudah):**

| Halaman       | Sebelum | Sesudah | Delta                                 |
| ------------- | ------- | ------- | ------------------------------------- |
| Beranda       | 3034 px | 2720 px | **−10,3%**                            |
| `/projects`   | 2383 px | 2123 px | **−10,9%**                            |
| `/skills`     | 3756 px | 3385 px | **−9,9%**                             |
| `/about`      | 3482 px | 3601 px | +3,4% (2 section baru, bukan regresi) |
| detail proyek | 2284 px | 2242 px | −1,8%                                 |

Perubahan konkret: `PageContainer` default `max-w-6xl → max-w-7xl` (gutter 144px → 80px di 1440),
`space-y-24 → space-y-14 md:space-y-20`, hero `pt-20 pb-32 → pt-14 pb-16`, `SectionHeading mb-14 → mb-10`,
halaman `py-16 → py-12`, kartu proyek tanpa cover `aspect-video` → `h-32`, judul kartu `line-clamp-2`,
kartu skill `p-5/6 → p-4`, hero **2 kolom** dengan kartu profil (mengisi separuh kanan yang tadinya kosong).

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` **74 lolos** (21 file) ·
`pnpm build` sukses (9 proyek ter-prerender) · `pnpm test:e2e` **16 lolos / 0 di-skip** ·
`pnpm db:types` identik dengan patch manual (diff kosong) · DB bersih (9 proyek, 2 pendidikan,
1 organisasi, 2 bahasa, 0 pesan).

**Catatan jujur:** target mandiri "tinggi `/projects` turun ≥20%" **tidak tercapai** (−10,9%). Sisa tinggi
didominasi konten kartu (judul + ringkasan + chip teknologi). Lever berikutnya bila masih dirasa longgar:
**opsi B** — skill dikelompokkan per kategori (9 kartu, bukan 51) dan/atau kartu proyek 1 baris lebih pendek.

**TODO:** unggahan manual belum berubah (avatar, PDF CV, cover + galeri 9 proyek, 10 gambar sertifikat).
`docs/design-system/portfolio/MASTER.md` belum ditambahi aturan jarak antar-seksi maksimal 80px.

---

### Sesi 2026-10-18 (lanjutan 3) — Deskripsi pengalaman & organisasi jadi poin

**Pertanyaan pemilik:** bisakah deskripsi pengalaman kerja & organisasi dibuat poin, tidak paragraf panjang?
Apakah terkesan aneh?

**Jawaban:** tidak aneh — justru lebih baik. NN Group: ±79% pengunjung _scanning_, bukan membaca, dan
blok paragraf panjang di bagian pengalaman adalah penyebab umum isi terlewat. Yang membuat terkesan aneh
bukan format poinnya, melainkan eksekusinya (poin berupa kalimat panjang, tidak paralel, atau >6 poin).
Aturan yang dipakai: **3–5 poin, satu ide per poin, dimulai kata kerja, struktur paralel.**

**Implementasi (tanpa migrasi baru):**

- `shared/lib/utils.ts` → `toListItems()` (satu baris = satu poin, penanda `-`/`•` dibuang).
- `shared/components/common/BulletPoints.tsx` (baru, diekspor dari barrel) — merender `<ul>` bila ≥2 baris,
  dan **paragraf biasa bila hanya 1 baris** supaya kalimat panjang tidak jadi "poin tunggal" yang janggal.
- Dipakai di `ExperienceTimeline` dan `OrganizationCard`; hint form admin: "Satu poin per baris".
- Data DB diperbarui via REST (service role): pengalaman 5 poin, organisasi 2 poin; file seed
  `03_seed_dari_cv.sql` & `04_seed_organisasi_bahasa.sql` disinkronkan.

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` **78 lolos** (+4 test `toListItems`) ·
`pnpm build` sukses · `pnpm test:e2e` **16 lolos** · screenshot `/about` memastikan poin tampil rapi.

> Kolom tetap `text` dan dipecah saat render, jadi **tidak ada SQL yang perlu dijalankan pemilik**.

---

### Sesi 2026-10-18 (lanjutan 4) — Sakelar status & judul tabel admin

**Permintaan:** (1) nama proyek yang panjang di tabel admin dipotong dengan "…", (2) status jadi sakelar
on/off agar tidak perlu masuk halaman edit untuk mengubahnya.

**Implementasi:**

- Komponen baru: `ui/switch.tsx` (Radix Switch, gaya gold/navy) + `common/StatusToggle.tsx` — memanggil
  Server Action, punya state pending, toast sukses/gagal, lalu `router.refresh()`. Teks "Terbit/Draf"
  tetap ditampilkan di samping sakelar supaya status tidak hanya dikodekan lewat warna (a11y).
- Dipakai di **7 tabel admin** (proyek, keahlian, pengalaman, pendidikan, organisasi, sertifikat, bahasa).
  Keahlian satu-satunya yang belum punya action toggle → ditambahkan `toggleSkillPublish`.
- Kolom pertama tiap tabel (judul/nama) kini `truncate` maksimal 22rem + atribut `title` untuk tooltip
  teks lengkap; import `Badge` yang jadi tak terpakai dibersihkan di 4 tabel.

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` **81 lolos** (22 file, +3 test
`StatusToggle`) · `pnpm build` sukses · `pnpm test:e2e` **17 lolos** (test baru: sakelar status di tabel
proyek langsung menyembunyikan/menampilkan proyek di `/projects` tanpa membuka halaman edit) ·
screenshot tabel admin diperiksa manual · DB bersih (0 sisa data uji).

---

### Sesi 2026-10-18 (lanjutan 5) — Keahlian dikelompokkan per kategori

**Permintaan:** lanjutkan opsi B — skill dikelompokkan per kategori (9 kartu, bukan 51).

**Hasil:** komponen baru `SkillsByCategory` menggantikan `SkillsGrid` (berkas lama **dihapus**, barrel
diperbarui). Satu kartu per kategori berisi: nama kategori, jumlah skill, dan daftar skill dengan
5 titik tingkat (teks `sr-only` "Tingkat X dari 5" tetap ada untuk pembaca layar). Filter kategori
dihapus karena jadi redundan — kartunya sendiri sudah per kategori, dan komponennya kini server
component tanpa state klien.

**Dampak (screenshot full-page 1440×900):**

| Tahap                     | Tinggi `/skills`                                   |
| ------------------------- | -------------------------------------------------- |
| 51 kartu (awal)           | 3756 px                                            |
| setelah rapatkan spacing  | 3385 px                                            |
| **setelah dikelompokkan** | **1936 px (−42,8% vs sebelumnya, −48,5% vs awal)** |

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` **85 lolos** (+4 test
`SkillsByCategory`) · `pnpm build` sukses · `pnpm test:e2e` **18 lolos** (+1 test pengelompokan).

**Catatan data (BUKAN bug — jangan "diperbaiki"):** 7 skill **sengaja** dibiarkan berstatus draf oleh
pemilik — Sensor DHT11, Sensor PIR, Relay 5V, Motor DC & Servo, LCD 16x2, GraphQL, NestJS (dikonfirmasi
2026-10-18). Asalnya klik manual pada sakelar status (`updated_at` berubah satu per satu ±1 detik).
Efek yang memang diinginkan: kartu "Hardware & IoT" berisi 1 skill dan "Sedang Dipelajari" menampilkan
3 chip. Total skill tersimpan 56 (49 terbit + 7 draf).

---

### Sesi 2026-10-18 (lanjutan 6) — Deployment VPS: NPM + CI/CD

**Permintaan:** bantu deploy ke VPS yang sudah ada Nginx Proxy Manager (tersambung Cloudflare) +
Docker, dan setel CI/CD agar tidak perlu masuk server tiap update.

**Keputusan pemilik:** (1) app ↔ NPM lewat **network Docker bersama** (`npm-net`, bukan port ke
host); (2) package GHCR **Public** (VPS tak perlu `docker login`/PAT); (3) domain diisi menyusul —
dipakai lewat GitHub Variable `NEXT_PUBLIC_SITE_URL`, bukan hardcode di file.

| Perubahan                      | Isi                                                                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docker-compose.yml`           | Ditulis ulang: `web` saja (Caddy dihapus) di network eksternal `npm-net`, `container_name: portfolio-web`, healthcheck `/api/health`, rotasi log 10 MB × 3, `IMAGE_TAG` untuk rollback                                          |
| `Caddyfile`                    | **Dihapus** — TLS/header kini di NPM (snippet "Advanced" ada di `DEPLOY.md` §2)                                                                                                                                                 |
| `.github/workflows/deploy.yml` | Diisi penuh: buildx + cache GHA → push `:latest` & `:<sha-7>` ke GHCR → `scp` compose → SSH `compose pull/up` + `image prune` → tunggu status `healthy`, gagal = log 60 baris + exit 1. Di-gate `vars.DEPLOY_ENABLED == 'true'` |
| `DEPLOY.md` (baru, commit)     | Runbook: `npm-net`, `.env` VPS, proxy host NPM, Cloudflare Full (strict), Variables/Secrets, GHCR Public, deploy pertama, rollback, perawatan, troubleshooting                                                                  |
| `.env.example`                 | Catatan blok produksi + `IMAGE_TAG`                                                                                                                                                                                             |

**Catatan teknis penting:**

- Nama image GHCR wajib huruf kecil → workflow memakai `${GITHUB_REPOSITORY,,}`
  (`ghcr.io/ryunoo09/web-portofolio`), cocok dengan `docker-compose.yml`.
- Karena container membuka **hanya `expose` (bukan `ports`)**, verifikasi healthcheck dari VPS
  memakai `docker inspect --format '{{.State.Health.Status}}' portfolio-web`, bukan `curl localhost`.
- `SUPABASE_SERVICE_ROLE_KEY` **tidak pernah** ditaruh di GitHub Secrets — hanya di
  `/opt/portfolio/.env` (chmod 600). Build CI hanya butuh 3 nilai publik.
- Deploy build **tanpa** `SKIP_DB_FETCH` supaya halaman ter-prerender dengan data Supabase asli.

**Status deploy pertama (dijalankan pemilik):** image berhasil di-push ke GHCR, container
`portfolio-web` **berjalan normal di VPS**, SSH dari Actions sudah lolos.

**Empat kendala nyata yang sudah dilewati (semua sudah diperbaiki, detail di `DEPLOY.md` §10):**

1. `tar: docker-compose.yml: Cannot open: Permission denied` — `/opt/portfolio` milik root
   sedangkan `VPS_USER` user lain → pakai `root` atau `chown` + grup `docker`.
2. `ssh: unable to authenticate ... no supported methods remain` — public key belum ada di
   `authorized_keys` milik user yang dipakai (kunci saat setup VPS terpasang di user lain).
3. Job `deploy` gagal `unhealthy` **padahal aplikasi sehat** — healthcheck memakai
   `wget http://localhost:3000`, dan `localhost` di Alpine di-resolve ke IPv6 `::1` sementara Next
   hanya mendengarkan IPv4. **Diperbaiki:** healthcheck kini `node` + `127.0.0.1` (compose),
   tunggu maksimum 150 s, plus diagnostik lengkap (`docker ps -a`, `RestartCount`,
   `State.Health.Log`) saat gagal.
4. Warning `Unexpected input(s) 'script_stop'` — input itu tidak ada di `appleboy/ssh-action@v1`,
   sudah dihapus.

**Belum diverifikasi:** `portfolio-web` `healthy` (perlu run deploy setelah perbaikan healthcheck),
proxy host NPM + HTTPS Cloudflare, dan situs diakses dari domain asli.

---

### Sesi 2026-10-21 — Heading terpotong, periode proyek, kriteria skill

**Permintaan:** (1) perbaiki "Spesialisasi Teknologi" di beranda dan "Keahlian & Penguasaan
Teknologi" di `/skills` yang terpotong di ujung; (2) tulis periode proyek dalam format bulan-tahun
(mulai & selesai); (3) tampilkan kriteria level skill (Mahir/Sedang/Dasar, dst); (4) commit setiap
perubahan, **jangan push**.

**Planning:** `docs/PLANNING-PERBAIKAN-UI-PROYEK-SKILL.md` (lokal, `docs/` di-ignore git).

| Commit    | Isi                                                                                     |
| --------- | --------------------------------------------------------------------------------------- |
| `89d8fcd` | `fix(ui)` padding `.gold-gradient-text` — overhang italic tidak lagi terpotong          |
| `81459c7` | `feat(projects)` `formatMonthPeriod` + periode di kartu/detail + input tanggal di admin |
| `b58b41e` | `feat(skills)` label kriteria dari skala 1–5 yang sudah ada, tampil di publik & admin   |

**Akar masalah heading:** `.gold-gradient-text` memakai `background-clip: text` pada `<span>` inline
tanpa padding; overhang huruf italic "i" terakhir keluar dari kotak background → terpotong.
Diperbaiki dengan `padding-right: .12em` + `padding-left: .03em` + `margin-right: -.12em`
(bukan `inline-block`, karena judul harus tetap wrap di mobile).

**Keputusan:** skala label tetap 5 tingkat (Pemula/Dasar/Menengah/Mahir/Ahli) agar konsisten dengan
dropdown admin dan data DB; label dipusatkan di `features/skills/levels.ts`. Tanggal proyek memakai
format singkat `Mar 2026 — Agu 2026` dengan `timeZone: "UTC"` agar tidak bergeser bulan.
`formatPeriod` (tahun saja) **tidak** diubah karena masih dipakai pengalaman/pendidikan/organisasi.

**Dampak UI:** kartu proyek mendapat satu baris periode (hapus tahun duplikat di strip placeholder);
detail proyek menampilkan rentang penuh (sebelumnya hanya "Mulai"); `/skills` menampilkan label rata
kanan sebelum titik; kartu skill beranda menampilkan `Mahir · 4/5`; tabel admin `4/5 · Mahir`.

**Verifikasi:** `pnpm lint` 0 · `pnpm typecheck` 0 · `pnpm test` **101 lolos** (25 file, +16 tes) ·
`pnpm build` sukses (37 halaman statis) · `pnpm test:e2e` **18 lolos** · DB bersih (9 proyek,
2 pendidikan, 1 organisasi, 2 bahasa, 0 pesan). Screenshot manual: heading 1440/375, kartu proyek
desktop/mobile, hero detail, input tanggal admin, tabel keahlian admin.

> ⚠️ **Commit belum di-push ke GitHub** — sesuai permintaan pemilik sesi ini.

**Titik mulai berikutnya:** tunggu instruksi pemilik untuk `git push`; lanjut Tahap 4 (SEO).

---

### Sesi 2026-10-27/28 — Redesign M0 baseline + M1 token & primitive

**Permintaan:** mulai implementasi redesain Signal Room; M0 hanya baseline, M1 perubahan kode pertama;
setiap PR memakai `clean-code`, `code-reviewer`, `ponytail`; verifikasi 5 perintah lalu commit + push.

**Branch:** `redesign/signal-room` (dari `main` `41d9902`). Tag baseline: `pre-redesign-2026-10`.

**M0:** `baseline/M0-BASELINE.md`. Baseline 5 perintah lulus (lint 0 error/1 warning, test 101,
build 37 halaman, e2e 18). Tidak ada source code diubah.

**M1:** `baseline/M1-REPORT.md`. Token Signal Room/Daylight Ledger di `globals.css`; `@theme inline`;
radius 4/6; focus ring; reduced-motion; `.site-aura`/`.site-grid`; utility lama
(`gold-gradient-text`, `card-luxury`, `luxury-glow-top`) dihapus dari publik + admin; mono menjadi
`--font-jetbrains`; metadata “Backend & Data Engineer”; `enableSystem={false}`; delapan primitive
direstyle; test primitive baru.

**Verifikasi M1:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **27 file / 111 test** · `pnpm build` 37 static page · `pnpm test:e2e` **18 lulus** ·
axe light 7/7 path OK · kontras token terukur · screenshot di
`docs/redesign/screenshots/m1/` (lokal).

**Tidak diubah:** database/migrasi, foto/cover, `/resume.pdf`, halaman publik M4–M7. Inline
gradient/shadow dekoratif halaman lama sengaja menunggu M4/M5.

**Titik mulai berikutnya (M1):** M2 — `SectionIntro`, Navbar/Footer/skip link, StatusBadge, StackList,
EmptyState.

---

### Sesi 2026-10-28 — M2 layout & shared pattern

**M2:** `baseline/M2-REPORT.md`. `PageContainer` max 1200/gutter 24–48; `SectionIntro` tanpa
badge/gradient; `StatusBadge`; `StackList`; `MediaFrame` + `ProjectCoverFallback`; `Breadcrumbs` +
`JsonLd`; `SiteHeader`/`MobileMenu`/`ThemeSwitch`/`SkipLink`; `SiteFooter` 3 kolom. `SectionHeading`,
`Navbar`, `Footer`, `ThemeToggle` dihapus.

**Gate M2:** header 64px konten + border, 0 overflow di 1440/390 light/dark; skip link → `main`;
Sheet mobile buka/Escape/fokus kembali; axe light 7/7 path OK; axe dark E2E 18 lulus.

**Verifikasi M2:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **28 file / 119 test** · `pnpm build` 37 static page · `pnpm test:e2e` **18 lulus** ·
screenshot `docs/redesign/screenshots/m2/` (lokal).

**Known temporary:** `SectionIntro` masih menerima `as="h1"` untuk header halaman; spec final
H2/H3 dan penggantian halaman dilakukan di M6.

**Titik mulai berikutnya:** M3 — `Project.domain` nullable + admin select + `taxonomy.ts` fallback;
map `seo_title`/`seo_description`; `projectMetadata` + `ProjectJsonLd`; breadcrumb proyek. Lanjut
sampai M8, baru merge `redesign/signal-room` ke `main`.

---

### Sesi 2026-10-28 — M3 data, SEO, dan domain

**M3:** `docs/redesign/baseline/M3-REPORT.md` (lokal). Migrasi `0006_project_domain.sql` **diterapkan**
ke Supabase linked setelah backup `docs/redesign/backup/2026-10-28-pre-m3.json`; 9 proyek terisi
domain. Riwayat migrasi remote diperbaiki (`0004`/`0005` ditandai applied karena sebelumnya dijalankan
manual) agar `db push` tidak mengulang migrasi lama.

| Perubahan                    | Isi                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/shared/lib/taxonomy.ts` | `PROJECT_DOMAINS` (6), label, `resolveProjectDomain(slug, stored)` fallback 9 slug, `getProjectDomainLabel`                                    |
| Data proyek                  | `Project.domain`, `seoTitle`, `seoDescription`; query select kolomnya; mapper menyelesaikan fallback; Zod enum/null                            |
| Admin                        | `ProjectForm` dapat memilih **Domain** + mengisi **Judul/Deskripsi SEO** (sebelumnya edit menimpa kolom SEO jadi null)                         |
| SEO                          | `projectMetadata`, `projectJsonLd`, `ProjectJsonLd` (`CreativeWork`), `Breadcrumbs` di detail, OG dinamis 1200×630 berisi judul/domain/outcome |
| Perbaikan                    | `buildMetadata` tidak lagi menulis kunci `images: undefined` (kunci itu memblokir merge `opengraph-image.tsx`); test regresi ditambahkan       |

**Keputusan:** `seo_title`/`seo_description` di DB **dibiarkan kosong** (tidak mengarang klaim) —
metadata memakai fallback `title`/`summary`. OG alt masih statis dan route OG masih dinamis; masuk M7.

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **31 file / 134 test** · `pnpm build` 37 static page · `pnpm test:e2e` **18 lulus**
(termasuk simpan domain di admin + cek `CreativeWork` di detail). Gate OG: HTTP 200 `image/png`
55.870 byte, `og:image`/`twitter:image` 1200×630.

**Titik mulai berikutnya:** M4 — Beranda baru (hero `3 sistem operasional`, metric rail, signal panel,
ticker, featured work, capabilities), lanjut sampai M8 baru merge ke `main`.

---

### Sesi 2026-10-28 — M4 beranda Signal Room

**M4:** `docs/redesign/baseline/M4-REPORT.md` (lokal). Beranda lama (hero 3 CTA, kartu proyek seragam,
kartu skill) diganti tujuh section: **hero → ticker → featured work → proof strip → capabilities →
about strip → contact CTA**.

| Perubahan                             | Isi                                                                                                                                                |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Hero` + `MetricRail` + `SignalPanel` | H1 value prop; nama/peran mono; 2 CTA; metrik `3 sistem operasional`, `88,62%`, `10 → 2` dari `siteConfig.metrics`; panel 4 baris + “Hubungi saya” |
| `SignalTicker`                        | Client; 4 studi kasus + outcome singkat; jeda (`aria-pressed`), hover/focus pause, `prefers-reduced-motion` mati; mobile 2×2 statis                |
| `FeaturedWork` + `CaseCard`           | FTTH (feature) + DSE AI + SIRATA; domain · tipe · tahun; outcome hanya bila ada (FTTH disembunyikan); `StackList`; satu tautan utama               |
| `ProofStrip`                          | 1,2 juta+ baris, 88,62%, AUC 0,86 — hanya dirender bila proyek Water ada                                                                           |
| `Capabilities`                        | 3 baris (Backend & API, Data & Automation, Applied AI & CV) + `ProofLink` nyata                                                                    |
| `AboutStrip` + `ContactCta`           | Indosat/Polines/Brebes; CTA tanpa kata “Konsultasi”                                                                                                |

**Keputusan/penyimpangan:** (1) H1 = value prop (mengikuti `04 §12.2`; “H1 nama” di `06` tidak dipakai);
(2) urutan 3 kartu ditentukan kode di `features/projects/home.ts`, bukan `is_featured` DB; (3) kartu standard tanpa cover
tidak merender blok media agar tidak mengulang judul/stack — media muncul otomatis setelah cover diunggah;
(4) `getFeaturedProjects` & `getTopSkills` dihapus (kode mati); (5) JSON-LD beranda tetap di M7.

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **33 file / 148 test** · `pnpm build` 37 halaman statis · `pnpm test:e2e` **19 lulus** ·
gate `docs/redesign/tools/m4-gate.mjs`: 1440/768/390/320 light+dark `overflow=0`, `h1=1`,
`500+` tidak tampil, ticker pause & reduced motion bekerja, axe light/dark 0 violation ·
screenshot `docs/redesign/screenshots/m4/` (lokal) · tinggi beranda 4011 → 3508 px.

**Titik mulai berikutnya:** M5 — Proyek index & detail.

---

### Sesi 2026-10-28 — M5 proyek index & detail

**M5:** `docs/redesign/baseline/M5-REPORT.md` (lokal). `/projects` kini `ProjectExplorer` (filter) +
`CaseGrid`; halaman detail kini `CaseStudy` 7 section + `CaseToc`/`CaseFacts`/`CaseNext`. Komponen lama
dihapus: `ProjectCard`, `ProjectGrid`, `ProjectDetail`, `ProjectGallery`, `TechStackList`.

| Perubahan                             | Isi                                                                                                                                                                                                                                                                                                |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ProjectExplorer` (client)            | Chip domain `aria-pressed` 44px + `<select>` tipe berlabel; filter in-memory; URL `?domain=&type=` via `router.replace(..., { scroll: false })`; state diturunkan dari `useSearchParams` (back/forward aman); hitung hasil `aria-live="polite"`; `EmptyState` + "Reset filter"; tanpa filter skill |
| SEO filter                            | `generateMetadata` `/projects` baca `searchParams` → `robots: noindex, follow` saat filter valid, canonical selalu `/projects`; halaman index jadi dynamic (revalidate 3600 dihapus); detail tetap ISR 1 jam                                                                                       |
| `CaseStudy`                           | Header (meta mono · `StatusBadge` · H1 judul · summary · CTA) → media 16:9 → section Masalah/Peran & batasan/Solusi/Deskripsi & arsitektur/Hasil/Tantangan & pelajaran/Galeri; **Hasil disembunyikan bila `outcomes` kosong**; galeri hanya bila ada gambar                                        |
| `CaseToc`                             | `IntersectionObserver` `-96px 0px -60% 0px`; sticky `top:88px` ≥1024; `<details>` mobile menutup setelah klik; `aria-current="location"`; <3 section → tidak dirender; tanpa smooth scroll                                                                                                         |
| `CaseFacts` / `CaseNext` / `CaseGrid` | `<dl>` fakta + `StackList`; kartu "Proyek berikutnya" (berputar); grid standar `h2` gap 16/24                                                                                                                                                                                                      |
| Baru di shared                        | `EmptyState`; `buildMetadata` menerima `robots` opsional; `PROJECT_TYPES` + `projectTypeToParam`/`resolveProjectType` di `taxonomy.ts`; `features/projects/case.ts` (`pickNextProject`, `resolveProjectStatus`)                                                                                    |
| Perbaikan a11y                        | `SiteFooter` heading `h3` → `h2` (axe `heading-order` gagal di halaman tanpa H2, mis. `/projects` saat filter kosong); `CaseGrid` kartu `h2`                                                                                                                                                       |

**Keputusan/penyimpangan:** (1) section spec "Arsitektur & keputusan" dirender sebagai "Deskripsi &
arsitektur" dari `descriptionHtml` (konten tidak boleh diubah); (2) `?type=` memakai slug (`tugas-kuliah`);
(3) TOC di rail kanan atas `CaseFacts`; (4) status: tanpa `endedAt` → Sedang dikerjakan, deployed → Live,
tanpa repo → Kode privat, selainnya Arsip; (5) e2e selector pindah ke `[data-slot="case-card"]` dan tes
robots menolerir meta default yang tidak dipancarkan Next.

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **37 file / 172 test** · `pnpm build` sukses (`/projects` dynamic, 9 proyek SSG) ·
`pnpm test:e2e` **21 lulus** · gate `docs/redesign/tools/m5-gate.mjs`: 4 viewport × light/dark
`overflow=0`/`h1=1`/`cards=9`, filter 9→4→2→9 + empty state + noindex + back/forward, TOC sticky/anchor,
axe (WCAG + best-practice) 12 pemeriksaan 0 violation · screenshot `docs/redesign/screenshots/m5/` (lokal).

**Titik mulai berikutnya:** M6 — About, skills, contact (`AboutProof`, `Principles`,
`ExperienceTimeline`, `CapabilityBoard`, `ContactForm` + wiring halaman & 404).

---

### Sesi 2026-10-28 — M6 about, skills, contact

**M6:** `docs/redesign/baseline/M6-REPORT.md` (lokal). Tiga halaman publik terakhir dirapikan; 404
memakai kerangka publik yang sama.

| Perubahan  | Isi                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/about`   | `AboutProof` (bio paragraf 68ch + fakta `9 studi kasus · 3 sistem operasional · 88,62% akurasi model`), `Principles` 3 baris, `ExperienceTimeline` `<ol>`, `CredentialRow` untuk pendidikan/sertifikasi/organisasi, `LanguageList` chip teks, CTA Hubungi/Unduh CV |
| `/skills`  | `CapabilityBoard`: statistik 46/8/3 dari data, 4 capability group + bukti proyek, 8 kategori teknis sebagai rows (level teks, bukti maks 2 + `+n`), “Belum ada studi kasus” jujur, tanpa progress bar, “Sedang dipelajari”                                         |
| `/contact` | `ContactForm` (intent select, Topik, pesan + hint, honeypot, `ErrorSummary` fokus + anchor, sukses `role="status"`, privacy line), `ContactPanel` (salin email `aria-live`, lokasi, respons, jejaring, CV), `ContactPaths`                                         |
| 404        | `not-found.tsx` baru + `PublicShell` diekstrak dari layout `(public)` → header/footer + `<main>` (memperbaiki axe `landmark-one-main`/`region`)                                                                                                                    |
| Shared     | `ErrorSummary`, `PublicShell`; `PROJECT_SHORT_LABELS` 9 proyek dipakai ticker + bukti skill                                                                                                                                                                        |
| Dihapus    | `AboutContent`, `EducationCard`, `CertificateCard`, `OrganizationCard`, `SkillCard` (+test), `SkillsByCategory` (+test), `ContactInfoCard`                                                                                                                         |

**Keputusan/penyimpangan:** (1) H1 `/skills` = “Keahlian” (`04 §12.2`), kategori teknis `h3` di bawah
`h2 “Kategori teknis”`; (2) intent disimpan sebagai awalan subjek (`Rekruter: …`) karena `contact_messages`
belum punya kolom intent dan `04 §9.2` tidak mengusulkannya — tanpa migrasi; (3) bio kosong menampilkan
“Bio belum diisi.” (tidak menduplikasi copy di kode); (4) FAQ rekruter dilewati karena draft masih `TODO`;
(5) `shouldFocusError: false` agar fokus dipegang `ErrorSummary`.

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **39 file / 181 test** · `pnpm build` sukses · `pnpm test:e2e` **22 lulus** ·
gate `docs/redesign/tools/m6-gate.mjs`: 4 halaman × 4 viewport × light/dark `overflow=0`/`h1=1`/tanpa
progress bar, axe 16 pemeriksaan 0 violation, keyboard form + error summary fokus + salin email ·
screenshot `docs/redesign/screenshots/m6/` (lokal).

**Titik mulai berikutnya:** M7 — Motion, SEO, performa, header (motion 3 lapis + reduced motion,
metadata semua rute/OG/sitemap/canonical/JSON-LD/robots, image sizes + JS budget, security headers +
health + CSP report-only), lalu Lighthouse mobile ≥90.

---

### Sesi 2026-10-28 — M7 motion, SEO, performa, header

**M7:** `docs/redesign/baseline/M7-REPORT.md` (lokal).

| Perubahan | Isi                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Motion    | ticker 28s + pause `aria-pressed`; reduced motion `0.01ms` + `scroll-behavior: auto`; smooth scroll + `scroll-padding-top: 88px`; entrance hero 200ms; sheet admin ≤200ms                                                                                                                                                                                     |
| SEO       | metadata per rute `04 §12.1` (absolute title, canonical, deskripsi); OG 1200×630 per rute (beranda/about/projects/skills/contact) + OG proyek; JSON-LD `WebSite/Person/ProfilePage`, `CollectionPage/ItemList`, `AboutPage/Person`, `ContactPage`, `CreativeWork/BreadcrumbList`; sitemap `updated_at`; robots disallow `/admin`+`/api`; 404 noindex otomatis |
| Performa  | JS publik **330 → 176 KB** (contact 182 KB): barrel admin dipisah (`features/<x>/admin.ts`, `shared/components/admin.ts`), Toaster pindah ke layout admin, form kontak tanpa RHF/zod di klien, menu mobile `<dialog>` native (bukan Radix Sheet); font `display:"optional"`; dekorasi aura/grid dimatikan <768px; prioritas gambar ≤2                         |
| Header    | HSTS, nosniff, XFO DENY, Referrer-Policy, Permissions-Policy, CSP Report-Only; `/api/health` 200                                                                                                                                                                                                                                                              |

**Keputusan/penyimpangan:** (1) menu publik `dialog` native (sheet tetap untuk sidebar admin);
(2) form kontak `noValidate` + validasi lokal, zod tetap di server; (3) `/resume.pdf` tidak masuk sitemap
(berkas belum ada); (4) judul 404 default (status 404 + noindex dari Next); (5) intent kontak tetap
awalan subjek.

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus ·
`pnpm test` **40 file / 186 test** · `pnpm build` sukses · `pnpm test:e2e` **23 lulus** ·
gate `docs/redesign/tools/m7-gate.mjs`: 6 header + health, 6 OG unik, metadata/JSON-LD lengkap tanpa
`missing`, JS 176/182 KB, LCP 1,6–2,6 s (CDP 4× CPU + Slow 4G), CLS 0, axe 24 pemeriksaan 0 violation,
reduced motion & pause ticker, menu dialog (fokus/Escape/kembali), filter noindex.

**⚠️ Lighthouse mobile:** gate **≥90 belum tercapai di host ini** — 3 run `/`: perf 67–69, LCP 3,4–3,6 s
(simulated), TBT 1.030–1.200 ms, CLS 0; `/projects` 72. Host menjalankan ±50 proses Chrome pengguna
(CPU 18–51%) dan TBT antar-sesi 230–1.390 ms. Dengan `--throttling-method=devtools` LCP 2,3 s.
Best-practices/SEO/a11y = 100. Sisa beban: framework React/Next ~115 KB + hidrasi. Rekomendasi: ukur
ulang di CI/host idle sebelum rilis (M8-T3).

**Titik mulai berikutnya:** M8 — QA & rilis (test tambahan, e2e+axe+keyboard+reduced motion,
visual regression + Lighthouse 4 viewport, preview/rilis/smoke/rollback).

---

### Sesi 2026-10-28 — M8 QA & rilis

**M8:** `docs/redesign/baseline/M8-REPORT.md` (lokal). QA lengkap + preview produksi lokal; **belum merge ke `main`**.

| Perubahan      | Isi                                                                                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit/component | +4 tes: `ContactPanel` (salin email + `aria-live`, tautan), `app/not-found` (H1, 2 CTA, `<main>`), `siteConfig` (3 metrik, tanpa `500+`). Total **43 file / 190 tes**.                                                                                                                                          |
| E2E            | `a11y.spec.ts` 5 rute × light/dark + detail × light/dark + 404 × light/dark (14 axe, 0 violation); `qa.spec.ts` skip link, filter keyboard, TOC desktop/mobile, error summary kontak, 404, reduced motion, TOC tidak menimpa fakta; `smoke.spec.ts` 6 rute + health + 404. Total **60 e2e lulus** (admin ikut). |
| Visual         | `e2e/visual.spec.ts`: 6 rute × 4 viewport × 2 tema = 48 snapshot viewport; stabil 2 run. Baseline win32, indikator dev/scrollbar disembunyikan, font dimuat lalu reload.                                                                                                                                        |
| Lighthouse     | 320/390/768/1440 + `/projects`: perf **92–100**, a11y/BP/SEO **100**, CLS 0; LCP mobile 2,5–3,1 s (host berbeban 46 Chrome). Bukan host idle.                                                                                                                                                                   |
| Perbaikan      | `resume.pdf` tidak lagi di-prefetch RSC (`Link` → `<a>`); ticker `min-h-6` + tombol jeda `z-10` (target-size 768); tombol jeda disembunyikan saat reduced motion.                                                                                                                                               |
| Preview        | `next start -p 3001`: 6 rute 200 + satu H1, health 200, 404, sitemap, robots, admin login, 6 header keamanan. Rollback readiness: tag GHCR lama tersedia; eksekusi VPS tidak dilakukan.                                                                                                                         |

**Keputusan/penyimpangan:** snapshot visual viewport-only (bukan full page) agar repo tidak bengkak; baseline hanya win32; tidak ada dependency baru; rilis produksi tidak dijalankan karena instruksi sesi hanya push branch.

**⚠️ Keamanan:** repo variable `NEXT_PUBLIC_SUPABASE_ANON_KEY` berisi JWT **service_role** dan repo publik. Sudah diganti dengan kunci `anon` yang benar. **Rotasi kunci `service_role` lama di Supabase** karena sudah terekspos.

**⚠️ Blocker rilis:** `/resume.pdf` belum ada (404) → tombol CV belum berfungsi; LCP mobile belum konsisten <2,5 s di host berbeban (ukur di CI/idle).

**Verifikasi:** `pnpm lint` 0 error (1 warning pre-existing) · `pnpm typecheck` lulus · `pnpm test` **190** · `pnpm build` sukses (42 halaman) · `pnpm test:e2e` **60 lulus**.

**Titik mulai berikutnya:** unggah `/resume.pdf`, ukur Lighthouse di CI/host idle, lalu merge `redesign/signal-room` → `main` setelah persetujuan (deploy.yml otomatis).

---

### Sesi 2026-10-28 (lanjutan) — TOC studi kasus menimpa fakta

**Masalah:** TOC sticky di dalam rail bersama `CaseFacts` membuat TOC tertinggal/tertarik ke atas saat rail habis, lalu menutupi teks fakta di bawahnya.

**Perbaikan:** sticky dipindah dari `<nav>` TOC ke seluruh `<aside>` lewat class `.case-rail` (aktif hanya ≥1024px dan tinggi viewport ≥760px), tanpa `overflow` internal sehingga tidak ada scrollbar di rail. `CaseToc` hanya `lg:block`. Tidak ada perubahan konten.

**Tes regresi:** `e2e/qa.spec.ts` — scroll 1100 (TOC sticky di 88px) dan 1500 (TOC tidak menimpa fakta).

**Verifikasi:** `pnpm lint` 0 error · `pnpm typecheck` lulus · `pnpm test` **193** · `pnpm build` sukses · `pnpm test:e2e` **60 lulus** · visual 12 tes lulus.

---

### Sesi 2026-10-28 (lanjutan) — CV bisa diganti dari admin

**Masalah:** header/footer/menu mobile memakai `/resume.pdf`, sehingga upload CV lewat admin belum memperbaiki tautan tersebut; menaruh PDF di `public/` berarti masuk repo publik.

**Perbaikan:** route dinamis `src/app/resume.pdf/route.ts` membaca `profile.resume_url`, mengambil PDF dari Supabase Storage, lalu mengirimnya sebagai lampiran (`Content-Disposition: attachment`). Tidak ada PDF di repo; admin cukup upload/ganti di `/admin/profile` → Berkas CV.

**Perilaku:** 404 bila CV belum diunggah; 502 bila sumber bukan PDF; `no-store` agar perubahan langsung terlihat. Tidak perlu deploy ulang saat ganti CV.

**Verifikasi:** 3 tes route · `pnpm test` **193** · `pnpm build` mendaftarkan `ƒ /resume.pdf` · route lokal mengembalikan 404 sebelum upload (sesuai harapan).

---

### Sesi 2026-10-28 (lanjutan) — Avatar di halaman tentang

**Permintaan:** tampilkan foto avatar yang diunggah dari admin di `/about`; tata letak diserahkan ke agent.

**Implementasi:** `ProfilePortrait` (1:1) di blok `AboutProof` — bio di kolom kiri 8/4 dan potret di kanan, caption nama + headline, fallback monogram RYW + “Foto menyusul” bila belum ada foto. Header halaman tetap full width di atas. `MediaFrame.caption` kini menerima `ReactNode`; gambar potret `priority` + `sizes` 320/280. Hero tetap tipografis agar arah Signal Room tidak berubah.

**Catatan:** baseline visual `tentang-*` (8 snapshot) diperbarui dengan foto **dimask**, jadi gambar avatar tidak ikut tersimpan di repo publik dan mengganti avatar tidak mengubah baseline. Layout/caption tetap diuji.

**Verifikasi:** `pnpm test` **195** (2 tes `ProfilePortrait`) · visual 12 tes lulus.

---

### Sesi 2026-10-31 — Galeri dokumentasi pengalaman + deskripsi sertifikat

**Permintaan:** halaman pengalaman bisa menampilkan gambar dokumentasi, halaman sertifikat bisa
menyimpan deskripsi, tiap perubahan di-commit.

**Branch:** `feat/galeri-pengalaman-deskripsi-sertifikat` (dibuat dari `redesign/signal-room`;
`main` tidak disentuh). Lima commit: deskripsi sertifikat, galeri dokumentasi, E2E, graphify,
handoff.

**Migrasi (diterapkan ke project linked):**

- `0007_certificate_description.sql` — `certificates.description text` (nullable).
- `0008_experience_images.sql` — tabel `experience_images` (FK cascade ke `experiences`, index
  `(experience_id, sort_order)`, RLS: publik baca hanya bila pengalaman induk terbit, admin all).
- `pnpm db:types` dijalankan ulang; diff `database.ts` hanya menambah kolom/tabel di atas.

**File baru:** `supabase/migrations/0007_*`, `0008_*`,
`features/experiences/components/admin/ExperienceGalleryManager.tsx` (+ test),
`features/certificates/components/admin/CertificateForm.test.tsx`.

**Cara pakai admin:** sertifikat — isi field **Deskripsi** (maks 500 karakter), tampil sebagai
paragraf di baris sertifikat `/about`. Pengalaman — **simpan dulu** pengalaman baru, lalu buka
halaman ubah untuk mengunggah **Dokumentasi Pengalaman** (banyak berkas sekaligus, drag & drop,
teks alternatif disimpan saat blur). Hapus gambar atau pengalaman ikut membersihkan objek Storage.

**Tampilan publik:** `ExperienceTimeline` merender grid `2`/`3` kolom `MediaFrame` (`4/3`) di
bawah bullet, hanya untuk pengalaman terbit, `data-slot="experience-gallery"` untuk mask visual.
Prop `CredentialRow.description` yang sudah ada kini dipakai sertifikat.

**Verifikasi:** `pnpm lint` 0 error (1 warning lama di `.opencode/plugins/graphify.js`) ·
`pnpm typecheck` bersih · `pnpm test` **208** tes (47 file) · `pnpm build` sukses ·
`pnpm test:e2e` **62 tes lulus** (termasuk 2 alur admin baru) · RLS dicek dengan anon key
(SELECT 200, INSERT 401).

**Baseline visual:** `proyek-*` dan `tentang-*` di-regenerasi karena **konten DB berubah** sejak
baseline lama (bio profil baru dan kartu proyek DSE AI), bukan karena perubahan layout; gambar
dokumentasi dimask, jadi foto pribadi tidak masuk repo. Baseline Linux tetap ditunda.

---

### Sesi 2026-10-31 (lanjutan) — Hardening auth admin

**Permintaan:** baca `docs/PLANNING-ADMIN-AUTH-HARDENING.md` lalu eksekusi seluruh rencananya.
Keputusan pemilik: kerjakan semua commit sekarang, **sesi 12 jam** (bukan 7 hari), commit per
perubahan logis + push ke `origin`. `main` tidak disentuh.

**Branch:** `fix/admin-auth-hardening` (dari `feat/galeri-pengalaman-deskripsi-sertifikat`), 13 commit.

| Commit    | Isi                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------- |
| `d0d52bb` | `shared/lib/supabase/cookie-options.ts` sebagai satu sumber opsi cookie; dipakai `server.ts` + `proxy.ts` |
| `823cc7e` | `admin/login/page.tsx` jadi `async` + `getCurrentAdmin()` → admin aktif dialihkan ke `/admin`             |
| `d2a7208` | `login` menolak akun yang tidak ada di tabel `admins`, lalu `signOut()`                                   |
| `940d721` | `logout` fallback `signOut({ scope: "local" })` + `revalidatePath("/admin", "layout")`                    |
| `43f6e21` | redirect proxy tidak membuang cookie hasil refresh; header `no-store` dari `setAll` ikut disalin          |
| `9bb6411` | `getCurrentAdmin` dibungkus `cache()` + `requireAdminPage()`                                              |
| `9040183` | guard `requireAdminPage()` di 24 page `(dashboard)` (5 page `new` sekaligus jadi `async`)                 |
| `1579673` | layout admin `dynamic = "force-dynamic"` + `revalidate = 0`                                               |
| `498d2e3` | `Cache-Control: no-store` + `X-Robots-Tag: noindex` untuk semua respons `/admin/**`                       |
| `eb1e554` | proxy melewati cek sesi di `/admin/login` — perbaikan balapan `Set-Cookie`                                |
| `391297a` | `data-scroll-behavior="smooth"` di `<html>` (syarat Next.js 16 karena CSS memakai smooth scroll)          |
| `0a66eee` | `e2e/auth-guard.spec.ts`: 25 rute tanpa sesi + header no-store/noindex + atribut cookie + logout          |
| `57f86a0` | `DEPLOY.md §3a`: Cache Rule Cloudflare `Bypass admin` + checklist pra-deploy                              |

**Keputusan/penyimpangan:** (1) `maxAge` **tidak** ditulis di `AUTH_COOKIE_OPTIONS` —
`applyServerStorage()` di `@supabase/ssr` selalu menimpanya dengan bawaan 400 hari, jadi durasi
sesi dipaksa lewat `withSessionMaxAge()` dan nilai `maxAge: 0` milik library dibiarkan agar logout
tetap menghapus semua chunk; (2) halaman yang dijaga **24**, bukan 26 seperti di planning — dua
path di daftar rencana tidak ada di repo; (3) guard layout tidak cukup karena layout tidak
dirender ulang saat navigasi klien, sehingga guard per page wajib; (4) `signOut()` diubah ke
`scope: "local"` — scope global (bawaan) mencabut **semua** sesi akun sehingga logout di satu tab
melempar pengguna lain (dan tes E2E paralel) ke halaman login; (5) `devIndicators: false` dicoba
lalu dibatalkan — widget dev tools tetap menutupi tombol "Keluar", solusinya `page.addStyleTag`
seperti di `visual.spec.ts`.

**Koreksi diagnosis:** mula-mula gejala `Auth session missing!` dicurigai sebagai balapan baca
cookie `@supabase/ssr`, sehingga asersi redirect `/admin/login` sempat dihapus. Instrumentasi
menunjukkan semua request gagal datang tanpa cookie sama sekali — sesi sudah dicabut lebih dulu oleh
`signOut` global. Setelah scope diperbaiki, asersi dikembalikan (3/3 lulus pada `--repeat-each=3`).

**Verifikasi:** `pnpm lint` 0 error (1 warning lama di `.opencode/plugins/graphify.js`) ·
`pnpm typecheck` bersih · `pnpm test` **47 file / 208 tes** · `pnpm build` sukses (semua `/admin/**`
`ƒ Dynamic`) · `pnpm test:e2e` **90 tes lulus** (termasuk 48 snapshot visual) · `auth-guard.spec.ts`
140/140 dengan `--repeat-each=5` · cookie sesi terukur ≈43.200 s (12 jam), access token tetap 1 jam.

**Titik mulai berikutnya:** tinjau 13 commit di `fix/admin-auth-hardening` lalu merge ke
`redesign/signal-room` setelah persetujuan; tambahkan rate-limit login; uji ulang balapan
`@supabase/ssr` setelah library dinaikkan.

---

## ▶️ CARA MEMULAI SESI BERIKUTNYA

> "Lanjutkan **rilis Signal Room** setelah M8: (1) tinjau lalu merge
> `feat/galeri-pengalaman-deskripsi-sertifikat` → `redesign/signal-room` (sudah di-push, menunggu
> persetujuan pemilik; migrasi `0007`/`0008` sudah terpasang di project linked); (2) unggah/ganti CV lewat `/admin/profile` →
> Berkas CV (`/resume.pdf` membaca `profile.resume_url`); (3) ukur Lighthouse mobile di CI/host idle
> sampai LCP <2,5 s (laporan M8 ada di `docs/redesign/baseline/M8-REPORT.md`); (4) merge
> `redesign/signal-room` → `main` setelah persetujuan, pantau `deploy.yml`, lalu smoke 6 rute +
> `/api/health` + admin login; (5) siapkan rollback `IMAGE_TAG=<sha7-sebelumnya>` (<10 menit).
> Terapkan `ponytail`, `clean-code`, `code-reviewer`, `senior-frontend`, `ui-ux-pro-max`.
> Jangan ubah konten/klaim. Verifikasi `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`,
> `pnpm test:e2e` (PowerShell tidak mendukung `&&`), lalu commit + push."
>
> Visual regression: `pnpm test:e2e` memakai baseline Windows di
> `e2e/visual.spec.ts-snapshots/`; regenerasi dengan `--update-snapshots` bila UI memang berubah.
>
> Saat akun uji sudah siap: isi `E2E_ADMIN_EMAIL` & `E2E_ADMIN_PASSWORD` di `.env.local`,
> jalankan `pnpm test:e2e`, dan pastikan blok admin di `e2e/admin-flow.spec.ts` hijau.
