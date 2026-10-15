-- ============================================================
-- Data contoh untuk development
-- Dijalankan otomatis oleh: pnpm exec supabase db push --include-seed
-- ============================================================

-- Profile (data diri — sesuaikan!)
insert into public.profile (id, full_name, headline, bio, email, location, social_links)
values (
  1,
  'Rakha',
  'Full-Stack Developer · Arsitek Sistem Web Modern',
  'Membangun solusi digital berperforma tinggi dengan arsitektur modern dan clean code. Fokus pada ekosistem Next.js, TypeScript, dan PostgreSQL.',
  'rakha@example.com',
  'Indonesia',
  '[
    {"platform": "github", "url": "https://github.com/rakha"},
    {"platform": "linkedin", "url": "https://linkedin.com/in/rakha"}
  ]'::jsonb
)
on conflict (id) do nothing;

-- Skills
insert into public.skills (id, name, category, level, icon, sort_order, is_published) values
  ('00000000-0000-0000-0000-000000000001', 'Next.js 15 & 16', 'Frontend', 5, 'Globe', 1, true),
  ('00000000-0000-0000-0000-000000000002', 'React 19 & TypeScript', 'Frontend', 5, 'Code2', 2, true),
  ('00000000-0000-0000-0000-000000000003', 'Tailwind CSS & Design Systems', 'Frontend', 5, 'Palette', 3, true),
  ('00000000-0000-0000-0000-000000000004', 'HTML5, Modern CSS & JS ESNext', 'Frontend', 5, 'Layers', 4, true),
  ('00000000-0000-0000-0000-000000000005', 'Node.js & Express / NestJS', 'Backend', 4, 'Server', 5, true),
  ('00000000-0000-0000-0000-000000000006', 'Python & FastAPI', 'Backend', 4, 'Terminal', 6, true),
  ('00000000-0000-0000-0000-000000000007', 'API Design & Architecture', 'Backend', 5, 'Network', 7, true),
  ('00000000-0000-0000-0000-000000000008', 'PostgreSQL & Supabase', 'Database & Cloud', 5, 'Database', 8, true),
  ('00000000-0000-0000-0000-000000000009', 'Redis & In-Memory Caching', 'Database & Cloud', 4, 'Cpu', 9, true),
  ('00000000-0000-0000-0000-000000000010', 'Docker & Containerization', 'DevOps & Tools', 4, 'Box', 10, true),
  ('00000000-0000-0000-0000-000000000011', 'Linux Server Administration', 'DevOps & Tools', 4, 'HardDrive', 11, true),
  ('00000000-0000-0000-0000-000000000012', 'Git & GitHub CI/CD Actions', 'DevOps & Tools', 5, 'GitBranch', 12, true)
on conflict (id) do nothing;

-- Projects
insert into public.projects (id, slug, title, summary, description_html, is_featured, is_published, sort_order) values
  (
    '11111111-1111-1111-1111-111111111101', 'nexus-commerce',
    'Nexus Enterprise Commerce',
    'Platform e-commerce modern dengan performa sub-detik dan sinkronisasi realtime',
    '<p>Nexus Commerce dirancang untuk menjawab tantangan konversi tinggi pada platform retail modern. Mengadopsi arsitektur Server Components (RSC) dengan streaming suspense, platform ini mencapai skor performa 99 di Google Lighthouse.</p>',
    true, true, 1
  ),
  (
    '11111111-1111-1111-1111-111111111102', 'pulse-ai-analytics',
    'Pulse AI Data Studio',
    'Dashboard analitik prediktif bisnis dengan integrasi LLM dan visualisasi interaktif',
    '<p>Pulse AI menggabungkan analitik data terstruktur dengan pemrosesan bahasa alami (NLP). User dapat menanyakan insight langsung dalam bahasa alami.</p>',
    true, true, 2
  ),
  (
    '11111111-1111-1111-1111-111111111103', 'vault-iam-platform',
    'VaultPass Enterprise IAM',
    'Portal identitas dan otentikasi zero-trust untuk ekosistem mikroservis internal',
    '<p>VaultPass dibangun untuk standar kepatuhan regulasi data modern. Menawarkan manajemen sesi terenkripsi end-to-end.</p>',
    true, true, 3
  ),
  (
    '11111111-1111-1111-1111-111111111104', 'aurora-editorial-cms',
    'Aurora Headless CMS',
    'Editorial workspace kolaboratif dengan Rich Text WYSIWYG dan CDN asset pipeline',
    '<p>Didesain khusus untuk jurnalis dan tim konten, Aurora menyediakan pengalaman menulis real-time tanpa lag dengan TipTap WYSIWYG editor.</p>',
    false, true, 4
  ),
  (
    '11111111-1111-1111-1111-111111111105', 'karsa-fleet-tracker',
    'Karsa Real-Time Logistics',
    'Sistem telematika armada ekspedisi dengan pelacakan GPS realtime dan rute otomatis',
    '<p>Karsa mengintegrasikan stream data telematika dari armada logistik ke dalam antarmuka kontrol terpusat.</p>',
    false, true, 5
  ),
  (
    '11111111-1111-1111-1111-111111111106', 'zenith-wealth-manager',
    'Zenith Wealth & Finance',
    'Perencana keuangan pribadi dan pemantau portofolio aset lintas instrumen investasi',
    '<p>Zenith membantu investor memantau portofolio saham, obligasi, dan reksa dana dalam satu dasbor terpadu.</p>',
    false, true, 6
  )
