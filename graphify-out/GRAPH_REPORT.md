# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 311 files · ~70,115 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1280 nodes · 4055 edges · 69 communities (57 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d5758d70`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ProfileForm.tsx
- createPublicClient
- Button
- (public)/page.tsx
- cn
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- SkillForm.tsx
- EducationForm.tsx
- react
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- (dashboard)/page.tsx
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- createServerSupabase
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- database.ts
- @vitejs/plugin-react
- NPM Scripts & Tooling
- og-image.tsx
- withOfflineFallback
- ESLint Configuration
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- cn
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- zod
- ProjectForm.tsx
- JsonLd
- Project
- [slug]/page.tsx
- react
- components/index.ts
- storage.ts
- projects/server/queries.ts
- certificates/server/queries.ts
- skills/server/actions.ts
- vitest
- utils.ts
- siteConfig.ts
- experiences/server/queries.ts
- withOfflineFallback
- structured-data.ts
- vitest.setup.ts
- certificates/server/actions.ts
- CaseCard.tsx
- app/layout.tsx
- [slug]/opengraph-image.tsx
- CaseToc.test.tsx
- next.config.ts
- ErrorSummary.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Button()` - 86 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 80 edges
5. `react` - 60 edges
6. `lucide-react` - 52 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 47 edges
10. `Project` - 36 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `CaseGridProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/CaseGrid.tsx → src/features/projects/types.ts
- `getAllSkills()` --indirect_call--> `toSkill()`  [INFERRED]
  src/features/skills/server/queries.ts → src/features/skills/server/mappers.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  src/shared/components/ui/sheet.tsx → src/shared/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (69 total, 12 thin omitted)

### Community 0 - "ProfileForm.tsx"
Cohesion: 0.22
Nodes (13): ProfileForm(), profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage() (+5 more)

### Community 1 - "createPublicClient"
Cohesion: 0.21
Nodes (17): AboutPage(), Row, ProfileRow, toCertificate(), toEducation(), toExperience(), toProfile(), getCertificates() (+9 more)

