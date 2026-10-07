# PG-Live Prototype

Interactive prototype of **Parent Guidance** (parentguidance.org): mental health resources, parent coaching,
on-demand courses, Ask a Therapist and crisis help. Built with React, Vite and Tailwind CSS, starting from a
Figma Make export.

## Links

- **Live prototype:** <https://parent-guidance-prototype.netlify.app/> (Netlify, deployed from the `main` branch). Every push to `main` deploys automatically
  (build settings live in [`netlify.toml`](./netlify.toml)).
- **Figma design system:** [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
- **Original Figma Make file:** [PG-Live Prototype](https://www.figma.com/design/NjTL1IfpXPXpbLuBTHi1R8/PG-Live-Prototype)

## Design system

The design system lives in this repository: tokens, components, sections, content and pages are code.

- **Start here:** [`docs/system/`](./docs/system/README.md) — architecture, "Build a page", and docs for every
  component, section and page. Index: [`DESIGN.md`](./DESIGN.md). AI agents: [`AGENTS.md`](./AGENTS.md).
- **Tokens (source):** [`tokens/pg.tokens.json`](./tokens/pg.tokens.json) → `pnpm tokens` → `src/styles/tokens.css`
- **Contributing:** [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## Design guidelines

- English: [`docs/guidelines/`](./docs/guidelines/README.md) · PDFs in [`docs/guidelines/pdf/`](./docs/guidelines/pdf/)
- Spanish: [`docs/guidelines/es/`](./docs/guidelines/es/README.md) · PDFs in [`docs/guidelines/pdf/es/`](./docs/guidelines/pdf/es/)
- Figma ↔ prototype sync status: [`docs/figma-sync/STATUS.md`](./docs/figma-sync/STATUS.md)
- Project handoff: [`docs/handoff/`](./docs/handoff/README.md)
- Figma variables export (mirror of the code tokens): [`docs/tokens/`](./docs/tokens/README.md)

## Running the code

```bash
pnpm install     # or: npm i
pnpm dev         # start the development server
pnpm check       # typecheck, lint, tokens, design rules, docs, build (what CI runs)
pnpm build       # production build into dist/
pnpm preview     # serve the build locally
```

**Developers start here:** [`docs/handoff/DEVELOPER.md`](./docs/handoff/DEVELOPER.md). It covers what is final and
what is simulated, the code map, the routes and the next steps for production.
