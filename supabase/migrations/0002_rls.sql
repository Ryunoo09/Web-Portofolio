-- Aktifkan RLS di SEMUA tabel
alter table public.admins            enable row level security;
alter table public.profile           enable row level security;
alter table public.skills            enable row level security;
alter table public.projects          enable row level security;
alter table public.project_images    enable row level security;
alter table public.project_skills    enable row level security;
alter table public.experiences       enable row level security;
alter table public.education         enable row level security;
alter table public.certificates      enable row level security;
alter table public.contact_messages  enable row level security;
alter table public.posts             enable row level security;

-- admins: hanya admin yang boleh melihat
create policy "admins_select" on public.admins
  for select using (public.is_admin());

-- profile: publik baca, admin tulis
create policy "profile_public_read" on public.profile for select using (true);
create policy "profile_admin_write" on public.profile
  for all using (public.is_admin()) with check (public.is_admin());

-- Pola yang sama untuk tabel konten berstatus publish
-- (skills, projects, experiences, education, certificates, posts)
create policy "skills_public_read" on public.skills
  for select using (is_published);
create policy "skills_admin_all" on public.skills
  for all using (public.is_admin()) with check (public.is_admin());

create policy "projects_public_read" on public.projects
  for select using (is_published);
create policy "projects_admin_all" on public.projects
  for all using (public.is_admin()) with check (public.is_admin());

create policy "experiences_public_read" on public.experiences
  for select using (is_published);
create policy "experiences_admin_all" on public.experiences
  for all using (public.is_admin()) with check (public.is_admin());

create policy "education_public_read" on public.education
  for select using (is_published);
create policy "education_admin_all" on public.education
  for all using (public.is_admin()) with check (public.is_admin());

create policy "certificates_public_read" on public.certificates
  for select using (is_published);
create policy "certificates_admin_all" on public.certificates
  for all using (public.is_admin()) with check (public.is_admin());

create policy "posts_public_read" on public.posts
  for select using (is_published);
create policy "posts_admin_all" on public.posts
  for all using (public.is_admin()) with check (public.is_admin());

-- project_images & project_skills: terlihat jika proyek induknya terbit
create policy "project_images_public_read" on public.project_images
  for select using (exists (
    select 1 from public.projects p where p.id = project_id and p.is_published));
create policy "project_images_admin_all" on public.project_images
  for all using (public.is_admin()) with check (public.is_admin());

create policy "project_skills_public_read" on public.project_skills
  for select using (exists (
    select 1 from public.projects p where p.id = project_id and p.is_published));
create policy "project_skills_admin_all" on public.project_skills
  for all using (public.is_admin()) with check (public.is_admin());

-- contact_messages: siapa pun boleh INSERT (form kontak), hanya admin boleh baca/ubah/hapus
create policy "contact_insert_anyone" on public.contact_messages
  for insert with check (true);
create policy "contact_admin_select" on public.contact_messages
  for select using (public.is_admin());
create policy "contact_admin_update" on public.contact_messages
  for update using (public.is_admin()) with check (public.is_admin());
create policy "contact_admin_delete" on public.contact_messages
  for delete using (public.is_admin());
