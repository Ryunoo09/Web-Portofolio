# Graph Report - portfolio  (2026-11-01)

## Corpus Check
- 325 files · ~79,365 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1358 nodes · 4412 edges · 73 communities (62 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ee63fb2b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- languages/server/actions.ts
- certificates/server/actions.ts
- Button
- vitest
- (dashboard)/page.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- createPublicClient
- revalidateAbout
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- requireAdmin
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
- (public)/skills/page.tsx
- CaseCard.tsx
- CaseStudy.tsx
- createServerSupabase
- react
- components/index.ts
- storage.ts
- projects/server/queries.ts
- server-only
- skills/server/actions.ts
- CaseToc.tsx
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
- utils.ts
- next.config.ts
- home.test.tsx
- eslint.config.mjs
- [slug]/opengraph-image.tsx
- PublicShell
- BulletPoints.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 107 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 90 edges
4. `next` - 83 edges
5. `react` - 63 edges
6. `requireAdmin()` - 62 edges
7. `lucide-react` - 54 edges
8. `vitest` - 52 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `getAllOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts
- `CaseCardProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/CaseCard.tsx → src/features/projects/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (73 total, 11 thin omitted)

### Community 0 - "languages/server/actions.ts"
Cohesion: 0.19
Nodes (11): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage(), GalleryManager() (+3 more)

### Community 1 - "certificates/server/actions.ts"
Cohesion: 0.29
Nodes (8): CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate()

### Community 2 - "Button"
Cohesion: 0.07
Nodes (74): class-variance-authority, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationNewPage(), AdminEducationPage() (+66 more)

### Community 3 - "vitest"
Cohesion: 0.17
Nodes (10): vitest, generateMetadata(), generateStaticParams(), ProjectDetailPageProps, revalidate, writeText, ProjectJsonLd, projectMetadata() (+2 more)

### Community 4 - "(dashboard)/page.tsx"
Cohesion: 0.42
Nodes (8): AdminDashboardPage(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills(), Card()

### Community 5 - "profile/index.ts"
Cohesion: 0.07
Nodes (51): AboutPage(), metadata, revalidate, dynamic, GET(), notFound(), mocks, request (+43 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+30 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.25
Nodes (16): GalleryItem(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema, invalidInput() (+8 more)

### Community 10 - "createPublicClient"
Cohesion: 0.42
Nodes (6): SkillRow, toSkill(), findSkills(), getLearningSkills(), getSkills(), createPublicClient()

### Community 11 - "revalidateAbout"
Cohesion: 0.27
Nodes (15): AdminEducationEditPage(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+7 more)

### Community 12 - "createPublicClient"
Cohesion: 0.21
Nodes (12): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+4 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+21 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.11
Nodes (29): AdminDashboardLayout(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey (+21 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.18
Nodes (14): CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps, groupSkillsByCategory() (+6 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "requireAdmin"
Cohesion: 0.19
Nodes (18): requireAdmin(), ExperienceForm(), ExperienceFormProps, ExperienceTableProps, ExperienceFormValues, createExperience(), createExperienceImage(), deleteExperience() (+10 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "profile/server/actions.ts"
Cohesion: 0.29
Nodes (7): profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), revalidateProfile()

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "withOfflineFallback"
Cohesion: 0.25
Nodes (10): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), countCertificates(), getAllCertificates() (+2 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (11): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+3 more)

### Community 28 - "server.ts"
Cohesion: 0.29
Nodes (8): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge()

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.15
Nodes (18): CaseGrid(), CaseGridEmpty(), DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), projects, replace (+10 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.06
Nodes (48): radix-ui, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks() (+40 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.11
Nodes (18): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, experienceFormSchema, valid (+10 more)

### Community 45 - "(public)/skills/page.tsx"
Cohesion: 0.17
Nodes (19): ContactPage(), metadata, revalidate, firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps (+11 more)

### Community 46 - "CaseCard.tsx"
Cohesion: 0.28
Nodes (10): CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), ProjectCoverFallback(), ProjectCoverFallbackProps, StackList() (+2 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.19
Nodes (15): ProjectDetailPage(), pickNextProject(), resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseNextProps, CaseSection() (+7 more)

### Community 48 - "createServerSupabase"
Cohesion: 0.29
Nodes (15): AdminOrganizationsEditPage(), createOrganization(), createOrganizationImage(), deleteOrganization(), deleteOrganizationImage(), imageInputSchema, invalidInput(), ParsedOrganization (+7 more)

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.26
Nodes (9): ContactPanel(), ContactPanelProps, ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps, GithubIcon(), LinkedinIcon(), PageContainerProps (+1 more)

### Community 51 - "storage.ts"
Cohesion: 0.15
Nodes (17): uploadCertificateImage(), uploadProfileImage(), uploadProfileResume(), uploadProjectImage(), DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile() (+9 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.15
Nodes (17): sitemap(), ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow (+9 more)

### Community 53 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "CaseToc.tsx"
Cohesion: 0.25
Nodes (5): CaseTocProps, CaseTocSection, MockIntersectionObserver, ObserverCallback, sections

### Community 56 - "contact/page.tsx"
Cohesion: 0.12
Nodes (14): react, metadata, BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLdProps, aspectClasses (+6 more)

### Community 57 - "projects/index.ts"
Cohesion: 0.54
Nodes (5): HOME_CASE_SLUGS, HOME_TICKER_ITEMS, PROOF_PROJECT_SLUG, getProjectShortLabel(), PROJECT_SHORT_LABELS

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.22
Nodes (10): ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow, images, row, toExperience() (+2 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.19
Nodes (13): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+5 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 61 - "vitest.setup.ts"
Cohesion: 0.20
Nodes (4): @testing-library/jest-dom@^7.0.1, @testing-library/react@^16.3.3, @testing-library/jest-dom, @testing-library/react

### Community 62 - "(public)/page.tsx"
Cohesion: 0.18
Nodes (19): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, FeaturedWork(), pickProjectsBySlug() (+11 more)

### Community 63 - "Project"
Cohesion: 0.21
Nodes (10): HeroProps, SignalPanelProps, ProjectFormProps, CapabilitiesProps, CaseFactsProps, CaseGridProps, CaseStudyProps, FeaturedWorkProps (+2 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.17
Nodes (9): CompositeTypes, Constants, DatabaseWithoutInternals, DefaultSchema, Enums, Json, Tables, TablesInsert (+1 more)

### Community 66 - "utils.ts"
Cohesion: 0.09
Nodes (47): @hookform/resolvers, react-hook-form, sonner, AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillNewPage(), CertificateForm(), EducationForm() (+39 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "home.test.tsx"
Cohesion: 0.27
Nodes (7): PROOF_STATS, ProofStrip(), ProofStripProps, SignalTicker(), SignalTickerProps, TickerItem, TickerLink()

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 70 - "[slug]/opengraph-image.tsx"
Cohesion: 0.32
Nodes (7): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), getProjectBySlug()

### Community 71 - "PublicShell"
Cohesion: 0.53
Nodes (3): NotFound(), PublicLayout(), PublicShell()

### Community 72 - "BulletPoints.tsx"
Cohesion: 0.50
Nodes (3): BulletPoints(), BulletPointsProps, toListItems()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 375 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `certificates/server/actions.ts`, `vitest`, `(dashboard)/page.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `revalidateAbout`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `requireAdmin`, `profile/server/actions.ts`, `og-image.tsx`, `server.ts`, `taxonomy.ts`, `cn`, `(public)/skills/page.tsx`, `CaseCard.tsx`, `CaseStudy.tsx`, `createServerSupabase`, `react`, `components/index.ts`, `projects/server/queries.ts`, `contact/page.tsx`, `(public)/page.tsx`, `Project`, `app/layout.tsx`, `utils.ts`, `next.config.ts`, `home.test.tsx`, `[slug]/opengraph-image.tsx`, `PublicShell`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.07357057177129149 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `languages/server/actions.ts`, `Button`, `profile/index.ts`, `Dev Dependencies Manifest`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `requireAdmin`, `profile/server/actions.ts`, `withOfflineFallback`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `cn`, `zod`, `CaseStudy.tsx`, `components/index.ts`, `storage.ts`, `projects/server/queries.ts`, `skills/server/actions.ts`, `CaseToc.tsx`, `contact/page.tsx`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `(public)/page.tsx`, `utils.ts`, `home.test.tsx`, `PublicShell`, `BulletPoints.tsx`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06639839034205232 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `languages/server/actions.ts`, `utils.ts`, `Button`, `home.test.tsx`, `profile/index.ts`, `(dashboard)/page.tsx`, `BulletPoints.tsx`, `(public)/skills/page.tsx`, `CaseCard.tsx`, `contact/index.ts`, `CaseStudy.tsx`, `react`, `components/index.ts`, `CaseToc.tsx`, `contact/page.tsx`, `taxonomy.ts`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._