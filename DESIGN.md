# DESIGN.md — Parent Guidance

The single reference for building new screens in the Parent Guidance prototype (parentguidance.org). Read this
file first; it is enough to create a page that matches the existing ones. Deeper detail lives in the
[design guidelines](./docs/guidelines/README.md).

- **Live prototype:** https://parent-guidance-prototype.netlify.app/ (every push to `main` deploys)
- **Figma library:** [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
- **Tokens:** [`src/styles/tokens.css`](./src/styles/tokens.css) (code) ·
  [`docs/tokens/parent-guidance.tokens.json`](./docs/tokens/parent-guidance.tokens.json) (Figma variables, W3C)

## 1. Product and tone

Parent Guidance supports families with mental health resources, parent coaching, on-demand courses,
Ask a Therapist and crisis help. The audience is parents, often on a phone and under stress. The UI must feel
**warm, calm and trustworthy**: cream background, deep navy text, teal/sage accents, soft corners,
navy-tinted shadows, gentle motion, and legibility above everything.

Copy is in English, sentence case. Button labels start with a verb ("View course", "Book a session").

## 2. Stack and structure

React 18 + Vite + Tailwind CSS v4 + `react-router` + `motion/react`. Icons: Material Icons Outlined.

| Path | What it is |
|---|---|
| `src/app/App.tsx` | Router, `Navbar`, `Footer`, home page and shared layout (`Root`) |
| `src/app/*Page.tsx` | One file per page, default export |
| `src/app/components/Button.tsx` | `<Button>`, `<ButtonLink>`, `<ButtonAnchor>`, `buttonClass()` |
| `src/app/components/UnifiedCard.tsx` | Standard image card (resources, courses, help lines) |
| `src/app/components/icons.tsx` | The only place icons are imported from |
| `src/app/mhs/EventModal.tsx` | Accessible pop-up pattern (focus trap, Esc, return focus) |
| `src/app/legal/` | Legal page body, Download/Print actions, back-to-top |
| `src/app/utils/motion.ts` | `prefersReducedMotion()`, `scrollBehavior()` |
| `src/styles/tokens.css` | Design tokens and their Tailwind mapping |
| `src/styles/accessibility.css` | Global focus ring and reduced-motion rule |

Run locally: `pnpm install` then `pnpm dev`. Check a production build with `pnpm build`.

## 3. Adding a new page

1. **Create** `src/app/NewThingPage.tsx` with a default export (template below).
2. **Register the route** in the `router` children in `src/app/App.tsx`
   (`{ path: "new-thing", Component: NewThingPage }`), above the `"*"` route.
3. **Link it** from where users reach it: `navLinks` in `Navbar` (top-level sections only), the footer, or a
   card/button on an existing page (`<ButtonLink to="/new-thing">`).
4. **Check** it at 390, 768, 1024 and 1280px, with the keyboard, and run `pnpm build`.
5. **Figma:** add the screen to *Layouts – Desktop / Tablet / Mobile* (1280 / 768 / 375) using library components.

`Navbar` and `Footer` come from the shared layout; pages render only their `<main>`. The navbar is fixed and
56px tall, so the first section needs top padding (`pt-14` plus the section's own padding, or `pt-28`
on a plain hero). New pages open at the top automatically.

```tsx
import { motion } from "motion/react";
import { ButtonLink } from "./components/Button";
import { ArrowRight } from "./components/icons";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function NewThingPage() {
  return (
    <main className="min-h-screen bg-pg-cream">
      {/* Hero */}
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-pg-content text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-pg-caps text-pg-teal-dark">Eyebrow</p>
          <h1 className="text-[28px] font-bold leading-[1.15] text-pg-navy md:text-[40px]">
            Page title with <em className="text-pg-teal-dark">emphasis</em>
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-pg-slate">One-sentence introduction.</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/somewhere" size="l">
              Start here <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Content section: alternate backgrounds instead of divider lines */}
      <section className="bg-white px-6 py-14 md:px-10 md:py-20 lg:px-14">
        <div className="mx-auto max-w-pg-page">
          <h2 className="text-2xl font-bold text-pg-navy">Section title</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i < 6 ? i * 0.06 : 0 }}
              >
                {/* UnifiedCard or a white card: rounded-pg-xl border border-pg-line shadow-pg-card */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

## 4. Tokens

**Rule #1:** never write a loose hex, font size, radius or shadow (`text-[#1c3243]`, `text-[13px]`,
`shadow-[…]`, `text-gray-700`). Use the tokens below. If something is missing, add it to `tokens.css` and to
Figma first. Accepted exceptions: logo artwork, course category colors, hero reading widths (`max-w-[480px]`).

### Color

| Tailwind | Hex | Use |
|---|---|---|
| `pg-navy` | `#1c3243` | Headings, primary text, navigation, dark sections |
| `pg-navy-hover` | `#284054` | Inputs inside navy banners |
| `pg-slate` | `#435766` | Body text, descriptions, UI icons |
| `pg-teal` | `#59797d` | Action color: Primary buttons, links, active states |
| `pg-teal-dark` | `#406064` | Hover/pressed; small accent text (eyebrows, metadata) on light backgrounds |
| `pg-sage` | `#90b3b6` | Decorative: color blocks, section-label bars, search icons. **Never text** |
| `pg-mist` | `#acbcbe` | Decorative only ("•" separators). **Never text** |
| `pg-amber` | `#c8893a` | Lesson progress accent (fills only) |
| `pg-live` | `#52bd95` | "Live" dot (decorative only) |
| `pg-cream` | `#f9f4f1` | Page background |
| `pg-cream-dark` | `#f0edeb` | Inactive chips, sort menu |
| `white` | `#ffffff` | Cards, panels, filter bars, inputs |
| `pg-tint` | `#eaf1f1` | Soft surfaces: badges, count pills, secondary-button hover |
| `pg-tint-soft` | `#f0f6f6` | Listing sections, image placeholders |
| `pg-line` | `#dee8e9` | Borders and dividers |
| `pg-success` / `-soft` | `#117a3a` / `#d3f7df` | Success text/icon / background |
| `pg-warning` / `-soft` | `#a84b02` / `#feeab1` | Warning text/icon / background |
| `pg-error` / `-soft` | `#932f2f` / `#fdcfcf` | Error text/icon / background |

Contrast rules: on sage backgrounds use navy text and Inverse buttons; small teal text uses `pg-teal-dark`;
a highlighted block must contrast with its section (sage, navy, or a white card with border and shadow).

### Typography

Poppins 400–700, set once on `body` — never add font-family classes. Minimum 12px; 11px only uppercase.

| Token | Size (mobile → md) | Classes | Weight | Use |
|---|---|---|---|---|
| display | 38 → 50px | `text-[38px] md:text-[50px] leading-[1.15]` | 700 | Home headline only |
| h1 | 28 → 40px | `text-[28px] md:text-[40px] leading-[1.15]` | 700 | Page title (one per page) |
| h2 | 24px | `text-2xl` | 700 | Section titles, banners |
| h3 | 20px | `text-xl` | 600–700 | Block titles, section labels, FAQ questions |
| h4 | 16px | `text-base` | 700 | Card titles |
| body-lg | 16px | `text-base leading-7` | 400 | Introductions |
| body | 14px | `text-sm` | 400 | Default text, buttons, inputs |
| small | 12px | `text-xs` | 400–600 | Metadata, captions, chips |
| eyebrow | 11px | `text-[11px] uppercase tracking-pg-caps` | 600 | Kicker above headings (12px+ uses `tracking-pg-eyebrow`) |

Brand emphasis: one word or phrase in teal italics inside a headline.

### Space, radius, shadow, containers

- **Containers:** `max-w-pg-page` 1280 (default) · `max-w-pg-content` 1100 (topic/event pages, centered banners) ·
  `max-w-pg-reading` 680 (long text, legal, single-column forms). Always `mx-auto`.
- **Gutter:** `px-6 md:px-10 lg:px-14`. **Section padding:** `py-14 md:py-20`.
- **Radius:** `rounded-pg-sm` 4 (tags) · `rounded-pg-md` 8 (buttons, inputs) · `rounded-pg-lg` 12 (menus, small
  panels) · `rounded-pg-xl` 16 (cards, dialogs, banners) · `rounded-pg-2xl` 28 (heroes, featured video) ·
  `rounded-full` (chips, badges, avatars, search bars).
- **Shadow:** `shadow-pg-card` · `shadow-pg-card-hover` · `shadow-pg-overlay`. Never black shadows.
- **Spacing:** Tailwind's 4px scale (`gap-2` 8, `gap-3` 12, `gap-4` 16, `gap-5` 20, `gap-6` 24, `gap-8` 32…).

## 5. Layout

- Mobile and tablet stack; **columns start at `lg` (1024px)**: two-column heroes, sidebars, footer rows,
  full navigation (hamburger below 1024).
- Grids degrade in steps: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` (or 4 → 2 → 1). Never 4 → 1.
- Large fixed widths (sidebars, big images) only from `lg`. No horizontal scroll at any width.
- Alternate section backgrounds (cream, white, tint soft, navy) instead of divider lines.

## 6. Components

### Buttons — always the component

```tsx
<Button onClick={save}>Save</Button>                                // actions
<ButtonLink to="/on-demand-courses" variant="secondary">View all</ButtonLink>  // in-app links
<ButtonAnchor href="tel:988" size="l">Call 988</ButtonAnchor>       // external, mailto, tel, sms
```

- `variant`: `primary` (teal) · `secondary` (white + teal border) · `tertiary` (text) · `inverse` (white, on
  navy/teal/sage) · `inverse-secondary` (translucent outline, on dark).
- `size`: `s` 36px · `m` 44px (default) · `l` 52px. Optional `loading`.
- **One Primary per section.** Never restyle color, radius or height through `className`. No navy or sage
  buttons. Pill shape only for chips, badges, filters and search bars.

### Cards

- `UnifiedCard` (`image`, `imageAlt`, `title`, `description?`, `badge?`, `metadata?`, `buttonLabel`, `to` or
  `href`) for resources, courses and help lines.
- Custom card: `rounded-pg-xl border border-pg-line bg-white shadow-pg-card`, hover `shadow-pg-card-hover` and
  at most `y: -2`. The whole card is the link when it has one action.

### Icons

```tsx
import { Search, ArrowRight } from "./components/icons";
<Search size={16} className="text-pg-sage" aria-hidden="true" />
```

14–16px in controls, 18–20px in icon-only buttons, color via text classes. Decorative icons get
`aria-hidden="true"`; icon-only buttons get an `aria-label`. If an icon is missing, add it to `icons.tsx`
from `@mui/icons-material` (Outlined).

### Patterns

- **Section label:** 4×20px sage bar + navy `h3` + count pill (`bg-pg-tint text-pg-teal-dark text-xs rounded-full`).
- **Filter bar** (lists): full-width white bar under the hero, sticky below the navbar; search on the left
  (cream input, sage icon), category chips in one scrollable row, "Featured" sort menu on the right. One per list.
- **Dialogs:** follow `EventModal` — white card, `rounded-pg-xl`, `shadow-pg-overlay`, `role="dialog"`,
  focus trapped, close with Esc / X / outside click, focus returns to the trigger.
- **Newsletter:** the button sits inside the input box (`p-1.5 gap-2`).
- **Video:** Vimeo iframe 16:9 with a descriptive `title`; overlays on media use navy, never black.
- **Legal/long text:** `max-w-pg-reading`, `LegalDocumentBody`, Download/Print via `LegalActions`.
- **Get Help (crisis):** no entrance animations; call/text buttons are `ButtonAnchor` size `l` with `tel:`/`sms:`.

## 7. Motion

- `motion/react`; the app is wrapped in `<MotionConfig reducedMotion="user">`.
- Durations: 0.15s press · 0.22s hover/pop-ups · 0.35s accordions/menus · 0.55s scroll reveal.
- Curves: `[0.25, 0.46, 0.45, 0.94]` (entrances) · `[0.65, 0, 0.35, 1]` (open/close).
- Scroll reveal once (`viewport={{ once: true }}`), offset 16–24px, stagger 0.06s for the first 6 items.
- Buttons `whileTap={{ scale: 0.97 }}`. Never scale above 1.02, no bouncy springs, no infinite animations.

## 8. Accessibility

- One `h1` per page; headings in order. Every image has `alt` (empty for decorative).
- Everything clickable is reachable with Tab and shows the global focus ring (don't remove outlines).
- Text only in approved contrast pairs (section 4). Touch targets ≥ 44px.
- External links opening a new tab announce it (`<span className="sr-only"> (opens in a new tab)</span>`).
- Spanish content gets `lang="es"`.

## 9. Before you finish

- [ ] Only tokens (no loose hex, sizes, radii, shadows, Tailwind grays)
- [ ] Buttons via `Button` / `ButtonLink` / `ButtonAnchor`; one Primary per section
- [ ] Icons from `components/icons.tsx`
- [ ] Works at 390 / 768 / 1024 / 1280px with no horizontal scroll
- [ ] Keyboard: Tab order, visible focus, Esc closes overlays
- [ ] One `h1`, alt text, contrast pairs respected
- [ ] Motion follows section 7 and respects reduced motion
- [ ] Route added in `App.tsx`; `pnpm build` passes
- [ ] Figma frames added (1280 / 768 / 375) and guidelines updated if a new pattern was introduced
