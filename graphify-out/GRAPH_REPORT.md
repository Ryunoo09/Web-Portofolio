# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 305 files · ~68,406 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1265 nodes · 4029 edges · 70 communities (57 shown, 13 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7f3a6509`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- Project
- Button
- (public)/page.tsx
- cn
- profile/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- ProjectForm.tsx
- EducationForm.tsx
- server-only
- createPublicClient
- Runtime Dependencies Manifest
- contact/index.ts
- (public)/skills/page.tsx
- Docker Compose Deployment
- createServerSupabase
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- languages/index.ts
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
- zod
- projects/server/actions.ts
- JsonLd
- CaseStudy.tsx
- [slug]/page.tsx
- react
- components/index.ts
- storage.ts
- projects/server/queries.ts
- certificates/server/queries.ts
- skills/server/actions.ts
- vitest
- utils.ts
- siteConfig.ts
- experiences/server/queries.ts
- withOfflineFallback
- organizations/server/actions.ts
- vitest.setup.ts
- certificates/server/actions.ts
- CaseCard.tsx
- app/layout.tsx
- StackList
- proxy.ts
- next.config.ts
- auth/index.ts
- ErrorSummary.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Button()` - 86 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 80 edges
5. `react` - 60 edges
6. `lucide-react` - 52 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 44 edges
10. `Project` - 36 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getContactMessages()` --indirect_call--> `toContactMessage()`  [INFERRED]
  src/features/contact/server/queries.ts → src/features/contact/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `CaseGridProps` --references--> `Project`  [EXTRACTED]
  src/features/projects/components/public/CaseGrid.tsx → src/features/projects/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (70 total, 13 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.33
Nodes (7): ProfileFormValues, invalidInput(), ParsedProfile, updateProfile(), uploadProfileResume(), revalidateProfile(), emptyToNull()

### Community 1 - "Project"
Cohesion: 0.13
Nodes (17): Hero(), HeroProps, MetricRail(), MetricRailProps, SignalPanel(), SignalPanelProps, CapabilitiesProps, CaseCardProps (+9 more)

### Community 2 - "Button"
Cohesion: 0.07
Nodes (76): class-variance-authority, lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage() (+68 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.13
Nodes (27): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, ProofStrip(), SignalTicker() (+19 more)

### Community 4 - "cn"
Cohesion: 0.10
Nodes (29): AdminDashboardLayout(), AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks() (+21 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.15
Nodes (24): ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), ExperienceTimeline(), ExperienceTimelineProps (+16 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (40): @tiptap/pm@^3.31.4, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+32 more)

### Community 9 - "ProjectForm.tsx"
Cohesion: 0.11
Nodes (42): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminProfilePage(), AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillEditPage() (+34 more)

### Community 10 - "EducationForm.tsx"
Cohesion: 0.28
Nodes (11): educationFormSchema, EducationFormValues, valid, createEducation(), deleteEducation(), invalidInput(), ParsedEducation, toColumns() (+3 more)

### Community 11 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 12 - "createPublicClient"
Cohesion: 0.25
Nodes (10): OrganizationFormProps, OrganizationTableProps, deleteOrganization(), toggleOrganizationPublish(), OrganizationRow, toOrganization(), getAllOrganizations(), getPublishedOrganizations() (+2 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (27): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+19 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.13
Nodes (24): MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm(), mockedSubmit, validate() (+16 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.13
Nodes (24): metadata, revalidate, SkillsPage(), ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps (+16 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.25
Nodes (17): AdminDashboardPage(), countCertificates(), getContactMessages(), countEducation(), createExperience(), deleteExperience(), invalidInput(), ParsedExperience (+9 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "languages/index.ts"
Cohesion: 0.22
Nodes (11): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage (+3 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.12
Nodes (14): LanguageRow, row, OrganizationRow, row, CompositeTypes, Constants, Database, DatabaseWithoutInternals (+6 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.19
Nodes (14): AboutPage(), metadata, revalidate, LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow (+6 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.16
Nodes (17): CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), DOMAIN_BY_SLUG (+9 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.12
Nodes (18): CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle(), DropdownMenuCheckboxItem(), DropdownMenuContent() (+10 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.12
Nodes (16): zod, certificateFormSchema, CertificateFormValues, valid, experienceFormSchema, ExperienceFormValues, valid, profileFormSchema (+8 more)

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.26
Nodes (16): requireAdmin(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema, invalidInput() (+8 more)

### Community 46 - "JsonLd"
Cohesion: 0.16
Nodes (13): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLd(), JsonLdProps, aspectClasses, MediaFrame() (+5 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.33
Nodes (10): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+2 more)

### Community 48 - "[slug]/page.tsx"
Cohesion: 0.14
Nodes (18): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), generateMetadata(), generateStaticParams() (+10 more)

### Community 49 - "react"
Cohesion: 0.26
Nodes (10): react, SkipLink(), isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe() (+2 more)

### Community 50 - "components/index.ts"
Cohesion: 0.20
Nodes (16): NotFound(), ContactPage(), metadata, revalidate, PublicLayout(), ProjectsPage(), ContactPanel(), ContactPanelProps (+8 more)

### Community 51 - "storage.ts"
Cohesion: 0.20
Nodes (13): DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath(), extensionFor(), EXTENSIONS, KIND_LABELS (+5 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.18
Nodes (15): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+7 more)

### Community 53 - "certificates/server/queries.ts"
Cohesion: 0.26
Nodes (8): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.14
Nodes (11): @testing-library/react, @testing-library/user-event, vitest, MockIntersectionObserver, ObserverCallback, sections, projects, replace (+3 more)

### Community 56 - "utils.ts"
Cohesion: 0.18
Nodes (8): CaseTocProps, CaseTocSection, BulletPoints(), BulletPointsProps, EmptyState(), EmptyStateProps, SectionIntroProps, toListItems()

### Community 57 - "siteConfig.ts"
Cohesion: 0.22
Nodes (8): firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPageProps, siteConfig, buildMetadata(), BuildMetadataInput, serializeJsonLd()

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (8): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getPublishedExperiences(), Experience

### Community 59 - "withOfflineFallback"
Cohesion: 0.23
Nodes (9): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education (+1 more)

### Community 60 - "organizations/server/actions.ts"
Cohesion: 0.23
Nodes (8): organizationFormSchema, OrganizationFormValues, valid, ParsedOrganization, ConfirmDeleteDialogProps, ImageUploadFieldProps, StatusToggleProps, ActionResult

### Community 62 - "certificates/server/actions.ts"
Cohesion: 0.38
Nodes (9): createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate(), uploadCertificateImage() (+1 more)

### Community 63 - "CaseCard.tsx"
Cohesion: 0.54
Nodes (5): CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork()

### Community 64 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "StackList"
Cohesion: 0.47
Nodes (4): ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps

### Community 66 - "proxy.ts"
Cohesion: 0.40
Nodes (3): @supabase/ssr@^0.12.7, @supabase/ssr, config

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "ErrorSummary.tsx"
Cohesion: 0.50
Nodes (3): ErrorSummary(), ErrorSummaryEntry, ErrorSummaryProps

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 344 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `profile/server/actions.ts`, `Project`, `(public)/page.tsx`, `cn`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `createServerSupabase`, `database.ts`, `og-image.tsx`, `withOfflineFallback`, `taxonomy.ts`, `JsonLd`, `CaseStudy.tsx`, `[slug]/page.tsx`, `react`, `components/index.ts`, `siteConfig.ts`, `organizations/server/actions.ts`, `CaseCard.tsx`, `app/layout.tsx`, `proxy.ts`, `next.config.ts`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `Project`, `(public)/page.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `EducationForm.tsx`, `contact/index.ts`, `(public)/skills/page.tsx`, `languages/index.ts`, `database.ts`, `@vitejs/plugin-react`, `taxonomy.ts`, `zod`, `JsonLd`, `CaseStudy.tsx`, `[slug]/page.tsx`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/queries.ts`, `skills/server/actions.ts`, `utils.ts`, `siteConfig.ts`, `experiences/server/queries.ts`, `withOfflineFallback`, `organizations/server/actions.ts`, `vitest.setup.ts`, `CaseCard.tsx`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.06923181140766833 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Button` to `Project`, `cn`, `(public)/page.tsx`, `cn`, `ProjectForm.tsx`, `contact/index.ts`, `(public)/skills/page.tsx`, `CaseStudy.tsx`, `react`, `components/index.ts`, `vitest`, `withOfflineFallback`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Should `(public)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13368983957219252 - nodes in this community are weakly interconnected._