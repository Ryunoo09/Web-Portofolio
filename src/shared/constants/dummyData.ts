export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  category: "Full-Stack" | "Frontend" | "Backend / DevOps" | "AI Integration";
  techStack: string[];
  featured: boolean;
  publishedAt: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  challenges: string;
  solution: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database & Cloud" | "DevOps & Tools";
  proficiency: "Advanced" | "Proficient" | "Familiar";
  level: number; // 1-100
  iconName: string;
  description: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Penuh Waktu" | "Kontrak" | "Freelance";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  relevantCourses: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  badgeCode: string;
}

export const DUMMY_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "nexus-commerce",
    title: "Nexus Enterprise Commerce",
    tagline: "Platform e-commerce modern dengan performa sub-detik dan sinkronisasi realtime",
    description:
      "Arsitektur e-commerce scalable berbasis Next.js App Router, Supabase RLS, dan Stripe webhook integration.",
    longDescription:
      "Nexus Commerce dirancang untuk menjawab tantangan konversi tinggi pada platform retail modern. Mengadopsi arsitektur Server Components (RSC) dengan streaming suspense, platform ini mencapai skor performa 99 di Google Lighthouse. Sistem inventaris terhubung langsung dengan Supabase PostgreSQL dengan pengamanan ketat Row-Level Security (RLS).",
    thumbnail: "/images/projects/nexus-commerce.png",
    images: ["/images/projects/nexus-commerce.png"],
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe"],
    featured: true,
    publishedAt: "2025-11-15",
    liveUrl: "https://example.com/nexus-commerce",
    githubUrl: "https://github.com/example/nexus-commerce",
    highlights: [
      "Arsitektur Hybrid Server-Client Components untuk latency render <150ms",
      "Manajemen checkout aman dengan idempotency key dan webhook Stripe",
      "Pencarian produk instan full-text search PostgreSQL",
      "Dashboard merchant terintegrasi analitik omzet realtime",
    ],
    challenges: "Mencegah race condition ketika checkout bersamaan saat flash sale stok terbatas.",
    solution:
      "Menerapkan stored procedure atomic update pada database PostgreSQL dengan lock row transaksional.",
  },
  {
    id: "proj-2",
    slug: "pulse-ai-analytics",
    title: "Pulse AI Data Studio",
    tagline: "Dashboard analitik prediktif bisnis dengan integrasi LLM dan visualisasi interaktif",
    description:
      "Solusi visualisasi data interaktif untuk memonitor metrik bisnis dan membuat ringkasan intelijen otomatis.",
    longDescription:
      "Pulse AI menggabungkan analitik data terstruktur dengan pemrosesan bahasa alami (NLP). User dapat menanyakan insight langsung dalam bahasa alami, lalu sistem menghasilkan query visual otomatis dan tabel TanStack Table interaktif.",
    thumbnail: "/images/projects/pulse-ai.png",
    images: ["/images/projects/pulse-ai.png"],
    category: "AI Integration",
    techStack: ["Next.js", "React 19", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    featured: true,
    publishedAt: "2025-08-20",
    liveUrl: "https://example.com/pulse-ai",
    githubUrl: "https://github.com/example/pulse-ai",
    highlights: [
      "Pemrosesan streaming token LLM responsif tanpa freeze UI",
      "Filtering data tabel multikolom berkekuatan jutaan baris",
      "Sistem otentikasi berbasis peran (RBAC) granular",
      "Export laporan otomatis ke PDF dan CSV siap eksekutif",
    ],
    challenges:
      "Latency generasi grafik analitik yang memakan waktu jika dihitung langsung di main thread.",
    solution:
      "Membangun background worker service di Python FastAPI dengan caching Redis dan visualisasi canvas teroptimasi.",
  },
  {
    id: "proj-3",
    slug: "vault-iam-platform",
    title: "VaultPass Enterprise IAM",
    tagline: "Portal identitas dan otentikasi zero-trust untuk ekosistem mikroservis internal",
    description:
      "Sistem Single Sign-On (SSO) enterprise dengan dukungan MFA FIDO2/WebAuthn dan audit logging immutable.",
    longDescription:
      "VaultPass dibangun untuk standar kepatuhan regulasi data modern. Menawarkan manajemen sesi terenkripsi end-to-end, rotasi token otomatis, serta dashboard tata kelola izin akses karyawan berbasis prinsip least privilege.",
    thumbnail: "/images/projects/vault-iam.png",
    images: ["/images/projects/vault-iam.png"],
    category: "Backend / DevOps",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Linux", "Tailwind CSS"],
    featured: true,
    publishedAt: "2025-04-10",
    liveUrl: "https://example.com/vault-iam",
    githubUrl: "https://github.com/example/vault-iam",
    highlights: [
      "Dukungan biometrik WebAuthn (Touch ID, Face ID, YubiKey)",
      "Audit logs tamper-evident yang dicatat ke penyimpanan terproteksi",
      "Skalabilitas kontainer Docker dengan Caddy reverse proxy",
    ],
    challenges:
      "Mengurangi gesekan autentikasi pengguna tanpa mengorbankan standar enkripsi militer.",
    solution:
      "Mengimplementasikan Adaptive Authentication berbasis deteksi anomali IP, fingerprint perangkat, dan geolokasi.",
  },
  {
    id: "proj-4",
    slug: "aurora-editorial-cms",
    title: "Aurora Headless CMS",
    tagline: "Editorial workspace kolaboratif dengan Rich Text WYSIWYG dan CDN asset pipeline",
    description:
      "CMS headless modern untuk publikasi artikel editorial multi-bahasa dengan antarmuka penulisan tanpa distraksi.",
    longDescription:
      "Didesain khusus untuk jurnalis dan tim konten, Aurora menyediakan pengalaman menulis real-time tanpa lag dengan TipTap WYSIWYG editor, manajemen media cloud, dan API publik siap integrasi.",
    thumbnail: "/images/projects/aurora-cms.png",
    images: ["/images/projects/aurora-cms.png"],
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "TipTap", "Supabase", "Tailwind CSS"],
    featured: false,
    publishedAt: "2025-01-30",
    liveUrl: "https://example.com/aurora-cms",
    githubUrl: "https://github.com/example/aurora-cms",
    highlights: [
      "Editor TipTap dengan kustom ekstensi callout, math formula, dan embed",
      "Sanitasi konten HTML ketat dengan sanitize-html untuk pencegahan XSS",
      "Penerbitan terjadwal otomatis via background cron workers",
    ],
    challenges: "Mencegah overhead render DOM saat mengedit naskah panjang lebih dari 10.000 kata.",
    solution: "Virtualisasi blok teks dan debounce autosave ke state terdistribusi.",
  },
  {
    id: "proj-5",
    slug: "karsa-fleet-tracker",
    title: "Karsa Real-Time Logistics",
    tagline: "Sistem telematika armada ekspedisi dengan pelacakan GPS realtime dan rute otomatis",
    description:
      "Aplikasi dispatch pengiriman kargo antarkota dengan visualisasi rute peta interaktif dan estimasi ketibaan akurat.",
    longDescription:
      "Karsa mengintegrasikan stream data telematika dari armada logistik ke dalam antarmuka kontrol terpusat. Menghemat biaya operasional armada hingga 18% melalui pemilihan rute pintar.",
    thumbnail: "/images/projects/karsa-fleet.png",
    images: ["/images/projects/karsa-fleet.png"],
    category: "Frontend",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Docker"],
    featured: false,
    publishedAt: "2024-10-12",
    liveUrl: "https://example.com/karsa-fleet",
    githubUrl: "https://github.com/example/karsa-fleet",
    highlights: [
      "Peta interaktif responsif dengan visualisasi ribuan titik armada",
      "Notifikasi instan jika kendaraan keluar jalur (geofencing violation)",
      "Optimasi memori browser untuk dashboard monitoring yang menyala 24/7",
    ],
    challenges: "Memory leak pada browser akibat update koordinat GPS puluhan armada per detik.",
    solution:
      "Throttle update state dengan requestAnimationFrame dan rendering marker via layer canvas.",
  },
  {
    id: "proj-6",
    slug: "zenith-wealth-manager",
    title: "Zenith Wealth & Finance",
    tagline: "Perencana keuangan pribadi dan pemantau portofolio aset lintas instrumen investasi",
    description:
      "Aplikasi manajemen kekayaan terdesentralisasi dengan kalkulator dividen, alokasi aset, dan proyeksi finansial FIRE.",
    longDescription:
      "Zenith membantu investor memantau portofolio saham, obligasi, dan reksa dana dalam satu dasbor terpadu. Dilengkapi rebalancing tool otomatis dan analisis risiko berbasis volatilitas historis.",
    thumbnail: "/images/projects/zenith-wealth.png",
    images: ["/images/projects/zenith-wealth.png"],
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    featured: false,
    publishedAt: "2024-06-05",
    liveUrl: "https://example.com/zenith-wealth",
    githubUrl: "https://github.com/example/zenith-wealth",
    highlights: [
      "Perhitungan return investasi Time-Weighted & Money-Weighted (TWRR/MWRR)",
      "Multi-currency conversion dengan kurs mata uang harian",
      "Penyimpanan data aman dengan enkripsi tingkat kolom",
    ],
    challenges:
      "Akurasi pembulatan float kalkulasi finansial pada perhitungan dividen jangka panjang.",
    solution: "Menggunakan pustaka decimal arbitrary precision untuk seluruh perhitungan moneter.",
  },
];

