# Graph Report - portfolio  (2026-11-02)

## Corpus Check
- 330 files · ~81,025 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1375 nodes · 4471 edges · 68 communities (59 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ac51b875`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- server.ts
- certificates/server/actions.ts
- components/admin.ts
- projects/index.ts
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- (dashboard)/page.tsx
- createServerSupabase
- createPublicClient
- Runtime Dependencies Manifest
- ContactForm.tsx
- (public)/skills/page.tsx
- Docker Compose Deployment
- requireAdmin
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- StackList
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- createPublicClient
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
- public.ts
- Commitlint Configuration
- PostCSS Configuration
- zod
- CaseCard.tsx
- Project
- revalidateAbout
- SiteHeader.tsx
- components/index.ts
- projects/server/queries.ts
- next
- skills/server/actions.ts
- vitest
- react
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- (public)/page.tsx
- Project
- app/layout.tsx
- database.ts
- ProjectForm.tsx
- next.config.ts
- ConfirmDeleteDialog.tsx
- eslint.config.mjs
- [slug]/opengraph-image.tsx
- react
- ActionResult

## God Nodes (most connected - your core abstractions)
1. `cn()` - 107 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 90 edges
4. `next` - 84 edges
5. `react` - 64 edges
6. `requireAdmin()` - 62 edges
7. `vitest` - 55 edges
8. `lucide-react` - 54 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getContactMessages()` --indirect_call--> `toContactMessage()`  [INFERRED]
  src/features/contact/server/queries.ts → src/features/contact/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getAllOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (68 total, 9 thin omitted)

### Community 0 - "server.ts"
Cohesion: 0.36
Nodes (8): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage(), emptyToNull()

### Community 1 - "certificates/server/actions.ts"
Cohesion: 0.40
Nodes (8): createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate(), uploadCertificateImage()

### Community 2 - "components/admin.ts"
Cohesion: 0.07
Nodes (75): class-variance-authority, lucide-react, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage() (+67 more)

### Community 3 - "projects/index.ts"
Cohesion: 0.21
Nodes (15): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), pickNextProject(), HOME_CASE_SLUGS (+7 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (16): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), Sheet() (+8 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.08
Nodes (46): AboutPage(), metadata, revalidate, dynamic, GET(), notFound(), mocks, request (+38 more)

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

### Community 10 - "(dashboard)/page.tsx"
Cohesion: 0.38
Nodes (9): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills() (+1 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.29
Nodes (15): AdminEducationEditPage(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+7 more)

### Community 12 - "createPublicClient"
Cohesion: 0.21
Nodes (12): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+4 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (28): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+20 more)

### Community 14 - "ContactForm.tsx"
Cohesion: 0.20
Nodes (18): ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm(), mockedSubmit, validate(), ContactPathsProps (+10 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.13
Nodes (21): metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps (+13 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "requireAdmin"
Cohesion: 0.23
Nodes (16): requireAdmin(), createExperience(), createExperienceImage(), deleteExperience(), deleteExperienceImage(), imageInputSchema, invalidInput(), ParsedExperience (+8 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "StackList"
Cohesion: 0.47
Nodes (4): ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "createPublicClient"
Cohesion: 0.26
Nodes (11): CertificateFormProps, CertificateTableProps, CertificateRow, toCertificate(), getPublishedCertificates(), Certificate, toSkill(), findSkills() (+3 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (10): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+2 more)

### Community 28 - "server.ts"
Cohesion: 0.27
Nodes (9): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge() (+1 more)

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.15
Nodes (20): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), DomainChip(), normalizeDomain() (+12 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.14
Nodes (16): CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), DropdownMenuCheckboxItem(), DropdownMenuContent() (+8 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "public.ts"
Cohesion: 0.16
Nodes (12): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, dynamic, GET(), mocks, createTimedFetch(), HEALTH_TIMEOUT_MS, PROXY_AUTH_TIMEOUT_MS (+4 more)

### Community 41 - "zod"
Cohesion: 0.09
Nodes (23): zod, certificateFormSchema, CertificateFormValues, valid, educationFormSchema, EducationFormValues, valid, experienceFormSchema (+15 more)

### Community 46 - "CaseCard.tsx"
Cohesion: 0.28
Nodes (9): CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork(), SignalTicker(), SignalTickerProps, TickerItem (+1 more)

### Community 47 - "Project"
Cohesion: 0.22
Nodes (13): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+5 more)

### Community 48 - "revalidateAbout"
Cohesion: 0.20
Nodes (18): AdminOrganizationsEditPage(), organizationFormSchema, OrganizationFormValues, valid, createOrganization(), createOrganizationImage(), deleteOrganization(), deleteOrganizationImage() (+10 more)

### Community 49 - "SiteHeader.tsx"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.16
Nodes (19): ErrorPage(), ErrorPageProps, NotFound(), ContactPage(), metadata, revalidate, PublicLayout(), ProjectsPage() (+11 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "next"
Cohesion: 0.18
Nodes (12): next, Hero(), MetricRail(), MetricRailProps, SignalPanel(), projectMetadata(), project, siteConfig (+4 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.27
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.09
Nodes (11): @testing-library/react, @testing-library/user-event, vitest, writeText, MockIntersectionObserver, ObserverCallback, sections, projects (+3 more)

### Community 56 - "react"
Cohesion: 0.22
Nodes (10): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLd(), JsonLdProps, Status, StatusBadge() (+2 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.16
Nodes (16): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow (+8 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.16
Nodes (20): HomePage(), metadata, revalidate, AboutStrip(), FACTS, ContactCta(), Capabilities, ProofStrip() (+12 more)

### Community 63 - "Project"
Cohesion: 0.15
Nodes (13): HeroProps, SignalPanelProps, CapabilitiesProps, CaseCardProps, CaseFactsProps, CaseGridProps, CaseNextProps, CaseStudyProps (+5 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.11
Nodes (18): CertificateRow, row, MessageInboxProps, ContactMessageRow, ContactMessageRow, row, toContactMessage(), ContactMessage (+10 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.06
Nodes (65): server-only@^0.0.1, @hookform/resolvers, radix-ui, react-hook-form, server-only, sonner, AdminProjectEditPage(), AdminProjectNewPage() (+57 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.27
Nodes (12): ConfirmDeleteDialogProps, ImageLightbox(), ImageLightboxProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+4 more)

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 70 - "[slug]/opengraph-image.tsx"
Cohesion: 0.33
Nodes (6): alt, contentType, ImageProps, OpengraphImage(), size, truncate()

### Community 72 - "react"
Cohesion: 0.12
Nodes (15): react, BulletPoints(), BulletPointsProps, EmptyState(), EmptyStateProps, ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps (+7 more)

### Community 73 - "ActionResult"
Cohesion: 0.38
Nodes (3): GalleryManager(), renderGallery(), ActionResult

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 377 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `components/admin.ts`, `projects/index.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `(dashboard)/page.tsx`, `createServerSupabase`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `og-image.tsx`, `server.ts`, `taxonomy.ts`, `CaseCard.tsx`, `Project`, `revalidateAbout`, `SiteHeader.tsx`, `components/index.ts`, `skills/server/actions.ts`, `react`, `(public)/page.tsx`, `Project`, `app/layout.tsx`, `ProjectForm.tsx`, `next.config.ts`, `ConfirmDeleteDialog.tsx`, `[slug]/opengraph-image.tsx`, `react`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07369146005509641 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `profile/index.ts`, `Dev Dependencies Manifest`, `createPublicClient`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `withOfflineFallback`, `taxonomy.ts`, `public.ts`, `zod`, `CaseCard.tsx`, `Project`, `revalidateAbout`, `projects/server/queries.ts`, `next`, `skills/server/actions.ts`, `react`, `experiences/server/queries.ts`, `withOfflineFallback`, `(public)/page.tsx`, `database.ts`, `ProjectForm.tsx`, `react`, `ActionResult`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07704918032786885 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `app/layout.tsx`, `AdminSidebar.tsx`, `components/admin.ts`, `ProjectForm.tsx`, `AdminSidebar.tsx`, `ConfirmDeleteDialog.tsx`, `Dev Dependencies Manifest`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `Project`, `CaseCard.tsx`, `SiteHeader.tsx`, `components/index.ts`, `StackList`, `vitest`, `react`, `taxonomy.ts`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._