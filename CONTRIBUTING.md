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
   | `pnpm check:tokens` | `src/styles/tokens.css` does not match `tokens/pg.tokens.json` |
   | `pnpm check:design` | Raw hex, Tailwind grays, half-step or arbitrary pixel spacing (outside the allow-list) |
   | `pnpm check:docs` | A `docs/system` path in code is missing, a Markdown link is broken, or a component/section has no doc |
   | `pnpm build` | Production build fails |

4. `pnpm format` before committing (Prettier sorts Tailwind classes).
5. Open a pull request using the template; CI runs the same checks.

## Design changes

- **Tokens:** change `tokens/pg.tokens.json` → `pnpm tokens` → commit both files. Then update the Figma
  variables to match (Figma follows the repo).
- **Components and sections:** change the code and its doc in the same PR. If the change is visible, add
  before/after screenshots at 375 and 1280px to the PR.
- **Content:** edit `src/content`; keep within the field limits documented in the content types.

## Review checklist

- Uses existing sections/components; no one-off styling in pages.
- Tokens only; one `<h1>`; headings in order.
- Keyboard and screen reader: labels, focus order, Escape closes overlays, status messages announced.
- Works at 375, 768 and 1280px; no horizontal scroll.
- Docs updated (`docs/system`), `pnpm check` green.
