# Graph Report - portfolio  (2026-11-01)

## Corpus Check
- 328 files · ~80,789 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 34 file(s) not represented in the graph (top: (none) 30, .example 1, .ico 1)

## Summary
- 1371 nodes · 4445 edges · 75 communities (64 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e514ea4c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- revalidateAbout
- certificates/server/actions.ts
- Button
- projects/types.ts
- AdminSidebar.tsx
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
- components/admin.ts
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
- health/route.ts
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
- about/page.tsx
- skills/server/actions.ts
- vitest
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
- ProjectForm.tsx
- next.config.ts
- ConfirmDeleteDialog.tsx
- eslint.config.mjs
- taxonomy.ts
- ContactForm.tsx
- react
- ActionResult
- case.test.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 107 edges
2. `createServerSupabase()` - 94 edges
3. `Button()` - 90 edges
4. `next` - 83 edges
5. `react` - 63 edges
6. `requireAdmin()` - 62 edges
7. `lucide-react` - 54 edges
8. `vitest` - 54 edges
9. `requireAdminPage()` - 51 edges
10. `AdminPageHeader()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getPublishedEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts
- `getPublishedExperiences()` --indirect_call--> `toExperience()`  [INFERRED]
  src/features/experiences/server/queries.ts → src/features/experiences/server/mappers.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (75 total, 11 thin omitted)

### Community 0 - "revalidateAbout"
Cohesion: 0.24
Nodes (12): LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage (+4 more)

### Community 1 - "certificates/server/actions.ts"
Cohesion: 0.25
Nodes (11): certificateFormSchema, CertificateFormValues, valid, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns() (+3 more)

### Community 2 - "Button"
Cohesion: 0.08
Nodes (69): lucide-react, next, AdminCertificateEditPage(), AdminCertificateNewPage(), AdminCertificatesPage(), AdminEducationNewPage(), AdminEducationPage(), AdminExperienceEditPage() (+61 more)

### Community 3 - "projects/types.ts"
Cohesion: 0.27
Nodes (9): generateMetadata(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, pickNextProject(), ProjectJsonLd, projectMetadata(), project (+1 more)

### Community 4 - "AdminSidebar.tsx"
Cohesion: 0.11
Nodes (24): AdminDashboardLayout(), dynamic, revalidate, AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks() (+16 more)

### Community 5 - "profile/index.ts"
Cohesion: 0.07
Nodes (49): AboutPage(), dynamic, GET(), notFound(), mocks, request, ProfileFormProps, experience (+41 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.08
Nodes (35): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+27 more)

### Community 9 - "projects/server/actions.ts"
Cohesion: 0.24
Nodes (19): requireAdmin(), deleteEducation(), deleteExperienceImage(), deleteOrganization(), cleanList(), createProject(), createProjectImage(), deleteProject() (+11 more)

### Community 10 - "createPublicClient"
Cohesion: 0.36
Nodes (8): getPublishedEducation(), getPublishedExperiences(), SkillRow, toSkill(), findSkills(), getLearningSkills(), withOfflineFallback(), createPublicClient()

### Community 11 - "revalidateAbout"
Cohesion: 0.24
Nodes (14): AdminEducationEditPage(), EducationFormValues, createEducation(), createEducationImage(), deleteEducationImage(), imageInputSchema, invalidInput(), ParsedEducation (+6 more)

### Community 12 - "createPublicClient"
Cohesion: 0.21
Nodes (12): OrganizationFormProps, OrganizationTableProps, OrganizationImageFields, OrganizationImageRow, OrganizationRow, OrganizationWithRelations, row, toOrganization() (+4 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (29): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+21 more)

### Community 14 - "contact/index.ts"
Cohesion: 0.12
Nodes (22): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactPaths(), ContactPathsProps, CONTACT_INTENT_LABELS, CONTACT_INTENTS (+14 more)

### Community 15 - "(public)/skills/page.tsx"
Cohesion: 0.16
Nodes (16): ProjectFormProps, pickProjectsBySlug(), CAPABILITY_GROUPS, CapabilityGroup, SkillFormProps, SkillTableProps, buildSkillProofIndex(), CapabilityBoard() (+8 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "requireAdmin"
Cohesion: 0.20
Nodes (20): AdminDashboardPage(), countCertificates(), countEducation(), ExperienceFormValues, createExperience(), createExperienceImage(), deleteExperience(), imageInputSchema (+12 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "components/admin.ts"
Cohesion: 0.16
Nodes (15): GalleryItem(), ProfileForm(), GalleryItem(), ProjectGalleryManager(), FieldError(), FieldErrorProps, FormFieldControlProps, FormFieldProps (+7 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.11
Nodes (7): hasCredentials, PROTECTED_ROUTES, publicRoutes, routes, viewports, @playwright/test@^1.63.0, @playwright/test

### Community 23 - "withOfflineFallback"
Cohesion: 0.26
Nodes (8): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "og-image.tsx"
Cohesion: 0.11
Nodes (25): alt, contentType, OpengraphImage(), size, alt, contentType, OpengraphImage(), size (+17 more)

### Community 27 - "withOfflineFallback"
Cohesion: 0.23
Nodes (10): LanguageFormProps, LanguageTableProps, LanguageList(), LanguageListProps, LanguageRow, LanguageRow, row, toLanguage() (+2 more)

### Community 28 - "server.ts"
Cohesion: 0.19
Nodes (14): @supabase/ssr@^0.12.7, @supabase/ssr, config, proxy(), withAdminHeaders(), AUTH_COOKIE_OPTIONS, AUTH_SESSION_MAX_AGE, withSessionMaxAge() (+6 more)

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "taxonomy.ts"
Cohesion: 0.26
Nodes (10): CaseGrid(), CaseGridEmpty(), CaseGridProps, DomainChip(), normalizeDomain(), normalizeType(), ProjectExplorer(), EmptyState() (+2 more)

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "cn"
Cohesion: 0.12
Nodes (20): initialState, LoginForm(), login(), Card(), CardAction(), CardContent(), CardDescription(), CardFooter() (+12 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 36 - "health/route.ts"
Cohesion: 0.33
Nodes (4): dynamic, GET(), mocks, HEALTH_TIMEOUT_MS

### Community 41 - "zod"
Cohesion: 0.11
Nodes (19): zod, educationFormSchema, valid, experienceFormSchema, valid, profileFormSchema, ProfileFormValues, valid (+11 more)

### Community 45 - "(public)/skills/page.tsx"
Cohesion: 0.22
Nodes (17): ContactPage(), metadata, revalidate, firstParam(), generateMetadata(), hasActiveFilter(), ProjectsPage(), ProjectsPageProps (+9 more)

### Community 46 - "CaseCard.tsx"
Cohesion: 0.23
Nodes (11): CaseCard(), CaseCardProps, projectCredits(), projectMeta(), projectYear(), FeaturedWork(), FeaturedWorkProps, SignalTicker() (+3 more)

### Community 47 - "CaseStudy.tsx"
Cohesion: 0.22
Nodes (14): resolveProjectStatus(), CaseFacts(), STATUS_LABELS, CaseNext(), CaseSection(), CaseStudy(), toParagraphs(), CaseToc() (+6 more)

### Community 48 - "createServerSupabase"
Cohesion: 0.19
Nodes (16): AdminOrganizationsEditPage(), organizationFormSchema, OrganizationFormValues, valid, createOrganization(), createOrganizationImage(), deleteOrganizationImage(), imageInputSchema (+8 more)

### Community 49 - "react"
Cohesion: 0.31
Nodes (8): isActivePath(), MobileMenu(), MobileMenuProps, isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 50 - "components/index.ts"
Cohesion: 0.36
Nodes (6): ContactPanel(), ContactPanelProps, GithubIcon(), LinkedinIcon(), PageContainerProps, SiteFooter()

### Community 51 - "storage.ts"
Cohesion: 0.13
Nodes (19): server-only@^0.0.1, server-only, uploadExperienceImage(), uploadProfileImage(), uploadProfileResume(), uploadProjectImage(), DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION (+11 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.20
Nodes (13): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+5 more)

### Community 53 - "about/page.tsx"
Cohesion: 0.19
Nodes (9): metadata, revalidate, generateStaticParams(), sitemap(), getPublishedProjects(), siteConfig, buildMetadata(), BuildMetadataInput (+1 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.29
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "vitest"
Cohesion: 0.12
Nodes (13): @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, vitest@^5.0.3, @testing-library/react, @testing-library/user-event, vitest, mockedSubmit, writeText (+5 more)

### Community 56 - "contact/page.tsx"
Cohesion: 0.17
Nodes (13): NotFound(), PublicLayout(), BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLdProps, SkipLink() (+5 more)

### Community 57 - "projects/index.ts"
Cohesion: 0.38
Nodes (7): ProjectGalleryManagerProps, HOME_CASE_SLUGS, HOME_TICKER_ITEMS, PROOF_PROJECT_SLUG, getProjectShortLabel(), PROJECT_SHORT_LABELS, ProjectImage

### Community 58 - "experiences/server/queries.ts"
Cohesion: 0.15
Nodes (14): ExperienceFormProps, ExperienceGalleryManagerProps, ExperienceTableProps, ExperienceImageFields, ExperienceImageRow, ExperienceRow, ExperienceWithRelations, ExperienceRow (+6 more)

### Community 59 - "withOfflineFallback"
Cohesion: 0.20
Nodes (11): EducationFormProps, EducationTableProps, EducationImageFields, EducationImageRow, EducationRow, EducationWithRelations, row, toEducation() (+3 more)

### Community 60 - "a11y.spec.ts"
Cohesion: 0.17
Nodes (8): applyTheme(), openThemed(), publicPages, themes, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @axe-core/playwright

### Community 62 - "(public)/page.tsx"
Cohesion: 0.22
Nodes (16): HomePage(), metadata, revalidate, AboutStrip(), ContactCta(), Capabilities, aboutPageNode(), CollectionItem (+8 more)

### Community 63 - "Project"
Cohesion: 0.19
Nodes (10): SignalPanelProps, CapabilitiesProps, CaseFactsProps, CaseNextProps, CaseStudyProps, ProjectExplorerProps, PROOF_STATS, ProofStrip() (+2 more)

### Community 64 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 65 - "database.ts"
Cohesion: 0.14
Nodes (12): @supabase/supabase-js, supabaseFetch, CompositeTypes, Constants, Database, DatabaseWithoutInternals, DefaultSchema, Enums (+4 more)

### Community 66 - "ProjectForm.tsx"
Cohesion: 0.30
Nodes (19): @hookform/resolvers, react-hook-form, sonner, EducationForm(), ExperienceForm(), LanguageForm(), OrganizationForm(), PROJECT_TYPES (+11 more)

### Community 67 - "next.config.ts"
Cohesion: 0.50
Nodes (3): contentSecurityPolicy, nextConfig, securityHeaders

### Community 68 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.27
Nodes (10): ConfirmDeleteDialogProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal() (+2 more)

### Community 69 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 70 - "taxonomy.ts"
Cohesion: 0.16
Nodes (16): alt, contentType, ImageProps, OpengraphImage(), size, truncate(), DOMAIN_BY_SLUG, getProjectDomainLabel() (+8 more)

### Community 71 - "ContactForm.tsx"
Cohesion: 0.25
Nodes (9): ContactForm(), FIELD_IDS, FieldErrors, FieldKey, readForm(), validate(), ErrorSummary(), ErrorSummaryEntry (+1 more)

### Community 72 - "react"
Cohesion: 0.10
Nodes (16): class-variance-authority, radix-ui, react, metadata, AdminPageHeaderProps, BulletPoints(), BulletPointsProps, EmptyStateProps (+8 more)

### Community 73 - "ActionResult"
Cohesion: 0.24
Nodes (6): GalleryManager(), GalleryManagerProps, renderGallery(), ImageUploadFieldProps, StatusToggleProps, ActionResult

### Community 74 - "case.test.tsx"
Cohesion: 0.43
Nodes (3): projects, replace, makeProject()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 376 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `projects/types.ts`, `AdminSidebar.tsx`, `profile/index.ts`, `Dev Dependencies Manifest`, `revalidateAbout`, `Runtime Dependencies Manifest`, `contact/index.ts`, `(public)/skills/page.tsx`, `requireAdmin`, `components/admin.ts`, `og-image.tsx`, `server.ts`, `taxonomy.ts`, `zod`, `(public)/skills/page.tsx`, `CaseCard.tsx`, `CaseStudy.tsx`, `createServerSupabase`, `react`, `components/index.ts`, `about/page.tsx`, `contact/page.tsx`, `(public)/page.tsx`, `Project`, `app/layout.tsx`, `ProjectForm.tsx`, `next.config.ts`, `ConfirmDeleteDialog.tsx`, `taxonomy.ts`, `react`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.08124488124488125 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `revalidateAbout`, `certificates/server/actions.ts`, `projects/types.ts`, `profile/index.ts`, `Dev Dependencies Manifest`, `createPublicClient`, `contact/index.ts`, `(public)/skills/page.tsx`, `components/admin.ts`, `withOfflineFallback`, `@vitejs/plugin-react`, `withOfflineFallback`, `server.ts`, `health/route.ts`, `zod`, `CaseCard.tsx`, `createServerSupabase`, `storage.ts`, `projects/server/queries.ts`, `about/page.tsx`, `skills/server/actions.ts`, `contact/page.tsx`, `experiences/server/queries.ts`, `withOfflineFallback`, `vitest.setup.ts`, `(public)/page.tsx`, `ProjectForm.tsx`, `taxonomy.ts`, `react`, `ActionResult`, `case.test.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `AdminSidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10967741935483871 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `Button`, `ProjectForm.tsx`, `AdminSidebar.tsx`, `profile/index.ts`, `ConfirmDeleteDialog.tsx`, `ContactForm.tsx`, `react`, `ActionResult`, `(public)/skills/page.tsx`, `contact/index.ts`, `CaseCard.tsx`, `CaseStudy.tsx`, `react`, `components/index.ts`, `components/admin.ts`, `contact/page.tsx`, `taxonomy.ts`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Should `profile/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06713286713286713 - nodes in this community are weakly interconnected._