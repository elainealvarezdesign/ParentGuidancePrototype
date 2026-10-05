# Prototype — links and deployment

## Links

- **Live:** https://parent-guidance-prototype.netlify.app/
- **Code:** https://github.com/elainealvarezdesign/ParentGuidancePrototype (branch `main`)

## Tech stack

React + Vite + Tailwind CSS, starting from a Figma Make export. Design tokens (colors, typography, radii,
shadows) live in `src/styles/tokens.css`.

## Deployment

- Hosted on **Netlify**, connected to the repo's `main` branch.
- **Every push to `main` deploys automatically** to the same URL within a minute or two.
- Build settings live in `netlify.toml` (command `pnpm build`, folder `dist`, plus a rule so inner pages
  don't return a 404 on reload).

## Running it locally

```
pnpm install
pnpm dev
```

## Main pages

Home · Mental Health Series (events and topics) · Parent Coaching · On-Demand Courses (course and lesson) ·
Ask a Therapist (listing and detail) · Get Help · Contact Us · Terms of Use · Cookies Policy · Consent Documents.
There are also two alternative homes: `/home-v1` and `/home-v2`.

Every page works at 390, 768, 1024 and 1280px.
