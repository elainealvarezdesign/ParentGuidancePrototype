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
`tailwind-merge` for class merging (`src/lib/cn.ts`).

Each page is a separate chunk loaded on first visit. React, Motion and the icon runtime are split into vendor
chunks.

## Code map

The architecture, the layers and the "Build a page" guide are in [`docs/system/`](../system/README.md).
Short version:

```
tokens/pg.tokens.json      ★ design tokens (source) → pnpm tokens → src/styles/tokens.css (generated)
src/
  main.tsx                 entry
  styles/                  tokens.css (generated), theme.css, accessibility.css, fonts.css
  lib/                     cn() class merging, motion helpers
  components/
    ui/                    ★ primitives: Button, Field, SearchField, Select, Dialog, Tabs, Accordion, Badge, icons…
    cards/                 UnifiedCard, QuestionCard, ResourceCard, EventRow
    patterns/              FilterBar, SubmitQuestionDialog, SeriesCalendar, EventModal, LessonOutline…
    layout/                PageShell (skip link, Navbar, <main>, Footer), Section, Container
    brand/                 Logo, social icons, store badges
  sections/                ★ page sections, each with a typed `content` prop
  content/                 ★ all copy, images, links and lists (typed; the future CMS shape)
  app/
    App.tsx                router only (lazy routes, error element)
    *Page.tsx              one file per route; pages compose sections
  imports/                 images exported from Figma or added for the prototype
docs/
  system/                  ★ design system docs: foundations, layout, content, components, sections, pages
  guidelines/              visual guidelines (EN + ES, Markdown + PDF)
  tokens/                  Figma variables export (W3C JSON) — a mirror, not the source
  figma-sync/              Figma ↔ code sync status and node ledger
AGENTS.md · CONTRIBUTING.md · DESIGN.md
```

## Routes

See the [page map](../system/README.md#page-map): every route with its file and recipe.

## What is simulated

- **Forms:** Contact Us, "Submit a question", newsletter (Home, Topic page) and the state/district selector validate
  locally and show a success state. Nothing is sent anywhere.
- **Data:** everything is typed data in `src/content` (events, topics, Q&A, courses, lessons, legal texts). Search,
  filters and pagination run in the browser.
- **Media:** lesson players animate a progress bar; there is no video source.
- **Language selector:** changes the label only.
- **Calendar download:** real — the `.ics` file is generated in the browser.

Open product and content questions are listed in [`05-open-items.md`](./05-open-items.md).

## Design system rules (enforced in review)

The full rules are in [`DESIGN.md`](../../DESIGN.md) and [`AGENTS.md`](../../AGENTS.md); `pnpm check` enforces most of
them in CI. The essentials:

- Colors, radius, shadows and motion only through `pg-*` tokens. No raw hex, no Tailwind grays.
- Spacing only on the 4px scale, which matches the Figma *Spacing Scale* (`2` 8px, `3` 12px, `4` 16px…). No half
  steps (`1.5`, `2.5`, `3.5`) and no arbitrary `p-[…px]` / `gap-[…px]`. The one exception is a structural offset, not
  spacing: the desktop calendar cell clears the day number (`pt-[42px]`).
- Buttons only through `Button` / `ButtonLink` / `ButtonAnchor` (`variant`, `size`); never restyle them.
- Icons only from `src/components/ui/icons.tsx`.
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
2. Replace the constants in `src/content` with CMS/API data of the same types: events, topics, Q&A, courses,
   legal documents.
3. Wire the forms to real endpoints (each form already has one `onSubmit` to replace) with spam protection.
4. Replace the hot-linked images; put the real video provider inside `MediaPlayer` (keep its API).
5. Extend the test suite (Vitest + Testing Library for components, Playwright + axe for pages) as features land.
