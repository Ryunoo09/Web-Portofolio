# Graph Report - portfolio  (2026-11-02)

## Corpus Check
- 327 files · ~80,223 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1362 nodes · 4438 edges · 61 communities (51 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9414bc2c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- server.ts
- certificates/server/actions.ts
- components/admin.ts
- next
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- createPublicClient
- createServerSupabase
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- experiences/server/actions.ts
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- ConfirmDeleteDialog
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- NPM Scripts & Tooling
- og-image.tsx
- withOfflineFallback
- server.ts
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- AdminSidebar.tsx
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- zod
- (public)/skills/page.tsx
- Project
- storage.ts
- projects/server/queries.ts
- about/page.tsx
- skills/server/actions.ts
- vitest
- react
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- vitest
- (public)/page.tsx
- database.ts
- ProjectForm.tsx
- next.config.ts
- eslint.config.mjs
- [slug]/page.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 107 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 90 edges
4. `next` - 84 edges
5. `react` - 64 edges
6. `requireAdmin()` - 62 edges
7. `lucide-react` - 54 edges
8. `vitest` - 53 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (61 total, 10 thin omitted)

### Community 0 - "server.ts"
Cohesion: 0.16
Nodes (16): createLanguage(), invalidInput(), ParsedLanguage, toColumns(), updateLanguage(), toColumns(), ProfileFormValues, invalidInput() (+8 more)

### Community 1 - "certificates/server/actions.ts"
Cohesion: 0.35
Nodes (9): CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+1 more)

### Community 2 - "components/admin.ts"
Cohesion: 0.09
Nodes (38): AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage(), AdminExperienceNewPage() (+30 more)

### Community 3 - "next"
Cohesion: 0.11
Nodes (19): lucide-react, next, metadata, ContactPanel(), ContactPanelProps, writeText, FACTS, Hero() (+11 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.38
Nodes (9): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills() (+1 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.08
Nodes (41): AboutPage(), ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), ContactCta() (+33 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (42): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+34 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.24
Nodes (16): cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema, invalidInput(), ParsedProject (+8 more)

### Community 10 - "createPublicClient"
Cohesion: 0.21
Nodes (13): CertificateFormProps, CertificateTableProps, CertificateRow, toCertificate(), getPublishedCertificates(), Certificate, SkillRow, toSkill() (+5 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.20
Nodes (29): requireAdmin(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+21 more)

### Community 12 - "createPublicClient"
Cohesion: 0.21
Nodes (12): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+4 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+21 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.11
Nodes (29): formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm() (+21 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.18
Nodes (14): ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps (+6 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "experiences/server/actions.ts"
Cohesion: 0.22
Nodes (12): experienceFormSchema, ExperienceFormValues, valid, createExperience(), deleteExperience(), imageInputSchema, invalidInput(), ParsedExperience (+4 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "ConfirmDeleteDialog"
Cohesion: 0.24
Nodes (30): AdminProjectsPage(), CertificateRow(), CertificateTable(), EducationRow(), EducationTable(), ExperienceRow(), ExperienceTable(), LanguageRow() (+22 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (23): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+15 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (10): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+2 more)

### Community 28 - "server.ts"
Cohesion: 0.29
Nodes (8): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge()

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.13
Nodes (20): ProjectGalleryManagerProps, CaseGrid(), CaseGridEmpty(), DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), project (+12 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.09
Nodes (30): AdminDashboardLayout(), dynamic, revalidate, AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive() (+22 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.11
Nodes (18): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, organizationFormSchema, OrganizationFormValues (+10 more)

### Community 45 - "(public)/skills/page.tsx"
Cohesion: 0.12
Nodes (27): ErrorPage(), ErrorPageProps, metadata, revalidate, ContactPage(), metadata, revalidate, firstParam() (+19 more)

### Community 47 - "Project"
Cohesion: 0.12
Nodes (29): SignalPanelProps, resolveProjectStatus(), CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), CaseFacts() (+21 more)

### Community 51 - "storage.ts"
Cohesion: 0.16
Nodes (16): uploadExperienceImage(), uploadProfileImage(), uploadProfileResume(), DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "about/page.tsx"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.25
Nodes (5): CaseTocProps, CaseTocSection, MockIntersectionObserver, ObserverCallback, sections

### Community 56 - "react"
Cohesion: 0.08
Nodes (32): next-themes@^0.4.6, next-themes, react, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk (+24 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.16
Nodes (15): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow (+7 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 61 - "vitest"
Cohesion: 0.06
Nodes (24): @testing-library/react, @testing-library/user-event, vitest, dynamic, GET(), notFound(), mocks, request (+16 more)

### Community 62 - "(public)/page.tsx"
Cohesion: 0.12
Nodes (30): HomePage(), metadata, revalidate, AboutStrip(), Capabilities, FeaturedWork(), PROOF_STATS, ProofStrip() (+22 more)

### Community 65 - "database.ts"
Cohesion: 0.14
Nodes (12): CertificateRow, row, CompositeTypes, Constants, Database, DatabaseWithoutInternals, DefaultSchema, Enums (+4 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.08
Nodes (62): @hookform/resolvers, radix-ui, react-hook-form, sonner, CertificateForm(), EducationForm(), ExperienceForm(), ExperienceGalleryManager() (+54 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 70 - "[slug]/page.tsx"
Cohesion: 0.15
Nodes (17): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+9 more)

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 376 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `server.ts`, `components/admin.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `ConfirmDeleteDialog`, `server.ts`, `taxonomy.ts`, `AdminSidebar.tsx`, `(public)/skills/page.tsx`, `Project`, `react`, `vitest`, `(public)/page.tsx`, `ProjectForm.tsx`, `next.config.ts`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09014084507042254 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `next`, `profile/index.ts`, `Dev Dependencies Manifest`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `experiences/server/actions.ts`, `withOfflineFallback`, `taxonomy.ts`, `zod`, `(public)/skills/page.tsx`, `Project`, `storage.ts`, `projects/server/queries.ts`, `skills/server/actions.ts`, `vitest`, `react`, `experiences/server/queries.ts`, `withOfflineFallback`, `(public)/page.tsx`, `database.ts`, `ProjectForm.tsx`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.10960960960960961 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `ProjectForm.tsx` to `AdminSidebar.tsx`, `components/admin.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `[slug]/page.tsx`, `(public)/skills/page.tsx`, `contact/index.ts`, `Project`, `ConfirmDeleteDialog`, `vitest`, `(public)/page.tsx`, `react`, `vitest`, `taxonomy.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08385744234800839 - nodes in this community are weakly interconnected._