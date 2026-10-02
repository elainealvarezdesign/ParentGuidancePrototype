# 1. Foundations

Every value lives in [`tokens.css`](../../../src/styles/tokens.css) as a CSS variable (`--pg-navy`) and as a
Tailwind class (`bg-pg-navy`, `text-pg-slate`…). In inline styles or `motion` props, use the variable:
`style={{ boxShadow: "var(--pg-shadow-card)" }}`, `animate={{ backgroundColor: "var(--pg-teal)" }}`.

## 1.1 Palette

### Brand

| Token | Hex | Tailwind | Use |
|-------|-----|----------|-----|
| Navy | `#1c3243` | `pg-navy` | Headings, primary text, navigation, dark backgrounds, active chip |
| Navy hover | `#284054` | `pg-navy-hover` | Hover on navy elements |
| Slate | `#435766` | `pg-slate` | Body text, descriptions, interface icons |
| Teal | `#59797d` | `pg-teal` | **Action color**: Primary buttons, links, active icons, selection ring |
| Teal dark | `#406064` | `pg-teal-dark` | Hover/pressed for teal actions; small accent text (eyebrows, links, metadata) |
| Sage | `#90b3b6` | `pg-sage` | Decorative accent: color blocks, section-title side bar, large icons, search icons |
| Mist | `#acbcbe` | `pg-mist` | Decorative elements only ("•" separators with `aria-hidden`, inactive dots). **Never text** |
| Amber | `#c8893a` | `pg-amber` | Lesson accent; decorative fill only |
| Live | `#52bd95` | `pg-live` | "Live" dot; decorative only |

### Surfaces and borders

| Token | Hex | Tailwind | Use |
|-------|-----|----------|-----|
| Cream | `#f9f4f1` | `pg-cream` | Default page background; search fields on white bars |
| Cream dark | `#f0edeb` | `pg-cream-dark` | Inactive chips, "Featured" button, dividers on cream |
| White | `#ffffff` | `white` | Cards, panels, filter bars, inputs |
| Tint | `#eaf1f1` | `pg-tint` | Soft surfaces: badges, date blocks, selected state |
| Tint soft | `#f0f6f6` | `pg-tint-soft` | Background of listing sections; row hover |
| Line | `#dee8e9` | `pg-line` | Borders of cards and inputs, dividers |

In Figma these tokens have their own variable in *Semantic: Color Roles*: `pg-cream-dark` → **Background/Chip**,
`pg-tint` → **Background/Tint**, `pg-tint-soft` → **Background/Tint Soft**, `pg-navy-hover` → **Background/Inverse
Hover** and `pg-amber` → **Accent Colors/Amber** (each one aliases its primitive in *Primitive Colors*).

### States

Used in badges, notices and validation. They meet AA on white and cream.

| State | Text / icon | Soft background | Where it is used |
|-------|-------------|-----------------|------------------|
| Success | `#117a3a` `pg-success` | `#d3f7df` `pg-success-soft` | "Guide" badge (with navy text) |
| Warning | `#a84b02` `pg-warning` | `#feeab1` `pg-warning-soft` | "Worksheet" badge, Ask a Therapist legal notice |
| Error | `#932f2f` `pg-error` | `#fdcfcf` `pg-error-soft` | "Tool" badge, form errors |

They match the Figma variables *Success / Warning / Error Colors → Contrast* (text) and *→ Soft* (background).
Each text color on its soft background passes AA (4.69:1 success, 4.8:1 warning, 5.58:1 error); the "Guide"
badge keeps navy text and green for the icon.

### Approved contrast combinations

| Text | Background | Ratio | Allowed for |
|------|------------|-------|-------------|
| Navy | White / Cream / Tint / Line / Sage | 5.9–13.2 | Everything |
| Slate | White / Cream / Tint | 6.6–7.5 | Everything |
| Teal | White | 4.7 | Everything |
| Teal | Cream / Tint | 4.1–4.3 | **Only text ≥ 18px or ≥ 14px bold**; for small text use Teal dark |
| Teal dark | White / Cream / Tint | 6.0–6.8 | Everything |
| White | Teal / Teal dark / Navy | 4.7 / 6.8 / 13.2 | Everything (buttons, badges, dark blocks) |
| Sage | Navy | 5.9 | Secondary text and accents on dark backgrounds |
| ~~Sage / Mist~~ | ~~White / Cream~~ | 2.0–2.3 | **Never as text** |
| ~~White~~ | ~~Sage~~ | 2.3 | **Never**: on sage, text and badges are navy |

### Highlighted blocks

A banner or CTA **inside** a section must stand out from its background: `pg-sage` (navy text, Inverse
button), `pg-navy` (white or sage text, Inverse button) or a white card with a `pg-line` border and the `card`
shadow. Never `pg-tint` on `pg-tint-soft` or `pg-cream-dark` on `pg-cream` (1.04:1, the block disappears).

## 1.2 Typography

**Poppins** is the only typeface (400, 500, 600 and 700). It is applied once on `body` (`tokens.css`) and every
element inherits it, including buttons and inputs: **do not add font classes**. No `font-black` or
`font-light` either: Poppins is only loaded in 400–700.

