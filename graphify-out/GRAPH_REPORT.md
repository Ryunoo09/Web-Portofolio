# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 255 files · ~56,991 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1090 nodes · 3543 edges · 61 communities (49 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a77386f0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- profile/server/actions.ts
- utils.ts
- Button
- languages/index.ts
- Admin Shell & Layout Chrome
- server.ts
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- certificates/server/queries.ts
- experiences/server/queries.ts
- Organizations Feature Vertical
- Runtime Dependencies Manifest
- Contact & Message Inbox
- Badge
- Docker Compose Deployment
- server-only
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- SkillTable.tsx
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- database.ts
- @vitejs/plugin-react
- NPM Scripts & Tooling
- Vitest Environment Setup
- createPublicClient
- ESLint Configuration
- Project Scaffold Script
- Dynamic OpenGraph Image Route
- Public SVG Brand Icons
- AdminSidebar.tsx
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration
- projects/server/actions.ts
- react
- ConfirmDeleteDialog.tsx
- app/layout.tsx
- components/index.ts
- patterns.test.tsx
- storage.ts
- projects/server/queries.ts
- certificates/server/actions.ts
- skills/server/actions.ts
- education/server/actions.ts
- experiences/server/actions.ts
- SiteHeader.tsx
- revalidateAbout
- createServerSupabase
- HeroSection.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 97 edges
2. `Button()` - 84 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 68 edges
5. `react` - 65 edges
6. `lucide-react` - 51 edges
7. `requireAdmin()` - 50 edges
8. `AdminPageHeader()` - 50 edges
9. `vitest` - 32 edges
10. `Badge()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `LoginForm()` --indirect_call--> `login()`  [INFERRED]
  src/features/auth/components/LoginForm.tsx → src/features/auth/server/actions.ts
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

## Communities (61 total, 12 thin omitted)

### Community 0 - "profile/server/actions.ts"
Cohesion: 0.15
Nodes (15): zod, profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile(), projectFormSchema (+7 more)

### Community 1 - "utils.ts"
Cohesion: 0.09
Nodes (37): AdminProjectEditPage(), generateMetadata(), generateStaticParams(), ProjectDetailPage(), ProjectDetailPageProps, revalidate, sitemap(), OrganizationFormProps (+29 more)

### Community 2 - "Button"
Cohesion: 0.07
Nodes (65): nextConfig, @hookform/resolvers, lucide-react, next, react-hook-form, sonner, AdminCertificateEditPage(), AdminCertificateNewPage() (+57 more)

### Community 3 - "languages/index.ts"
Cohesion: 0.26
Nodes (8): LanguageFormProps, LanguageTableProps, LanguageListProps, LANGUAGE_LEVELS, languageFormSchema, LanguageFormValues, valid, Language

### Community 4 - "Admin Shell & Layout Chrome"
Cohesion: 0.12
Nodes (19): radix-ui@^1.7.0, radix-ui, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+11 more)

### Community 5 - "server.ts"
Cohesion: 0.27
Nodes (7): LoginInput, loginSchema, login(), LoginState, logout(), getCurrentAdmin(), AdminUser

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
Cohesion: 0.10
Nodes (28): AdminSkillEditPage(), HomePage(), revalidate, metadata, revalidate, SkillsPage(), HeroSection(), ProjectFormProps (+20 more)

### Community 10 - "certificates/server/queries.ts"
Cohesion: 0.26
Nodes (8): CertificateFormProps, CertificateTableProps, CertificateRow, CertificateRow, row, toCertificate(), getPublishedCertificates(), Certificate

### Community 11 - "experiences/server/queries.ts"
Cohesion: 0.26
Nodes (8): ExperienceFormProps, ExperienceTableProps, ExperienceRow, ExperienceRow, row, toExperience(), getPublishedExperiences(), Experience

### Community 12 - "Organizations Feature Vertical"
Cohesion: 0.27
Nodes (11): organizationFormSchema, OrganizationFormValues, valid, createOrganization(), deleteOrganization(), invalidInput(), ParsedOrganization, toColumns() (+3 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.06
Nodes (32): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, next-themes@^0.4.6 (+24 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.16
Nodes (19): AdminDashboardLayout(), AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, ContactForm(), contactFormSchema, ContactFormValues (+11 more)

### Community 15 - "Badge"
Cohesion: 0.16
Nodes (26): AboutPage(), metadata, revalidate, LanguageList(), OrganizationCard(), AboutContent(), AboutContentProps, principles (+18 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "server-only"
Cohesion: 0.33
Nodes (4): server-only@^0.0.1, @supabase/supabase-js@^2.117.2, server-only, @supabase/supabase-js

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "SkillTable.tsx"
Cohesion: 0.30
Nodes (26): CertificateRow(), CertificateTable(), EducationRow(), EducationTable(), ExperienceRow(), ExperienceTable(), LanguageRow(), LanguageTable() (+18 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "database.ts"
Cohesion: 0.09
Nodes (20): EducationRow, row, LanguageRow, LanguageRow, row, OrganizationRow, row, Row (+12 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "Vitest Environment Setup"
Cohesion: 0.16
Nodes (9): @testing-library/jest-dom@^7.0.1, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, vitest@^5.0.3, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, vitest (+1 more)

### Community 27 - "createPublicClient"
Cohesion: 0.20
Nodes (13): EducationFormProps, EducationTableProps, EducationRow, toEducation(), getPublishedEducation(), Education, toLanguage(), getPublishedLanguages() (+5 more)

### Community 28 - "ESLint Configuration"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.3.8, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 29 - "Project Scaffold Script"
Cohesion: 0.73
Nodes (5): keep(), mk(), mkf(), page(), scaffold-portfolio.sh script

### Community 30 - "Dynamic OpenGraph Image Route"
Cohesion: 0.33
Nodes (3): alt, contentType, size

### Community 31 - "Public SVG Brand Icons"
Cohesion: 0.40
Nodes (5): File / Document Icon (16px monochrome UI glyph), Globe / World Icon (16px monochrome UI glyph), Next.js Wordmark Logo (black horizontal logotype, 394x80), Vercel Triangle Mark (white on transparent, 1155x1000), Browser Window Icon (16px monochrome UI glyph with three dots)

### Community 33 - "AdminSidebar.tsx"
Cohesion: 0.19
Nodes (19): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), isActivePath() (+11 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.23
Nodes (19): requireAdmin(), uploadProfileImage(), uploadProfileResume(), cleanList(), createProject(), createProjectImage(), deleteProject(), deleteProjectImage() (+11 more)

### Community 46 - "react"
Cohesion: 0.17
Nodes (9): react, metadata, AdminPageHeaderProps, ProjectCoverFallback(), ProjectCoverFallbackProps, StackList(), StackListProps, StatusToggleProps (+1 more)

### Community 47 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.22
Nodes (11): ConfirmDeleteDialogProps, { refreshMock }, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay() (+3 more)

### Community 48 - "app/layout.tsx"
Cohesion: 0.15
Nodes (10): jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider(), siteConfig, buildMetadata() (+2 more)

### Community 49 - "components/index.ts"
Cohesion: 0.16
Nodes (17): ContactPage(), metadata, metadata, ProjectsPage(), revalidate, ContactInfoCard(), FieldError(), FieldErrorProps (+9 more)

### Community 50 - "patterns.test.tsx"
Cohesion: 0.16
Nodes (13): BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, toAbsoluteUrl(), JsonLd(), JsonLdProps, aspectClasses, MediaFrame() (+5 more)

### Community 51 - "storage.ts"
Cohesion: 0.18
Nodes (14): DOCUMENT_ACCEPT, DOCUMENT_MIME_TO_EXTENSION, IMAGE_MIME_TO_EXTENSION, MAX_UPLOAD_BYTES, MEDIA_BUCKET, assertAllowedFile(), buildObjectPath(), extensionFor() (+6 more)

### Community 52 - "projects/server/queries.ts"
Cohesion: 0.21
Nodes (12): ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow, ProjectRow, toProject() (+4 more)

### Community 53 - "certificates/server/actions.ts"
Cohesion: 0.28
Nodes (11): certificateFormSchema, CertificateFormValues, valid, createCertificate(), deleteCertificate(), invalidInput(), ParsedCertificate, toColumns() (+3 more)

### Community 54 - "skills/server/actions.ts"
Cohesion: 0.27
Nodes (11): skillFormSchema, SkillFormValues, valid, createSkill(), deleteSkill(), invalidInput(), toColumns(), toErrorMessage() (+3 more)

### Community 55 - "education/server/actions.ts"
Cohesion: 0.30
Nodes (10): educationFormSchema, EducationFormValues, valid, createEducation(), deleteEducation(), invalidInput(), ParsedEducation, toColumns() (+2 more)

### Community 56 - "experiences/server/actions.ts"
Cohesion: 0.30
Nodes (10): experienceFormSchema, ExperienceFormValues, valid, createExperience(), deleteExperience(), invalidInput(), ParsedExperience, toColumns() (+2 more)

### Community 57 - "SiteHeader.tsx"
Cohesion: 0.29
Nodes (7): PublicLayout(), SkipLink(), isActivePath(), SiteHeader(), emptySubscribe(), ThemeSwitch(), ThemeSwitchProps

### Community 58 - "revalidateAbout"
Cohesion: 0.35
Nodes (9): createLanguage(), deleteLanguage(), invalidInput(), ParsedLanguage, toColumns(), toggleLanguagePublish(), updateLanguage(), revalidateAbout() (+1 more)

### Community 59 - "createServerSupabase"
Cohesion: 0.49
Nodes (9): AdminDashboardPage(), countCertificates(), countEducation(), countExperiences(), countLanguages(), countOrganizations(), countProjects(), countSkills() (+1 more)

### Community 60 - "HeroSection.tsx"
Cohesion: 0.50
Nodes (4): ProfileFormProps, HERO_STACK, HeroSectionProps, Profile

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 299 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Button` to `utils.ts`, `server.ts`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Badge`, `SkillTable.tsx`, `Dynamic OpenGraph Image Route`, `AdminSidebar.tsx`, `react`, `ConfirmDeleteDialog.tsx`, `app/layout.tsx`, `components/index.ts`, `patterns.test.tsx`, `skills/server/actions.ts`, `SiteHeader.tsx`, `createServerSupabase`, `HeroSection.tsx`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0861952861952862 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `Vitest Environment Setup` to `profile/server/actions.ts`, `utils.ts`, `Button`, `languages/index.ts`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `certificates/server/queries.ts`, `experiences/server/queries.ts`, `Organizations Feature Vertical`, `Contact & Message Inbox`, `database.ts`, `@vitejs/plugin-react`, `ConfirmDeleteDialog.tsx`, `patterns.test.tsx`, `storage.ts`, `projects/server/queries.ts`, `certificates/server/actions.ts`, `skills/server/actions.ts`, `education/server/actions.ts`, `experiences/server/actions.ts`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `Button` be split into smaller, more focused modules?**
  _Cohesion score 0.0679519595448799 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `AdminSidebar.tsx`, `Button`, `languages/index.ts`, `utils.ts`, `Admin Shell & Layout Chrome`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Badge`, `app/layout.tsx`, `components/index.ts`, `patterns.test.tsx`, `ConfirmDeleteDialog.tsx`, `SkillTable.tsx`, `SiteHeader.tsx`, `HeroSection.tsx`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `Admin Shell & Layout Chrome` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._