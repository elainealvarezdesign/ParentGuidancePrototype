# Foundations

Every visual value comes from **`tokens/pg.tokens.json`** (W3C Design Tokens format). `pnpm tokens` turns it
into `src/styles/tokens.css`: CSS variables (`--pg-navy`) plus Tailwind utilities (`bg-pg-navy`,
`text-pg-h1`, `rounded-pg-xl`, `shadow-pg-card`, `max-w-pg-content`). CI fails if the two files disagree
(`pnpm check:tokens`) or if a component bypasses tokens (`pnpm check:design`).

**To change a value:** edit `tokens/pg.tokens.json` → `pnpm tokens` → commit both files. The Figma library
variables follow the JSON, never the reverse.

## Color

| Token | Hex | Use | Never |
|---|---|---|---|
| `navy` | #1c3243 | Body text, headings, dark surfaces (footer, banners, dialogs' header) | — |
| `navy-hover` | #284054 | Hover/active on navy surfaces | text |
| `slate` | #435766 | Secondary text, placeholders, meta | large brand fills |
| `teal` | #59797d | Primary button fill, decorative icons | text under 14px bold |
| `teal-dark` | #406064 | Small brand text, links, active chips, focus ring, selected states | — |
| `sage` | #90b3b6 | Decorative blocks behind photos, CTA bands, text **on navy** | text on light backgrounds; white text on sage (2.26:1) |
| `peach` | #e8a497 | Illustration accents only | text, UI states |
| `mist` | #acbcbe | Dividers and decorative strokes | text |
| `amber` | #c8893a | Course-lesson player progress | text |
| `live` | #52bd95 | "Live" dot, FAQ accent bar | text |
| `cream` | #f9f4f1 | Page background (default section tone) | — |
| `cream-dark` | #f0edeb | Chip and badge backgrounds, subtle fills | — |
| `white` | #ffffff | Cards, inputs, dialogs | — |
| `tint` / `tint-soft` | #eaf1f1 / #f0f6f6 | Light section tones, selected rows, badge backgrounds | — |
| `line` | #dee8e9 | Borders and dividers | text |
| `success` / `success-soft` | #117a3a / #d3f7df | Status text / background | — |
| `warning` / `warning-soft` | #a84b02 / #feeab1 | Status text / background, disclaimers | — |
| `error` / `error-soft` | #932f2f / #fdcfcf | Field errors / background | — |

Text pairs that pass WCAG AA (4.5:1) and are allowed: navy, slate or teal-dark on cream/white/tint;
white on navy, teal-dark or teal (bold ≥14px); navy on sage; sage on navy. Status text on its `-soft`
background. Opacity variants (`bg-pg-navy/60`) are fine for overlays and scrims.

## Type

Poppins (Google Fonts), with `system-ui` fallback. Use the semantic utilities; each sets size, line height
and weight together. Values change at `md` (768px) where shown.

| Utility | Mobile → md | Weight | Use |
|---|---|---|---|
| `text-pg-display` | 38/44 → 50/58 | 700 | Home hero title only |
| `text-pg-h1` | 28/32 → 40/46 | 700 | The page title (one per page, always `<h1>`) and big section titles |
| `text-pg-h2` | 24/32 | 700 | Section title (small sections) |
| `text-pg-h3` | 20/28 | 600 | Card and sub-section titles |
| `text-pg-h4` | 16/24 | 700 | Small headings, dialog titles |
| `text-pg-body-lg` | 16/24 | 400 | Intros, long text |
| `text-pg-body` / `text-sm` | 14/20 | 400 | Default UI text |
| `text-pg-small` / `text-xs` | 12/16 | 400 | Meta, captions, helper text |
| `text-pg-eyebrow` | 11/16, uppercase, 0.15em | 600 | Label above a title (`<Eyebrow>`) |

Visual size and heading level are independent: pick the level from the page outline and the size from the
table (`<h2 className="text-pg-h1">` is fine). Never skip levels.

