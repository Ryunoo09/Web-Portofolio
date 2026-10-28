# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 280 files · ~63,922 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1183 nodes · 3891 edges · 64 communities (52 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ecc57a6f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- Project
- components/index.ts
- (public)/page.tsx
- cn
- Hero.tsx
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- app/layout.tsx
- experiences/server/queries.ts
- organizations/index.ts
- Runtime Dependencies Manifest
- Contact & Message Inbox
- education/server/queries.ts
- Docker Compose Deployment
- createServerSupabase
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- SkillTable.tsx
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- database.ts
- @vitejs/plugin-react
- NPM Scripts & Tooling
- profile/index.ts
- withOfflineFallback
- ESLint Configuration
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- organizations/server/queries.ts
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- projects/schemas.ts
- projects/server/actions.ts
- AdminSidebar.tsx
- CaseStudy.tsx
- [slug]/page.tsx
- react
- patterns.test.tsx
- storage.ts
- projects/server/queries.ts
- certificates/server/actions.ts
- skills/server/actions.ts
- vitest
- utils.ts
- (public)/projects/page.tsx
- revalidateAbout
- ConfirmDeleteDialog.tsx
- profile/server/queries.ts
- vitest.setup.ts
- opengraph-image.tsx
- StackList

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Button()` - 82 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 76 edges
5. `react` - 66 edges
6. `lucide-react` - 57 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 41 edges
10. `Project` - 33 edges

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

## Communities (64 total, 12 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.15
Nodes (14): profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage(), uploadProfileResume() (+6 more)

### Community 1 - "Project"
Cohesion: 0.16
Nodes (17): ProjectFormProps, CapabilitiesProps, CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), CaseFactsProps (+9 more)

### Community 2 - "components/index.ts"
Cohesion: 0.06
Nodes (78): nextConfig, @hookform/resolvers, lucide-react, next, react-hook-form, sonner, AdminCertificateNewPage(), AdminCertificatesPage() (+70 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.22
Nodes (16): HomePage(), revalidate, AboutStrip(), ContactCta(), Capabilities, ProofStrip(), SignalTicker(), SignalTickerProps (+8 more)

### Community 4 - "cn"
Cohesion: 0.11
Nodes (19): radix-ui, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), DropdownMenuCheckboxItem() (+11 more)

### Community 5 - "Hero.tsx"
Cohesion: 0.16
Nodes (13): ContactInfoCard(), Hero(), HeroProps, MetricRail(), MetricRailProps, SignalPanel(), SignalPanelProps, GithubIcon() (+5 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.08
Nodes (35): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+27 more)

### Community 9 - "Skills Feature Vertical"
Cohesion: 0.14
Nodes (20): metadata, revalidate, SkillsPage(), SkillFormProps, SkillTableProps, SkillCard(), SkillCardProps, groupSkillsByCategory() (+12 more)

### Community 10 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 11 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (8): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getPublishedExperiences(), Experience

### Community 12 - "organizations/index.ts"
Cohesion: 0.30
Nodes (10): zod, organizationFormSchema, OrganizationFormValues, valid, createOrganization(), invalidInput(), ParsedOrganization, toColumns() (+2 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.06
Nodes (31): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+23 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.10
Nodes (28): AdminDashboardLayout(), AdminLoginPage(), metadata, initialState, LoginForm(), LoginInput, loginSchema, login() (+20 more)

### Community 15 - "education/server/queries.ts"
Cohesion: 0.23
Nodes (9): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education (+1 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.42
Nodes (10): AdminDashboardPage(), countCertificates(), toggleEducationPublish(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects() (+2 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "SkillTable.tsx"
Cohesion: 0.16
Nodes (40): CertificateRow(), CertificateTable(), EducationRow(), EducationTable(), deleteEducation(), ExperienceRow(), ExperienceTable(), deleteExperience() (+32 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.12
Nodes (14): @supabase/ssr, @supabase/supabase-js, CertificateRow, row, CompositeTypes, Constants, Database, DatabaseWithoutInternals (+6 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "profile/index.ts"
Cohesion: 0.21
Nodes (20): AboutPage(), metadata, revalidate, LanguageList(), OrganizationCard(), AboutContent(), AboutContentProps, principles (+12 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.21
Nodes (10): LanguageFormProps, LanguageTableProps, LanguageListProps, LanguageRow, LanguageRow, row, toLanguage(), getPublishedLanguages() (+2 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.15
Nodes (19): CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), EmptyState() (+11 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "organizations/server/queries.ts"
Cohesion: 0.23
Nodes (9): OrganizationFormProps, OrganizationTableProps, OrganizationCardProps, OrganizationRow, OrganizationRow, row, toOrganization(), getPublishedOrganizations() (+1 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "projects/schemas.ts"
Cohesion: 0.43
Nodes (3): projectFormSchema, ProjectFormValues, valid

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.21
Nodes (19): GalleryItem(), ProjectGalleryManager(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema (+11 more)

### Community 46 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (19): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), isActivePath() (+11 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.21
Nodes (14): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+6 more)

### Community 48 - "[slug]/page.tsx"
Cohesion: 0.22
Nodes (12): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), pickNextProject(), ProjectJsonLd (+4 more)

### Community 49 - "react"
Cohesion: 0.22
Nodes (9): react, metadata, PublicLayout(), SkipLink(), isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch() (+1 more)

### Community 50 - "patterns.test.tsx"
Cohesion: 0.17
Nodes (11): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLd(), JsonLdProps, aspectClasses, MediaFrameProps (+3 more)

### Community 51 - "storage.ts"
Cohesion: 0.16
Nodes (17): server-only@^0.0.1, server-only, DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile() (+9 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "certificates/server/actions.ts"
Cohesion: 0.15
Nodes (19): AdminCertificateEditPage(), CertificateFormProps, CertificateTableProps, certificateFormSchema, CertificateFormValues, valid, createCertificate(), deleteCertificate() (+11 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.28
Nodes (12): requireAdmin(), skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns() (+4 more)

### Community 55 - "vitest"
Cohesion: 0.15
Nodes (11): @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, vitest@^5.0.3, @testing-library/react, @testing-library/user-event, vitest, MockIntersectionObserver, ObserverCallback (+3 more)

### Community 56 - "utils.ts"
Cohesion: 0.16
Nodes (8): CaseTocProps, CaseTocSection, BulletPointsProps, EmptyStateProps, PageContainerProps, SectionIntroProps, slugify(), toListItems()

### Community 57 - "(public)/projects/page.tsx"
Cohesion: 0.22
Nodes (10): ContactPage(), metadata, firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps, SectionIntro() (+2 more)

### Community 58 - "revalidateAbout"
Cohesion: 0.25
Nodes (12): experienceFormSchema, ExperienceFormValues, valid, createExperience(), invalidInput(), ParsedExperience, toColumns(), toggleExperiencePublish() (+4 more)

### Community 59 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.30
Nodes (9): Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal(), DialogTitle() (+1 more)

### Community 60 - "profile/server/queries.ts"
Cohesion: 0.18
Nodes (16): AdminProfilePage(), ProfileFormProps, CertificateCardProps, EducationCardProps, ExperienceTimelineProps, Row, ProfileRow, toCertificate() (+8 more)

### Community 62 - "opengraph-image.tsx"
Cohesion: 0.33
Nodes (6): alt, contentType, ImageProps, OpengraphImage(), size, truncate()

### Community 63 - "StackList"
Cohesion: 0.47
Nodes (4): ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 313 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `components/index.ts` to `profile/server/actions.ts`, `Project`, `(public)/page.tsx`, `Hero.tsx`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `createServerSupabase`, `SkillTable.tsx`, `database.ts`, `profile/index.ts`, `taxonomy.ts`, `projects/server/actions.ts`, `AdminSidebar.tsx`, `CaseStudy.tsx`, `[slug]/page.tsx`, `react`, `patterns.test.tsx`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `(public)/projects/page.tsx`, `ConfirmDeleteDialog.tsx`, `opengraph-image.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `components/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.062428799270904535 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `profile/server/actions.ts`, `Project`, `components/index.ts`, `Hero.tsx`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `experiences/server/queries.ts`, `organizations/index.ts`, `Contact & Message Inbox`, `education/server/queries.ts`, `SkillTable.tsx`, `database.ts`, `@vitejs/plugin-react`, `withOfflineFallback`, `taxonomy.ts`, `organizations/server/queries.ts`, `projects/schemas.ts`, `CaseStudy.tsx`, `[slug]/page.tsx`, `patterns.test.tsx`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `utils.ts`, `revalidateAbout`, `profile/server/queries.ts`, `vitest.setup.ts`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.11264367816091954 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `profile/server/actions.ts`, `components/index.ts`, `(public)/page.tsx`, `cn`, `Hero.tsx`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `app/layout.tsx`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `SkillTable.tsx`, `profile/index.ts`, `withOfflineFallback`, `taxonomy.ts`, `projects/server/actions.ts`, `AdminSidebar.tsx`, `CaseStudy.tsx`, `patterns.test.tsx`, `vitest`, `utils.ts`, `(public)/projects/page.tsx`, `ConfirmDeleteDialog.tsx`, `StackList`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Should `Project Docs & Architecture Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.0463768115942029 - nodes in this community are weakly interconnected._