on conflict (id) do nothing;

-- Project-Skills relations
insert into public.project_skills (project_id, skill_id) values
  ('11111111-1111-1111-1111-111111111101', '00000000-0000-0000-0000-000000000001'),
  ('11111111-1111-1111-1111-111111111101', '00000000-0000-0000-0000-000000000002'),
  ('11111111-1111-1111-1111-111111111101', '00000000-0000-0000-0000-000000000003'),
  ('11111111-1111-1111-1111-111111111101', '00000000-0000-0000-0000-000000000008'),
  ('11111111-1111-1111-1111-111111111102', '00000000-0000-0000-0000-000000000001'),
  ('11111111-1111-1111-1111-111111111102', '00000000-0000-0000-0000-000000000002'),
  ('11111111-1111-1111-1111-111111111102', '00000000-0000-0000-0000-000000000006'),
  ('11111111-1111-1111-1111-111111111102', '00000000-0000-0000-0000-000000000008'),
  ('11111111-1111-1111-1111-111111111103', '00000000-0000-0000-0000-000000000005'),
  ('11111111-1111-1111-1111-111111111103', '00000000-0000-0000-0000-000000000007'),
  ('11111111-1111-1111-1111-111111111103', '00000000-0000-0000-0000-000000000008'),
  ('11111111-1111-1111-1111-111111111103', '00000000-0000-0000-0000-000000000010'),
  ('11111111-1111-1111-1111-111111111103', '00000000-0000-0000-0000-000000000011'),
  ('11111111-1111-1111-1111-111111111104', '00000000-0000-0000-0000-000000000001'),
  ('11111111-1111-1111-1111-111111111104', '00000000-0000-0000-0000-000000000002'),
  ('11111111-1111-1111-1111-111111111104', '00000000-0000-0000-0000-000000000003'),
  ('11111111-1111-1111-1111-111111111104', '00000000-0000-0000-0000-000000000008'),
  ('11111111-1111-1111-1111-111111111105', '00000000-0000-0000-0000-000000000002'),
  ('11111111-1111-1111-1111-111111111105', '00000000-0000-0000-0000-000000000003'),
  ('11111111-1111-1111-1111-111111111105', '00000000-0000-0000-0000-000000000005'),
  ('11111111-1111-1111-1111-111111111105', '00000000-0000-0000-0000-000000000010'),
  ('11111111-1111-1111-1111-111111111106', '00000000-0000-0000-0000-000000000001'),
  ('11111111-1111-1111-1111-111111111106', '00000000-0000-0000-0000-000000000002'),
  ('11111111-1111-1111-1111-111111111106', '00000000-0000-0000-0000-000000000003'),
  ('11111111-1111-1111-1111-111111111106', '00000000-0000-0000-0000-000000000008')
on conflict (project_id, skill_id) do nothing;

-- Experiences
insert into public.experiences (id, company, role, description, location, started_at, ended_at, sort_order, is_published) values
  (
    '22222222-2222-2222-2222-222222222201', 'Archipelago Digital Solutions',
    'Senior Full-Stack Engineer',
    'Memimpin perancangan dan migrasi platform web perusahaan dari arsitektur monolitik ke Next.js micro-frontend yang skalabel.',
    'Jakarta (Hybrid)', '2024-01-01', null, 1, true
  ),
  (
    '22222222-2222-2222-2222-222222222202', 'Sinergi Tekno Nusantara',
    'Full-Stack Web Developer',
    'Membangun dan memelihara berbagai modul aplikasi SaaS B2B, portal e-commerce klien enterprise, dan integrasi payment gateway.',
    'Bandung (Remote)', '2022-01-01', '2024-01-01', 2, true
  ),
  (
    '22222222-2222-2222-2222-222222222203', 'Karya Cipta Studio',
    'Frontend Developer',
    'Mengembangkan antarmuka web interaktif, landing page responsif dengan animasi halus, dan integrasi API RESTful.',
    'Yogyakarta (On-site)', '2021-01-01', '2022-01-01', 3, true
  )
on conflict (id) do nothing;

-- Education
insert into public.education (id, institution, degree, field, started_at, ended_at, description, sort_order, is_published) values
  (
    '33333333-3333-3333-3333-333333333301', 'Universitas Negeri Terkemuka',
    'Sarjana Komputer (S.Kom)', 'Teknik Informatika',
    '2017-08-01', '2021-06-30',
    'Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Terdistribusi, dan Keamanan Sistem Informasi. IPK 3.86 / 4.00 (Cum Laude).',
    1, true
  )
on conflict (id) do nothing;

-- Certificates
insert into public.certificates (id, title, issuer, issued_at, credential_url, sort_order, is_published) values
  ('44444444-4444-4444-4444-444444444401', 'Meta Professional Frontend Developer', 'Meta / Coursera', '2023-06-01', 'https://coursera.org', 1, true),
  ('44444444-4444-4444-4444-444444444402', 'AWS Certified Solutions Architect — Associate', 'Amazon Web Services', '2024-03-01', 'https://aws.amazon.com', 2, true),
  ('44444444-4444-4444-4444-444444444403', 'Supabase Advanced PostgreSQL Mastery', 'Supabase Academy', '2024-08-01', 'https://supabase.com', 3, true)
on conflict (id) do nothing;
