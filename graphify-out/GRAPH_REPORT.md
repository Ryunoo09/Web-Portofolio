# Graph Report - portfolio  (2026-11-04)

## Corpus Check
- 346 files · ~83,670 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1412 nodes · 4611 edges · 65 communities (56 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4608c166`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- certificates/server/actions.ts
- components/admin.ts
- [slug]/page.tsx
- AdminSidebar.tsx
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- siteConfig.ts
- createServerSupabase
- createPublicClient
- Runtime Dependencies Manifest
- ContactForm.tsx
- (public)/skills/page.tsx
- Docker Compose Deployment
- createServerSupabase
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- storage.ts
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- about/page.tsx
- profile/server/mappers.ts
- NPM Scripts & Tooling
- og-image.tsx
- withOfflineFallback
- SocialLinks.tsx
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
- PageContainer
- projects/server/queries.ts
- (public)/skills/page.tsx
- skills/server/actions.ts
- vitest
- components/index.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- (public)/page.tsx
- app/layout.tsx
- database.ts
- ProjectForm.tsx
- ConfirmDeleteDialog.tsx
- eslint.config.mjs
- utils.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 111 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 93 edges
4. `next` - 84 edges
5. `react` - 65 edges
6. `requireAdmin()` - 62 edges
7. `vitest` - 60 edges
8. `lucide-react` - 56 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `CertificateFormProps` --references--> `Certificate`  [EXTRACTED]
  src/features/certificates/components/admin/CertificateForm.tsx → src/features/certificates/types.ts
- `CertificateTableProps` --references--> `Certificate`  [EXTRACTED]
  src/features/certificates/components/admin/CertificateTable.tsx → src/features/certificates/types.ts
- `getContactMessages()` --indirect_call--> `toContactMessage()`  [INFERRED]
  src/features/contact/server/queries.ts → src/features/contact/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (65 total, 9 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.16
Nodes (16): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage(), profileFormSchema (+8 more)

### Community 1 - "certificates/server/actions.ts"
Cohesion: 0.23
Nodes (13): CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+5 more)

### Community 2 - "components/admin.ts"
Cohesion: 0.07
Nodes (75): contentSecurityPolicy, nextConfig, securityHeaders, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage() (+67 more)

### Community 3 - "[slug]/page.tsx"
Cohesion: 0.16
Nodes (14): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+6 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.09
Nodes (29): AdminDashboardLayout(), dynamic, revalidate, AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive() (+21 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.12
Nodes (24): ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), CredentialImage, CredentialRow() (+16 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.06
Nodes (46): cn@^0.4.0, @tiptap/starter-kit@^3.31.4, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0 (+38 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.27
Nodes (15): cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema, invalidInput(), ParsedProject (+7 more)

### Community 10 - "siteConfig.ts"
Cohesion: 0.12
Nodes (23): ContactPanel(), ContactPanelProps, writeText, ContactPaths(), ContactPathsProps, CvDownloadLinks(), SocialLinks(), PublicShellProps (+15 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.31
Nodes (13): createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation, toColumns() (+5 more)

### Community 12 - "createPublicClient"
Cohesion: 0.22
Nodes (11): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+3 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.06
Nodes (32): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6, radix-ui@^1.7.0 (+24 more)

### Community 14 - "ContactForm.tsx"
Cohesion: 0.17
Nodes (21): formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm() (+13 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.15
Nodes (16): ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps (+8 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.18
Nodes (22): AdminDashboardPage(), countCertificates(), getContactMessages(), countEducation(), ExperienceFormValues, createExperience(), createExperienceImage(), deleteExperience() (+14 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "storage.ts"
Cohesion: 0.18
Nodes (14): uploadCertificateImage(), uploadExperienceImage(), uploadProfileImage(), uploadProfileResume(), assertAllowedFile(), buildObjectPath(), extensionFor(), EXTENSIONS (+6 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "about/page.tsx"
Cohesion: 0.28
Nodes (15): AboutPage(), metadata, revalidate, getPublishedLanguages(), getPublishedOrganizations(), toCertificate(), toProfile(), getCertificates() (+7 more)

### Community 24 - "profile/server/mappers.ts"
Cohesion: 0.19
Nodes (13): EducationImageFields, EducationWithImages, ExperienceImageFields, ExperienceWithImages, Row, toEducation(), toEducationImage(), toExperience() (+5 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.38
Nodes (6): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, countLanguages(), Language

### Community 28 - "SocialLinks.tsx"
Cohesion: 0.43
Nodes (5): LinkedinIcon(), WhatsappIcon(), ICONS, SocialLinksProps, ResolvedSocialLink

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.15
Nodes (18): CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), ProjectExplorerProps (+10 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.12
Nodes (22): ContactCta(), CvDownloadMenu(), CvDownloadMenuProps, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader() (+14 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "public.ts"
Cohesion: 0.12
Nodes (17): dynamic, GET(), mocks, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE (+9 more)

### Community 41 - "zod"
Cohesion: 0.11
Nodes (18): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, experienceFormSchema, valid (+10 more)

### Community 46 - "CaseCard.tsx"
Cohesion: 0.38
Nodes (7): CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), FeaturedWork(), FeaturedWorkProps

### Community 47 - "Project"
Cohesion: 0.15
Nodes (21): pickNextProject(), resolveProjectStatus(), CapabilitiesProps, CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext(), CaseNextProps (+13 more)

### Community 48 - "revalidateAbout"
Cohesion: 0.32
Nodes (13): requireAdmin(), createOrganization(), createOrganizationImage(), deleteOrganization(), deleteOrganizationImage(), imageInputSchema, invalidInput(), ParsedOrganization (+5 more)

### Community 49 - "SiteHeader.tsx"
Cohesion: 0.22
Nodes (10): CvDownloadLinksProps, isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch() (+2 more)

### Community 50 - "PageContainer"
Cohesion: 0.25
Nodes (7): ErrorPage(), ErrorPageProps, NotFound(), PublicLayout(), PageContainer(), PageContainerProps, PublicShell()

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "(public)/skills/page.tsx"
Cohesion: 0.14
Nodes (21): ContactPage(), metadata, revalidate, firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps (+13 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.07
Nodes (18): @testing-library/react, @testing-library/user-event, vitest, dynamic, GET(), notFound(), mocks, request (+10 more)

### Community 56 - "components/index.ts"
Cohesion: 0.11
Nodes (24): react, ProjectDetailPage(), BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), EmptyState(), EmptyStateProps (+16 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.22
Nodes (10): ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow, images, row, toExperience() (+2 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.16
Nodes (24): HomePage(), metadata, revalidate, AboutStrip(), Capabilities, ProofStrip(), SignalTicker(), TickerLink() (+16 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.09
Nodes (21): CertificateRow, row, ContactMessageRow, ContactMessageRow, row, toContactMessage(), LanguageRow, LanguageRow (+13 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.09
Nodes (54): @hookform/resolvers, radix-ui, react-hook-form, sonner, metadata, initialState, CertificateForm(), CertificateFormProps (+46 more)

### Community 68 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.27
Nodes (12): ConfirmDeleteDialogProps, ImageLightbox(), ImageLightboxProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+4 more)

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 72 - "utils.ts"
Cohesion: 0.21
Nodes (7): CaseTocProps, CaseTocSection, SignalTickerProps, TickerItem, BulletPoints(), BulletPointsProps, toListItems()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 378 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `components/admin.ts` to `profile/server/actions.ts`, `[slug]/page.tsx`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `siteConfig.ts`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `createServerSupabase`, `about/page.tsx`, `og-image.tsx`, `taxonomy.ts`, `AdminSidebar.tsx`, `public.ts`, `CaseCard.tsx`, `Project`, `SiteHeader.tsx`, `PageContainer`, `(public)/skills/page.tsx`, `components/index.ts`, `(public)/page.tsx`, `app/layout.tsx`, `ProjectForm.tsx`, `ConfirmDeleteDialog.tsx`, `utils.ts`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0701052912168466 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `profile/server/actions.ts`, `[slug]/page.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `siteConfig.ts`, `createPublicClient`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `storage.ts`, `taxonomy.ts`, `public.ts`, `zod`, `CaseCard.tsx`, `Project`, `projects/server/queries.ts`, `(public)/skills/page.tsx`, `skills/server/actions.ts`, `components/index.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `(public)/page.tsx`, `database.ts`, `ProjectForm.tsx`, `utils.ts`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `AdminSidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0945945945945946 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `ProjectForm.tsx` to `AdminSidebar.tsx`, `components/admin.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `ConfirmDeleteDialog.tsx`, `siteConfig.ts`, `ContactForm.tsx`, `Project`, `SiteHeader.tsx`, `PageContainer`, `(public)/skills/page.tsx`, `vitest`, `about/page.tsx`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12121212121212122 - nodes in this community are weakly interconnected._