# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 272 files · ~61,887 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1146 nodes · 3776 edges · 56 communities (45 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16bba3b9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- projects/index.ts
- components/index.ts
- (public)/page.tsx
- cn
- Hero.tsx
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- app/layout.tsx
- experiences/server/queries.ts
- Organizations Feature Vertical
- Runtime Dependencies Manifest
- Contact & Message Inbox
- education/server/queries.ts
- Docker Compose Deployment
- createServerSupabase
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- Button
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- database.ts
- @vitejs/plugin-react
- NPM Scripts & Tooling
- server-only
- withOfflineFallback
- ESLint Configuration
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- organizations/server/queries.ts
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- zod
- projects/server/actions.ts
- siteConfig.ts
- components/index.ts
- CaseCard.tsx
- storage.ts
- projects/server/queries.ts
- certificates/server/actions.ts
- skills/server/actions.ts
- EducationForm.tsx
- revalidateAbout
- createPublicClient

## God Nodes (most connected - your core abstractions)
1. `cn()` - 101 edges
2. `Button()` - 84 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 76 edges
5. `react` - 65 edges
6. `lucide-react` - 58 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 37 edges
10. `Badge()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `LanguageListProps` --references--> `Language`  [EXTRACTED]
  src/features/languages/components/public/LanguageList.tsx → src/features/languages/types.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (56 total, 11 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.22
Nodes (11): profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage(), uploadProfileResume() (+3 more)

### Community 1 - "projects/index.ts"
Cohesion: 0.17
Nodes (20): ProjectFormProps, ProjectGalleryManagerProps, CapabilitiesProps, CaseCardProps, FeaturedWorkProps, ProjectCard(), ProjectCardProps, ProjectDetail() (+12 more)

### Community 2 - "components/index.ts"
Cohesion: 0.09
Nodes (44): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminLanguagesEditPage(), AdminLanguagesNewPage(), ContactForm(), LanguageForm() (+36 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.14
Nodes (19): HomePage(), revalidate, AboutStrip(), ContactCta(), Capabilities, FeaturedWork(), PROOF_STATS, ProofStrip() (+11 more)

### Community 4 - "cn"
Cohesion: 0.05
Nodes (67): react, AdminProfilePage(), metadata, AboutPage(), metadata, revalidate, AdminSidebar(), AdminSidebarProps (+59 more)

### Community 5 - "Hero.tsx"
Cohesion: 0.24
Nodes (9): ProfileFormProps, Hero(), HeroProps, MetricRail(), MetricRailProps, SignalPanel(), SignalPanelProps, Profile (+1 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (40): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+32 more)

### Community 9 - "Skills Feature Vertical"
Cohesion: 0.08
Nodes (31): @testing-library/react, @testing-library/user-event, vitest, AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillEditPage(), AdminSkillNewPage(), metadata (+23 more)

### Community 10 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 11 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (8): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getPublishedExperiences(), Experience

### Community 12 - "Organizations Feature Vertical"
Cohesion: 0.18
Nodes (18): AdminOrganizationsEditPage(), AdminOrganizationsNewPage(), OrganizationForm(), OrganizationFormProps, OrganizationTableProps, OrganizationCardProps, organizationFormSchema, OrganizationFormValues (+10 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+21 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.09
Nodes (29): AdminDashboardLayout(), AdminMessagesPage(), AdminLoginPage(), metadata, initialState, LoginForm(), LoginInput, loginSchema (+21 more)

### Community 15 - "education/server/queries.ts"
Cohesion: 0.26
Nodes (8): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.42
Nodes (10): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), deleteLanguage(), countLanguages(), countOrganizations(), countProjects() (+2 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "Button"
Cohesion: 0.10
Nodes (60): nextConfig, lucide-react, next, AdminCertificateEditPage(), AdminCertificatesPage(), AdminEducationPage(), AdminExperienceEditPage(), AdminExperienceNewPage() (+52 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.12
Nodes (17): @supabase/ssr@^0.12.7, @supabase/ssr, LanguageRow, LanguageRow, row, toLanguage(), getPublishedLanguages(), CompositeTypes (+9 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (9): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate (+1 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.20
Nodes (13): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), DOMAIN_BY_SLUG, getProjectDomainLabel() (+5 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "organizations/server/queries.ts"
Cohesion: 0.36
Nodes (5): OrganizationRow, OrganizationRow, row, toOrganization(), getPublishedOrganizations()

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.19
Nodes (9): zod, valid, valid, projectFormSchema, ProjectFormValues, valid, optionalDateInput, requiredDateInput (+1 more)

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.26
Nodes (18): requireAdmin(), GalleryItem(), ProjectGalleryManager(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage() (+10 more)

### Community 48 - "siteConfig.ts"
Cohesion: 0.12
Nodes (20): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), ProjectJsonLd, projectMetadata() (+12 more)

### Community 49 - "components/index.ts"
Cohesion: 0.14
Nodes (21): ContactPage(), metadata, PublicLayout(), metadata, ProjectsPage(), revalidate, ContactInfoCard(), FormFieldControlProps (+13 more)

### Community 50 - "CaseCard.tsx"
Cohesion: 0.16
Nodes (15): CaseCard(), projectCredits(), projectMeta(), projectYear(), aspectClasses, MediaFrame(), MediaFrameProps, ProjectCoverFallback() (+7 more)

### Community 51 - "storage.ts"
Cohesion: 0.14
Nodes (15): ImageUploadFieldProps, DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath() (+7 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "certificates/server/actions.ts"
Cohesion: 0.30
Nodes (13): AdminCertificateNewPage(), CertificateForm(), certificateFormSchema, CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate (+5 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage(), toggleSkillPublish(), updateSkill(), ConfirmDeleteDialogProps (+3 more)

### Community 55 - "EducationForm.tsx"
Cohesion: 0.23
Nodes (14): AdminEducationEditPage(), AdminEducationNewPage(), EducationForm(), educationFormSchema, EducationFormValues, valid, createEducation(), deleteEducation() (+6 more)

### Community 58 - "revalidateAbout"
Cohesion: 0.33
Nodes (11): experienceFormSchema, ExperienceFormValues, createExperience(), deleteExperience(), invalidInput(), ParsedExperience, toColumns(), toggleExperiencePublish() (+3 more)

### Community 60 - "createPublicClient"
Cohesion: 0.30
Nodes (11): Row, ProfileRow, toCertificate(), toEducation(), toExperience(), toProfile(), getCertificates(), getEducation() (+3 more)

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 305 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `profile/server/actions.ts`, `projects/index.ts`, `components/index.ts`, `(public)/page.tsx`, `cn`, `Hero.tsx`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `Organizations Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `createServerSupabase`, `database.ts`, `taxonomy.ts`, `projects/server/actions.ts`, `siteConfig.ts`, `components/index.ts`, `CaseCard.tsx`, `storage.ts`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `EducationForm.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09292412617220801 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `Skills Feature Vertical` to `profile/server/actions.ts`, `components/index.ts`, `(public)/page.tsx`, `cn`, `Hero.tsx`, `Dev Dependencies Manifest`, `experiences/server/queries.ts`, `Organizations Feature Vertical`, `Contact & Message Inbox`, `education/server/queries.ts`, `database.ts`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `organizations/server/queries.ts`, `zod`, `siteConfig.ts`, `CaseCard.tsx`, `storage.ts`, `projects/server/queries.ts`, `EducationForm.tsx`, `createPublicClient`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `(public)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13666666666666666 - nodes in this community are weakly interconnected._
- **Why does `react` connect `cn` to `projects/index.ts`, `components/index.ts`, `(public)/page.tsx`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `projects/server/actions.ts`, `siteConfig.ts`, `components/index.ts`, `CaseCard.tsx`, `storage.ts`, `Button`, `certificates/server/actions.ts`, `skills/server/actions.ts`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.053479381443298966 - nodes in this community are weakly interconnected._