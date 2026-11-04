# Graph Report - portfolio  (2026-11-04)

## Corpus Check
- 346 files · ~84,588 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1414 nodes · 4617 edges · 67 communities (58 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `97e24ae5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MediaFrame
- (dashboard)/page.tsx
- components/admin.ts
- [slug]/page.tsx
- AdminSidebar.tsx
- createServerSupabase
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- social-links.ts
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
- (public)/skills/page.tsx
- components/index.ts
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
- Project
- projects/index.ts
- Project
- revalidateAbout
- SiteHeader.tsx
- react
- server.ts
- projects/server/queries.ts
- PageContainer
- vitest
- certificates/server/actions.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- (public)/page.tsx
- app/layout.tsx
- database.ts
- ProjectForm.tsx
- next
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
7. `vitest` - 61 edges
8. `lucide-react` - 56 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `CertificateFormProps` --references--> `Certificate`  [EXTRACTED]
  src/features/certificates/components/admin/CertificateForm.tsx → src/features/certificates/types.ts
- `CertificateTableProps` --references--> `Certificate`  [EXTRACTED]
  src/features/certificates/components/admin/CertificateTable.tsx → src/features/certificates/types.ts
- `getContactMessages()` --indirect_call--> `toContactMessage()`  [INFERRED]
  src/features/contact/server/queries.ts → src/features/contact/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (67 total, 9 thin omitted)

### Community 0 - "MediaFrame"
Cohesion: 0.18
Nodes (14): experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), CredentialImage, CredentialRow(), CredentialRowProps (+6 more)

### Community 1 - "(dashboard)/page.tsx"
Cohesion: 0.38
Nodes (6): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, countLanguages(), Language

### Community 2 - "components/admin.ts"
Cohesion: 0.09
Nodes (63): class-variance-authority, lucide-react, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage(), AdminEducationPage() (+55 more)

### Community 3 - "[slug]/page.tsx"
Cohesion: 0.16
Nodes (15): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+7 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.08
Nodes (31): AdminDashboardLayout(), dynamic, revalidate, AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive() (+23 more)

### Community 5 - "createServerSupabase"
Cohesion: 0.29
Nodes (14): AdminDashboardPage(), countCertificates(), getContactMessages(), countEducation(), countExperiences(), createLanguage(), invalidInput(), toColumns() (+6 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.06
Nodes (44): @tiptap/starter-kit@^3.31.4, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+36 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.23
Nodes (17): GalleryItem(), ProjectGalleryManager(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema (+9 more)

### Community 10 - "social-links.ts"
Cohesion: 0.14
Nodes (21): ContactPanel(), ContactPanelProps, ContactPathsProps, CvDownloadLinks(), SkipLink(), SocialLinks(), PublicShellProps, SiteFooter() (+13 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.30
Nodes (14): requireAdmin(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+6 more)

### Community 12 - "createPublicClient"
Cohesion: 0.20
Nodes (11): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+3 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+21 more)

### Community 14 - "ContactForm.tsx"
Cohesion: 0.17
Nodes (21): formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm() (+13 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.14
Nodes (20): ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps (+12 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.21
Nodes (16): ExperienceGalleryManager(), ExperienceGalleryManagerProps, GalleryItem(), createExperience(), createExperienceImage(), deleteExperience(), deleteExperienceImage(), imageInputSchema (+8 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "storage.ts"
Cohesion: 0.14
Nodes (20): deleteCertificate(), uploadCertificateImage(), uploadProfileImage(), uploadProfileResume(), DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES (+12 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "about/page.tsx"
Cohesion: 0.30
Nodes (12): AboutPage(), metadata, revalidate, getPublishedExperiences(), getPublishedLanguages(), getPublishedOrganizations(), getCertificates(), getEducation() (+4 more)

### Community 24 - "profile/server/mappers.ts"
Cohesion: 0.17
Nodes (19): ProfileFormProps, EducationImageFields, EducationWithImages, ExperienceImageFields, ExperienceWithImages, Row, ProfileRow, toCertificate() (+11 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "(public)/skills/page.tsx"
Cohesion: 0.21
Nodes (12): ContactPage(), metadata, revalidate, metadata, revalidate, SkillsPage(), ContactPaths(), Capabilities (+4 more)

### Community 28 - "components/index.ts"
Cohesion: 0.15
Nodes (15): EmptyState(), EmptyStateProps, ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps, GithubIcon(), LinkedinIcon(), WhatsappIcon() (+7 more)

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.12
Nodes (24): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), CaseGridProps (+16 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.13
Nodes (21): CvDownloadMenu(), CvDownloadMenuProps, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+13 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "public.ts"
Cohesion: 0.11
Nodes (19): server-only@^0.0.1, server-only, dynamic, GET(), mocks, config, proxy(), withAdminHeaders() (+11 more)

### Community 41 - "zod"
Cohesion: 0.10
Nodes (22): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, experienceFormSchema, ExperienceFormValues (+14 more)

### Community 45 - "Project"
Cohesion: 0.16
Nodes (18): CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), CaseFactsProps, CaseNextProps, CaseStudyProps (+10 more)

### Community 46 - "projects/index.ts"
Cohesion: 0.26
Nodes (10): SignalTicker(), SignalTickerProps, TickerItem, TickerLink(), HOME_CASE_SLUGS, HOME_TICKER_ITEMS, pickProjectsBySlug(), PROOF_PROJECT_SLUG (+2 more)

### Community 47 - "Project"
Cohesion: 0.23
Nodes (12): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+4 more)

### Community 48 - "revalidateAbout"
Cohesion: 0.29
Nodes (14): createOrganization(), createOrganizationImage(), deleteOrganization(), deleteOrganizationImage(), imageInputSchema, invalidInput(), ParsedOrganization, toColumns() (+6 more)

### Community 49 - "SiteHeader.tsx"
Cohesion: 0.22
Nodes (10): CvDownloadLinksProps, isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch() (+2 more)

### Community 50 - "react"
Cohesion: 0.13
Nodes (15): react, BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLdProps, aspectClasses, MediaFrameProps (+7 more)

### Community 51 - "server.ts"
Cohesion: 0.16
Nodes (16): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, deleteLanguage(), ParsedLanguage, toggleLanguagePublish(), createSkill() (+8 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "PageContainer"
Cohesion: 0.25
Nodes (7): ErrorPage(), ErrorPageProps, NotFound(), PublicLayout(), PageContainer(), PageContainerProps, PublicShell()

### Community 55 - "vitest"
Cohesion: 0.07
Nodes (18): @testing-library/react, @testing-library/user-event, vitest, dynamic, GET(), notFound(), mocks, request (+10 more)

### Community 57 - "certificates/server/actions.ts"
Cohesion: 0.23
Nodes (13): CertificateFormValues, createCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate(), CertificateRow (+5 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.16
Nodes (12): ExperienceFormProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow, images (+4 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.13
Nodes (19): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), ProofStrip(), siteConfig, BuildMetadataInput (+11 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.09
Nodes (22): @supabase/ssr@^0.12.7, @supabase/ssr, CertificateRow, row, ContactMessageRow, ContactMessageRow, row, toContactMessage() (+14 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.08
Nodes (44): @hookform/resolvers, radix-ui, react-hook-form, sonner, metadata, CertificateForm(), CertificateFormProps, EducationForm() (+36 more)

### Community 67 - "next"
Cohesion: 0.16
Nodes (12): contentSecurityPolicy, nextConfig, securityHeaders, next, FACTS, Hero(), HeroProps, MetricRail() (+4 more)

### Community 68 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.27
Nodes (12): ConfirmDeleteDialogProps, ImageLightbox(), ImageLightboxProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader() (+4 more)

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 72 - "utils.ts"
Cohesion: 0.36
Nodes (6): BulletList(), BulletPoints(), BulletPointsProps, ListItemNode, toListItems(), toListTree()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 378 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `MediaFrame`, `components/admin.ts`, `[slug]/page.tsx`, `AdminSidebar.tsx`, `createServerSupabase`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `social-links.ts`, `createServerSupabase`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `createServerSupabase`, `about/page.tsx`, `og-image.tsx`, `(public)/skills/page.tsx`, `taxonomy.ts`, `public.ts`, `Project`, `projects/index.ts`, `Project`, `revalidateAbout`, `SiteHeader.tsx`, `react`, `server.ts`, `PageContainer`, `(public)/page.tsx`, `app/layout.tsx`, `ProjectForm.tsx`, `ConfirmDeleteDialog.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0929798356982823 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `MediaFrame`, `Dev Dependencies Manifest`, `social-links.ts`, `createPublicClient`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `storage.ts`, `profile/server/mappers.ts`, `components/index.ts`, `taxonomy.ts`, `public.ts`, `zod`, `Project`, `Project`, `react`, `server.ts`, `projects/server/queries.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `(public)/page.tsx`, `database.ts`, `ProjectForm.tsx`, `utils.ts`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `AdminSidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08478513356562137 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `components/admin.ts`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `social-links.ts`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `createServerSupabase`, `components/index.ts`, `taxonomy.ts`, `AdminSidebar.tsx`, `projects/index.ts`, `Project`, `SiteHeader.tsx`, `PageContainer`, `vitest`, `app/layout.tsx`, `ProjectForm.tsx`, `ConfirmDeleteDialog.tsx`, `utils.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._