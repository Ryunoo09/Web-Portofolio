#!/usr/bin/env bash
# =============================================================================
# scaffold-portfolio.sh
# Membuat struktur folder + berkas placeholder project portofolio
# sesuai PLANNING-PORTOFOLIO.md (tanpa desain/UI).
#
# Jalankan dari ROOT project Next.js hasil create-next-app:
#   bash scaffold-portfolio.sh
#
# Perilaku:
# - Berkas yang SUDAH ADA dilewati (aman dijalankan ulang).
# - Hanya 3 berkas bawaan create-next-app yang sengaja DITIMPA:
#   src/app/layout.tsx, next.config.ts, eslint.config.mjs
# =============================================================================
set -euo pipefail

if [ ! -f package.json ] || [ ! -d src/app ]; then
  echo "Jalankan skrip ini dari root project Next.js (harus ada package.json dan src/app)."
  exit 1
fi

created=0
skipped=0

# mk <path> : buat berkas dari stdin bila belum ada
mk() {
  local path="$1"
  mkdir -p "$(dirname "$path")"
  if [ -e "$path" ]; then
    cat > /dev/null
    skipped=$((skipped + 1))
    echo "  lewati  $path"
  else
    cat > "$path"
    created=$((created + 1))
    echo "  buat    $path"
  fi
}

# mkf <path> : buat/timpa berkas dari stdin
mkf() {
  local path="$1"
  mkdir -p "$(dirname "$path")"
  cat > "$path"
  created=$((created + 1))
  echo "  TIMPA   $path"
}

# keep <dir> : buat folder kosong yang bisa di-commit
keep() {
  : | mk "$1/.gitkeep"
}

# page <path> <NamaFungsi> <Judul> : halaman placeholder
page() {
  mk "$1" <<EOF
export default function $2() {
  return (
    <main>
      <h1>$3</h1>
      <p>TODO: implementasikan halaman ini.</p>
    </main>
  );
}
EOF
}

echo "==> [1/9] Shared: konstanta, tipe, utilitas"

mk src/shared/constants/siteConfig.ts <<'EOF'
export const siteConfig = {
  name: "Nama Anda",
  title: "Nama Anda | Portofolio",
  description: "Portofolio dan karya saya.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
} as const;
EOF

mk src/shared/constants/routes.ts <<'EOF'
export const ROUTES = {
  home: "/",
  about: "/about",
  skills: "/skills",
  contact: "/contact",
  projects: "/projects",
  project: (slug: string) => `/projects/${slug}`,
  admin: {
    root: "/admin",
    login: "/admin/login",
    projects: "/admin/projects",
    skills: "/admin/skills",
    experiences: "/admin/experiences",
    education: "/admin/education",
    certificates: "/admin/certificates",
    profile: "/admin/profile",
    messages: "/admin/messages",
  },
} as const;
EOF

mk src/shared/types/action-result.ts <<'EOF'
export type ActionResult<T = void> =
  | { ok: true; data: T }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };
EOF

mk src/shared/types/database.ts <<'EOF'
// PLACEHOLDER. Ganti dengan hasil `pnpm db:types` setelah skema database dibuat.
export type Database = {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
EOF

mk src/shared/lib/utils.ts <<'EOF'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(value: string | Date, locale = "id-ID"): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(value));
}
EOF

mk src/shared/lib/utils.test.ts <<'EOF'
import { describe, expect, it } from "vitest";
import { slugify } from "./utils";

describe("slugify", () => {
  it("mengubah teks menjadi slug", () => {
    expect(slugify("Aplikasi Deteksi FAT Box!")).toBe("aplikasi-deteksi-fat-box");
  });

  it("membuang tanda diakritik dan tanda hubung berlebih", () => {
    expect(slugify("  Café -- Ñandú  ")).toBe("cafe-nandu");
  });
});
EOF

mk src/shared/lib/sanitize.ts <<'EOF'
import sanitize from "sanitize-html";

