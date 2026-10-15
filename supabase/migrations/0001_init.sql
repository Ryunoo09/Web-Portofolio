-- ============ EXTENSION & UTILITAS ============
create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ============ ADMIN ============
create table public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- ============ PROFIL (satu baris) ============
create table public.profile (
  id smallint primary key default 1 check (id = 1),
  full_name text not null,
  headline text not null,
  bio text,
  avatar_url text,
  resume_url text,
  email text,
  location text,
  social_links jsonb not null default '[]'::jsonb,   -- [{ "platform": "github", "url": "..." }]
  seo_title text,
  seo_description text,
  updated_at timestamptz not null default now()
);

-- ============ SKILL ============
create table public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null,                -- mis. 'Frontend', 'Backend', 'Tools'
  level smallint check (level between 1 and 5),
  icon text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============ PROYEK ============
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  summary text not null,                 -- ringkas, dipakai di kartu & meta description
  description_html text,                 -- hasil Tiptap (sudah disanitasi di server)
  cover_image_url text,
  cover_image_alt text,
  repo_url text,
  demo_url text,
  started_at date,
  ended_at date,
  is_featured boolean not null default false,
  is_published boolean not null default false,
  sort_order int not null default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index projects_published_idx on public.projects (is_published, sort_order);

create table public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  url text not null,
  alt text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create index project_images_project_idx on public.project_images (project_id, sort_order);

create table public.project_skills (
  project_id uuid not null references public.projects(id) on delete cascade,
  skill_id uuid not null references public.skills(id) on delete cascade,
  primary key (project_id, skill_id)
);

-- ============ PENGALAMAN / PENDIDIKAN / SERTIFIKAT ============
create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  role text not null,
  description text,
  location text,
  started_at date not null,
  ended_at date,                         -- null = masih berjalan
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.education (
  id uuid primary key default gen_random_uuid(),
  institution text not null,
  degree text not null,
  field text,
  started_at date,
  ended_at date,
  description text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text not null,
  issued_at date,
  credential_url text,
  image_url text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============ PESAN KONTAK ============
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 200),
  subject text check (char_length(subject) <= 200),
  message text not null check (char_length(message) between 5 and 5000),
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- ============ BLOG (Fase 2) ============
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null,
  excerpt text not null,
  content_html text,
  cover_image_url text,
  cover_image_alt text,
  tags text[] not null default '{}',
  is_published boolean not null default false,
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============ TRIGGER updated_at ============
do $$
declare t text;
begin
  foreach t in array array['profile','skills','projects','experiences','education','certificates','posts']
  loop
    execute format(
      'create trigger trg_%1$s_updated before update on public.%1$s
       for each row execute function public.set_updated_at()', t);
  end loop;
end $$;