### Community 2 - "Button"
Cohesion: 0.07
Nodes (72): class-variance-authority, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage() (+64 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.16
Nodes (22): HomePage(), metadata, revalidate, sitemap(), AboutStrip(), ContactCta(), Capabilities, ProofStrip() (+14 more)

### Community 4 - "cn"
Cohesion: 0.09
Nodes (30): AdminDashboardLayout(), AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks() (+22 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.12
Nodes (22): AdminProfilePage(), ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), CredentialRow() (+14 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+30 more)

### Community 9 - "SkillForm.tsx"
Cohesion: 0.20
Nodes (18): radix-ui, AdminSkillEditPage(), AdminSkillNewPage(), LanguageForm(), LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid (+10 more)

### Community 10 - "EducationForm.tsx"
Cohesion: 0.19
Nodes (13): sonner, educationFormSchema, EducationFormValues, valid, createEducation(), invalidInput(), ParsedEducation, toColumns() (+5 more)

### Community 11 - "react"
Cohesion: 0.25
Nodes (8): react, metadata, ContactPanel(), ContactPanelProps, GithubIcon(), LinkedinIcon(), PageContainerProps, SiteFooter()

### Community 12 - "createPublicClient"
Cohesion: 0.26
Nodes (9): OrganizationFormProps, OrganizationTableProps, OrganizationRow, OrganizationRow, row, toOrganization(), getAllOrganizations(), getPublishedOrganizations() (+1 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+21 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.11
Nodes (28): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey (+20 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.14
Nodes (20): metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps (+12 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "(dashboard)/page.tsx"
Cohesion: 0.42
Nodes (8): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills()

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "createServerSupabase"
Cohesion: 0.23
Nodes (24): requireAdmin(), deleteCertificate(), toggleCertificatePublish(), deleteEducation(), toggleEducationPublish(), deleteExperience(), toggleExperiencePublish(), createLanguage() (+16 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.08
Nodes (11): publicPages, themes, hasCredentials, TINY_PNG, publicRoutes, routes, viewports, @axe-core/playwright@^4.14.0 (+3 more)

### Community 23 - "database.ts"
Cohesion: 0.12
Nodes (14): @supabase/ssr@^0.12.7, @supabase/supabase-js@^2.117.2, @supabase/ssr, @supabase/supabase-js, CompositeTypes, Constants, Database, DatabaseWithoutInternals (+6 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.20
Nodes (12): AdminLanguagesEditPage(), LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row (+4 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.14
Nodes (21): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip() (+13 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.12
Nodes (18): CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), DropdownMenuCheckboxItem(), DropdownMenuContent() (+10 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.13
Nodes (20): @hookform/resolvers, react-hook-form, zod, experienceFormSchema, ExperienceFormValues, valid, createExperience(), invalidInput() (+12 more)

### Community 45 - "ProjectForm.tsx"
Cohesion: 0.15
Nodes (25): AdminProjectEditPage(), AdminProjectNewPage(), PROJECT_TYPES, ProjectForm(), GalleryItem(), ProjectGalleryManager(), cleanList(), createProject() (+17 more)

### Community 46 - "JsonLd"
Cohesion: 0.14
Nodes (15): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), EmptyState(), EmptyStateProps, JsonLdProps, aspectClasses (+7 more)

### Community 47 - "Project"
Cohesion: 0.14
Nodes (21): SignalPanelProps, resolveProjectStatus(), CapabilitiesProps, CaseCardProps, CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext() (+13 more)

### Community 48 - "[slug]/page.tsx"
Cohesion: 0.32
Nodes (7): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, pickNextProject(), ProjectJsonLd

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.19
Nodes (13): ErrorPage(), ErrorPageProps, NotFound(), ContactPage(), metadata, revalidate, PublicLayout(), ProjectsPage() (+5 more)

### Community 51 - "storage.ts"
Cohesion: 0.15
Nodes (16): server-only@^0.0.1, server-only, DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "certificates/server/queries.ts"
Cohesion: 0.26
Nodes (8): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.17
Nodes (9): @testing-library/react, @testing-library/user-event, vitest, writeText, projects, replace, makeProject(), { refreshMock } (+1 more)

### Community 56 - "utils.ts"
Cohesion: 0.29
Nodes (7): ExperienceTimeline(), CaseTocProps, CaseTocSection, BulletPoints(), BulletPointsProps, formatMonthPeriod(), toListItems()

### Community 57 - "siteConfig.ts"
Cohesion: 0.21
Nodes (8): metadata, revalidate, projectMetadata(), project, siteConfig, buildMetadata(), BuildMetadataInput, serializeJsonLd()

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (9): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getAllExperiences(), getPublishedExperiences() (+1 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.26
Nodes (9): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getAllEducation(), getPublishedEducation() (+1 more)

### Community 60 - "structured-data.ts"
Cohesion: 0.31
Nodes (8): aboutPageNode(), CollectionItem, contactPageNode(), personNode(), PersonOptions, SITE, site, PROJECT_DOMAIN_LABELS

### Community 62 - "certificates/server/actions.ts"
Cohesion: 0.31
Nodes (10): CertificateForm(), certificateFormSchema, CertificateFormValues, valid, createCertificate(), invalidInput(), ParsedCertificate, toColumns() (+2 more)

### Community 63 - "CaseCard.tsx"
Cohesion: 0.26
Nodes (10): CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork(), MediaFrame(), ProjectCoverFallback(), ProjectCoverFallbackProps (+2 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "[slug]/opengraph-image.tsx"
Cohesion: 0.33
Nodes (6): alt, contentType, ImageProps, OpengraphImage(), size, truncate()

### Community 66 - "CaseToc.test.tsx"
Cohesion: 0.40
Nodes (3): MockIntersectionObserver, ObserverCallback, sections

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "ErrorSummary.tsx"
Cohesion: 0.50
Nodes (3): ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 353 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `ProfileForm.tsx`, `(public)/page.tsx`, `cn`, `profile/index.ts`, `Dev Dependencies Manifest`, `SkillForm.tsx`, `EducationForm.tsx`, `react`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `(dashboard)/page.tsx`, `database.ts`, `og-image.tsx`, `withOfflineFallback`, `taxonomy.ts`, `zod`, `ProjectForm.tsx`, `JsonLd`, `Project`, `[slug]/page.tsx`, `react`, `components/index.ts`, `siteConfig.ts`, `certificates/server/actions.ts`, `CaseCard.tsx`, `app/layout.tsx`, `[slug]/opengraph-image.tsx`, `next.config.ts`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.07376311844077961 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `ProfileForm.tsx`, `createPublicClient`, `profile/index.ts`, `Dev Dependencies Manifest`, `SkillForm.tsx`, `EducationForm.tsx`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `zod`, `JsonLd`, `Project`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/queries.ts`, `skills/server/actions.ts`, `utils.ts`, `siteConfig.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `structured-data.ts`, `vitest.setup.ts`, `certificates/server/actions.ts`, `CaseToc.test.tsx`, `ErrorSummary.tsx`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.09291521486643438 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `ProfileForm.tsx`, `Button`, `(public)/page.tsx`, `cn`, `Dev Dependencies Manifest`, `SkillForm.tsx`, `EducationForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `taxonomy.ts`, `cn`, `ProjectForm.tsx`, `JsonLd`, `Project`, `react`, `components/index.ts`, `utils.ts`, `certificates/server/actions.ts`, `CaseCard.tsx`, `app/layout.tsx`, `CaseToc.test.tsx`, `ErrorSummary.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11742424242424243 - nodes in this community are weakly interconnected._