/** Membersihkan HTML dari editor rich text sebelum disimpan/dirender. */
export function sanitizeHtml(html: string): string {
  return sanitize(html, {
    allowedTags: sanitize.defaults.allowedTags.concat(["img", "h1", "h2"]),
    allowedAttributes: {
      ...sanitize.defaults.allowedAttributes,
      img: ["src", "alt", "width", "height"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });
}
EOF

mk src/shared/lib/revalidate.ts <<'EOF'
import { revalidatePath } from "next/cache";

/** Satu pintu untuk memperbarui halaman publik terkait proyek. */
export function revalidateProjects(slug?: string): void {
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
  revalidatePath("/sitemap.xml");
}
EOF

mk src/shared/lib/seo/buildMetadata.ts <<'EOF'
import type { Metadata } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
EOF

mk src/shared/lib/seo/jsonLd.ts <<'EOF'
/** Serialisasi JSON-LD yang aman dipasang di <script type="application/ld+json">. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
EOF

mk src/shared/lib/seo/index.ts <<'EOF'
export { buildMetadata } from "./buildMetadata";
export { serializeJsonLd } from "./jsonLd";
EOF

echo "==> [2/9] Shared: klien Supabase"

mk src/shared/lib/supabase/public.ts <<'EOF'
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/shared/types/database";

/**
 * Klien TANPA cookies untuk query publik.
 * Wajib dipakai di halaman publik agar halaman tetap statis/ISR.
 */
export function createPublicClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );
}
EOF

mk src/shared/lib/supabase/server.ts <<'EOF'
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/shared/types/database";

/** Klien DENGAN cookies (sesi admin). Pakai di /admin dan Server Actions. */
export async function createServerSupabase() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (items) => {
          try {
            items.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Dipanggil dari Server Component: abaikan, sesi di-refresh oleh proxy.
          }
        },
      },
    },
  );
}
EOF

mk src/shared/lib/supabase/browser.ts <<'EOF'
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/shared/types/database";

/** Klien browser. Jarang dipakai; utamakan Server Component/Action. */
export function createBrowserSupabase() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
EOF

mk src/shared/lib/supabase/admin.ts <<'EOF'
import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/shared/types/database";

/**
 * Klien service role: MELEWATI RLS. Hanya untuk server, pakai seperlunya.
 * Jangan pernah mengimpor berkas ini dari kode yang bisa terbawa ke browser.
 */
export function createAdminClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
EOF

echo "==> [3/9] Shared: komponen & hooks (folder kosong)"
keep src/shared/components/ui
keep src/shared/components/layout
keep src/shared/components/common
keep src/shared/hooks

mk src/shared/components/index.ts <<'EOF'
// Barrel komponen bersama. Ekspor komponen layout/common di sini setelah dibuat.
// Contoh: export { PageContainer } from "./layout/PageContainer";
export {};
EOF

echo "==> [4/9] Fitur: projects"

mk src/features/projects/types.ts <<'EOF'
export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  descriptionHtml: string | null;
  coverImageUrl: string | null;
  coverImageAlt: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  skills: { id: string; name: string }[];
  updatedAt: string;
};
EOF

mk src/features/projects/schemas.ts <<'EOF'
import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter").max(120),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug hanya huruf kecil, angka, dan tanda hubung"),
  summary: z.string().min(10).max(300),
  descriptionHtml: z.string().optional(),
  repoUrl: z.string().url().optional().or(z.literal("")),
  demoUrl: z.string().url().optional().or(z.literal("")),
  skillIds: z.array(z.string().uuid()).default([]),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(false),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;
EOF

mk src/features/projects/server/queries.ts <<'EOF'
import type { Project } from "../types";

// TODO: ganti dengan query Supabase memakai createPublicClient
// (lihat PLANNING-PORTOFOLIO.md bagian 11.3).
export async function getPublishedProjects(): Promise<Project[]> {
  return [];
}

export async function getProjectBySlug(_slug: string): Promise<Project | null> {
  return null;
}
EOF

mk src/features/projects/server/actions.ts <<'EOF'
"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ProjectFormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

