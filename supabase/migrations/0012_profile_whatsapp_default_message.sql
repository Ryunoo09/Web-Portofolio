-- 0012_profile_whatsapp_default_message.sql
-- Pesan pembuka default agar tautan WhatsApp langsung membawa teks.
alter table public.profile
  alter column whatsapp_message
  set default 'Halo Rakha, saya ingin berdiskusi tentang ...';

update public.profile
set whatsapp_message = default
where whatsapp_message is null;
