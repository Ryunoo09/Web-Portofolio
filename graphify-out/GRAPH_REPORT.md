# Graph Report - portfolio  (2026-11-04)

## Corpus Check
- 345 files · ~84,069 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1410 nodes · 4606 edges · 70 communities (60 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b025ddb3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- (dashboard)/page.tsx
- components/admin.ts
- [slug]/page.tsx
- AdminSidebar.tsx
- ErrorSummary.tsx
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
- PageContainer
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
- CaseCard.tsx
- Project
- revalidateAbout
- lucide-react
- react
- languages/server/actions.ts
- projects/server/queries.ts
- siteConfig.ts
- skills/server/actions.ts
- vitest
- certificates/server/actions.ts
- experiences/server/queries.ts
- withOfflineFallback
- a11y.spec.ts
- server.ts
- (public)/page.tsx
- app/layout.tsx
- database.ts
- ProjectForm.tsx
- next.config.ts
- ConfirmDeleteDialog.tsx
- eslint.config.mjs
- @vitejs/plugin-react
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
- `sitemap()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/sitemap.ts → src/features/projects/server/queries.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getPublishedLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (70 total, 10 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.21
Nodes (11): profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage(), uploadProfileResume() (+3 more)

### Community 1 - "(dashboard)/page.tsx"
Cohesion: 0.20
Nodes (14): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps (+6 more)

### Community 2 - "components/admin.ts"
Cohesion: 0.08
Nodes (71): next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage(), AdminExperienceNewPage() (+63 more)

### Community 3 - "[slug]/page.tsx"
Cohesion: 0.13
Nodes (18): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+10 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (16): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), Sheet() (+8 more)

### Community 5 - "ErrorSummary.tsx"
Cohesion: 0.50
Nodes (3): ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (40): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+32 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.25
Nodes (18): GalleryItem(), ProjectGalleryManager(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema (+10 more)

### Community 10 - "social-links.ts"
Cohesion: 0.24
Nodes (11): addLink(), FALLBACK_LINKS, labelFor(), LABELS, normalizePlatform(), ORDER, resolveSocialLinks(), SocialLinkInput (+3 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.28
Nodes (15): AdminEducationEditPage(), requireAdmin(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput() (+7 more)

### Community 12 - "createPublicClient"
Cohesion: 0.20
Nodes (11): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+3 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (30): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+22 more)

### Community 14 - "ContactForm.tsx"
Cohesion: 0.12
Nodes (27): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey (+19 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.13
Nodes (24): metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps (+16 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.20
Nodes (14): GalleryItem(), ExperienceFormValues, createExperience(), createExperienceImage(), deleteExperience(), deleteExperienceImage(), imageInputSchema, invalidInput() (+6 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "storage.ts"
Cohesion: 0.15
Nodes (17): server-only@^0.0.1, server-only, uploadCertificateImage(), DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile() (+9 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "about/page.tsx"
Cohesion: 0.19
Nodes (18): AboutPage(), metadata, revalidate, CertificateFormProps, CertificateTableProps, CertificateRow, toCertificate(), getAllCertificates() (+10 more)

### Community 24 - "profile/server/mappers.ts"
Cohesion: 0.10
Nodes (34): ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), CredentialImage, CredentialRow() (+26 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "PageContainer"
Cohesion: 0.19
Nodes (15): ErrorPage(), ContactPage(), metadata, revalidate, ContactPanel(), ContactPanelProps, ContactPaths(), ContactPathsProps (+7 more)

### Community 28 - "components/index.ts"
Cohesion: 0.09
Nodes (28): next-themes, NotFound(), PublicLayout(), BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), EmptyState() (+20 more)

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.13
Nodes (24): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps, CaseGrid(), CaseGridEmpty(), CaseGridProps (+16 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.13
Nodes (18): class-variance-authority, radix-ui, badgeVariants, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader() (+10 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "public.ts"
Cohesion: 0.17
Nodes (11): @supabase/supabase-js, dynamic, GET(), mocks, createTimedFetch(), HEALTH_TIMEOUT_MS, PROXY_AUTH_TIMEOUT_MS, SUPABASE_TIMEOUT_MS (+3 more)

### Community 41 - "zod"
Cohesion: 0.13
Nodes (14): zod, educationFormSchema, EducationFormValues, valid, experienceFormSchema, valid, organizationFormSchema, OrganizationFormValues (+6 more)

### Community 45 - "Project"
Cohesion: 0.18
Nodes (13): Hero(), HeroProps, MetricRail(), SignalPanel(), SignalPanelProps, CaseCardProps, CaseFactsProps, CaseStudyProps (+5 more)

### Community 46 - "CaseCard.tsx"
Cohesion: 0.30
Nodes (9): Capabilities, CapabilitiesProps, CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork(), SectionIntro() (+1 more)

### Community 47 - "Project"
Cohesion: 0.25
Nodes (11): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseNextProps, CaseSection(), CaseStudy(), toParagraphs() (+3 more)

### Community 48 - "revalidateAbout"
Cohesion: 0.26
Nodes (16): AdminOrganizationsEditPage(), createOrganization(), createOrganizationImage(), deleteOrganization(), deleteOrganizationImage(), imageInputSchema, invalidInput(), ParsedOrganization (+8 more)

### Community 49 - "lucide-react"
Cohesion: 0.13
Nodes (20): lucide-react, ErrorPageProps, FACTS, CvDownloadLinksProps, CvDownloadMenu(), CvDownloadMenuProps, isActivePath(), MobileMenu() (+12 more)

### Community 50 - "react"
Cohesion: 0.13
Nodes (17): react, metadata, initialState, ConfirmDeleteDialogProps, FieldError(), FieldErrorProps, FormFieldControlProps, FormFieldProps (+9 more)

### Community 51 - "languages/server/actions.ts"
Cohesion: 0.20
Nodes (11): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage (+3 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "siteConfig.ts"
Cohesion: 0.26
Nodes (5): sitemap(), MetricRailProps, siteConfig, SiteMetric, BuildMetadataInput

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.27
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.06
Nodes (20): @testing-library/react, @testing-library/user-event, vitest, dynamic, GET(), notFound(), mocks, request (+12 more)

### Community 57 - "certificates/server/actions.ts"
Cohesion: 0.24
Nodes (11): certificateFormSchema, CertificateFormValues, valid, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns() (+3 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.16
Nodes (15): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow (+7 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 61 - "server.ts"
Cohesion: 0.27
Nodes (9): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge() (+1 more)

### Community 62 - "(public)/page.tsx"
Cohesion: 0.15
Nodes (24): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), ProofStrip(), SignalTicker(), TickerLink() (+16 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.29
Nodes (6): jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.12
Nodes (16): CertificateRow, row, LanguageRow, LanguageRow, row, toLanguage(), CompositeTypes, Constants (+8 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.24
Nodes (23): @hookform/resolvers, react-hook-form, sonner, CertificateForm(), EducationForm(), ExperienceForm(), LanguageForm(), OrganizationForm() (+15 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.30
Nodes (11): ImageLightbox(), ImageLightboxProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay() (+3 more)

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 72 - "utils.ts"
Cohesion: 0.14
Nodes (9): CaseTocProps, CaseTocSection, SignalTickerProps, TickerItem, BulletPointsProps, aspectClasses, MediaFrameProps, PageContainerProps (+1 more)

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 378 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `components/admin.ts` to `(dashboard)/page.tsx`, `[slug]/page.tsx`, `AdminSidebar.tsx`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `createServerSupabase`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `about/page.tsx`, `profile/server/mappers.ts`, `og-image.tsx`, `PageContainer`, `components/index.ts`, `taxonomy.ts`, `Project`, `CaseCard.tsx`, `Project`, `revalidateAbout`, `lucide-react`, `react`, `siteConfig.ts`, `skills/server/actions.ts`, `server.ts`, `(public)/page.tsx`, `app/layout.tsx`, `ProjectForm.tsx`, `next.config.ts`, `ConfirmDeleteDialog.tsx`, `utils.ts`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07932875667429443 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `profile/server/actions.ts`, `[slug]/page.tsx`, `ErrorSummary.tsx`, `Dev Dependencies Manifest`, `social-links.ts`, `createPublicClient`, `ContactForm.tsx`, `(public)/skills/page.tsx`, `storage.ts`, `profile/server/mappers.ts`, `PageContainer`, `components/index.ts`, `taxonomy.ts`, `public.ts`, `zod`, `Project`, `languages/server/actions.ts`, `projects/server/queries.ts`, `siteConfig.ts`, `skills/server/actions.ts`, `certificates/server/actions.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `(public)/page.tsx`, `database.ts`, `ProjectForm.tsx`, `@vitejs/plugin-react`, `utils.ts`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `[slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `app/layout.tsx`, `AdminSidebar.tsx`, `components/admin.ts`, `ProjectForm.tsx`, `AdminSidebar.tsx`, `ConfirmDeleteDialog.tsx`, `ErrorSummary.tsx`, `Dev Dependencies Manifest`, `projects/server/actions.ts`, `utils.ts`, `Runtime Dependencies Manifest`, `ContactForm.tsx`, `Project`, `lucide-react`, `vitest`, `PageContainer`, `components/index.ts`, `taxonomy.ts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._