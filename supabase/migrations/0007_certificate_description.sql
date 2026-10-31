-- 0007_certificate_description.sql
-- Deskripsi singkat sertifikat; nullable agar data lama tetap valid.
alter table public.certificates
  add column description text;

comment on column public.certificates.description is
  'Ringkasan isi sertifikat; tampil di /about.';
