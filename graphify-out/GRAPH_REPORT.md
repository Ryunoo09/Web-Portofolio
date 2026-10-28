# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 285 files · ~65,937 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1201 nodes · 3906 edges · 59 communities (47 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f500efeb`
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
- organizations/index.ts
- Runtime Dependencies Manifest
- contact/index.ts
- server.ts
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
- withOfflineFallback
- ESLint Configuration
- Project Scaffold Script
- ProjectExplorer.tsx
- Public SVG Brand Icons
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- zod
- projects/server/actions.ts
- CaseStudy.tsx
- [slug]/page.tsx
- components/index.ts
- storage.ts
- projects/server/queries.ts
- certificates/server/actions.ts
- skills/server/actions.ts
- vitest
- CaseToc.tsx
- about/page.tsx
- ExperienceForm.tsx
- profile/server/queries.ts
- vitest.setup.ts
- taxonomy.ts
- CaseCard.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Button()` - 86 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 78 edges
5. `react` - 60 edges
6. `lucide-react` - 52 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 43 edges
10. `Project` - 36 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/(public)/projects/[slug]/page.tsx → src/features/projects/server/queries.ts
- `sitemap()` --calls--> `getPublishedProjects()`  [EXTRACTED]
  src/app/sitemap.ts → src/features/projects/server/queries.ts
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

## Communities (59 total, 12 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.29
Nodes (9): ProfileFormValues, invalidInput(), ParsedProfile, updateProfile(), uploadProfileImage(), uploadProfileResume(), revalidateProfile(), uploadFile() (+1 more)

### Community 1 - "Project"
Cohesion: 0.18
Nodes (11): CapabilitiesProps, CaseCardProps, CaseFactsProps, CaseGridProps, CaseNextProps, CaseStudyProps, FeaturedWorkProps, ProjectExplorerProps (+3 more)

### Community 2 - "Button"
Cohesion: 0.09
Nodes (65): nextConfig, class-variance-authority, lucide-react, next, AdminCertificatesPage(), AdminEducationPage(), AdminExperiencesPage(), AdminLanguagesEditPage() (+57 more)

### Community 3 - "(public)/page.tsx"
Cohesion: 0.22
Nodes (16): HomePage(), revalidate, AboutStrip(), ContactCta(), Capabilities, ProofStrip(), SignalTicker(), SignalTickerProps (+8 more)

### Community 4 - "cn"
Cohesion: 0.06
Nodes (49): AdminDashboardLayout(), AdminLoginPage(), metadata, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks() (+41 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.12
Nodes (20): sitemap(), ProfileFormProps, experience, AboutFact, AboutProof(), AboutProofProps, toParagraphs(), ExperienceTimeline() (+12 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (40): clsx@^2.1.1, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+32 more)

### Community 9 - "ProjectForm.tsx"
Cohesion: 0.10
Nodes (41): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminProjectEditPage(), AdminProjectNewPage(), AdminSkillEditPage(), AdminSkillNewPage() (+33 more)

### Community 10 - "EducationForm.tsx"
Cohesion: 0.19
Nodes (17): AdminEducationEditPage(), AdminEducationNewPage(), EducationForm(), EducationFormProps, EducationTableProps, educationFormSchema, EducationFormValues, valid (+9 more)

### Community 11 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 12 - "organizations/index.ts"
Cohesion: 0.19
Nodes (17): AdminOrganizationsEditPage(), AdminOrganizationsNewPage(), OrganizationForm(), OrganizationFormProps, OrganizationTableProps, organizationFormSchema, OrganizationFormValues, valid (+9 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (28): dependencies, class-variance-authority@^0.7.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6, radix-ui@^1.7.0 (+20 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.13
Nodes (23): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), FIELD_IDS, mockedSubmit, ContactPathsProps (+15 more)

### Community 15 - "server.ts"
Cohesion: 0.20
Nodes (15): @supabase/ssr@^0.12.7, @supabase/ssr, EducationRow, toEducation(), getPublishedEducation(), toExperience(), getPublishedExperiences(), getPublishedOrganizations() (+7 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "createServerSupabase"
Cohesion: 0.44
Nodes (10): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills() (+2 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "languages/index.ts"
Cohesion: 0.28
Nodes (12): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage (+4 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.10
Nodes (18): EducationRow, row, ExperienceRow, row, OrganizationRow, OrganizationRow, row, toOrganization() (+10 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (9): LanguageFormProps, LanguageTableProps, LanguageListProps, LanguageRow, LanguageRow, row, toLanguage(), getPublishedLanguages() (+1 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "ProjectExplorer.tsx"
Cohesion: 0.32
Nodes (8): CaseGrid(), CaseGridEmpty(), DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), projectTypeToParam(), resolveProjectType()

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 41 - "zod"
Cohesion: 0.16
Nodes (11): zod, valid, profileFormSchema, valid, projectFormSchema, ProjectFormValues, valid, PROJECT_DOMAINS (+3 more)

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.23
Nodes (21): requireAdmin(), GalleryItem(), ProjectGalleryManager(), ProjectGalleryManagerProps, cleanList(), createProject(), createProjectImage(), deleteProject() (+13 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.20
Nodes (14): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+6 more)

### Community 48 - "[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, pickNextProject(), ProjectJsonLd, projectMetadata() (+3 more)

### Community 50 - "components/index.ts"
Cohesion: 0.06
Nodes (41): react, metadata, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, PublicLayout() (+33 more)

### Community 51 - "storage.ts"
Cohesion: 0.12
Nodes (19): ConfirmDeleteDialogProps, ImageUploadFieldProps, StatusToggleProps, Switch(), DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES (+11 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "certificates/server/actions.ts"
Cohesion: 0.15
Nodes (22): AdminCertificateEditPage(), AdminCertificateNewPage(), CertificateForm(), CertificateFormProps, CertificateTableProps, certificateFormSchema, CertificateFormValues, createCertificate() (+14 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.21
Nodes (8): @testing-library/react, @testing-library/user-event, vitest, projects, replace, makeProject(), { refreshMock }, { refreshMock }

### Community 56 - "CaseToc.tsx"
Cohesion: 0.25
Nodes (5): CaseTocProps, CaseTocSection, MockIntersectionObserver, ObserverCallback, sections

### Community 57 - "about/page.tsx"
Cohesion: 0.14
Nodes (24): AboutPage(), metadata, revalidate, ContactPage(), metadata, revalidate, firstParam(), generateMetadata() (+16 more)

### Community 58 - "ExperienceForm.tsx"
Cohesion: 0.17
Nodes (18): AdminExperienceEditPage(), AdminExperienceNewPage(), ExperienceForm(), ExperienceFormProps, ExperienceTableProps, experienceFormSchema, ExperienceFormValues, valid (+10 more)

### Community 60 - "profile/server/queries.ts"
Cohesion: 0.22
Nodes (13): AdminProfilePage(), Row, ProfileRow, toCertificate(), toEducation(), toExperience(), toProfile(), getCertificates() (+5 more)

### Community 62 - "taxonomy.ts"
Cohesion: 0.18
Nodes (14): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), DOMAIN_BY_SLUG, getProjectDomainLabel() (+6 more)

### Community 63 - "CaseCard.tsx"
Cohesion: 0.27
Nodes (10): CaseCard(), projectCredits(), projectMeta(), projectYear(), FeaturedWork(), MediaFrame(), ProjectCoverFallback(), ProjectCoverFallbackProps (+2 more)

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 318 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `profile/server/actions.ts`, `Project`, `(public)/page.tsx`, `cn`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `EducationForm.tsx`, `organizations/index.ts`, `Runtime Dependencies Manifest`, `contact/index.ts`, `server.ts`, `createServerSupabase`, `ProjectExplorer.tsx`, `projects/server/actions.ts`, `CaseStudy.tsx`, `[slug]/page.tsx`, `components/index.ts`, `storage.ts`, `certificates/server/actions.ts`, `about/page.tsx`, `ExperienceForm.tsx`, `taxonomy.ts`, `CaseCard.tsx`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.08633663366336633 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `Button`, `profile/index.ts`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `EducationForm.tsx`, `organizations/index.ts`, `contact/index.ts`, `languages/index.ts`, `database.ts`, `@vitejs/plugin-react`, `withOfflineFallback`, `zod`, `CaseStudy.tsx`, `[slug]/page.tsx`, `components/index.ts`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `CaseToc.tsx`, `about/page.tsx`, `ExperienceForm.tsx`, `profile/server/queries.ts`, `vitest.setup.ts`, `taxonomy.ts`, `CaseCard.tsx`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.060455486542443065 - nodes in this community are weakly interconnected._
- **Why does `react` connect `components/index.ts` to `Button`, `(public)/page.tsx`, `cn`, `Dev Dependencies Manifest`, `ProjectForm.tsx`, `Runtime Dependencies Manifest`, `contact/index.ts`, `projects/server/actions.ts`, `CaseStudy.tsx`, `storage.ts`, `certificates/server/actions.ts`, `CaseToc.tsx`, `about/page.tsx`, `ProjectExplorer.tsx`, `CaseCard.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12310606060606061 - nodes in this community are weakly interconnected._