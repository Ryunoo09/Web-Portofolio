# Graph Report - portfolio  (2026-10-27)

## Corpus Check
- 249 files · ~54,931 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 33 file(s) not represented in the graph (top: (none) 29, .example 1, .ico 1)

## Summary
- 1056 nodes · 3397 edges · 45 communities (33 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 40 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Admin Server Actions & Auth
- Public Pages & UI Sections
- Admin Tables & UI Primitives
- Admin Forms & Input Controls
- Admin Shell & Layout Chrome
- Profile Editing & Media Upload
- Project Docs & Architecture Rules
- GitHub Deploy Workflow
- Dev Dependencies Manifest
- Skills Feature Vertical
- Certificates Feature Vertical
- Experiences Feature Vertical
- Organizations Feature Vertical
- Runtime Dependencies Manifest
- Contact & Message Inbox
- Profile Aggregation & Cards
- Docker Compose Deployment
- Projects Data Access Layer
- GitHub CI Quality Workflow
- TypeScript Compiler Config
- About Page Composition
- shadcn Component Registry Config
- Playwright E2E & A11y Tests
- Supabase Clients & DB Types
- Languages Feature Vertical
- NPM Scripts & Tooling
- Vitest Environment Setup
- Education Data Access Layer
- ESLint Configuration
- Project Scaffold Script
- Dynamic OpenGraph Image Route
- Public SVG Brand Icons
- Vitest Configuration
- pnpm Workspace Build Approvals
- Prettier Configuration
- Health Check API Route
- Commitlint Configuration
- PostCSS Configuration

## God Nodes (most connected - your core abstractions)
1. `cn()` - 83 edges
2. `Button()` - 81 edges
3. `createServerSupabase()` - 81 edges
4. `next` - 65 edges
5. `react` - 57 edges
6. `requireAdmin()` - 50 edges
7. `AdminPageHeader()` - 50 edges
8. `lucide-react` - 48 edges
9. `Badge()` - 31 edges
10. `vitest` - 29 edges

## Surprising Connections (you probably didn't know these)
- `getAllEducation()` --indirect_call--> `toEducation()`  [INFERRED]
  src/features/education/server/queries.ts → src/features/education/server/mappers.ts
- `getAllLanguages()` --indirect_call--> `toLanguage()`  [INFERRED]
  src/features/languages/server/queries.ts → src/features/languages/server/mappers.ts
- `getPublishedOrganizations()` --indirect_call--> `toOrganization()`  [INFERRED]
  src/features/organizations/server/queries.ts → src/features/organizations/server/mappers.ts
- `ProfileFormProps` --references--> `Profile`  [EXTRACTED]
  src/features/profile/components/admin/ProfileForm.tsx → src/features/profile/types.ts
- `ExperienceTimelineProps` --references--> `Experience`  [EXTRACTED]
  src/features/profile/components/public/ExperienceTimeline.tsx → src/features/profile/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Production Request Path and Deploy Flow** — deploy_pipeline, deploy_npm_net, deploy_nginx_proxy_manager, deploy_cloudflare_tls, deploy_healthcheck_ipv4 [EXTRACTED 1.00]
- **Layered Architecture and Server Action Convention** — handoff_architecture_rules, handoff_server_action_pattern, readme_architecture_rules, readme_server_action_pattern, readme_admin_defense_layers [INFERRED 0.85]
- **Visual Identity System (palette, type, spacing, anti-patterns)** — design_system_portfolio_master_color_palette, design_system_portfolio_master_typography, design_system_portfolio_master_spacing, design_system_portfolio_master_anti_patterns, handoff_design_typography [EXTRACTED 1.00]

## Communities (45 total, 12 thin omitted)

### Community 0 - "Admin Server Actions & Auth"
Cohesion: 0.06
Nodes (78): zod, AdminDashboardLayout(), AdminDashboardPage(), AdminProjectEditPage(), AdminLoginPage(), metadata, LoginForm(), LoginInput (+70 more)

### Community 1 - "Public Pages & UI Sections"
Cohesion: 0.05
Nodes (61): react, metadata, jakarta, jetbrainsMono, metadata, RootLayout(), spaceGrotesk, ContactPage() (+53 more)

### Community 2 - "Admin Tables & UI Primitives"
Cohesion: 0.09
Nodes (62): nextConfig, lucide-react, next, AdminCertificatesPage(), AdminEducationPage(), AdminExperiencesPage(), AdminLanguagesEditPage(), AdminLanguagesPage() (+54 more)

### Community 3 - "Admin Forms & Input Controls"
Cohesion: 0.09
Nodes (34): @hookform/resolvers, radix-ui, react-hook-form, sonner, AdminEducationEditPage(), AdminEducationNewPage(), AdminLanguagesNewPage(), AdminProjectNewPage() (+26 more)

### Community 4 - "Admin Shell & Layout Chrome"
Cohesion: 0.08
Nodes (34): AdminSidebar(), AdminSidebarProps, isActive(), links, NavLinks(), NavProps, UtilityLinks(), CardAction() (+26 more)

### Community 5 - "Profile Editing & Media Upload"
Cohesion: 0.08
Nodes (33): ProfileForm(), ProfileFormProps, profileFormSchema, ProfileFormValues, valid, invalidInput(), ParsedProfile, updateProfile() (+25 more)

### Community 6 - "Project Docs & Architecture Rules"
Cohesion: 0.05
Nodes (28): CLAUDE.md @AGENTS.md Include, Cloudflare Proxied DNS with Full (strict) TLS, Nginx Proxy Manager Reverse Proxy Host, npm-net Shared Docker Network, CI/CD Deploy Pipeline (push, Actions, GHCR, SSH, compose), IMAGE_TAG Rollback by Commit SHA, Dedicated ed25519 Deploy Key, Midnight Navy + Champagne Gold Palette (+20 more)

### Community 7 - "GitHub Deploy Workflow"
Cohesion: 0.05
Nodes (44): if, outputs, permissions, runs-on, steps, concurrency, cancel-in-progress, group (+36 more)

### Community 8 - "Dev Dependencies Manifest"
Cohesion: 0.07
Nodes (38): next-themes@^0.4.6, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, husky@^9.1.7, jsdom@^30.1.2, lint-staged@^17.6.0, prettier@^3.9.9 (+30 more)

### Community 9 - "Skills Feature Vertical"
Cohesion: 0.12
Nodes (23): vitest, metadata, revalidate, SkillsPage(), SkillFormProps, SkillTableProps, SkillCard(), SkillCardProps (+15 more)

### Community 10 - "Certificates Feature Vertical"
Cohesion: 0.13
Nodes (25): AdminCertificateEditPage(), AdminCertificateNewPage(), CertificateForm(), CertificateFormProps, CertificateTableProps, certificateFormSchema, CertificateFormValues, valid (+17 more)

### Community 11 - "Experiences Feature Vertical"
Cohesion: 0.14
Nodes (22): AdminExperienceEditPage(), AdminExperienceNewPage(), ExperienceForm(), ExperienceFormProps, ExperienceTableProps, experienceFormSchema, ExperienceFormValues, valid (+14 more)

### Community 12 - "Organizations Feature Vertical"
Cohesion: 0.14
Nodes (22): AdminOrganizationsEditPage(), AdminOrganizationsNewPage(), OrganizationForm(), OrganizationFormProps, OrganizationTableProps, OrganizationCardProps, organizationFormSchema, OrganizationFormValues (+14 more)

### Community 13 - "Runtime Dependencies Manifest"
Cohesion: 0.06
Nodes (31): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, cn@^0.4.0, @hookform/resolvers@^5.9.1, lucide-react@^1.52.0, next@16.3.8, radix-ui@^1.7.0 (+23 more)

### Community 14 - "Contact & Message Inbox"
Cohesion: 0.19
Nodes (16): AdminMessagesPage(), formatDateTime(), MessageInbox(), MessageInboxProps, contactFormSchema, ContactFormValues, deleteMessage(), markMessageRead() (+8 more)

### Community 15 - "Profile Aggregation & Cards"
Cohesion: 0.19
Nodes (18): AdminProfilePage(), CertificateCardProps, EducationCardProps, Row, ProfileRow, toCertificate(), toEducation(), toExperience() (+10 more)

### Community 16 - "Docker Compose Deployment"
Cohesion: 0.08
Nodes (23): interval, retries, start_period, test, timeout, driver, options, networks (+15 more)

### Community 17 - "Projects Data Access Layer"
Cohesion: 0.15
Nodes (16): @supabase/supabase-js@^2.117.2, @supabase/supabase-js, ProjectImageFields, ProjectImageRow, ProjectRow, ProjectSkill, ProjectWithRelations, ProjectImageRow (+8 more)

### Community 18 - "GitHub CI Quality Workflow"
Cohesion: 0.10
Nodes (20): HUSKY, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, SKIP_DB_FETCH, jobs, quality, name (+12 more)

### Community 19 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 20 - "About Page Composition"
Cohesion: 0.22
Nodes (16): AboutPage(), metadata, revalidate, LanguageList(), OrganizationCard(), getPublishedOrganizations(), AboutContent(), AboutContentProps (+8 more)

### Community 21 - "shadcn Component Registry Config"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 22 - "Playwright E2E & A11y Tests"
Cohesion: 0.13
Nodes (7): publicPages, hasCredentials, TINY_PNG, @axe-core/playwright@^4.14.0, @playwright/test@^1.63.0, @axe-core/playwright, @playwright/test

### Community 23 - "Supabase Clients & DB Types"
Cohesion: 0.14
Nodes (11): @supabase/ssr@^0.12.7, @supabase/ssr, CompositeTypes, Constants, DatabaseWithoutInternals, DefaultSchema, Enums, Json (+3 more)

### Community 24 - "Languages Feature Vertical"
Cohesion: 0.23
Nodes (9): LanguageFormProps, LanguageTableProps, LanguageListProps, LanguageRow, LanguageRow, row, toLanguage(), getPublishedLanguages() (+1 more)

### Community 25 - "NPM Scripts & Tooling"
Cohesion: 0.15
Nodes (13): scripts, build, db:types, dev, format, format:check, lint, prepare (+5 more)

### Community 26 - "Vitest Environment Setup"
Cohesion: 0.17
Nodes (7): @testing-library/jest-dom@^7.0.1, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.7, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, { refreshMock }

### Community 27 - "Education Data Access Layer"
Cohesion: 0.31
Nodes (6): EducationRow, EducationRow, row, toEducation(), getPublishedEducation(), withOfflineFallback()

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

### Community 34 - "pnpm Workspace Build Approvals"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

## Knowledge Gaps
- **12 isolated node(s):** `CLAUDE.md @AGENTS.md Include`, `Cloudflare Proxied DNS with Full (strict) TLS`, `Dedicated ed25519 Deploy Key`, `IMAGE_TAG Rollback by Commit SHA`, `StatusToggle Switch for Admin Tables` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 287 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Admin Tables & UI Primitives` to `Admin Server Actions & Auth`, `Public Pages & UI Sections`, `Admin Forms & Input Controls`, `Admin Shell & Layout Chrome`, `Profile Editing & Media Upload`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Certificates Feature Vertical`, `Experiences Feature Vertical`, `Organizations Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Profile Aggregation & Cards`, `About Page Composition`, `Supabase Clients & DB Types`, `Dynamic OpenGraph Image Route`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `CLAUDE.md @AGENTS.md Include`, `Cloudflare Proxied DNS with Full (strict) TLS`, `Dedicated ed25519 Deploy Key` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Admin Server Actions & Auth` be split into smaller, more focused modules?**
  _Cohesion score 0.056767676767676765 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `Skills Feature Vertical` to `Admin Server Actions & Auth`, `Vitest Configuration`, `Admin Tables & UI Primitives`, `Admin Forms & Input Controls`, `Profile Editing & Media Upload`, `Dev Dependencies Manifest`, `Certificates Feature Vertical`, `Experiences Feature Vertical`, `Organizations Feature Vertical`, `Contact & Message Inbox`, `Profile Aggregation & Cards`, `Projects Data Access Layer`, `Languages Feature Vertical`, `Vitest Environment Setup`, `Education Data Access Layer`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Should `Public Pages & UI Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.051096491228070175 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Public Pages & UI Sections` to `Admin Server Actions & Auth`, `Admin Tables & UI Primitives`, `Admin Forms & Input Controls`, `Admin Shell & Layout Chrome`, `Profile Editing & Media Upload`, `Dev Dependencies Manifest`, `Skills Feature Vertical`, `Certificates Feature Vertical`, `Organizations Feature Vertical`, `Runtime Dependencies Manifest`, `Contact & Message Inbox`, `Profile Aggregation & Cards`, `About Page Composition`, `Languages Feature Vertical`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `Admin Tables & UI Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.09448638755433539 - nodes in this community are weakly interconnected._