// TODO: urutan wajib tiap action: requireAdmin -> validasi Zod -> DB -> revalidate -> hasil
// (lihat PLANNING-PORTOFOLIO.md bagian 11.4).
export async function createProject(_input: ProjectFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function updateProject(_id: string, _input: ProjectFormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function deleteProject(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
EOF

mk src/features/projects/server/mappers.ts <<'EOF'
// TODO: toProject(row) mengubah baris DB menjadi model Project
// (lihat PLANNING-PORTOFOLIO.md bagian 11.2).
export {};
EOF

mk src/features/projects/seo.ts <<'EOF'
// TODO: projectMetadata(project) dan komponen ProjectJsonLd
// (lihat PLANNING-PORTOFOLIO.md bagian 12.1).
export {};
EOF

mk src/features/projects/hooks/useProjectForm.ts <<'EOF'
// TODO: logika form proyek (React Hook Form + projectFormSchema), dipisah dari tampilan.
export {};
EOF

for c in ProjectCard ProjectGrid ProjectDetail TechStackList ProjectGallery; do
  mk "src/features/projects/components/public/$c.tsx" <<EOF
export function $c() {
  return <div>TODO: $c</div>;
}
EOF
done

for c in ProjectForm ProjectTable DeleteProjectDialog; do
  mk "src/features/projects/components/admin/$c.tsx" <<EOF
export function $c() {
  return <div>TODO: $c</div>;
}
EOF
done

mk src/features/projects/components/admin/ProjectTableColumns.tsx <<'EOF'
// TODO: definisi kolom TanStack Table untuk daftar proyek.
export {};
EOF

mk src/features/projects/index.ts <<'EOF'
// API publik fitur "projects". Kode di luar fitur hanya boleh mengimpor dari sini.
export { getPublishedProjects, getProjectBySlug } from "./server/queries";
export { ProjectGrid } from "./components/public/ProjectGrid";
export { ProjectDetail } from "./components/public/ProjectDetail";
export type { Project } from "./types";
EOF

echo "==> [5/9] Fitur: skills, experiences, education, certificates"

# format: folder:Singular:Plural:camelSingular
for spec in "skills:Skill:Skills:skill" \
            "experiences:Experience:Experiences:experience" \
            "education:Education:Education:education" \
            "certificates:Certificate:Certificates:certificate"; do
  IFS=':' read -r dir T P c <<< "$spec"
  base="src/features/$dir"

  mk "$base/types.ts" <<EOF
export type $T = {
  id: string;
  // TODO: tambahkan field sesuai tabel (lihat PLANNING-PORTOFOLIO.md bagian 8.2)
};
EOF

  mk "$base/schemas.ts" <<EOF
import { z } from "zod";

export const ${c}FormSchema = z.object({
  // TODO: tambahkan field form
});

export type ${T}FormValues = z.infer<typeof ${c}FormSchema>;
EOF

  mk "$base/server/queries.ts" <<EOF
import type { $T } from "../types";

// TODO: ganti dengan query Supabase memakai createPublicClient.
export async function getPublished${P}(): Promise<${T}[]> {
  return [];
}
EOF

  mk "$base/server/actions.ts" <<EOF
"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ${T}FormValues } from "../schemas";

const NOT_IMPLEMENTED = "Belum diimplementasikan";

export async function create${T}(_input: ${T}FormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function update${T}(_id: string, _input: ${T}FormValues): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}

export async function delete${T}(_id: string): Promise<ActionResult> {
  return { ok: false, error: NOT_IMPLEMENTED };
}
EOF

  mk "$base/server/mappers.ts" <<'EOF'
// TODO: mapper baris DB -> model UI.
export {};
EOF

  mk "$base/index.ts" <<EOF
export { getPublished${P} } from "./server/queries";
export type { $T } from "./types";
EOF

  keep "$base/components/public"
  keep "$base/components/admin"
  keep "$base/hooks"
done

echo "==> [6/9] Fitur: profile, contact, auth, blog"

# --- profile ---
mk src/features/profile/types.ts <<'EOF'
export type Profile = {
  id: number;
  fullName: string;
  headline: string;
  bio: string | null;
  avatarUrl: string | null;
  resumeUrl: string | null;
  email: string | null;
  location: string | null;
  socialLinks: { platform: string; url: string }[];
  seoTitle: string | null;
  seoDescription: string | null;
};
EOF

mk src/features/profile/schemas.ts <<'EOF'
import { z } from "zod";

export const profileFormSchema = z.object({
  fullName: z.string().min(1).max(100),
  headline: z.string().min(1).max(160),
  bio: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().max(100).optional(),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
EOF

mk src/features/profile/server/queries.ts <<'EOF'
import type { Profile } from "../types";

// TODO: ganti dengan query Supabase (tabel profile selalu 1 baris).
export async function getProfile(): Promise<Profile | null> {
  return null;
}
EOF

mk src/features/profile/server/actions.ts <<'EOF'
"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ProfileFormValues } from "../schemas";

export async function updateProfile(_input: ProfileFormValues): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
EOF

mk src/features/profile/server/mappers.ts <<'EOF'
// TODO: mapper baris DB -> model Profile.
export {};
EOF

mk src/features/profile/index.ts <<'EOF'
export { getProfile } from "./server/queries";
export type { Profile } from "./types";
EOF
keep src/features/profile/components/public
keep src/features/profile/components/admin
keep src/features/profile/hooks

# --- contact ---
mk src/features/contact/types.ts <<'EOF'
export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  isRead: boolean;
  createdAt: string;
};
EOF

mk src/features/contact/schemas.ts <<'EOF'
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi").max(100),
  email: z.string().email("Email tidak valid").max(200),
  subject: z.string().max(200).optional(),
  message: z.string().min(5, "Pesan terlalu pendek").max(5000),
  // Honeypot anti-spam: harus kosong. Disembunyikan di UI.
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
EOF

mk src/features/contact/server/queries.ts <<'EOF'
import type { ContactMessage } from "../types";

// TODO (admin): ambil pesan memakai klien server dengan sesi admin.
export async function getContactMessages(): Promise<ContactMessage[]> {
  return [];
}
EOF

mk src/features/contact/server/actions.ts <<'EOF'
"use server";

import type { ActionResult } from "@/shared/types/action-result";
import type { ContactFormValues } from "../schemas";

// TODO: validasi Zod, cek honeypot, rate limit, lalu insert ke contact_messages.
export async function submitContactMessage(_input: ContactFormValues): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

// TODO (admin): requireAdmin() sebelum mengubah/menghapus.
export async function markMessageRead(_id: string): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

export async function deleteMessage(_id: string): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
EOF

mk src/features/contact/components/public/ContactForm.tsx <<'EOF'
export function ContactForm() {
  return <div>TODO: ContactForm</div>;
}
EOF

mk src/features/contact/components/admin/MessageInbox.tsx <<'EOF'
export function MessageInbox() {
  return <div>TODO: MessageInbox</div>;
}
EOF

mk src/features/contact/index.ts <<'EOF'
export { ContactForm } from "./components/public/ContactForm";
export type { ContactMessage } from "./types";
EOF
keep src/features/contact/hooks

# --- auth ---
mk src/features/auth/types.ts <<'EOF'
export type AdminUser = {
  id: string;
  email: string | null;
};
EOF

mk src/features/auth/server/guards.ts <<'EOF'
import "server-only";
import type { AdminUser } from "../types";

// TODO: implementasi memakai createServerSupabase().auth.getUser()
// lalu cek keberadaan user di tabel admins (lihat PLANNING-PORTOFOLIO.md bagian 9).
export async function getCurrentAdmin(): Promise<AdminUser | null> {
  return null;
}

/**
 * Wajib dipanggil di awal SETIAP Server Action tulis.
 * Stub ini menolak semua akses (deny-by-default) sampai diimplementasikan.
 */
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    throw new Error("Akses ditolak: admin belum terautentikasi.");
  }
  return admin;
}
EOF

mk src/features/auth/server/actions.ts <<'EOF'
"use server";

import type { ActionResult } from "@/shared/types/action-result";

// TODO: login via supabase.auth.signInWithPassword, lalu redirect ke /admin.
export async function login(_formData: FormData): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}

export async function logout(): Promise<ActionResult> {
  return { ok: false, error: "Belum diimplementasikan" };
}
EOF

mk src/features/auth/index.ts <<'EOF'
export { getCurrentAdmin, requireAdmin } from "./server/guards";
export type { AdminUser } from "./types";
EOF
keep src/features/auth/components

# --- blog (Fase 2) ---
keep src/features/blog

echo "==> [7/9] App: routing, proxy, SEO, halaman placeholder"

# Hapus halaman bawaan create-next-app agar tidak bentrok dengan (public)/page.tsx
rm -f src/app/page.tsx
rm -rf .next   # buang cache tipe lama yang masih merujuk src/app/page.tsx

mkf src/app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/shared/constants/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

// TODO (saat desain siap): pilih font dengan next/font dan pasang className-nya di <html>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
EOF

mk "src/app/(public)/layout.tsx" <<'EOF'
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  // TODO: Navbar + Footer publik (setelah desain siap).
  return <>{children}</>;
}
EOF

