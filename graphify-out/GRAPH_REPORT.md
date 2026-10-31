# Graph Report - portfolio  (2026-11-01)

## Corpus Check
- 322 files · ~76,483 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 29, .example 1, .log 1)

## Summary
- 1326 nodes · 4280 edges · 69 communities (57 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3bcaa824`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- createServerSupabase
- lucide-react
- Button
- siteConfig.ts
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- getProfile
- education/server/actions.ts
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- experiences/server/actions.ts
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- profile/server/actions.ts
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- withOfflineFallback
- @vitejs/plugin-react
- NPM Scripts & Tooling
- og-image.tsx
- withOfflineFallback
- server.ts
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
- (public)/projects/page.tsx
- utils.ts
- CaseStudy.tsx
- organizations/server/actions.ts
- react
- components/index.ts
- storage.ts
- projects/server/queries.ts
- server-only
- skills/server/actions.ts
- vitest
- contact/page.tsx
- projects/index.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- vitest.setup.ts
- (public)/page.tsx
- Project
- app/layout.tsx
- database.ts
- languages/schemas.ts
- next.config.ts
- SignalTicker.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 105 edges
2. `Button()` - 88 edges
3. `createServerSupabase()` - 86 edges
4. `next` - 82 edges
5. `react` - 62 edges
6. `requireAdmin()` - 54 edges
7. `lucide-react` - 53 edges
8. `vitest` - 51 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
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

## Communities (69 total, 12 thin omitted)

### Community 0 - "createServerSupabase"
Cohesion: 0.19
Nodes (28): requireAdmin(), createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+20 more)

### Community 1 - "lucide-react"
Cohesion: 0.17
Nodes (37): lucide-react, CertificateRow(), CertificateTable(), EducationRow(), EducationTable(), ExperienceRow(), ExperienceTable(), LanguageRow() (+29 more)

### Community 2 - "Button"
Cohesion: 0.06
Nodes (85): @hookform/resolvers, next, radix-ui, react-hook-form, sonner, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage() (+77 more)

### Community 3 - "siteConfig.ts"
Cohesion: 0.23
Nodes (8): Hero(), HeroProps, MetricRail(), MetricRailProps, SignalPanel(), SignalPanelProps, siteConfig, SiteMetric

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (16): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), Sheet() (+8 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.12
Nodes (26): ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), CredentialRowProps, ExperienceTimeline() (+18 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (42): eslintConfig, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, husky@^9.1.7 (+34 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.20
Nodes (19): GalleryItem(), ProjectGalleryManager(), ProjectGalleryManagerProps, cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage() (+11 more)

### Community 10 - "getProfile"
Cohesion: 0.31
Nodes (6): dynamic, GET(), notFound(), mocks, request, getProfile()

### Community 11 - "education/server/actions.ts"
Cohesion: 0.26
Nodes (10): educationFormSchema, EducationFormValues, valid, createEducation(), deleteEducation(), invalidInput(), ParsedEducation, toColumns() (+2 more)

### Community 12 - "createPublicClient"
Cohesion: 0.24
Nodes (9): OrganizationFormProps, OrganizationTableProps, OrganizationRow, OrganizationRow, row, toOrganization(), countOrganizations(), Organization (+1 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (30): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+22 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.11
Nodes (29): formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm() (+21 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.14
Nodes (21): metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps (+13 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "experiences/server/actions.ts"
Cohesion: 0.29
Nodes (10): ExperienceGalleryManager(), ExperienceGalleryManagerProps, GalleryItem(), createExperienceImage(), deleteExperienceImage(), imageInputSchema, ParsedExperience, updateExperienceImage() (+2 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "profile/server/actions.ts"
Cohesion: 0.18
Nodes (11): profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), ConfirmDeleteDialogProps, ImageUploadFieldProps (+3 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "withOfflineFallback"
Cohesion: 0.18
Nodes (15): AdminDashboardPage(), CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), countCertificates() (+7 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.16
Nodes (18): AboutPage(), metadata, revalidate, LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow (+10 more)

### Community 28 - "server.ts"
Cohesion: 0.27
Nodes (7): @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge()

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.12
Nodes (23): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), CaseGridEmpty(), DomainChip() (+15 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.10
Nodes (20): EmptyState(), EmptyStateProps, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+12 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.14
Nodes (14): zod, certificateFormSchema, CertificateFormValues, valid, experienceFormSchema, ExperienceFormValues, valid, projectFormSchema (+6 more)

### Community 45 - "(public)/projects/page.tsx"
Cohesion: 0.27
Nodes (7): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, buildMetadata(), BuildMetadataInput, serializeJsonLd()

### Community 46 - "utils.ts"
Cohesion: 0.19
Nodes (9): CaseTocProps, CaseTocSection, BulletPoints(), BulletPointsProps, ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps (+1 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.22
Nodes (13): resolveProjectStatus(), CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext(), CaseNextProps, CaseSection(), CaseStudy() (+5 more)

### Community 48 - "organizations/server/actions.ts"
Cohesion: 0.29
Nodes (9): organizationFormSchema, OrganizationFormValues, valid, createOrganization(), invalidInput(), ParsedOrganization, toColumns(), updateOrganization() (+1 more)

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.17
Nodes (17): react, ErrorPage(), ErrorPageProps, NotFound(), PublicLayout(), ContactPanel(), ContactPanelProps, ErrorSummary() (+9 more)

### Community 51 - "storage.ts"
Cohesion: 0.18
Nodes (16): DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath(), extensionFor() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.10
Nodes (16): @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, vitest@^5.0.3, @testing-library/react, @testing-library/user-event, vitest, writeText, ProfilePortrait() (+8 more)

### Community 56 - "contact/page.tsx"
Cohesion: 0.11
Nodes (20): ContactPage(), metadata, revalidate, ProjectsPage(), ContactPaths(), BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps (+12 more)

### Community 57 - "projects/index.ts"
Cohesion: 0.19
Nodes (17): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), pickNextProject(), HOME_CASE_SLUGS (+9 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.18
Nodes (13): ExperienceFormProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow, images (+5 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (10): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education (+2 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.20
Nodes (18): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, FeaturedWork(), ProofStrip() (+10 more)

### Community 63 - "Project"
Cohesion: 0.17
Nodes (14): CapabilitiesProps, CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), CaseGrid(), CaseGridProps (+6 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.20
Nodes (9): CompositeTypes, Constants, DatabaseWithoutInternals, DefaultSchema, Enums, Json, Tables, TablesInsert (+1 more)

### Community 66 - "languages/schemas.ts"
Cohesion: 0.40
Nodes (4): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "SignalTicker.tsx"
Cohesion: 0.50
Nodes (4): SignalTicker(), SignalTickerProps, TickerItem, TickerLink()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 367 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `lucide-react`, `siteConfig.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `experiences/server/actions.ts`, `profile/server/actions.ts`, `withOfflineFallback`, `og-image.tsx`, `withOfflineFallback`, `server.ts`, `taxonomy.ts`, `(public)/projects/page.tsx`, `CaseStudy.tsx`, `react`, `components/index.ts`, `contact/page.tsx`, `projects/index.ts`, `(public)/page.tsx`, `Project`, `app/layout.tsx`, `next.config.ts`, `SignalTicker.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.058970917225950784 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `Button`, `siteConfig.ts`, `profile/index.ts`, `Dev Dependencies Manifest`, `getProfile`, `education/server/actions.ts`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `experiences/server/actions.ts`, `profile/server/actions.ts`, `withOfflineFallback`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `zod`, `(public)/projects/page.tsx`, `utils.ts`, `CaseStudy.tsx`, `organizations/server/actions.ts`, `components/index.ts`, `storage.ts`, `projects/server/queries.ts`, `skills/server/actions.ts`, `contact/page.tsx`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `(public)/page.tsx`, `Project`, `languages/schemas.ts`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._
- **Why does `react` connect `components/index.ts` to `lucide-react`, `Button`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `Runtime Dependencies Manifest`, `contact/index.ts`, `experiences/server/actions.ts`, `profile/server/actions.ts`, `taxonomy.ts`, `cn`, `(public)/projects/page.tsx`, `utils.ts`, `CaseStudy.tsx`, `react`, `vitest`, `contact/page.tsx`, `app/layout.tsx`, `SignalTicker.tsx`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._