# Graph Report - portfolio  (2026-10-28)

## Corpus Check
- 246 files · ~55,550 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1058 nodes · 3422 edges · 51 communities (39 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15dd1a3c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- createServerSupabase
- Public Pages & UI Sections
- Admin Tables & UI Primitives
- SkillForm.tsx
- Admin Shell & Layout Chrome
- react
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- createPublicClient
- Experiences Feature Vertical
- Organizations Feature Vertical
- Runtime Dependencies Manifest
- Contact & Message Inbox
- Badge
- Docker Compose Deployment
- server-only
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- organizations/server/queries.ts
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- Supabase Clients & DB Types
- vitest
- NPM Scripts & Tooling
- Vitest Environment Setup
- Education Data Access Layer
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
- sonner
- ConfirmDeleteDialog.tsx
- app/layout.tsx
- utils.ts
- admin/layout.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 83 edges
2. `Button()` - 82 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 65 edges
5. `react` - 57 edges
6. `requireAdmin()` - 50 edges
7. `AdminPageHeader()` - 50 edges
8. `lucide-react` - 49 edges
9. `Badge()` - 32 edges
10. `vitest` - 31 edges

## Surprising Connections (you probably didn't know these)
- `getAllCertificates()` --indirect_call--> `toCertificate()`  [INFERRED]
  src/features/certificates/server/queries.ts → src/features/certificates/server/mappers.ts
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getAllOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts
- `HeroSectionProps` --references--> `Profile`  [EXTRACTED]
  src/features/profile/components/public/HeroSection.tsx → src/features/profile/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]

## Communities (51 total, 12 thin omitted)

### Community 0 - "createServerSupabase"
Cohesion: 0.05
Nodes (85): zod, AdminCertificateNewPage(), AdminEducationNewPage(), AdminDashboardPage(), requireAdmin(), CertificateForm(), certificateFormSchema, CertificateFormValues (+77 more)

### Community 1 - "Public Pages & UI Sections"
Cohesion: 0.06
Nodes (58): ContactPage(), metadata, PublicLayout(), HomePage(), revalidate, metadata, ProjectsPage(), revalidate (+50 more)

### Community 2 - "Admin Tables & UI Primitives"
Cohesion: 0.11
Nodes (56): nextConfig, lucide-react, next, AdminCertificateEditPage(), AdminCertificatesPage(), AdminEducationEditPage(), AdminEducationPage(), AdminExperiencesPage() (+48 more)

### Community 3 - "SkillForm.tsx"
Cohesion: 0.10
Nodes (34): @hookform/resolvers, react-hook-form, AdminLanguagesEditPage(), AdminSkillEditPage(), AdminSkillNewPage(), LanguageForm(), LanguageFormProps, LanguageTableProps (+26 more)

### Community 4 - "Admin Shell & Layout Chrome"
Cohesion: 0.12
Nodes (19): radix-ui@^1.7.0, radix-ui, CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle() (+11 more)