page "src/app/(public)/page.tsx" HomePage "Beranda"
page "src/app/(public)/about/page.tsx" AboutPage "Tentang Saya"
page "src/app/(public)/skills/page.tsx" SkillsPage "Skill"
page "src/app/(public)/contact/page.tsx" ContactPage "Kontak"
page "src/app/(public)/projects/page.tsx" ProjectsPage "Proyek"

mk "src/app/(public)/projects/[slug]/page.tsx" <<'EOF'
type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  return (
    <main>
      <h1>Detail Proyek</h1>
      <p>Slug: {slug}</p>
      <p>TODO: implementasikan halaman ini (generateMetadata, generateStaticParams, JSON-LD).</p>
    </main>
  );
}
EOF

mk "src/app/(public)/projects/[slug]/opengraph-image.tsx" <<'EOF'
import { ImageResponse } from "next/og";

export const alt = "Proyek";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: ambil judul proyek berdasarkan slug.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
        }}
      >
        Portofolio
      </div>
    ),
    size,
  );
}
EOF

mk src/app/admin/layout.tsx <<'EOF'
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  // TODO (Fase 3): sidebar + guard sesi memakai getCurrentAdmin().
  return <div>{children}</div>;
}
EOF

page src/app/admin/page.tsx AdminDashboardPage "Ringkasan Admin"
page src/app/admin/login/page.tsx AdminLoginPage "Login Admin"
page src/app/admin/projects/page.tsx AdminProjectsPage "Kelola Proyek"
page src/app/admin/projects/new/page.tsx AdminProjectNewPage "Proyek Baru"
page "src/app/admin/projects/[id]/edit/page.tsx" AdminProjectEditPage "Ubah Proyek"
page src/app/admin/skills/page.tsx AdminSkillsPage "Kelola Skill"
page src/app/admin/experiences/page.tsx AdminExperiencesPage "Kelola Pengalaman"
page src/app/admin/education/page.tsx AdminEducationPage "Kelola Pendidikan"
page src/app/admin/certificates/page.tsx AdminCertificatesPage "Kelola Sertifikat"
page src/app/admin/profile/page.tsx AdminProfilePage "Edit Profil"
page src/app/admin/messages/page.tsx AdminMessagesPage "Pesan Masuk"

