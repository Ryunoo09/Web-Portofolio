# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 315 files · ~71,334 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1293 nodes · 4082 edges · 67 communities (55 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7f2698b5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- createServerSupabase
- auth/index.ts
- Button
- projects/index.ts
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- ProjectForm.tsx
- requireAdmin
- CaseToc.tsx
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
- projects/server/actions.ts
- JsonLd
- CaseStudy.tsx
- [slug]/opengraph-image.tsx
- react
- react
- storage.ts
- projects/server/queries.ts
- skills/server/actions.ts
- vitest
- react
- siteConfig.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- vitest.setup.ts
- (public)/page.tsx
- Project
- app/layout.tsx
- database.ts
- next.config.ts
- languages/server/actions.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Button()` - 86 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 80 edges
5. `react` - 60 edges
6. `lucide-react` - 52 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 49 edges
10. `Project` - 36 edges

## Surprising Connections (you probably didn't know these)
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
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

## Communities (67 total, 12 thin omitted)

### Community 0 - "createServerSupabase"
Cohesion: 0.19
Nodes (19): CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+11 more)

### Community 1 - "auth/index.ts"
Cohesion: 0.31
Nodes (6): LoginInput, loginSchema, LoginState, logout(), getCurrentAdmin(), AdminUser

### Community 2 - "Button"
Cohesion: 0.08
Nodes (69): lucide-react, next, AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage(), AdminExperienceNewPage() (+61 more)

### Community 3 - "projects/index.ts"
Cohesion: 0.47
Nodes (6): HOME_CASE_SLUGS, HOME_TICKER_ITEMS, pickProjectsBySlug(), PROOF_PROJECT_SLUG, getProjectShortLabel(), PROJECT_SHORT_LABELS

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (16): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), Sheet() (+8 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.07
Nodes (44): AdminProfilePage(), AboutPage(), metadata, revalidate, dynamic, GET(), notFound(), mocks (+36 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+30 more)

### Community 9 - "ProjectForm.tsx"
Cohesion: 0.09
Nodes (47): @hookform/resolvers, react-hook-form, sonner, AdminCertificateNewPage(), AdminProjectEditPage(), metadata, AdminLoginPage(), metadata (+39 more)

### Community 10 - "requireAdmin"
Cohesion: 0.40
Nodes (9): requireAdmin(), ExperienceFormValues, createExperience(), deleteExperience(), invalidInput(), ParsedExperience, toColumns(), toggleExperiencePublish() (+1 more)

### Community 11 - "CaseToc.tsx"
Cohesion: 0.25
Nodes (5): CaseTocProps, CaseTocSection, MockIntersectionObserver, ObserverCallback, sections

### Community 12 - "createPublicClient"
Cohesion: 0.26
Nodes (8): OrganizationFormProps, OrganizationTableProps, OrganizationRow, OrganizationRow, row, toOrganization(), getPublishedOrganizations(), Organization

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.06
Nodes (32): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+24 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.10
Nodes (30): AdminDashboardLayout(), AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors (+22 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.11
Nodes (27): AdminProjectNewPage(), AdminSkillEditPage(), AdminSkillNewPage(), metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS (+19 more)

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
Cohesion: 0.28
Nodes (11): organizationFormSchema, OrganizationFormValues, valid, createOrganization(), deleteOrganization(), invalidInput(), ParsedOrganization, toColumns() (+3 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.14
Nodes (5): publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "withOfflineFallback"
Cohesion: 0.23
Nodes (10): AdminCertificateEditPage(), CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getAllCertificates() (+2 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (10): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+2 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.15
Nodes (19): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer() (+11 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.12
Nodes (18): EmptyState(), EmptyStateProps, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+10 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "experiences/server/actions.ts"
Cohesion: 0.12
Nodes (21): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, createEducation(), deleteEducation() (+13 more)

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.17
Nodes (17): projectFormSchema, ProjectFormValues, valid, cleanList(), createProject(), deleteProject(), deleteProjectImage(), imageInputSchema (+9 more)

### Community 46 - "JsonLd"
Cohesion: 0.12
Nodes (16): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLdProps, aspectClasses, MediaFrame(), MediaFrameProps (+8 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.24
Nodes (13): pickNextProject(), resolveProjectStatus(), CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy() (+5 more)

### Community 48 - "[slug]/opengraph-image.tsx"
Cohesion: 0.33
Nodes (6): alt, contentType, ImageProps, OpengraphImage(), size, truncate()

### Community 49 - "react"
Cohesion: 0.27
Nodes (9): next-themes, isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch() (+1 more)

### Community 50 - "react"
Cohesion: 0.18
Nodes (13): PublicLayout(), ContactPanel(), ContactPanelProps, writeText, ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps, GithubIcon() (+5 more)

### Community 51 - "storage.ts"
Cohesion: 0.15
Nodes (16): server-only@^0.0.1, server-only, DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+7 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.27
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.19
Nodes (8): @testing-library/react, @testing-library/user-event, vitest, NotFound(), projects, replace, { refreshMock }, { refreshMock }

### Community 56 - "react"
Cohesion: 0.17
Nodes (11): radix-ui, react, BulletPoints(), BulletPointsProps, ImageUploadFieldProps, SectionIntroProps, StatusToggleProps, badgeVariants (+3 more)

### Community 57 - "siteConfig.ts"
Cohesion: 0.15
Nodes (14): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), ProjectJsonLd, projectMetadata() (+6 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (8): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getPublishedExperiences(), Experience

### Community 59 - "withOfflineFallback"
Cohesion: 0.26
Nodes (8): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.14
Nodes (28): ContactPage(), metadata, revalidate, HomePage(), metadata, revalidate, ProjectsPage(), ContactPaths() (+20 more)

### Community 63 - "Project"
Cohesion: 0.14
Nodes (19): CapabilitiesProps, CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), CaseGrid(), CaseGridEmpty() (+11 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.28
Nodes (6): jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.14
Nodes (12): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, CompositeTypes, Constants, Database, DatabaseWithoutInternals, DefaultSchema, Enums (+4 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "languages/server/actions.ts"
Cohesion: 0.31
Nodes (8): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage(), ActionResult

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 357 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `createServerSupabase`, `auth/index.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `(dashboard)/page.tsx`, `withOfflineFallback`, `og-image.tsx`, `taxonomy.ts`, `JsonLd`, `CaseStudy.tsx`, `[slug]/opengraph-image.tsx`, `react`, `react`, `skills/server/actions.ts`, `vitest`, `react`, `siteConfig.ts`, `(public)/page.tsx`, `Project`, `app/layout.tsx`, `next.config.ts`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.08137954468229698 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `CaseToc.tsx`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `createServerSupabase`, `withOfflineFallback`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `experiences/server/actions.ts`, `projects/server/actions.ts`, `JsonLd`, `CaseStudy.tsx`, `react`, `storage.ts`, `projects/server/queries.ts`, `skills/server/actions.ts`, `react`, `siteConfig.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `(public)/page.tsx`, `Project`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07163461538461538 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `app/layout.tsx`, `cn`, `Button`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `CaseToc.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `CaseStudy.tsx`, `JsonLd`, `react`, `react`, `taxonomy.ts`, `Project`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._