# AGENTS.md

Instructions for AI coding agents (and humans in a hurry) working in this repository.

## What this is

The Parent Guidance website prototype and the **code source of truth of its design system**. React 18,
TypeScript (strict), Vite 6, Tailwind CSS 4, React Router 7, `motion/react`. No backend: content is typed
data in `src/content`, forms are simulated.

Read before changing anything: [`docs/system/README.md`](./docs/system/README.md) (architecture and
"Build a page"). Do not use Figma as a reference for implementation details; the code and `docs/system` are
the reference.

## Commands

```bash
pnpm install          # Node 20+, pnpm 10 (corepack enable)
pnpm dev              # http://localhost:5173
pnpm check            # typecheck + lint + tokens + design rules + docs + unit tests + build — must pass
pnpm test:e2e         # Playwright + axe on every route (CI runs it too)
pnpm tokens           # after editing tokens/pg.tokens.json
pnpm format           # Prettier (with the Tailwind class sorter)
```

## Map

| Path | Contains |
|---|---|
| `tokens/pg.tokens.json` | Design tokens (source). `src/styles/tokens.css` is generated — never edit it by hand. |
| `src/components/ui` | Primitives: Button, Field, SearchField, Select, Dialog, Tabs, AccordionItem, Badge, Avatar, Notice… |
| `src/components/cards` | UnifiedCard, QuestionCard, ResourceCard, EventRow |
| `src/components/patterns` | FilterBar, SubmitQuestionDialog, SeriesCalendar, EventModal, LessonOutline… |
| `src/components/layout` | PageShell (skip link, Navbar, `<main>`, Footer), Section, Container |
| `src/sections` | Page sections; each takes one typed `content` prop |
| `src/content` | All copy, images, links and lists (typed; CMS-shaped) |
| `src/app` | Pages (`*Page.tsx`) and the router (`App.tsx`) |
| `docs/system` | Docs for all of the above: foundations, layout, content, components, sections, pages |

## How to make changes

- **Change copy or data:** edit `src/content/<page>.ts`. Do not put copy in components or pages.
- **New page:** follow [Build a page](./docs/system/README.md#build-a-page); write its recipe in
  `docs/system/pages/`.
- **New visual pattern:** create a section in `src/sections` (or a component in the right
  `src/components/*` folder), document it in `docs/system/`, then use it from the page.
- **New token:** add it to `tokens/pg.tokens.json` with a `$description`, run `pnpm tokens`.

## Hard rules (CI enforces most of them)

- Tokens only: `bg-pg-*`, `text-pg-*`, `rounded-pg-*`, `shadow-pg-*`, Tailwind's 4px spacing scale. No hex,
  no `gray-*`, no `py-2.5`, no `mt-[13px]`. Exceptions need `// design-rules-ignore` and a reason.
- Small colored text uses `teal-dark`, never `teal`; never white text on `sage`.
- Pages never render `<main>`, `Navbar` or `Footer`. The first section uses `Section belowNav` (or the
  page starts with `Breadcrumb`).
- Every input has a label (`Field`, `SearchField label`); icon-only buttons have `aria-label`; decorative
  icons and images are hidden (`aria-hidden`, `alt=""`).
- Sort/filter menus are native `<select>` (`Select size="compact"`), never a fake listbox.
- Dialogs use `Dialog` (or `useModal` + a portal). Never hand-roll focus traps.
- Lists of cards are `<ul>/<li>`. Result counts are announced with `role="status"`.
- Detail pages: unknown id → `NotFoundPage`; per-item state keyed by id (`key={item.id}`).
- Imports: `@/` alias; icons only from `@/components/ui/icons`; class merging with `cn()` from `@/lib/cn`.
- New component or section → a doc in `docs/system` (`pnpm check:docs` fails otherwise).

## Definition of done

`pnpm check` and `pnpm test:e2e` green; new routes added to `tests/e2e/a11y.spec.ts`; the page looks right at 375, 768 and 1280px; it works with the keyboard only (Tab,
Shift+Tab, Enter, Space, Escape, arrow keys in tabs and selects); docs updated.
