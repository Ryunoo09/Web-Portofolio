-- 0009_education_organization_images.sql
-- Foto per pendidikan & organisasi; pola sama dengan experience_images.

create table public.education_images (
  id uuid primary key default gen_random_uuid(),
  education_id uuid not null references public.education(id) on delete cascade,
  url text not null,
  alt text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index education_images_education_idx
  on public.education_images (education_id, sort_order);

alter table public.education_images enable row level security;

create policy "education_images_public_read" on public.education_images
  for select using (exists (
    select 1 from public.education e
    where e.id = education_id and e.is_published));

create policy "education_images_admin_all" on public.education_images
  for all using (public.is_admin()) with check (public.is_admin());

create table public.organization_images (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  url text not null,
  alt text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index organization_images_organization_idx
  on public.organization_images (organization_id, sort_order);

alter table public.organization_images enable row level security;

create policy "organization_images_public_read" on public.organization_images
  for select using (exists (
    select 1 from public.organizations o
    where o.id = organization_id and o.is_published));

create policy "organization_images_admin_all" on public.organization_images
  for all using (public.is_admin()) with check (public.is_admin());

comment on table public.education_images is
  'Foto pendidikan; hanya tampil bila entri pendidikan induk terbit.';
comment on table public.organization_images is
  'Foto organisasi; hanya tampil bila entri organisasi induk terbit.';
