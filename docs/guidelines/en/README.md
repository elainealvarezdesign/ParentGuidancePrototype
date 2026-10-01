# Parent Guidance — Design Guidelines

Guidelines for the **PG-Live** prototype (parentguidance.org), written from the **prototype's real code**
(`src/app`).

- **The visual identity** (colors, typography, radii, shadows, buttons and animation) comes from what the
  prototype already used: the most repeated values became tokens and the one-off values were consolidated.
- **The method:** everything comes from tokens, closed scales, button hierarchy, accessibility and a
  reduced‑motion contract.

> **Status:** the prototype already follows these guidelines (final audit in [section 5.6](./05-audit.md)).
> Every new screen or component must follow them from the start.

## Contents

| # | Guide | Content |
|---|-------|---------|
| 1 | [Foundations](./01-foundations.md) | Palette, contrast, Poppins typography, spacing, radii and shadows |
| 2 | [Buttons](./02-buttons.md) | Styles, sizes, states, the `<Button>` component and accessibility |
| 3 | [Layout](./03-layout.md) | Containers, breakpoints, vertical rhythm, grids and patterns (cards, filter bar, banners, pop-ups, video) |
| 4 | [Motion](./04-motion.md) | Animation with `motion`, durations, easing and reduced‑motion |
| 5 | [Prototype audit](./05-audit.md) | What was fixed, how it was verified and what is still pending |

**PDF version:** [`docs/guidelines/pdf/`](../pdf/) has one PDF per guide plus one with all of them
(`Parent-Guidance-Design-Guidelines-complete.pdf`). They are generated from these `.md` files; when a guide
changes, they need to be generated again. The Spanish version lives in `docs/guidelines/` and its PDFs in `docs/guidelines/pdf/es/`.

## Where everything lives

| File | What it is |
|------|------------|
| [`src/styles/tokens.css`](../../../src/styles/tokens.css) | CSS variables (`--pg-*`) and their Tailwind v4 mapping (`bg-pg-navy`, `rounded-pg-md`, `shadow-pg-card`, `max-w-pg-page`…) |
| [`src/styles/accessibility.css`](../../../src/styles/accessibility.css) | Global visible focus and the reduced‑motion rule |
| [`src/app/components/Button.tsx`](../../../src/app/components/Button.tsx) | `<Button>`, `<ButtonLink>`, `<ButtonAnchor>` and `buttonClass()` |
| [`src/app/components/UnifiedCard.tsx`](../../../src/app/components/UnifiedCard.tsx) | Standard card (resources, courses, help lines) |
| [`src/app/mhs/EventModal.tsx`](../../../src/app/mhs/EventModal.tsx) | Event pop-up (accessible dialog pattern) |
| [`guidelines/Guidelines.md`](../../../guidelines/Guidelines.md) | Short summary for **Figma Make** (the file its AI reads when generating screens) |

## Visual personality

Parent Guidance supports families through sensitive topics (mental health, crisis, parenting). The interface
must feel **warm, calm and trustworthy**:

- Warm cream background, deep navy text and teal/sage accents.
- Soft shapes: rounded corners, subtle navy-tinted shadows, never hard black ones.
- Calm motion: short, gentle entrances, nothing that bounces or blinks.
- Readability first: the audience is parents, often on their phones and under stress.

## Principles

- Token rule: no hex, size or shadow written "by hand"; everything comes from `tokens.css`.
- Closed type and spacing scales; any new value is assigned the nearest step.
- Button hierarchy: one Primary per section, labels that start with a verb, complete states
  (Focus, Loading, Disabled), 44px minimum touch area.
- Grids that degrade in steps (3 → 2 → 1 columns).
- Safe, unhurried motion with duration bands and a mandatory reduced‑motion contract.

## Rule #1

> No color, font size, radius or shadow is written as a loose value (`text-[#1c3243]`, `text-[13px]`,
> `shadow-[…]`, `text-gray-700`). Use the tokens in [`tokens.css`](../../../src/styles/tokens.css).
> If something is missing, first add it as a token here (and in Figma), then use it.

Accepted exceptions: colors inside SVG logos (brand art), course category palettes (data colors) and
reading widths of hero text (`max-w-[480px]`…).

## How to check a screen

1. Review it at **390, 768, 1024 and 1280px**: no horizontal scroll and no squeezed text.
2. Go through it with the keyboard (Tab, Enter, Esc): everything clickable can be reached and shows focus.
3. AA contrast on all text (table in [section 1.1](./01-foundations.md#approved-contrast-combinations)).
4. Buttons use the component, headings follow the scale, no bouncing animations.