## Spacing

Tailwind's 4px scale only (`p-4` = 16px). No half steps (`py-2.5`) and no arbitrary pixel spacing
(`mt-[13px]`); the design check rejects them. Common rhythm:

- Section vertical padding: `Section spacing` `s` 32→40, `m` 48→56, `l` 56→80 (mobile → md).
- Page gutter: `px-6 md:px-10 lg:px-14` (24 / 40 / 56). Use `<Container>` instead of repeating it.
- Card padding: `p-5` or `p-6`; gaps inside cards `gap-3`/`gap-4`; grid gaps `gap-4`/`gap-5`.

## Radius, shadow, width

| Radius | Value | Use | | Shadow | Use |
|---|---|---|---|---|---|
| `rounded-pg-sm` | 4 | Tiny tags | | `shadow-pg-card` | Cards at rest |
| `rounded-pg-md` | 8 | Buttons, inputs, small cards | | `shadow-pg-card-hover` | Cards on hover |
| `rounded-pg-lg` | 12 | Notices, inner tiles | | `shadow-pg-overlay` | Dialogs, popovers |
| `rounded-pg-xl` | 16 | Cards, panels | | | |
| `rounded-pg-2xl` | 28 | Large media, hero search | | | |

Max widths: `max-w-pg-page` 1280 (page), `max-w-pg-content` 1100 (content column), `max-w-pg-reading` 680
(long text). See [layout.md](./layout.md).

## Motion

| Token | Value | Use |
|---|---|---|
| `--pg-dur-micro` | 150ms | Press feedback |
| `--pg-dur-fast` | 220ms | Hover, color changes, accordions |
| `--pg-dur-base` | 350ms | Cards lifting, dialogs |
| `--pg-dur-reveal` | 550ms | Entrances on scroll |
| ease-out | `[0.25, 0.46, 0.45, 0.94]` | Entrances and hovers |
| ease-in-out | `[0.65, 0, 0.35, 1]` | Open/close |

In Tailwind: `duration-(--pg-dur-fast)`. In `motion/react`: use `<Reveal>` for scroll entrances instead of
writing `initial/whileInView` by hand. Reduced motion is handled globally (`<MotionConfig
reducedMotion="user">` in `App.tsx` and `accessibility.css`); for `window.scrollTo` use
`scrollBehavior()` from `@/lib/motion`.

## Icons

Material Icons Outlined, imported **only** through `@/components/ui/icons` (it wraps MUI icons with a
`size` prop and stable names: `ArrowRight`, `Search`, `CalendarDays`…). To add one, import the MUI icon in
`icons.tsx` and export it with `icon(MuiIcon, "Name")`. Decorative icons get `aria-hidden="true"`; an icon
that is the only content of a button needs `aria-label` on the button.

## Accessibility

Target: WCAG 2.2 AA. What the system already does, and what you must keep doing:

- **Focus:** a visible ring on every focusable element (`accessibility.css`). Never remove it.
- **Names:** every control has a visible label or an accessible name. Inputs go inside `<Field>`;
  searches use `<SearchField label=…>`; icon-only buttons get `aria-label`.
- **Structure:** one `<h1>` per page; sections are labelled by their heading (`Section labelledBy`); lists
  of cards are `<ul>/<li>`.
- **Keyboard:** dialogs trap focus, close on Escape and return focus (`Dialog`, `useModal`); tabs and
  accordions follow the W3C APG patterns; sort menus are native `<select>`.
- **Announcements:** result counts and form outcomes use `role="status"`; success views take focus
  (`SuccessMessage`).
- **Links that open a new tab** say so to screen readers (`<span className="sr-only"> (opens in a new tab)</span>`)
  and use `rel="noopener noreferrer"`.
- **Language:** Spanish content is marked `lang="es"`.
- **Targets:** interactive elements are at least 36px tall (buttons `s`), 44px in forms.
