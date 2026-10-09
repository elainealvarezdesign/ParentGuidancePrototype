# Agent-friendly handoff pack — Parent Guidance

One page to hand the design to a developer or an AI coding agent. Everything below is in this repository or
linked from it; nothing has to be rebuilt from Figma screenshots.

## 1. See it

| What | Where |
|---|---|
| Interactive prototype | <https://parent-guidance-prototype.netlify.app/> (every route works: navigation, filters, search, forms, dialogs, video) |
| Component catalog | <https://parent-guidance-prototype.netlify.app/storybook/> (every component, section and page, with its content editable) |
| Figma library (mirror of the code) | [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG) |

## 2. Design tokens

| File | Format | Use it for |
|---|---|---|
| [`tokens/pg.tokens.json`](../../tokens/pg.tokens.json) | W3C Design Tokens | **Source of truth.** Palette, color roles, type scale, radius, shadow, widths, motion. `pnpm tokens` generates [`src/styles/tokens.css`](../../src/styles/tokens.css) (CSS variables + Tailwind utilities). |
| [`docs/tokens/parent-guidance.tokens.json`](../tokens/parent-guidance.tokens.json) | W3C Design Tokens (479) | The Figma variables, with aliases and modes (Desktop/Tablet/Mobile). For Style Dictionary, Tokens Studio, WordPress `theme.json`. |

Both files are validated in CI (`pnpm check:tokens`): the CSS must match the JSON, every Figma alias must
resolve, every code color must exist in Figma, and every color role must resolve to the same value as its
Figma variable.

## 3. Roles

Tokens carry intent, not only values:

- **Color roles** — `role.bg.*`, `role.fg.*`, `role.border.*`, `role.focus.*`: page and surface backgrounds,
  primary/secondary/brand text, borders, focus ring, status colors. Each one names its Figma variable
  (*Semantic: Color Roles*). Utilities: `bg-role-bg-page`, `text-role-fg-primary`, `ring-role-focus-ring`.
  Table: [foundations.md → Color roles](../system/foundations.md#color-roles).
- **Type roles** — `text-pg-display`, `h1` … `eyebrow`, each with its use ("page title, one per page",
  "section title"…). In Figma: the `Code/*` text styles. Table: [foundations.md → Type](../system/foundations.md#type).
- **Component roles** — each component and section doc says what it is for, when to use it and what content it
  takes: [components/](../system/components/README.md), [sections/](../system/sections/README.md).
- **Usage rules** — which text/background pairs pass contrast, what never to do (e.g. white text on sage):
  [foundations.md](../system/foundations.md).

## 4. How the site is built

| Read | For |
|---|---|
| [`AGENTS.md`](../../AGENTS.md) | Instructions for AI agents: commands, repo map, hard rules, definition of done. |
| [`docs/system/README.md`](../system/README.md) | Architecture and the step-by-step "Build a page". |
| [`docs/system/content.md`](../system/content.md) | The content model: every text, image and link is typed data in `src/content` (the shape a CMS would return). |
| [`docs/system/pages/`](../system/pages/README.md) | One recipe per page: which sections, in which order, with which content. |
| [`docs/system/layout.md`](../system/layout.md) | Page frame, containers, breakpoints (375 / 768 / 1280). |

## 5. Quality gates

`pnpm check` runs typecheck, lint, token checks, design rules (no raw hex, no off-scale spacing, no arbitrary
type or motion values), docs checks, unit tests and the build. `pnpm test:e2e` runs WCAG 2.1 AA (axe) and
keyboard tests on every route at desktop and mobile. CI runs both on every pull request.

## 6. Building it in WordPress

[WORDPRESS.md](./WORDPRESS.md): tokens → `theme.json` (generated: [`docs/wordpress/`](../wordpress/theme.json)),
section → block table with fields, accessible behavior to keep, and what to reuse as is (plain-CSS tokens, SVG
icons, logos, content).

## 7. Accessibility evidence

Automated: axe and keyboard tests in CI on every route. Screen-reader review and the manual VoiceOver/NVDA
script: [screen-reader-test.md](../accessibility/screen-reader-test.md). Figma vs prototype, page by page:
[PAGE-COMPARISON.md](../figma-sync/PAGE-COMPARISON.md).

## 8. What is simulated

No backend: forms say "Prototype preview: … nothing was sent", media is sample content, and some content is
illustrative. The full list, with owners: [05-open-items.md](./05-open-items.md). Production build notes:
[DEVELOPER.md](./DEVELOPER.md).
