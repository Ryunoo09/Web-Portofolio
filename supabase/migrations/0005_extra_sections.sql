-- ============ SECTION TAMBAHAN: ORGANISASI & BAHASA ============
-- Menampung data CV yang belum punya wadah: organisasi/kepanitiaan (bagian G),
-- bahasa + skor (bagian K), dan penanda skill yang sedang dipelajari (bagian H2).

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  description text,
  started_at date,
  ended_at date,
  member_count int check (member_count is null or member_count >= 0),
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.languages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  level text not null,
  score text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Pemisah skill yang sedang dipelajari dari grid utama /skills.
alter table public.skills add column is_learning boolean not null default false;

-- ============ TRIGGER updated_at ============
create trigger trg_organizations_updated before update on public.organizations
  for each row execute function public.set_updated_at();

create trigger trg_languages_updated before update on public.languages
  for each row execute function public.set_updated_at();

-- ============ RLS (pola sama dengan tabel konten lain) ============
alter table public.organizations enable row level security;
alter table public.languages enable row level security;

create policy "organizations_public_read" on public.organizations
  for select using (is_published);
create policy "organizations_admin_all" on public.organizations
  for all using (public.is_admin()) with check (public.is_admin());

create policy "languages_public_read" on public.languages
  for select using (is_published);
create policy "languages_admin_all" on public.languages
  for all using (public.is_admin()) with check (public.is_admin());
