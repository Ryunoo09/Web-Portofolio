-- 0011_backfill_whatsapp.sql
-- Pindahkan entri WhatsApp lama dari social_links ke kolom khusus.
update public.profile p
set whatsapp_number = regexp_replace(
  split_part(
    (
      select l->>'url'
      from jsonb_array_elements(p.social_links) l
      where lower(trim(l->>'platform')) = 'whatsapp'
      limit 1
    ),
    '?',
    1
  ),
  '[^0-9]',
  '',
  'g'
)
where p.whatsapp_number is null
  and exists (
    select 1
    from jsonb_array_elements(p.social_links) l
    where lower(trim(l->>'platform')) = 'whatsapp'
  );

update public.profile
set whatsapp_number = '62' || substr(whatsapp_number, 2)
where whatsapp_number like '0%';

update public.profile p
set social_links = coalesce(
  (
    select jsonb_agg(l)
    from jsonb_array_elements(p.social_links) l
    where lower(trim(l->>'platform')) <> 'whatsapp'
  ),
  '[]'::jsonb
)
where exists (
  select 1
  from jsonb_array_elements(p.social_links) l
  where lower(trim(l->>'platform')) = 'whatsapp'
);
