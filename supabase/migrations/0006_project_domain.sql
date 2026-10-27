-- 0006_project_domain.sql
-- Tambah domain kapabilitas; nullable agar data lama tetap valid.
alter table public.projects
  add column domain text;

alter table public.projects
  add constraint projects_domain_check
  check (
    domain is null or domain in (
      'backend-system',
      'data-big-data',
      'computer-vision',
      'applied-ai',
      'automation',
      'iot'
    )
  );

create index projects_domain_idx
  on public.projects (is_published, domain, sort_order);

comment on column public.projects.domain is
  'Kapabilitas utama proyek; null = fallback taxonomy.ts.';

-- Backfill 9 proyek yang sudah dikenal.
update public.projects
set domain = case slug
  when 'validasi-ftth-yolo26-paddleocr' then 'computer-vision'
  when 'analisis-prediktif-kualitas-air' then 'data-big-data'
  when 'sirata' then 'backend-system'
  when 'campevent' then 'backend-system'
  when 'soil-ai' then 'iot'
  when 'dse-ai' then 'applied-ai'
  when 'elang-hub' then 'backend-system'
  when 'aifi' then 'backend-system'
  when 'chatbot-report-automation' then 'automation'
  else null
end
where slug in (
  'validasi-ftth-yolo26-paddleocr',
  'analisis-prediktif-kualitas-air',
  'sirata',
  'campevent',
  'soil-ai',
  'dse-ai',
  'elang-hub',
  'aifi',
  'chatbot-report-automation'
);
