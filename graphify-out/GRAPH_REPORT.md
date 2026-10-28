# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 311 files · ~70,429 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1281 nodes · 4057 edges · 71 communities (58 shown, 13 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f564407e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- (public)/skills/page.tsx
- Button
- (public)/page.tsx
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- ProjectForm.tsx
- EducationForm.tsx
- admin/layout.tsx
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
- experiences/server/actions.ts
- projects/server/actions.ts
- JsonLd
- Project
- [slug]/page.tsx
- react
- react
- storage.ts
- projects/server/queries.ts
- organizations/server/actions.ts
- skills/server/actions.ts
- vitest
- utils.ts
- siteConfig.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- vitest.setup.ts
- LoginForm.tsx
- CaseCard.tsx
- app/layout.tsx
- ConfirmDeleteDialog.tsx
- server.ts
- next.config.ts
- server-only
- ErrorSummary.tsx
- StackList

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
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `CaseCardProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/CaseCard.tsx → src/features/projects/types.ts
- `CaseGridProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/CaseGrid.tsx → src/features/projects/types.ts
- `FeaturedWorkProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/FeaturedWork.tsx → src/features/projects/types.ts
- `getAllSkills()` --indirect_call--> `toSkill()`  [INFERRED]
  src/features/skills/server/queries.ts → src/features/skills/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (71 total, 13 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.36
Nodes (7): invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage(), uploadProfileResume(), revalidateProfile(), uploadFile()

### Community 1 - "(public)/skills/page.tsx"
Cohesion: 0.28
Nodes (11): metadata, revalidate, SkillsPage(), getProfile(), SkillRow, toSkill(), findSkills(), getLearningSkills() (+3 more)

### Community 2 - "Button"
Cohesion: 0.09
Nodes (61): class-variance-authority, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage() (+53 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.16
Nodes (24): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, ProofStrip(), HOME_CASE_SLUGS (+16 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (16): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), Sheet() (+8 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.14
Nodes (23): AdminProfilePage(), ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), ExperienceTimelineProps (+15 more)

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
Cohesion: 0.11
Nodes (37): @hookform/resolvers, react-hook-form, sonner, AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillEditPage(), AdminSkillNewPage(), ExperienceForm() (+29 more)

### Community 10 - "EducationForm.tsx"
Cohesion: 0.29
Nodes (9): educationFormSchema, EducationFormValues, valid, createEducation(), invalidInput(), ParsedEducation, toColumns(), updateEducation() (+1 more)

### Community 12 - "createPublicClient"
Cohesion: 0.26
Nodes (9): OrganizationFormProps, OrganizationTableProps, OrganizationRow, OrganizationRow, row, toOrganization(), getAllOrganizations(), getPublishedOrganizations() (+1 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, react@19.2.8 (+21 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.11
Nodes (30): AdminDashboardLayout(), AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors (+22 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.18
Nodes (14): ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps (+6 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "(dashboard)/page.tsx"
Cohesion: 0.38
Nodes (9): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills() (+1 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "createServerSupabase"
Cohesion: 0.23
Nodes (24): requireAdmin(), createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+16 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.14
Nodes (5): publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.10
Nodes (20): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate (+12 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.18
Nodes (15): AboutPage(), metadata, revalidate, LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow (+7 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.14
Nodes (22): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip() (+14 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.10
Nodes (21): radix-ui@^1.7.0, radix-ui, StatusToggleProps, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader() (+13 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "experiences/server/actions.ts"
Cohesion: 0.14
Nodes (18): zod, certificateFormSchema, CertificateFormValues, valid, experienceFormSchema, ExperienceFormValues, valid, createExperience() (+10 more)

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.16
Nodes (19): projectFormSchema, ProjectFormValues, valid, cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage() (+11 more)

### Community 46 - "JsonLd"
Cohesion: 0.26
Nodes (8): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLd(), JsonLdProps, aspectClasses, MediaFrameProps

### Community 47 - "Project"
Cohesion: 0.12
Nodes (26): HeroProps, SignalPanelProps, resolveProjectStatus(), CapabilitiesProps, CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext() (+18 more)

### Community 48 - "[slug]/page.tsx"
Cohesion: 0.16
Nodes (16): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+8 more)

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "react"
Cohesion: 0.17
Nodes (19): react, NotFound(), ContactPage(), metadata, revalidate, PublicLayout(), ProjectsPage(), ContactPanel() (+11 more)

### Community 51 - "storage.ts"
Cohesion: 0.18
Nodes (14): DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath(), extensionFor() (+6 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "organizations/server/actions.ts"
Cohesion: 0.23
Nodes (10): organizationFormSchema, OrganizationFormValues, valid, createOrganization(), invalidInput(), ParsedOrganization, toColumns(), updateOrganization() (+2 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.14
Nodes (11): @testing-library/react, @testing-library/user-event, vitest, writeText, MockIntersectionObserver, ObserverCallback, sections, projects (+3 more)

### Community 56 - "utils.ts"
Cohesion: 0.21
Nodes (8): BulletPoints(), BulletPointsProps, EmptyStateProps, Status, StatusBadgeProps, statusMap, slugify(), toListItems()

### Community 57 - "siteConfig.ts"
Cohesion: 0.17
Nodes (11): Hero(), MetricRail(), MetricRailProps, SignalPanel(), projectMetadata(), project, siteConfig, SiteMetric (+3 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.23
Nodes (10): AdminExperienceEditPage(), ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getAllExperiences() (+2 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.26
Nodes (9): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getAllEducation(), getPublishedEducation() (+1 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "LoginForm.tsx"
Cohesion: 0.24
Nodes (8): AdminLoginPage(), metadata, initialState, LoginForm(), LoginInput, loginSchema, login(), LoginState

### Community 63 - "CaseCard.tsx"
Cohesion: 0.23
Nodes (11): CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), FeaturedWork(), FeaturedWorkProps, SignalTicker() (+3 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.27
Nodes (10): ConfirmDeleteDialogProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal() (+2 more)

### Community 66 - "server.ts"
Cohesion: 0.48
Nodes (3): logout(), getCurrentAdmin(), AdminUser

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 69 - "ErrorSummary.tsx"
Cohesion: 0.50
Nodes (3): ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps

### Community 70 - "StackList"
Cohesion: 0.47
Nodes (4): ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 352 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `profile/server/actions.ts`, `(public)/skills/page.tsx`, `(public)/page.tsx`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `admin/layout.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `(dashboard)/page.tsx`, `og-image.tsx`, `withOfflineFallback`, `taxonomy.ts`, `cn`, `JsonLd`, `Project`, `[slug]/page.tsx`, `react`, `react`, `siteConfig.ts`, `experiences/server/queries.ts`, `LoginForm.tsx`, `CaseCard.tsx`, `app/layout.tsx`, `ConfirmDeleteDialog.tsx`, `server.ts`, `next.config.ts`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.0899009900990099 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `(public)/page.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `EducationForm.tsx`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `database.ts`, `@vitejs/plugin-react`, `taxonomy.ts`, `experiences/server/actions.ts`, `projects/server/actions.ts`, `JsonLd`, `Project`, `storage.ts`, `projects/server/queries.ts`, `organizations/server/actions.ts`, `skills/server/actions.ts`, `utils.ts`, `siteConfig.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `CaseCard.tsx`, `ErrorSummary.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14204545454545456 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Button`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `admin/layout.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `taxonomy.ts`, `cn`, `JsonLd`, `Project`, `react`, `vitest`, `utils.ts`, `LoginForm.tsx`, `CaseCard.tsx`, `app/layout.tsx`, `ConfirmDeleteDialog.tsx`, `ErrorSummary.tsx`, `StackList`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._