### Scale

| Token | Mobile → desktop | Tailwind | Weight | Use |
|-------|------------------|----------|--------|-----|
| `display` | 38 → 50px | `text-[38px] md:text-[50px]` | 700 | Main headline of **the home pages** (one per page) |
| `h1` | 28 → 40px | `text-[28px] md:text-[40px]` | 700 (500 in V2) | Page title; titles of featured sections with a colored background ("Need Help Now?", "Join Us!") |
| `h2` | 24px | `text-2xl` | 700 | Section title, banners |
| `h3` | 20px | `text-xl` | 600–700 | Block and panel titles, section labels with a sage bar ("Resource Library"), FAQ questions |
| `h4` | 16px | `text-base` | 700 | Card title |
| `body-lg` | 16px | `text-base` | 400 | Introductions and featured paragraphs |
| `body` | 14px | `text-sm` | 400 | **Default text**, buttons, inputs |
| `small` | 12px | `text-xs` | 400–600 | Metadata, captions, chips, field hints |
| `eyebrow` | 11px | `text-[11px] uppercase` | 600 | Kicker above headings, date labels ("JUL") |

Rules:
- **12px minimum**; 11px only for UPPERCASE text (eyebrows, months in date blocks).
- In Figma, uppercase text uses **Label/XSmall - Bold Caps** (11px, 15% tracking) or **Label/Small - SemiBold
  Caps** (12px, 10%), and quotes use **Body/Medium - Italic**. No component text is left without a style.
- No in-between sizes outside the scale (13, 15, 18, 22, 30, 36px…): use the nearest step.
- Brand emphasis in headlines: one word or phrase in teal *italics* ("Discover *Resources*…"), without
  changing the size.
- About 70 characters per line maximum in long paragraphs (`max-w-pg-reading`, 680px).

## 1.3 Spacing

Tailwind's 4px scale is used. Allowed steps:

| Tailwind | px | Typical use |
|----------|----|-------------|
| `1` / `1.5` | 4 / 6 | Icon ↔ small text |
| `2` | 8 | Gap between inline elements, icon ↔ label, between chips |
| `3` | 12 | Gap in compact lists and filter bars |
| `4` | 16 | Card padding, gap between fields |
| `5` / `6` | 20 / 24 | Panel padding, grid gap, mobile gutter |
| `8` | 32 | Space between blocks |
| `10` / `14` | 40 / 56 | Page side gutter (md / lg) |
| `14` / `16` / `20` | 56 / 64 / 80 | Section vertical padding |

Avoid loose in-between values (`py-3.5`, `px-2.5`) except for optical adjustments inside components.

## 1.4 Radii

| Token | Value | Tailwind | Use |
|-------|-------|----------|-----|
| `sm` | 4px | `rounded-pg-sm` | Checkboxes, minimal elements |
| `md` | 8px | `rounded-pg-md` | **Buttons**, inputs, selects, "Featured" button |
| `lg` | 12px | `rounded-pg-lg` | Small panels, dropdown menus, date blocks |
| `xl` | 16px | `rounded-pg-xl` | **Cards**, pop-ups, banners |
| `2xl` | 28px | `rounded-pg-2xl` | Heroes, featured video, section blocks with a background |
| `full` | 9999px | `rounded-full` | Chips, badges, avatars, dots, pill-shaped search bars |

In the shadcn theme `rounded-lg` is 10px and `rounded-xl` 14px, so the `rounded-pg-*` tokens are always used.

## 1.5 Shadows

Every shadow is **navy-tinted** (`rgba(28,50,67,…)`), never black.

| Token | Value | Use |
|-------|-------|-----|
| `card` | `0 8px 24px rgba(28,50,67,0.06)` | Cards, filter bars, selected controls |
| `card-hover` | `0 8px 24px rgba(28,50,67,0.14)` | Interactive cards on hover; navbar on scroll |
| `overlay` | `0 24px 60px rgba(28,50,67,0.28)` | Pop-ups, modals, floating menus |

Cards use a **`pg-line` border + `card` shadow**. To make something stand out, don't stack stronger shadows: use
the background color (tint, sage or navy).

## 1.6 Icons

- Library: **Material Icons, Outlined style** (`@mui/icons-material`). Other styles (Filled, Rounded, Sharp)
  and other libraries are not mixed in.
- Always import from [`src/app/components/icons.tsx`](../../../src/app/components/icons.tsx), never straight
  from `@mui/icons-material`: `import { Search } from "./components/icons"`. If an icon is missing, add it there
  using its `…Outlined` version.
- Size with `size` in px: 14–16px in controls and 18–20px in icon-only buttons
  (`<Search size={16} aria-hidden="true" />`).
- Color via `currentColor` plus a text class (`text-pg-slate`, `text-pg-sage`…), never a hex in the SVG.
- Decorative icons get `aria-hidden="true"`; icon-only buttons get an `aria-label`.
- Exception: SVG logos (Parent Guidance, partners, social networks) keep their brand colors.