export const DUMMY_SKILLS: SkillItem[] = [
  // Frontend
  {
    id: "sk-1",
    name: "Next.js 15 & 16",
    category: "Frontend",
    proficiency: "Advanced",
    level: 95,
    iconName: "Globe",
    description: "App Router, Server Components (RSC), Server Actions, ISR, Caching Architecture.",
    featured: true,
  },
  {
    id: "sk-2",
    name: "React 19 & TypeScript",
    category: "Frontend",
    proficiency: "Advanced",
    level: 94,
    iconName: "Code2",
    description: "Hooks, Strict Typing, Component Composition, State Management, Custom Hooks.",
    featured: true,
  },
  {
    id: "sk-3",
    name: "Tailwind CSS & Design Systems",
    category: "Frontend",
    proficiency: "Advanced",
    level: 96,
    iconName: "Palette",
    description: "Tailwind v4, Tokens, CSS Variables, Responsive Layouts, Micro-interactions.",
    featured: true,
  },
  {
    id: "sk-4",
    name: "HTML5, Modern CSS & JS ESNext",
    category: "Frontend",
    proficiency: "Advanced",
    level: 98,
    iconName: "Layers",
    description: "Semantic Web, Accessibility WCAG 2.1 AA, DOM Performance, Async/Await.",
    featured: false,
  },

  // Backend
  {
    id: "sk-5",
    name: "Node.js & Express / NestJS",
    category: "Backend",
    proficiency: "Proficient",
    level: 88,
    iconName: "Server",
    description: "REST APIs, GraphQL, Middleware Architecture, Authentication JWT/OAuth.",
    featured: true,
  },
  {
    id: "sk-6",
    name: "Python & FastAPI",
    category: "Backend",
    proficiency: "Proficient",
    level: 85,
    iconName: "Terminal",
    description:
      "Data pipelines, Async API endpoints, Web scraping, Machine Learning API integration.",
    featured: true,
  },
  {
    id: "sk-7",
    name: "API Design & Architecture",
    category: "Backend",
    proficiency: "Advanced",
    level: 90,
    iconName: "Network",
    description: "Rate limiting, OpenAPI/Swagger specifications, Idempotency, Microservices.",
    featured: false,
  },

  // Database & Cloud
  {
    id: "sk-8",
    name: "PostgreSQL & Supabase",
    category: "Database & Cloud",
    proficiency: "Advanced",
    level: 92,
    iconName: "Database",
    description: "Row-Level Security (RLS), Triggers, Indexing, Complex Joins, Stored Procedures.",
    featured: true,
  },
  {
    id: "sk-9",
    name: "Redis & In-Memory Caching",
    category: "Database & Cloud",
    proficiency: "Proficient",
    level: 82,
    iconName: "Cpu",
    description: "Key-value cache, Pub/Sub channels, Rate limit counters, Session store.",
    featured: false,
  },

  // DevOps & Tools
  {
    id: "sk-10",
    name: "Docker & Containerization",
    category: "DevOps & Tools",
    proficiency: "Proficient",
    level: 86,
    iconName: "Box",
    description: "Multi-stage builds, Docker Compose orchestration, dev & prod environments.",
    featured: true,
  },
  {
    id: "sk-11",
    name: "Linux Server Administration",
    category: "DevOps & Tools",
    proficiency: "Proficient",
    level: 84,
    iconName: "HardDrive",
    description:
      "Ubuntu/Debian server setup, SSH security, Systemd services, Caddy & Nginx config.",
    featured: false,
  },
  {
    id: "sk-12",
    name: "Git & GitHub CI/CD Actions",
    category: "DevOps & Tools",
    proficiency: "Advanced",
    level: 94,
    iconName: "GitBranch",
    description: "Branching workflows, automated lint/test pipelines, release automation.",
    featured: true,
  },
];

