# PG-Live Prototype

Interactive prototype of **Parent Guidance** (parentguidance.org): mental health resources, parent coaching,
on-demand courses, Ask a Therapist and crisis help. Built with React, Vite and Tailwind CSS, starting from a
Figma Make export.

## Links

- **Live prototype:** published on Netlify from the `main` branch. Every push to `main` deploys automatically
  (build settings live in [`netlify.toml`](./netlify.toml)).
- **Figma design system:** [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
- **Original Figma Make file:** [PG-Live Prototype](https://www.figma.com/design/NjTL1IfpXPXpbLuBTHi1R8/PG-Live-Prototype)

## Design guidelines

- English: [`docs/guidelines/en/`](./docs/guidelines/en/README.md) · PDFs in [`docs/guidelines/pdf/`](./docs/guidelines/pdf/)
- Español: [`docs/guidelines/`](./docs/guidelines/README.md) · PDF en [`docs/guidelines/pdf/es/`](./docs/guidelines/pdf/es/)
- Figma ↔ prototype sync status: [`docs/figma-sync/PENDIENTES.md`](./docs/figma-sync/PENDIENTES.md)
- Design tokens: [`src/styles/tokens.css`](./src/styles/tokens.css)

## Running the code

```bash
pnpm install   # or: npm i
pnpm dev       # start the development server
pnpm build     # production build into dist/
```
