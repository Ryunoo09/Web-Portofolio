-- 0010_profile_whatsapp.sql
-- Nomor dan pesan WhatsApp diatur dari dashboard; kolom nullable agar data lama tetap valid.
alter table public.profile
  add column whatsapp_number text,
  add column whatsapp_message text;

comment on column public.profile.whatsapp_number is
  'Nomor WhatsApp format internasional tanpa +, mis. 6281234567890.';
comment on column public.profile.whatsapp_message is
  'Pesan otomatis yang terisi saat pengunjung membuka tautan WhatsApp.';
