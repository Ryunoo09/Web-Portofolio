# Graph Report - portfolio-v2  (2026-11-17)

## Corpus Check
- 366 files · ~88,396 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 35 file(s) not represented in the graph (top: (none) 31, .example 1, .ico 1)

## Summary
- 1512 nodes · 4891 edges · 84 communities (60 shown, 24 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `68537275`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 0001_init.sql
- languages/index.ts
- components/admin.ts
- next
- AdminSidebar.tsx
- v2/index.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- projects/server/actions.ts
- components/index.ts
- createServerSupabase
- (dashboard)/page.tsx
- Runtime Dependencies Manifest
- ContactForm.tsx
- CapabilityBoard.tsx
- Docker Compose Deployment
- skills/server/actions.ts
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- storage.ts
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- createPublicClient
- profile/server/queries.ts
- NPM Scripts & Tooling
- og-image.tsx
- (public)/skills/page.tsx
- CaseCard.tsx
- Project Scaffold Script
- taxonomy.ts
- Public SVG Brand Icons
- resume.pdf/route.ts
- pnpm Workspace Build Approvals
- Prettier Configuration
- timeout.ts
- Commitlint Configuration
- PostCSS Configuration
- zod
- Project
- certificates/server/queries.ts
- CaseStudy.tsx
- organizations/server/actions.ts
- proxy.ts
- StatusBadge.tsx
- server.ts
- projects/server/queries.ts
- CaseToc.tsx
- [slug]/opengraph-image.tsx
- vitest
- certificates/server/actions.ts
- experiences/server/queries.ts
- education/server/queries.ts
- a11y.spec.ts
- V2About.tsx
- projects/index.ts
- app/layout.tsx
- database.ts
- cn
- profile/index.ts
- next.config.ts
- eslint.config.mjs
- @vitejs/plugin-react
- GalleryManager.test.tsx
- BulletPoints.tsx
- whatsapp.ts
- V2Hero.test.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 113 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 93 edges
4. `next` - 89 edges
5. `vitest` - 69 edges
6. `react` - 65 edges
7. `requireAdmin()` - 62 edges
8. `lucide-react` - 56 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (84 total, 24 thin omitted)

### Community 0 - "0001_init.sql"
Cohesion: 0.08
Nodes (25): project_images_project_idx, projects_published_idx, public.admins, public.certificates, public.contact_messages, public.education, public.experiences, public.is_admin() (+17 more)

### Community 1 - "languages/index.ts"
Cohesion: 0.33
Nodes (6): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, Language

### Community 2 - "components/admin.ts"
Cohesion: 0.08
Nodes (70): AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage(), AdminExperienceNewPage() (+62 more)

### Community 3 - "next"
Cohesion: 0.11
Nodes (19): next, generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, pickNextProject(), ProjectJsonLd (+11 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.11
Nodes (24): AdminDashboardLayout(), dynamic, revalidate, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks() (+16 more)

### Community 5 - "v2/index.ts"
Cohesion: 0.16
Nodes (17): V2Certificates(), formatDate(), V2EducationExperience(), V2FeaturedProjects(), V2Hero(), mockCertificates, mockEducation, mockExperiences (+9 more)

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
Cohesion: 0.24
Nodes (16): cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage(), imageInputSchema, invalidInput(), ParsedProject (+8 more)

### Community 10 - "components/index.ts"
Cohesion: 0.11
Nodes (28): ContactPanel(), ContactPanelProps, ContactPathsProps, V2Contact(), CvDownloadLinks(), GithubIcon(), LinkedinIcon(), WhatsappIcon() (+20 more)

### Community 11 - "createServerSupabase"
Cohesion: 0.16
Nodes (36): requireAdmin(), createEducation(), createEducationImage(), deleteEducation(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+28 more)

### Community 12 - "(dashboard)/page.tsx"
Cohesion: 0.16
Nodes (19): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), OrganizationFormProps, OrganizationImageFields, OrganizationImageRow (+11 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (28): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+20 more)

### Community 14 - "ContactForm.tsx"
Cohesion: 0.10
Nodes (30): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, FieldErrors, FieldKey (+22 more)

### Community 15 - "CapabilityBoard.tsx"
Cohesion: 0.17
Nodes (15): ProjectFormProps, CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard(), CapabilityBoardProps (+7 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "storage.ts"
Cohesion: 0.15
Nodes (17): server-only@^0.0.1, server-only, uploadOrganizationImage(), uploadProfileResume(), DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MEDIA_BUCKET, assertAllowedFile() (+9 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.14
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "createPublicClient"
Cohesion: 0.35
Nodes (8): toLanguage(), getPublishedLanguages(), SkillRow, toSkill(), findSkills(), getLearningSkills(), withOfflineFallback(), createPublicClient()

### Community 24 - "profile/server/queries.ts"
Cohesion: 0.09
Nodes (31): ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), ExperienceTimeline(), ExperienceTimelineProps (+23 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "(public)/skills/page.tsx"
Cohesion: 0.18
Nodes (20): NotFound(), ContactPage(), metadata, revalidate, firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage() (+12 more)

### Community 28 - "CaseCard.tsx"
Cohesion: 0.32
Nodes (9): CaseCard(), projectCredits(), projectMeta(), projectYear(), ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps (+1 more)

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.16
Nodes (17): CaseGrid(), DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), ProjectExplorerProps, DOMAIN_BY_SLUG, isProjectDomain() (+9 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "resume.pdf/route.ts"
Cohesion: 0.26
Nodes (7): dynamic, GET(), notFound(), mocks, request, buildCvFilename(), CvLanguage

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "timeout.ts"
Cohesion: 0.15
Nodes (12): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, dynamic, GET(), mocks, createTimedFetch(), HEALTH_TIMEOUT_MS, PROXY_AUTH_TIMEOUT_MS (+4 more)

### Community 41 - "zod"
Cohesion: 0.10
Nodes (18): zod, certificateFormSchema, valid, educationFormSchema, EducationFormValues, valid, experienceFormSchema, valid (+10 more)

### Community 45 - "Project"
Cohesion: 0.16
Nodes (13): HeroProps, SignalPanelProps, CapabilitiesProps, CaseCardProps, CaseGridEmpty(), CaseGridProps, CaseNextProps, CaseStudyProps (+5 more)

### Community 46 - "certificates/server/queries.ts"
Cohesion: 0.26
Nodes (8): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.24
Nodes (12): resolveProjectStatus(), CaseFacts(), CaseFactsProps, STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs() (+4 more)

### Community 48 - "organizations/server/actions.ts"
Cohesion: 0.39
Nodes (7): OrganizationFormValues, createOrganization(), imageInputSchema, invalidInput(), ParsedOrganization, toColumns(), updateOrganization()

### Community 49 - "proxy.ts"
Cohesion: 0.25
Nodes (9): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge() (+1 more)

### Community 50 - "StatusBadge.tsx"
Cohesion: 0.50
Nodes (3): Status, StatusBadgeProps, statusMap

### Community 51 - "server.ts"
Cohesion: 0.13
Nodes (19): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, createLanguage(), invalidInput(), ParsedLanguage, toColumns() (+11 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.16
Nodes (17): ProjectGalleryManagerProps, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow (+9 more)

### Community 53 - "CaseToc.tsx"
Cohesion: 0.25
Nodes (5): CaseTocProps, CaseTocSection, MockIntersectionObserver, ObserverCallback, sections

### Community 54 - "[slug]/opengraph-image.tsx"
Cohesion: 0.33
Nodes (6): alt, contentType, ImageProps, OpengraphImage(), size, truncate()

### Community 55 - "vitest"
Cohesion: 0.15
Nodes (8): @testing-library/react, @testing-library/user-event, vitest, writeText, projects, replace, { refreshMock }, { refreshMock }

### Community 57 - "certificates/server/actions.ts"
Cohesion: 0.35
Nodes (9): CertificateFormValues, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns(), toggleCertificatePublish(), updateCertificate() (+1 more)

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.22
Nodes (12): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, toExperience() (+4 more)

### Community 59 - "education/server/queries.ts"
Cohesion: 0.21
Nodes (12): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+4 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 61 - "V2About.tsx"
Cohesion: 0.40
Nodes (4): CONTRIBUTIONS, V2About(), mockProfile, mockSkills

### Community 62 - "projects/index.ts"
Cohesion: 0.13
Nodes (32): HomePage(), metadata, revalidate, HomePageV1(), metadata, revalidate, AboutStrip(), ContactCta() (+24 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.12
Nodes (15): ExperienceRow, images, row, LanguageRow, row, CompositeTypes, Constants, Database (+7 more)

### Community 66 - "cn"
Cohesion: 0.05
Nodes (92): class-variance-authority, @hookform/resolvers, lucide-react, radix-ui, react, react-hook-form, sonner, metadata (+84 more)

### Community 67 - "profile/index.ts"
Cohesion: 0.11
Nodes (26): AboutPage(), metadata, revalidate, PublicLayout(), HomePageV2(), metadata, revalidate, FACTS (+18 more)

### Community 68 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 72 - "BulletPoints.tsx"
Cohesion: 0.31
Nodes (6): BulletList(), BulletPoints(), BulletPointsProps, ListItemNode, toListItems(), toListTree()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 409 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `components/admin.ts`, `AdminSidebar.tsx`, `v2/index.ts`, `Dev Dependencies Manifest`, `components/index.ts`, `(dashboard)/page.tsx`, `Runtime Dependencies Manifest`, `CapabilityBoard.tsx`, `og-image.tsx`, `(public)/skills/page.tsx`, `CaseCard.tsx`, `taxonomy.ts`, `Project`, `CaseStudy.tsx`, `proxy.ts`, `server.ts`, `[slug]/opengraph-image.tsx`, `projects/index.ts`, `app/layout.tsx`, `cn`, `profile/index.ts`, `next.config.ts`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `0001_init.sql` be split into smaller, more focused modules?**
  _Cohesion score 0.0846774193548387 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `next`, `v2/index.ts`, `Dev Dependencies Manifest`, `components/index.ts`, `(dashboard)/page.tsx`, `ContactForm.tsx`, `CapabilityBoard.tsx`, `skills/server/actions.ts`, `storage.ts`, `profile/server/queries.ts`, `taxonomy.ts`, `resume.pdf/route.ts`, `timeout.ts`, `zod`, `certificates/server/queries.ts`, `CaseStudy.tsx`, `server.ts`, `projects/server/queries.ts`, `CaseToc.tsx`, `playwright.config.ts`, `education/server/queries.ts`, `V2About.tsx`, `projects/index.ts`, `vitest.setup.ts`, `database.ts`, `cn`, `profile/index.ts`, `@vitejs/plugin-react`, `GalleryManager.test.tsx`, `BulletPoints.tsx`, `whatsapp.ts`, `V2Hero.test.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Should `components/admin.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07695954487989887 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `cn` to `components/admin.ts`, `profile/index.ts`, `AdminSidebar.tsx`, `components/index.ts`, `ContactForm.tsx`, `CaseStudy.tsx`, `vitest`, `(public)/skills/page.tsx`, `projects/index.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.11051693404634581 - nodes in this community are weakly interconnected._