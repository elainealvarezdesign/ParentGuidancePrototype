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

## Core rule

No color, font size, radius or shadow is set by hand: everything comes from variables and styles. If something
is missing, add it as a variable first (in Figma and in the code's `tokens.css`), then use it.
