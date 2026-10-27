# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 260 files · ~58,757 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1105 nodes · 3626 edges · 57 communities (46 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cc5d6c41`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- projects/index.ts
- components/index.ts
- languages/index.ts
- cn
- server.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- app/layout.tsx
- (dashboard)/page.tsx
- Organizations Feature Vertical
- Runtime Dependencies Manifest
- Contact & Message Inbox
- Badge
- Docker Compose Deployment
- (public)/projects/page.tsx
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- Button
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- database.ts
- @vitejs/plugin-react
- NPM Scripts & Tooling
- Vitest Environment Setup
- about/page.tsx
- ESLint Configuration
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- Organization
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- projects/schemas.ts
- projects/server/actions.ts
- AboutContent.tsx
- app/layout.tsx
- components/index.ts
- patterns.test.tsx
- storage.ts
- projects/server/queries.ts
- certificates/server/actions.ts
- skills/server/actions.ts
- EducationForm.tsx
- revalidateAbout
- profile/index.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 97 edges
2. `Button()` - 84 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 69 edges
5. `react` - 65 edges
6. `lucide-react` - 51 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 35 edges
10. `Badge()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getAllOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts
- `CertificateCardProps` --references--> `Certificate`  [EXTRACTED]
  src/features/profile/components/public/CertificateCard.tsx → src/features/profile/types.ts
- `EducationCardProps` --references--> `Education`  [EXTRACTED]
  src/features/profile/components/public/EducationCard.tsx → src/features/profile/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (57 total, 11 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.15
Nodes (18): zod, experienceFormSchema, ExperienceFormValues, valid, ParsedExperience, profileFormSchema, ProfileFormValues, valid (+10 more)

### Community 1 - "projects/index.ts"
Cohesion: 0.22
Nodes (16): ProjectGalleryManagerProps, ProjectCard(), ProjectCardProps, ProjectDetail(), ProjectDetailProps, ProjectGallery(), ProjectGalleryProps, ProjectGrid() (+8 more)

### Community 2 - "components/index.ts"
Cohesion: 0.11
Nodes (38): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminLanguagesNewPage(), AdminOrganizationsNewPage(), AdminProjectEditPage(), AdminProjectNewPage() (+30 more)

### Community 3 - "languages/index.ts"
Cohesion: 0.21
Nodes (9): LanguageFormProps, LanguageTableProps, LanguageListProps, LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, LanguageRow (+1 more)

### Community 4 - "cn"
Cohesion: 0.05
Nodes (56): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), BulletPointsProps (+48 more)

### Community 5 - "server.ts"
Cohesion: 0.20
Nodes (11): AdminLoginPage(), metadata, initialState, LoginForm(), LoginInput, loginSchema, login(), LoginState (+3 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): @supabase/ssr@^0.12.7, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+30 more)

### Community 9 - "Skills Feature Vertical"
Cohesion: 0.13
Nodes (22): HomePage(), revalidate, SkillsPage(), ProjectFormProps, SkillFormProps, SkillTableProps, SkillCard(), SkillCardProps (+14 more)

### Community 10 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 11 - "(dashboard)/page.tsx"
Cohesion: 0.14
Nodes (20): AdminExperienceEditPage(), AdminExperienceNewPage(), AdminDashboardPage(), countCertificates(), countEducation(), ExperienceForm(), ExperienceFormProps, ExperienceTableProps (+12 more)

### Community 12 - "Organizations Feature Vertical"
Cohesion: 0.30
Nodes (10): organizationFormSchema, OrganizationFormValues, valid, createOrganization(), deleteOrganization(), invalidInput(), ParsedOrganization, toColumns() (+2 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+21 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.16
Nodes (18): AdminDashboardLayout(), AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, contactFormSchema, ContactFormValues, deleteMessage() (+10 more)

### Community 15 - "Badge"
Cohesion: 0.20
Nodes (16): LanguageList(), OrganizationCard(), CertificateCard(), CertificateCardProps, EducationCard(), EducationCardProps, ExperienceTimeline(), ExperienceTimelineProps (+8 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "(public)/projects/page.tsx"
Cohesion: 0.32
Nodes (6): metadata, ProjectsPage(), revalidate, generateStaticParams(), sitemap(), getPublishedProjects()

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "Button"
Cohesion: 0.10
Nodes (60): nextConfig, lucide-react, next, AdminCertificateEditPage(), AdminCertificatesPage(), AdminEducationPage(), AdminExperiencesPage(), AdminLanguagesEditPage() (+52 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.09
Nodes (19): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, CertificateRow, CertificateRow, row, LanguageRow, row, OrganizationRow (+11 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "Vitest Environment Setup"
Cohesion: 0.17
Nodes (7): @testing-library/jest-dom@^7.0.1, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, { refreshMock }

### Community 27 - "about/page.tsx"
Cohesion: 0.25
Nodes (15): AboutPage(), metadata, revalidate, toCertificate(), getPublishedCertificates(), toLanguage(), getPublishedLanguages(), toOrganization() (+7 more)

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

### Community 33 - "Organization"
Cohesion: 0.33
Nodes (5): OrganizationFormProps, OrganizationTableProps, OrganizationCardProps, OrganizationRow, Organization

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "projects/schemas.ts"
Cohesion: 0.43
Nodes (3): projectFormSchema, ProjectFormValues, valid

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.20
Nodes (26): requireAdmin(), deleteCertificate(), deleteEducation(), toggleEducationPublish(), deleteExperience(), toggleExperiencePublish(), uploadProfileImage(), uploadProfileResume() (+18 more)

### Community 46 - "AboutContent.tsx"
Cohesion: 0.50
Nodes (3): AboutContent(), AboutContentProps, principles

### Community 48 - "app/layout.tsx"
Cohesion: 0.20
Nodes (9): vitest, metadata, revalidate, projectMetadata(), project, siteConfig, buildMetadata(), BuildMetadataInput (+1 more)

### Community 49 - "components/index.ts"
Cohesion: 0.16
Nodes (14): react, metadata, ContactPage(), metadata, PublicLayout(), ContactInfoCard(), AdminPageHeaderProps, GithubIcon() (+6 more)

### Community 50 - "patterns.test.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, ProjectJsonLd, getProjectBySlug(), BreadcrumbItem, Breadcrumbs() (+4 more)

### Community 51 - "storage.ts"
Cohesion: 0.15
Nodes (16): server-only@^0.0.1, server-only, DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.19
Nodes (14): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+6 more)

### Community 53 - "certificates/server/actions.ts"
Cohesion: 0.23
Nodes (15): AdminCertificateNewPage(), CertificateForm(), CertificateFormProps, CertificateTableProps, certificateFormSchema, CertificateFormValues, valid, createCertificate() (+7 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "EducationForm.tsx"
Cohesion: 0.15
Nodes (20): AdminEducationEditPage(), AdminEducationNewPage(), EducationForm(), EducationFormProps, EducationTableProps, educationFormSchema, EducationFormValues, valid (+12 more)

### Community 58 - "revalidateAbout"
Cohesion: 0.28
Nodes (12): createExperience(), invalidInput(), toColumns(), updateExperience(), createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage (+4 more)

### Community 60 - "profile/index.ts"
Cohesion: 0.25
Nodes (13): AdminProfilePage(), ProfileFormProps, Row, ProfileRow, toCertificate(), toEducation(), toExperience(), toProfile() (+5 more)

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 299 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `profile/server/actions.ts`, `projects/index.ts`, `components/index.ts`, `cn`, `server.ts`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `(dashboard)/page.tsx`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Badge`, `(public)/projects/page.tsx`, `about/page.tsx`, `taxonomy.ts`, `app/layout.tsx`, `components/index.ts`, `patterns.test.tsx`, `certificates/server/actions.ts`, `EducationForm.tsx`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `profile/server/actions.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1452991452991453 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `app/layout.tsx` to `profile/server/actions.ts`, `components/index.ts`, `languages/index.ts`, `cn`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `(dashboard)/page.tsx`, `Organizations Feature Vertical`, `Contact & Message Inbox`, `Button`, `database.ts`, `@vitejs/plugin-react`, `Vitest Environment Setup`, `taxonomy.ts`, `projects/schemas.ts`, `patterns.test.tsx`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `EducationForm.tsx`, `profile/index.ts`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `components/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1112618724559023 - nodes in this community are weakly interconnected._
- **Why does `react` connect `components/index.ts` to `projects/index.ts`, `components/index.ts`, `cn`, `server.ts`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Badge`, `AboutContent.tsx`, `patterns.test.tsx`, `Button`, `certificates/server/actions.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.053554040895813046 - nodes in this community are weakly interconnected._