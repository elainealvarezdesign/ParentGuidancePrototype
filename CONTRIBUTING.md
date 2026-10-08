# Contributing

## Setup

Node 20+ and pnpm 10 (`corepack enable`), then `pnpm install` and `pnpm dev`.

## Workflow

1. Branch from `main`. Netlify deploys `main` only; branches do not deploy.
2. Make the change following [`docs/system`](./docs/system/README.md) (and [`AGENTS.md`](./AGENTS.md) for
   the hard rules).
3. Run `pnpm check` locally. It runs, in order:

   | Step | Fails when |
   |---|---|
   | `pnpm typecheck` | TypeScript errors (strict) |
   | `pnpm lint` | ESLint, React hooks and jsx-a11y rules |
   | `pnpm check:tokens` | `src/styles/tokens.css` does not match `tokens/pg.tokens.json`, or the Figma export (`docs/tokens/parent-guidance.tokens.json`) has broken aliases or misses a code color |
   | `pnpm check:design` | Raw hex, Tailwind grays, half-step or arbitrary pixel spacing, arbitrary font size/line height, raw motion values (outside the allow-list) |
   | `pnpm check:docs` | A `docs/system` path in code is missing, a Markdown link is broken, or a component/section has no doc |
   | `pnpm test` | Unit, component and content tests fail (Vitest) |
   | `pnpm build` | Production build fails |

   CI also runs `pnpm test:e2e` (Playwright + axe) in a separate job.

4. `pnpm format` before committing (Prettier sorts Tailwind classes).
5. Open a pull request using the template; CI runs the same checks.

## Tests

| Command | What | Where |
|---|---|---|
| `pnpm test` | Vitest + Testing Library: component behavior (labels, focus, keyboard, dialogs), forms, page states (not found, reset per item), content integrity (ids, slugs, references) | `src/**/*.test.ts(x)` |
| `pnpm test:e2e` | Playwright + axe on the production build: every route passes WCAG 2.1 A/AA, has one `<main>` and one `<h1>`, no horizontal scroll at 1280 and 375px; keyboard flows (skip link, dialog focus trap, seek bar, event pop-up) | `tests/e2e/` |

`pnpm test:e2e` builds and serves the site itself. Locally it uses Playwright's browser, or a preinstalled
Chromium via `PW_CHROMIUM_PATH`. When you add a page, add its route to `tests/e2e/a11y.spec.ts`; when you
add an interactive component, add a test next to it.

## Design changes

- **Tokens:** change `tokens/pg.tokens.json` → `pnpm tokens` → commit both files. Then update the Figma
  variables to match (Figma follows the repo).
- **Components and sections:** change the code, its doc and its story in the same PR (`pnpm storybook` to
  review every state). If the change is visible, add
  before/after screenshots at 375 and 1280px to the PR.
- **Content:** edit `src/content`; keep within the field limits documented in the content types.

## Review checklist

- Uses existing sections/components; no one-off styling in pages.
- Tokens only; one `<h1>`; headings in order.
- Keyboard and screen reader: labels, focus order, Escape closes overlays, status messages announced.
- Works at 375, 768 and 1280px; no horizontal scroll.
- Docs updated (`docs/system`), `pnpm check` green.