mk src/app/api/health/route.ts <<'EOF'
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok" });
}
EOF

mk src/app/sitemap.ts <<'EOF'
import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

// TODO: tambahkan proyek terbit dari database (lastModified = updated_at).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/about", "/skills", "/projects", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));
}
EOF

mk src/app/robots.ts <<'EOF'
import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/constants/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/admin" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
EOF

mk src/app/not-found.tsx <<'EOF'
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Halaman tidak ditemukan</h1>
      <Link href="/">Kembali ke beranda</Link>
    </main>
  );
}
EOF

mk src/app/error.tsx <<'EOF'
"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main>
      <h1>Terjadi kesalahan</h1>
      <button type="button" onClick={reset}>
        Coba lagi
      </button>
    </main>
  );
}
EOF

# Next.js 16: konvensi "middleware" diganti nama menjadi "proxy".
mk src/proxy.ts <<'EOF'
import { NextResponse, type NextRequest } from "next/server";

// TODO (Fase 3): refresh sesi Supabase + redirect ke /admin/login bila belum login.
// Ini hanya lapis pertama; pengecekan wajib tetap ada di Server Action dan RLS.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
EOF

echo "==> [8/9] Supabase, konfigurasi, tooling, Docker, CI"

mk supabase/migrations/0001_init.sql <<'EOF'
-- TODO: salin SQL dari PLANNING-PORTOFOLIO.md bagian 8.2 (tabel, trigger, fungsi is_admin).
EOF
mk supabase/migrations/0002_rls.sql <<'EOF'
-- TODO: salin SQL dari PLANNING-PORTOFOLIO.md bagian 8.3 (kebijakan RLS).
EOF
mk supabase/migrations/0003_storage.sql <<'EOF'
-- TODO: salin SQL dari PLANNING-PORTOFOLIO.md bagian 8.4 (bucket & kebijakan storage).
EOF
mk supabase/seed.sql <<'EOF'
-- Data contoh untuk development lokal (opsional).
EOF

mk .env.example <<'EOF'
# Publik (terbawa ke browser; aman jika RLS benar)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Server-only (JANGAN pakai awalan NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=
EOF

mk prettier.config.mjs <<'EOF'
/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
EOF

mk .prettierignore <<'EOF'
.next
node_modules
pnpm-lock.yaml
coverage
playwright-report
test-results
EOF

mk commitlint.config.mjs <<'EOF'
const config = { extends: ["@commitlint/config-conventional"] };

export default config;
EOF

mk .lintstagedrc.json <<'EOF'
{
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css,mjs}": ["prettier --write"]
}
EOF

mk vitest.config.mts <<'EOF'
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
EOF

mk vitest.setup.ts <<'EOF'
import "@testing-library/jest-dom/vitest";
EOF

