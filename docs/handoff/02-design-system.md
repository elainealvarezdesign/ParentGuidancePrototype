# Design System — using the library

**Figma file:** https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG

## What it includes

- **Foundations:** brand, partner logos, colors (primitives and semantic roles), typography (Poppins),
  spacing, radii and elevation, all as variables and styles.
- **Components:** icons (Material Icons Outlined), buttons (5 types × 3 sizes), calendar and events, tags,
  cards, inputs and navigation, content blocks, courses and media.
- **Layouts:** every prototype screen at Desktop (1280), Tablet (768) and Mobile (375).

The file mirrors the prototype: every token has a variable and every pattern has a component.

## Using the library in another file

1. Open the Figma file you are designing in.
2. Go to **Assets → Libraries** (book icon).
3. Find **"Design system - PG"** and enable it.

## Publishing changes

Changes to the library don't reach other files until they are published:
**Assets → Libraries → Publish**, add a description and confirm.

If publishing shows *Invalid assets*, it is usually a component with a property that isn't connected to any
layer: delete the property and publish again.

## Variables

Every variable outside *Primitive Colors* and *Primitive: Unit Scale* points to a primitive, so changing a base
value updates everything that uses it. Values match the prototype code (`src/styles/tokens.css`): colors,
radii, button sizes (36 / 44 / 52px), motion (150 / 220 / 350 / 550ms) and the code type scale
(*Typography → Code Scale*: display, h1, h2, h3, h4, body-lg, body, small, eyebrow).

## Design tokens for development

`parent-guidance.tokens.json` (in the Drive at *02 — Design System → Variables*, and in the repo at `docs/tokens/`) contains all 464 Figma
variables in the W3C Design Tokens format, with aliases kept as references. It can be imported with
Style Dictionary or Tokens Studio. Typography values per breakpoint are under `$extensions["figma.modes"]`.

| Code token | Value | Figma variable |
|---|---|---|
| `pg-navy` | `#1c3243` | Foreground/Primary, Background/Inverse |
| `pg-slate` | `#435766` | Foreground/Secondary, Foreground/Icon |
| `pg-teal` | `#59797d` | Background/Brand, Border/Brand |
| `pg-teal-dark` | `#406064` | Background/Brand Hover, Foreground/Brand, Focus/Ring |
| `pg-sage` | `#90b3b6` | Background/Brand Light |
| `pg-cream` | `#f9f4f1` | Background/Page |
| `pg-cream-dark` | `#f0edeb` | Background/Chip |
| `pg-tint` / `pg-tint-soft` | `#eaf1f1` / `#f0f6f6` | Background/Tint / Background/Tint Soft |
| `pg-line` | `#dee8e9` | Border/Default |
| `pg-success` / `pg-warning` / `pg-error` | `#117a3a` / `#a84b02` / `#932f2f` | Foreground/Positive / Warning / Negative |
| `rounded-pg-sm … 2xl` | 4 / 8 / 12 / 16 / 28px | Corner Radius XS / S / M / L / XL |
| `--pg-dur-micro … reveal` | 150 / 220 / 350 / 550ms | Duration/Micro / Fast / Base / Reveal |
| `<Button size="s/m/l">` | 36 / 44 / 52px | Control/S / M / L |

The full table is in the repo: `docs/tokens/README.md`.

## Core rule

No color, font size, radius or shadow is set by hand: everything comes from variables and styles. If something
is missing, add it as a variable first (in Figma and in the code's `tokens.css`), then use it.
