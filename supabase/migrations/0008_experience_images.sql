-- 0008_experience_images.sql
-- Dokumentasi foto per pengalaman; pola sama dengan project_images.
create table public.experience_images (
  id uuid primary key default gen_random_uuid(),
  experience_id uuid not null references public.experiences(id) on delete cascade,
  url text not null,
  alt text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index experience_images_experience_idx
  on public.experience_images (experience_id, sort_order);

alter table public.experience_images enable row level security;

create policy "experience_images_public_read" on public.experience_images
  for select using (exists (
    select 1 from public.experiences e
    where e.id = experience_id and e.is_published));

create policy "experience_images_admin_all" on public.experience_images
  for all using (public.is_admin()) with check (public.is_admin());

comment on table public.experience_images is
  'Foto dokumentasi pengalaman; hanya tampil bila pengalaman induk terbit.';
