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
`experiences`, `education`, `organizations`, `languages`, `certificates`, `contact_messages`, `posts`.

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
| 6. Deployment         | 🟡 Siap (NPM + CI/CD tertulis) — menunggu setup VPS & secrets            |

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

## ▶️ CARA MEMULAI SESI BERIKUTNYA

> "Lanjutkan Tahap 4 (SEO & Kualitas): JSON-LD Person/WebSite/Project, `generateMetadata`
> lengkap, `opengraph-image` memakai cover proyek, dan header keamanan/CSP. Terapkan skill
> clean-code, ponytail, fullstack-developer, senior-fullstack, code-reviewer,
> frontend-developer, senior-frontend, ui-ux-pro-max. Verifikasi `pnpm lint && pnpm typecheck
&& pnpm test && pnpm build && pnpm test:e2e`, lalu commit + push setiap perubahan."
>
> Saat akun uji sudah siap: isi `E2E_ADMIN_EMAIL` & `E2E_ADMIN_PASSWORD` di `.env.local`,
> jalankan `pnpm test:e2e`, dan pastikan blok admin di `e2e/admin-flow.spec.ts` hijau.