mk playwright.config.ts <<'EOF'
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "html",
  use: { baseURL: "http://localhost:3000", trace: "on-first-retry" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
});
EOF

mk e2e/home.spec.ts <<'EOF'
import { expect, test } from "@playwright/test";

test("beranda dapat dibuka", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
EOF

mkf next.config.ts <<'EOF'
import type { NextConfig } from "next";

const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    remotePatterns: supabaseHost
      ? [{ protocol: "https", hostname: supabaseHost, pathname: "/storage/v1/object/public/**" }]
      : [],
  },
};

export default nextConfig;
EOF

mkf eslint.config.mjs <<'EOF'
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
    },
  },
  // shared tidak boleh bergantung pada features/app
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*", "@/app/*"],
              message: "shared tidak boleh mengimpor features atau app.",
            },
          ],
        },
      ],
    },
  },
  // features tidak boleh mengimpor app; lintas fitur hanya lewat barrel (index.ts)
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["@/app/*"], message: "features tidak boleh mengimpor app." },
            {
              group: ["@/features/*/*"],
              message: "Impor lintas fitur hanya lewat index.ts fitur (@/features/<nama>).",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "playwright-report/**", "next-env.d.ts"]),
]);

export default eslintConfig;
EOF

mk Dockerfile <<'EOF'
# syntax=docker/dockerfile:1
FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# --ignore-scripts: lewati skrip "prepare" (husky) yang tidak relevan di image
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder /app/public ./public
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/.next/static ./.next/static
USER app
EXPOSE 3000
CMD ["node", "server.js"]
EOF

mk .dockerignore <<'EOF'
node_modules
.next
.git
.github
.husky
.env*
!.env.example
e2e
coverage
playwright-report
test-results
README.md
EOF

mk docker-compose.yml <<'EOF'
services:
  web:
    image: ghcr.io/<username>/portfolio:latest
    restart: unless-stopped
    env_file: .env
    expose:
      - "3000"
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  caddy:
    image: caddy:2
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    depends_on:
      - web

volumes:
  caddy_data:
  caddy_config:
EOF

mk Caddyfile <<'EOF'
namaanda.com {
  encode zstd gzip
  reverse_proxy web:3000

  header {
    Strict-Transport-Security "max-age=31536000; includeSubDomains"
    X-Content-Type-Options "nosniff"
    Referrer-Policy "strict-origin-when-cross-origin"
    -Server
  }
}

www.namaanda.com {
  redir https://namaanda.com{uri} permanent
}
EOF

mk .github/workflows/ci.yml <<'EOF'
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    env:
      HUSKY: "0"
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_SUPABASE_URL: https://example.supabase.co
      NEXT_PUBLIC_SUPABASE_ANON_KEY: dummy-anon-key
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
EOF

mk .github/workflows/deploy.yml <<'EOF'
name: Deploy

# TODO (Fase 6): build image dengan build-args -> push ke GHCR -> SSH ke VPS
# -> docker compose pull && docker compose up -d -> cek /api/health
on:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Belum dikonfigurasi. Lihat PLANNING-PORTOFOLIO.md bagian 17.5."
EOF

# .gitignore: izinkan .env.example di-commit (bawaan Next mengabaikan .env*)
if ! grep -qx '!.env.example' .gitignore 2>/dev/null; then
  printf '\n# izinkan commit contoh env\n!.env.example\n' >> .gitignore
  echo "  ubah    .gitignore (+ !.env.example)"
fi

echo "==> [9/9] package.json & tsconfig.json"

node - <<'NODE'
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.scripts = {
  ...pkg.scripts,
  lint: "eslint .",
  typecheck: "tsc --noEmit",
  format: "prettier --write .",
  "format:check": "prettier --check .",
  test: "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test",
  "db:types": "supabase gen types typescript --linked > src/shared/types/database.ts",
  prepare: "husky",
};
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

const ts = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));
ts.compilerOptions = { ...ts.compilerOptions, strict: true, noUncheckedIndexedAccess: true };
fs.writeFileSync("tsconfig.json", JSON.stringify(ts, null, 2) + "\n");
NODE
echo "  ubah    package.json (scripts)"
echo "  ubah    tsconfig.json (noUncheckedIndexedAccess)"

echo
echo "Selesai. Dibuat/ditimpa: $created berkas · Dilewati (sudah ada): $skipped berkas."
echo "Langkah berikutnya: pnpm format && pnpm typecheck && pnpm lint && pnpm test && pnpm build"
