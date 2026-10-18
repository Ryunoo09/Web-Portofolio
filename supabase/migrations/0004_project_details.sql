-- ============ DETAIL PROYEK ============
-- Menampung informasi proyek yang sebelumnya tidak punya kolom:
-- jenis, peran, ukuran tim, masalah, solusi, fitur, hasil, tantangan, status deploy.
-- Semua nullable/default agar baris lama tetap valid.

alter table public.projects
  add column project_type text,
  add column role text,
  add column team_size smallint check (team_size is null or team_size >= 1),
  add column problem text,
  add column solution text,
  add column features text[] not null default '{}',
  add column outcomes text[] not null default '{}',
  add column challenges text,
  add column is_deployed boolean not null default false;
