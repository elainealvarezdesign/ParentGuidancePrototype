# Developer handoff

What a developer needs to know before taking over the PG-Live prototype.

## What this repository is

A **working, responsive prototype** of parentguidance.org and the **reference implementation of the PG design
system**. Every screen in Figma (*Layouts – Desktop / Tablet / Mobile*) exists here, built with the same tokens.

It is **not a production app**. There is no backend, CMS, authentication or analytics. Content is hard-coded and
forms only simulate success (see [What is simulated](#what-is-simulated)).

| Treat as final | Treat as placeholder |
|---|---|
| Design tokens (`src/styles/tokens.css`) | All copy, events, Q&A and course data |
| Components and their variants (`Button`, `UnifiedCard`, `EventModal`, legal pages…) | Form submissions and the newsletter |
| Layouts, breakpoints and responsive behavior | Video player (a fake progress bar, no real media) |
| Motion (durations and curves) and accessibility rules | Language selector (UI only, no translations) |
| Icon set (`src/app/components/icons.tsx`) | Remote Unsplash images (see [Assets](#assets)) |

## Run it

Requires Node 20+ and pnpm (`corepack enable`).

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm typecheck   # TypeScript, strict mode — must pass
pnpm build       # production build into dist/
pnpm preview     # serve dist/ locally
```

Deploys: Netlify builds `main` automatically (`netlify.toml`: `pnpm build`, publish `dist`, SPA fallback to
`index.html`).

## Stack

React 18 · TypeScript (strict) · Vite 6 · Tailwind CSS 4 · React Router 7 (data router, lazy routes) · Motion
(`motion/react`) · Material Icons Outlined (`@mui/icons-material`, the only MUI part used). `clsx` +
`tailwind-merge` for class merging (`src/app/utils/cn.ts`).

Each page is a separate chunk loaded on first visit. React, Motion and the icon runtime are split into vendor
chunks.

## Code map

```
src/
  main.tsx                 entry: MUI style-engine provider + global CSS
  styles/
    tokens.css             ★ design tokens (pg-* colors, radius, shadows, motion, widths) → Tailwind theme
    theme.css              base theme variables and element defaults
    accessibility.css      visible focus ring, reduced motion
    fonts.css              Poppins (Google Fonts)
  app/
    App.tsx                router, shared layout (Navbar, Footer, newsletter) and the main home page
    *Page.tsx              one file per route (see the table below)
    components/
      Button.tsx           ★ Button / ButtonLink / ButtonAnchor — the only way to render a button
      UnifiedCard.tsx      ★ resource / course / help-line card
      icons.tsx            ★ every icon, re-exported with project names
    mhs/                   Mental Health Series: events.ts, topics.ts (data), EventModal.tsx, links.ts
    legal/                 Terms / Cookies / Consent: legalContent.ts (data) + shared body and actions
    utils/                 cn() and motion presets
  imports/                 images and SVG paths exported from Figma (referenced by the pages)
docs/
  guidelines/              design guidelines (EN + ES, Markdown + PDF)
  tokens/                  Figma variables as W3C design tokens (JSON)
  figma-sync/              Figma ↔ code sync status and node ledger
DESIGN.md                  ★ one-file reference for building new screens
```

## Routes

| Route | File |
|---|---|
| `/` | `App.tsx` (`HomePage`) |
| `/home-v1`, `/home-v2` | `HomePageV1.tsx`, `HomePageV2.tsx` (alternative homes, pending a product decision) |
| `/mental-health-series` | `MentalHealthSeriesPage.tsx` (state/district selector, then the series) |
| `/mental-health-series/events` | `MentalHealthEventsPage.tsx` (calendar, list, `.ics` download) |
| `/mental-health-series/:slug` | `MentalHealthTopicPage.tsx` (data in `mhs/topics.ts`) |
| `/parent-coaching` | `ParentCoachingPage.tsx` |
| `/on-demand-courses` | `OnDemandCoursesPage.tsx` |
| `/courses/free-yourself-from-limiting-thoughts` (`/lesson/:lessonId`) | `CourseDetailPage.tsx`, `LessonPage.tsx` |
| `/courses/milestones-to-progress` (`/lesson/:lessonId`) | `MilestonesToProgressPage.tsx`, `MilestonesLessonPage.tsx` |
| `/ask-a-therapist` (`/:questionId`) | `AskATherapistPage.tsx`, `QuestionDetailPage.tsx` |
| `/get-help` | `GetHelpPage.tsx` |
| `/contact-us` | `ContactUsPage.tsx` |
| `/terms-of-use`, `/cookies-policy`, `/consent-documents` | `TermsOfUsePage.tsx`, `CookiesPolicyPage.tsx`, `ConsentDocumentsPage.tsx` |
| `*` | `NotFoundPage.tsx` |

## What is simulated

- **Forms:** Contact Us, "Submit a question", newsletter (Home, Topic page) and the state/district selector validate
  locally and show a success state. Nothing is sent anywhere.
- **Data:** events (`mhs/events.ts`), topics (`mhs/topics.ts`), Q&A, courses and lessons are arrays in the page files or
  data modules. Search, filters and pagination run in the browser.
- **Media:** lesson players animate a progress bar; there is no video source.
- **Language selector:** changes the label only.
- **Calendar download:** real — the `.ics` file is generated in the browser.

Open product and content questions are listed in [`05-open-items.md`](./05-open-items.md).

## Design system rules (enforced in review)

The full rules are in [`DESIGN.md`](../../DESIGN.md). The essentials:

- Colors, radius, shadows and motion only through `pg-*` tokens. No raw hex, no Tailwind grays.
- Spacing only on the 4px scale, which matches the Figma *Spacing Scale* (`2` 8px, `3` 12px, `4` 16px…). No half
  steps (`1.5`, `2.5`, `3.5`) and no arbitrary `p-[…px]` / `gap-[…px]`. The two exceptions are structural offsets, not
  spacing: the home hero clears the navbar (`pt-[72px]`) and the desktop calendar cell clears the day number
  (`pt-[42px]`).
- Buttons only through `Button` / `ButtonLink` / `ButtonAnchor` (`variant`, `size`); never restyle them.
- Icons only from `components/icons.tsx`.
- Every interactive element keeps the focus ring and works with the keyboard. Motion respects reduced motion.

Tokens map one-to-one to Figma variables; the table is in [`docs/tokens/README.md`](../tokens/README.md).

## Assets

- Photos in `src/imports/mhs/` come from Pexels ([`CREDITS.md`](../../src/imports/mhs/CREDITS.md)).
- 66 image URLs point to `images.unsplash.com` (hot-linked placeholders). Before production, replace them with
  licensed or owned images served from your own storage.
- Partner and crisis-line logos (`src/imports/get-help-logos/`, partner logos in `src/imports/`) belong to their
  organizations; confirm usage rights before launch.

## Suggested next steps for production

1. Choose the framework and hosting (the pages port cleanly to Next.js or Remix; routes and layouts are 1:1).
2. Move content to a CMS or API: events, topics, Q&A, courses, legal documents.
3. Wire the forms to real endpoints with validation, error states and spam protection.
4. Replace the hot-linked images; add a real video provider for lessons.
5. Add linting (ESLint + `eslint-plugin-jsx-a11y`), component tests, and visual regression against the Figma layouts.
6. Split large files: `App.tsx` holds the layout and the home page; the series and Ask a Therapist pages each hold
   several sub-views.
