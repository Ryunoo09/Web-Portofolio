-- 0013_profile_resume_en.sql
-- CV Inggris; kolom resume_url yang ada tetap dipakai untuk CV Indonesia.
alter table public.profile
  add column if not exists resume_url_en text;