### Community 5 - "react"
Cohesion: 0.21
Nodes (12): react, AdminLoginPage(), metadata, initialState, LoginForm(), login(), ContactForm(), PROJECT_TYPES (+4 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9, prettier-plugin-tailwindcss@^0.8.1 (+30 more)

### Community 9 - "Skills Feature Vertical"
Cohesion: 0.15
Nodes (19): metadata, revalidate, SkillsPage(), ProjectFormProps, SkillFormProps, SkillTableProps, SkillCardProps, groupSkillsByCategory() (+11 more)

### Community 10 - "createPublicClient"
Cohesion: 0.22
Nodes (11): CertificateFormProps, CertificateTableProps, CertificateRow, toCertificate(), getPublishedCertificates(), Certificate, LanguageRow, toLanguage() (+3 more)

### Community 11 - "Experiences Feature Vertical"
Cohesion: 0.20
Nodes (13): AdminExperienceEditPage(), AdminExperienceNewPage(), ExperienceForm(), ExperienceFormProps, ExperienceTableProps, experienceFormSchema, ExperienceFormValues, valid (+5 more)

### Community 12 - "Organizations Feature Vertical"
Cohesion: 0.18
Nodes (18): AdminOrganizationsEditPage(), AdminOrganizationsNewPage(), OrganizationForm(), OrganizationFormProps, OrganizationTableProps, OrganizationCardProps, organizationFormSchema, OrganizationFormValues (+10 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.07
Nodes (27): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, react@19.2.8 (+19 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.23
Nodes (14): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, contactFormSchema, ContactFormValues, deleteMessage(), markMessageRead() (+6 more)

### Community 15 - "Badge"
Cohesion: 0.11
Nodes (37): AdminProfilePage(), AboutPage(), metadata, revalidate, LanguageList(), OrganizationCard(), ProfileFormProps, AboutContent() (+29 more)

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

### Community 20 - "organizations/server/queries.ts"
Cohesion: 0.36
Nodes (5): OrganizationRow, OrganizationRow, row, toOrganization(), getPublishedOrganizations()

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "Supabase Clients & DB Types"
Cohesion: 0.10
Nodes (18): @supabase/ssr@^0.12.7, @supabase/ssr, CertificateRow, row, ContactMessageRow, row, ExperienceRow, row (+10 more)

### Community 24 - "vitest"
Cohesion: 0.24
Nodes (5): vitest, LanguageRow, row, getSkillLevelLabel(), SKILL_LEVELS

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "Vitest Environment Setup"
Cohesion: 0.17
Nodes (7): @testing-library/jest-dom@^7.0.1, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, { refreshMock }

### Community 27 - "Education Data Access Layer"
Cohesion: 0.26
Nodes (8): EducationFormProps, EducationTableProps, EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), Education

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
Cohesion: 0.12
Nodes (24): AdminDashboardLayout(), AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks() (+16 more)

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 45 - "projects/server/actions.ts"
Cohesion: 0.17
Nodes (21): AdminProjectEditPage(), AdminProjectNewPage(), ProjectForm(), GalleryItem(), ProjectGalleryManager(), cleanList(), createProject(), createProjectImage() (+13 more)

### Community 46 - "sonner"
Cohesion: 0.23
Nodes (8): sonner@^2.0.8, sonner, ConfirmDeleteDialogProps, ImageUploadFieldProps, StatusToggleProps, { refreshMock }, Switch(), ActionResult

### Community 47 - "ConfirmDeleteDialog.tsx"
Cohesion: 0.30
Nodes (9): Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal(), DialogTitle() (+1 more)

### Community 48 - "app/layout.tsx"
Cohesion: 0.22
Nodes (8): next-themes@^0.4.6, next-themes, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ThemeProvider()

### Community 49 - "utils.ts"
Cohesion: 0.27
Nodes (5): BulletPointsProps, PageContainerProps, SectionHeadingProps, slugify(), toListItems()

## Knowledge Gaps
- **12 isolated node(s):** `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)`, `Cloudflare Proxied DNS with Full (strict) TLS`, `IMAGE_TAG Rollback by Commit SHA` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 287 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Admin Tables & UI Primitives` to `createServerSupabase`, `Public Pages & UI Sections`, `SkillForm.tsx`, `react`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Experiences Feature Vertical`, `Organizations Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Badge`, `Supabase Clients & DB Types`, `Dynamic OpenGraph Image Route`, `AdminSidebar.tsx`, `projects/server/actions.ts`, `sonner`, `ConfirmDeleteDialog.tsx`, `app/layout.tsx`, `admin/layout.tsx`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `File / Document Icon (16px monochrome UI glyph)`, `Globe / World Icon (16px monochrome UI glyph)`, `Vercel Triangle Mark (white on transparent, 1155x1000)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `createServerSupabase` be split into smaller, more focused modules?**
  _Cohesion score 0.0520105573668685 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `createServerSupabase`, `Public Pages & UI Sections`, `Admin Tables & UI Primitives`, `SkillForm.tsx`, `react`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Experiences Feature Vertical`, `Organizations Feature Vertical`, `sonner`, `Badge`, `utils.ts`, `organizations/server/queries.ts`, `Supabase Clients & DB Types`, `Vitest Environment Setup`, `Education Data Access Layer`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `Public Pages & UI Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.05636114911080711 - nodes in this community are weakly interconnected._
- **Why does `createServerSupabase()` connect `createServerSupabase` to `AdminSidebar.tsx`, `Admin Tables & UI Primitives`, `SkillForm.tsx`, `Public Pages & UI Sections`, `react`, `Skills Feature Vertical`, `createPublicClient`, `Experiences Feature Vertical`, `Organizations Feature Vertical`, `projects/server/actions.ts`, `Contact & Message Inbox`, `Badge`, `organizations/server/queries.ts`, `Supabase Clients & DB Types`, `Education Data Access Layer`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Should `Admin Tables & UI Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.10527690700104493 - nodes in this community are weakly interconnected._