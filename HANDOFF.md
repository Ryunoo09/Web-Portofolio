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

| Fase                  | Status                                                                 |
| --------------------- | ---------------------------------------------------------------------- |
| 1. Fondasi + Supabase | ✅ **SELESAI**                                                         |
| 2. Halaman publik     | ✅ **SELESAI** — data asli dari Supabase, `dummyData.ts` **dihapus**   |
| 3. Dashboard admin    | 🟡 **SEBAGIAN** — auth selesai; **CRUD belum**                         |
| 4. SEO & performa     | 🟡 Sebagian (metadata, sitemap dinamis); JSON-LD & OG image masih stub |
| 5. Testing            | 🟡 Hanya tes `utils`; E2E masih stub                                   |
| 6. Deployment         | 🔴 File ada, belum dijalankan                                          |

### Detail Fase 3

**Sudah:** `login`/`logout`, guard `getCurrentAdmin()` + `requireAdmin()`, `proxy.ts`
(refresh sesi + proteksi), layout admin + sidebar (`AdminSidebar`), halaman **Ringkasan**
dengan hitungan konten.

**Belum (lanjutan Tahap 3):** CRUD Proyek (form/tabel/hapus/publish toggle/upload gambar),
Tiptap + sanitasi, CRUD Skill, CRUD Pengalaman/Pendidikan/Sertifikat, Edit Profil,
Inbox Pesan, revalidasi di semua action.
**Semua halaman admin selain Ringkasan masih placeholder `TODO`.**

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

---

## 🗺️ ROADMAP LANJUTAN

### Tahap 3 — CRUD Admin (lanjutkan di sini)

1. CRUD **Projects** (form RHF + Zod, tabel TanStack, hapus + dialog, publish toggle) + upload gambar ke Storage
2. Integrasi **Tiptap** + sanitasi HTML server-side
3. CRUD **Skills**
4. CRUD **Experiences / Education / Certificates**
5. Edit **Profile** (avatar, CV, social links, SEO)
6. **Inbox pesan** (baca/tandai/hapus)
7. Pastikan **revalidasi** di semua action (`shared/lib/revalidate.ts`)

### Tahap 4 — SEO & Kualitas

JSON-LD (Person, WebSite, Project) · `generateMetadata` semua halaman · `opengraph-image` nyata ·
unit/komponen test · E2E Playwright · header keamanan + CSP

### Tahap 5 — Deployment

CI/CD (GitHub Actions → GHCR → VPS) · setup VPS · DNS Cloudflare · monitoring uptime ·
Google Search Console

---

## 🧪 PERINTAH VERIFIKASI WAJIB (sebelum commit)

```bash
pnpm lint        # harus 0 error, 0 warning
pnpm typecheck   # harus bersih
pnpm test        # harus lulus
pnpm build       # harus sukses
```

---

## 🚧 UTANG TEKNIS (sengaja dilewati, tercatat)

- **Gambar cover & galeri proyek** belum diambil — perlu `next.config` `remotePatterns` +
  upload storage. Ada komentar `shortcut:` di `features/projects/server/queries.ts`.
- **`opengraph-image.tsx`** masih teks statis "Portofolio".
- **Login belum ada rate-limit kustom.**
- **Proxy tidak me-redirect admin yang sudah login** dari `/admin/login` (sengaja, hindari loop).
- **AboutContent** — grid "Prinsip & Filosofi" masih hardcoded (DB tak punya kolomnya).
- **`features/projects/seo.ts`** & **`shared/lib/seo/jsonLd.ts`** masih stub.
- **`getTopSkills(4)`** = 4 skill pertama by `sort_order` (skema skill tak punya `featured`).

---

## ▶️ CARA MEMULAI SESI BERIKUTNYA

> "Lanjutkan Tahap 3: CRUD Proyek. Terapkan skill clean-code, ponytail, fullstack-developer,
> senior-fullstack, code-reviewer, frontend-developer, senior-frontend, ui-ux-pro-max.
> Commit + push setiap perubahan."