export const DUMMY_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "Archipelago Digital Solutions",
    period: "2024 — Sekarang",
    location: "Jakarta (Hybrid)",
    type: "Penuh Waktu",
    description:
      "Memimpin perancangan dan migrasi platform web perusahaan dari arsitektur monolitik ke Next.js micro-frontend yang skalabel.",
    achievements: [
      "Meningkatkan skor Core Web Vitals dari 62 menjadi 98 di seluruh halaman publik perusahaan",
      "Mengurangi waktu loading halaman hingga 60% dengan implementasi Server Components dan Edge Caching",
      "Membimbing tim berisi 5 software engineer dalam standarisasi TypeScript dan arsitektur kode bersih",
    ],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    id: "exp-2",
    role: "Full-Stack Web Developer",
    company: "Sinergi Tekno Nusantara",
    period: "2022 — 2024",
    location: "Bandung (Remote)",
    type: "Penuh Waktu",
    description:
      "Membangun dan memelihara berbagai modul aplikasi SaaS B2B, portal e-commerce klien enterprise, dan integrasi payment gateway.",
    achievements: [
      "Mengembangkan 12+ fitur modul inti yang digunakan oleh lebih dari 50.000 pengguna aktif bulanan",
      "Mengurangi error transaksi pembayaran hingga 99.4% dengan perbaikan arsitektur idempotent webhook",
      "Membuat automated test suite dengan Vitest dan Playwright yang menaikkan code coverage menjadi 85%",
    ],
    technologies: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "Karya Cipta Studio",
    period: "2021 — 2022",
    location: "Yogyakarta (On-site)",
    type: "Penuh Waktu",
    description:
      "Mengembangkan antarmuka web interaktif, landing page responsif dengan animasi halus, dan integrasi API RESTful.",
    achievements: [
      "Menyelesaikan 18 proyek website klien tepat waktu dengan kepuasan klien 98%",
      "Memastikan kepatuhan aksesibilitas WCAG 2.1 AA di seluruh landing page klien ternama",
    ],
    technologies: ["JavaScript (ES6+)", "React", "CSS3 / Sass", "REST API", "Git"],
  },
];

export const DUMMY_EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Sarjana Komputer (S.Kom) — Teknik Informatika",
    institution: "Universitas Negeri Terkemuka",
    period: "2017 — 2021",
    grade: "IPK 3.86 / 4.00 (Cum Laude)",
    description:
      "Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Terdistribusi, dan Keamanan Sistem Informasi.",
    relevantCourses: [
      "Rekayasa Perangkat Lunak Lanjut",
      "Desain & Analisis Algoritma",
      "Sistem Basis Data & Cloud Computing",
      "Interaksi Manusia dan Komputer (UI/UX)",
    ],
  },
];

export const DUMMY_CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Meta Professional Frontend Developer",
    issuer: "Meta / Coursera",
    issueDate: "2023",
    credentialUrl: "https://coursera.org",
    badgeCode: "META-FED-84920",
  },
  {
    id: "cert-2",
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    expiryDate: "2027",
    credentialUrl: "https://aws.amazon.com",
    badgeCode: "AWS-SAA-91024",
  },
  {
    id: "cert-3",
    title: "Supabase Advanced PostgreSQL Mastery",
    issuer: "Supabase Academy",
    issueDate: "2024",
    credentialUrl: "https://supabase.com",
    badgeCode: "SUPA-PG-4819",
  },
];
