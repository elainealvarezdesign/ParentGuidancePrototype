# DESIGN.md — Parent Guidance

The entry point to the Parent Guidance design system. **The system lives in this repository**: tokens,
components, sections, content and pages are code, and the docs below describe them. Figma mirrors the code.

- **Live prototype:** https://parent-guidance-prototype.netlify.app/ (deploys from `main`)
- **Agent-friendly handoff pack:** [`docs/handoff/AGENT-HANDOFF.md`](./docs/handoff/AGENT-HANDOFF.md) — start here
- **System docs:** [`docs/system/`](./docs/system/README.md)
- **Tokens (source of truth):** [`tokens/pg.tokens.json`](./tokens/pg.tokens.json) → `pnpm tokens` →
  [`src/styles/tokens.css`](./src/styles/tokens.css)
- **Figma library (mirror):** [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)

## Product and tone

Parent Guidance supports families with mental health resources, parent coaching, on-demand courses, Ask a
Therapist and crisis help. The audience is parents, often on a phone and under stress. The UI must feel
**warm, calm and trustworthy**: cream background, deep navy text, teal/sage accents, soft corners,
navy-tinted shadows, gentle motion, and legibility above everything.

Copy is in English, sentence case. Button labels start with a verb ("View course", "Book a session").

## Where to find what

| Question | Doc |
|---|---|
| How is the code organized? How do I build a page? | [docs/system/README.md](./docs/system/README.md) |
| Colors, type, spacing, radius, shadow, motion, icons, accessibility | [foundations.md](./docs/system/foundations.md) |
| Page frame, sections, containers, breakpoints, templates | [layout.md](./docs/system/layout.md) |
| Where content lives and how it is typed | [content.md](./docs/system/content.md) |
| A component's props and rules | [components/](./docs/system/components/README.md) |
| What a section is for and which content it takes | [sections/](./docs/system/sections/README.md) |
| How each page is assembled | [pages/](./docs/system/pages/README.md) |
| Working on the repo (checks, commits, reviews) | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| See every component, section and page live | [Storybook](./docs/system/storybook.md) (`pnpm storybook`, or `/storybook/` on the live site) |
| Instructions for AI coding agents | [AGENTS.md](./AGENTS.md) |
| Handoff status, simulated features, open items | [docs/handoff/](./docs/handoff/README.md) |
| Visual guidelines (PDF, EN/ES) | [docs/guidelines/](./docs/guidelines/README.md) |

## The ten rules

1. Pages compose sections; sections take typed `content` from `src/content`; content is plain data.
2. Only tokens: no raw hex, no Tailwind grays, no half-step or arbitrary spacing (`pnpm check:design`).
3. Use the semantic type utilities (`text-pg-h1`, `text-pg-body`…); one `<h1>` per page.
4. Use `Section` + `Container` for every band; alternate tones instead of divider lines.
5. Use the components: `Button*`, `Field`, `SearchField`, `Select`, `Dialog`, `Tabs`, `AccordionItem`… They
   already handle labels, focus and keyboard.
6. Native `<select>` for sort and filter menus; labelled search inputs; `aria-pressed` chips.
7. Forms validate on submit, focus the first error, and replace themselves with `SuccessMessage`.
8. Detail pages show *not found* for unknown ids and key per-item state by id.
9. External links open in a new tab and say so; Spanish content has `lang="es"`.
10. `pnpm check` passes before every push; new building blocks get a doc in `docs/system/`
    (`pnpm check:docs` enforces it).
