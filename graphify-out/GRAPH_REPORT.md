# Graph Report - portfolio  (2026-10-31)

## Corpus Check
- 320 files · ~73,706 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 29, .example 1, .log 1)

## Summary
- 1314 nodes · 4177 edges · 65 communities (53 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b662a8f4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- createServerSupabase
- auth/index.ts
- Button
- about/page.tsx
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- ProjectForm.tsx
- getProfile
- LoginForm.tsx
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- ErrorSummary.tsx
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- createServerSupabase
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- withOfflineFallback
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
- experiences/server/actions.ts
- JsonLd
- CaseStudy.tsx
- react
- components/index.ts
- storage.ts
- projects/server/queries.ts
- skills/server/actions.ts
- @testing-library/react
- react
- projects/index.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- vitest.setup.ts
- (public)/page.tsx
- CaseCard.tsx
- app/layout.tsx
- database.ts
- next.config.ts
- languages/server/actions.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 105 edges
2. `Button()` - 88 edges
3. `createServerSupabase()` - 85 edges
4. `next` - 81 edges
5. `react` - 61 edges
6. `requireAdmin()` - 54 edges
7. `lucide-react` - 53 edges
8. `vitest` - 51 edges
9. `AdminPageHeader()` - 50 edges
10. `Project` - 36 edges

## Surprising Connections (you probably didn't know these)
- `LoginForm()` --indirect_call--> `login()`  [INFERRED]
  src/features/auth/components/LoginForm.tsx → src/features/auth/server/actions.ts
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getAllOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts
- `SignalPanelProps` --references--> `Project`  [EXTRACTED]
  src/features/profile/components/public/SignalPanel.tsx → src/features/projects/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (65 total, 12 thin omitted)

### Community 0 - "createServerSupabase"
Cohesion: 0.16
Nodes (34): requireAdmin(), createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+26 more)

### Community 1 - "auth/index.ts"
Cohesion: 0.29
Nodes (7): LoginInput, loginSchema, login(), LoginState, logout(), getCurrentAdmin(), AdminUser

### Community 2 - "Button"
Cohesion: 0.07
Nodes (77): class-variance-authority, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage() (+69 more)

### Community 3 - "about/page.tsx"
Cohesion: 0.17
Nodes (15): AboutPage(), metadata, revalidate, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs() (+7 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.16
Nodes (18): AdminDashboardLayout(), AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks() (+10 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.13
Nodes (25): AdminProfilePage(), ProfileFormProps, ExperienceTimelineProps, Hero(), HeroProps, MetricRail(), MetricRailProps, SignalPanel() (+17 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): sanitize-html@^2.18.0, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+30 more)

### Community 9 - "ProjectForm.tsx"
Cohesion: 0.07
Nodes (57): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillEditPage(), AdminSkillNewPage() (+49 more)

### Community 10 - "getProfile"
Cohesion: 0.31
Nodes (6): dynamic, GET(), notFound(), mocks, request, getProfile()

### Community 11 - "LoginForm.tsx"
Cohesion: 0.39
Nodes (5): AdminLoginPage(), metadata, initialState, LoginForm(), Card()

### Community 12 - "createPublicClient"
Cohesion: 0.26
Nodes (8): OrganizationFormProps, OrganizationTableProps, OrganizationRow, OrganizationRow, row, toOrganization(), getPublishedOrganizations(), Organization

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (28): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+20 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.13
Nodes (25): MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm(), mockedSubmit, validate() (+17 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.13
Nodes (23): metadata, revalidate, SkillsPage(), CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex() (+15 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "ErrorSummary.tsx"
Cohesion: 0.50
Nodes (3): ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "createServerSupabase"
Cohesion: 0.20
Nodes (12): OrganizationFormValues, createOrganization(), deleteOrganization(), invalidInput(), ParsedOrganization, toColumns(), toggleOrganizationPublish(), updateOrganization() (+4 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.14
Nodes (5): publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "withOfflineFallback"
Cohesion: 0.22
Nodes (10): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate (+2 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.06
Nodes (36): vitest, alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage() (+28 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.21
Nodes (11): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+3 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.13
Nodes (22): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), DomainChip(), normalizeDomain() (+14 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.13
Nodes (17): CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), DropdownMenuCheckboxItem(), DropdownMenuContent() (+9 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "experiences/server/actions.ts"
Cohesion: 0.10
Nodes (23): zod, certificateFormSchema, CertificateFormValues, valid, educationFormSchema, EducationFormValues, valid, createEducation() (+15 more)

### Community 46 - "JsonLd"
Cohesion: 0.18
Nodes (10): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLdProps, ProjectCoverFallback(), ProjectCoverFallbackProps, SkipLink() (+2 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.13
Nodes (24): resolveProjectStatus(), ProjectFormProps, CapabilitiesProps, CaseCardProps, CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseGridProps (+16 more)

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.16
Nodes (19): ErrorPage(), ErrorPageProps, NotFound(), ContactPage(), metadata, revalidate, PublicLayout(), ProjectsPage() (+11 more)

### Community 51 - "storage.ts"
Cohesion: 0.16
Nodes (14): server-only@^0.0.1, server-only, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath(), extensionFor() (+6 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "@testing-library/react"
Cohesion: 0.22
Nodes (6): @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, @testing-library/react, @testing-library/user-event, { refreshMock }, { refreshMock }

### Community 56 - "react"
Cohesion: 0.10
Nodes (16): react, metadata, CaseTocProps, CaseTocSection, BulletPoints(), BulletPointsProps, EmptyStateProps, aspectClasses (+8 more)

### Community 57 - "projects/index.ts"
Cohesion: 0.14
Nodes (21): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+13 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.16
Nodes (16): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow (+8 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.17
Nodes (17): AdminDashboardPage(), countCertificates(), EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation() (+9 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.18
Nodes (19): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, ProofStrip(), pickProjectsBySlug() (+11 more)

### Community 63 - "CaseCard.tsx"
Cohesion: 0.20
Nodes (12): ProfilePortrait(), ProfilePortraitProps, CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork(), SignalTicker() (+4 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.12
Nodes (11): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, CompositeTypes, Constants, DatabaseWithoutInternals, DefaultSchema, Enums, Json (+3 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "languages/server/actions.ts"
Cohesion: 0.39
Nodes (7): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 362 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `auth/index.ts`, `about/page.tsx`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `LoginForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `createServerSupabase`, `og-image.tsx`, `taxonomy.ts`, `JsonLd`, `CaseStudy.tsx`, `react`, `components/index.ts`, `react`, `projects/index.ts`, `withOfflineFallback`, `(public)/page.tsx`, `CaseCard.tsx`, `app/layout.tsx`, `next.config.ts`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.070505131280821 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `og-image.tsx` to `Button`, `about/page.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `getProfile`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `ErrorSummary.tsx`, `withOfflineFallback`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `experiences/server/actions.ts`, `JsonLd`, `CaseStudy.tsx`, `components/index.ts`, `storage.ts`, `projects/server/queries.ts`, `skills/server/actions.ts`, `@testing-library/react`, `react`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `(public)/page.tsx`, `CaseCard.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1253968253968254 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `app/layout.tsx`, `cn`, `Button`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `LoginForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `CaseStudy.tsx`, `JsonLd`, `ErrorSummary.tsx`, `components/index.ts`, `react`, `og-image.tsx`, `taxonomy.ts`, `CaseCard.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._