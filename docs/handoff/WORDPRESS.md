# Building Parent Guidance in WordPress

The production site is built in **WordPress**. This repository is its design system: the React prototype shows
the behavior, and the tokens, content model, section specs and accessibility rules below carry over to
WordPress as they are. Read this together with the [handoff pack](./AGENT-HANDOFF.md).

**Recommended setup:** a block theme (Full Site Editing) with `theme.json`, one custom block per section
(ACF Blocks or native blocks), custom post types for repeating content, and template parts for the header and
footer. The React components are the reference implementation; they are not shipped to WordPress.

| Part | What it answers |
|---|---|
| [1. Tokens → `theme.json`](#1-tokens--themejson) | Colors, type, spacing, radius, shadows and roles in WordPress |
| [2. Sections → blocks](#2-sections--blocks-and-patterns) | Which block or pattern each section becomes, and its fields |
| [3. Accessible behavior](#3-accessible-behavior) | How to keep dialogs, forms, menus and lists accessible |
| [4. What to reuse as is](#4-what-to-reuse-as-is) | Files from this repo that go straight into the theme |

---

## 1. Tokens → `theme.json`

`pnpm tokens` generates, from [`tokens/pg.tokens.json`](../../tokens/pg.tokens.json):

| File | Use |
|---|---|
| [`docs/wordpress/theme.json`](../wordpress/theme.json) | Copy into the theme root. Palette, font, type scale, spacing scale, shadows, layout widths, color roles, radius and motion. |
| [`docs/wordpress/pg-tokens.css`](../wordpress/pg-tokens.css) | Plain CSS (no Tailwind): the same `--pg-*` variables as the prototype, the color roles, and `.text-pg-*` type classes. Enqueue it in the theme. |

Both are checked in CI (`pnpm check:tokens`), so they always match the code. **When a token changes:** edit
`tokens/pg.tokens.json` → `pnpm tokens` → copy the two files into the theme.

### Code → WordPress names

| In the prototype (Tailwind) | In WordPress |
|---|---|
| `bg-pg-navy`, `text-pg-teal-dark` | Palette slugs `navy`, `teal-dark`: `has-navy-background-color`, `has-teal-dark-color`, or `var(--wp--preset--color--navy)` |
| `text-role-fg-primary`, `bg-role-bg-page` | `var(--wp--custom--role--fg--primary)`, `var(--wp--custom--role--bg--page)` (or `var(--pg-role-fg-primary)` from `pg-tokens.css`) |
| `text-pg-h2` | Font size preset `h2` (`has-h2-font-size`) **plus** its line height and weight: use the `.text-pg-h2` class from `pg-tokens.css`, or the heading element styles already set in `theme.json` |
| `p-6`, `gap-4`, `mt-10` | Spacing presets with the same number: `var(--wp--preset--spacing--6)` = 24px, `--4` = 16px, `--10` = 40px |
| `rounded-pg-md`, `rounded-pg-xl` | `var(--wp--custom--radius--md)` (8px), `--xl` (16px) |
| `shadow-pg-card` | Shadow preset `card`: `var(--wp--preset--shadow--card)` |
| `max-w-pg-content`, `max-w-pg-page` | `contentSize` (1100px) and `wideSize` (1280px) in `settings.layout` |
| `EASE_OUT`, `DURATION.fast` | `var(--wp--custom--motion--ease-out)`, `var(--wp--custom--motion--dur-fast)` |

Notes:

- `display` and `h1` are fluid (38→50px and 28→40px). WordPress font size presets do not carry line height,
  so headings get theirs from `styles.elements` in `theme.json`, and other text from the `.text-pg-*` classes.
- The editor only offers the brand palette, the type scale and the spacing scale (custom colors, sizes and
  spacing are turned off), which keeps editors on the system. Contrast rules are in
  [foundations.md](../system/foundations.md#color): e.g. never white text on `sage`.

---

## 2. Sections → blocks and patterns

Each section in `src/sections` becomes one **custom block** whose fields are the section's content type
(`…Content` in the section file, documented in [docs/system/sections/](../system/sections/README.md) with
lengths and image sizes). Page recipes in [docs/system/pages/](../system/pages/README.md) become **block
patterns** or page templates (the sections in order).

### Site-wide parts

| Prototype | WordPress | Content |
|---|---|---|
| `Navbar` (`src/components/layout/Navbar.tsx`) | Header template part; Navigation block | Menu "Main" = `mainNav` in `src/content/site.ts`; language selector is UI only (open item) |
| `Footer` | Footer template part | Menus from `footerColumns`; social links block from `socialLinks`; copyright |
| `PageShell` (skip link, one `<main>`) | Block theme templates (`<main>` group with `tagName: main`) | — |

### Sections

| Section | Block / pattern | Fields (ACF type) | Notes |
|---|---|---|---|
| `HomeHero` | Block `pg/home-hero` | title (text), highlight (text), intro (textarea), search label / placeholder / button (text) | Search submits to the WordPress search results page (`/?s=`) |
| `ResourceTiles` | Block `pg/resource-tiles` | tiles (repeater: title, description, image, dim [true/false], link), more (link) | 4 tiles |
| `FeatureRows` | Block `pg/feature-rows` | eyebrow, title, intro (text), image base (image), rows (repeater: title, description, image) | 3 rows |
| `FaqSection` | Block `pg/faq` or core **Details** blocks in a pattern | anchor (text, e.g. `faq`), title, items (repeater: question, answer, default open) | Native `<details>` keeps it accessible |
| `PartnersStrip` | Block `pg/partners` | title, logos (repeater: image, alt, height) | |
| `NewsletterSection` | Block `pg/newsletter` (variants: default, compact) | eyebrow, title, body, image, image base, success message | Form from the newsletter plugin; see part 3 |
| `SplitHero` | Block `pg/split-hero` (style: wide / square / portrait) | eyebrow, eyebrow style (select), title, highlight, body (textarea), person name / role, actions (repeater max 2: label, link), image | First section of most inner pages; contains the `<h1>` |
| `PageIntro` | Block `pg/page-intro` | eyebrow, title, intro | Utility pages (Contact, Search) |
| `DocumentHeader` | Block `pg/document-header` | eyebrow, title, intro | Legal pages; content in core blocks below |
| `PhotoCtaBanner` | Block `pg/photo-cta` (variants: band, overlay) | title, body (textarea, **bold** allowed), cta (link), image | Max one per page |
| `BenefitsBand` | Block `pg/benefits` | items (repeater: icon [select: message, roadmap, privacy, calendar], title, body) | |
| `ProcessSteps` | Block `pg/process-steps` | anchor, eyebrow, title, steps (repeater: title, body), cta (link) | Ordered list |
| `Testimonials` | Block `pg/testimonials` | eyebrow, title, items (repeater ×3: quote, name, meta) | |
| `CrisisLineBanner` | Block `pg/crisis-line` | logo, title, body, number, website | Call / text links use `tel:` and `sms:` |
| `IconCtaBanner` | Block `pg/icon-cta` | title, body, cta (link) | |
| `TrustStrip` | Block `pg/trust-strip` | items (repeater: icon [shield, lock, check], title, body) | |
| `ResourceLibrary` | Block `pg/resource-library` (query of `resource` posts) | category filter, sort | Filter bar + grid; see part 3 for filters |
| `SiteSearch` | WordPress `search.php` template | — | Results from WordPress search instead of the prototype's index |

### Repeating content → custom post types

| Prototype content (`src/content`) | Post type | Fields |
|---|---|---|
| `courses.ts` → `Course` | `course` | title, topic (taxonomy), instructor, image, lessons (number), duration, description, featured, new |
| `coursePrograms.ts` → `CourseProgram`, `Lesson` | `course` + child `lesson` | label, cover, summary, total duration, instructors, about, modules; lesson: title, duration, module, description, takeaways, video |
| `askATherapist.ts` → `Question`, `Therapist` | `question`, `therapist` | question, category (taxonomy), answered by (relationship), thumbnail, video, duration, transcript |
| `events.ts` → `SeriesEvent` | `event` | title, description, category, date, start, end, language, register URL |
| `mentalHealthSeries.ts` → `SeriesResource` | `resource` | title, description, type, category, duration, new, topic (relationship) |
| `topics.ts` → `Topic` | `topic` | title, emphasis, category, intro, expert, videos, sessions, takeaways, actions, resources |
| `getHelp.ts` → `SupportResource` | `support_resource` | name, logo, description, category, availability, URL |
| `site.ts` | Menus + an options page | navigation, footer, social links, prototype notice (remove at launch) |

The cards that list these posts (`UnifiedCard`, `QuestionCard`, `ResourceCard`, `EventRow`) become the
post templates inside Query Loop blocks. Their props are documented in
[components/cards.md](../system/components/cards.md).

---

## 3. Accessible behavior

The prototype passes WCAG 2.1 AA on every route (axe + keyboard tests). Keep the same behavior in WordPress.
The React file in each row is the reference implementation to copy the behavior from.

| Pattern | Required behavior | In WordPress | Reference |
|---|---|---|---|
| **Dialogs** (submit question, event pop-up) | Named by its title; focus moves inside on open; Tab stays inside; Escape closes; focus returns to the trigger; the page behind is inert | Native `<dialog>` opened with `showModal()` (gives inertness and Escape); add `aria-labelledby` and return focus on `close` | `src/components/ui/Dialog.tsx` (`Dialog`, `useModal`) |
| **Forms** (contact, ask, newsletter) | Every field has a visible `<label for>`; hints and errors linked with `aria-describedby`; `aria-invalid` on errors; validate on submit and focus the first error; success replaces the form, is announced (`role="status"`) and receives focus | Configure the form plugin (Gravity Forms / WPForms) for labels and inline errors, or build the form markup with these attributes; do not rely on placeholders | `src/components/ui/Field.tsx`, `SuccessMessage.tsx`, `docs/system/components/field.md` |
| **Accordion / FAQ** | Button with `aria-expanded` controlling its panel | Core **Details** block (`<details>/<summary>`) | `src/components/ui/Accordion.tsx` |
| **Tabs** (lesson page) | `tablist`/`tab`/`tabpanel`, arrow keys move between tabs | A small script following the WAI-ARIA tabs pattern, or avoid tabs | `src/components/ui/Tabs.tsx` |
| **Sort and filter** | Sort = native `<select>` with a label; filter chips = buttons with `aria-pressed`; result count in `role="status"` | Same markup in the block's render template | `src/components/patterns/FilterBar.tsx`, `FilterChips.tsx` |
| **Search** | Field with a label (visually hidden is fine); clear button named "Clear search" | `search.php` + a labelled search form | `src/components/ui/SearchField.tsx` |
| **Navigation** | Skip link to `<main>`; mobile menu button with `aria-expanded`; Escape closes menus and returns focus | Block theme skip link + Navigation block | `src/components/layout/Navbar.tsx`, `LanguageMenu.tsx` |
| **Lists of cards** | `<ul>/<li>`; one link or button per card with a name that includes the card title | Query Loop renders a list; add `aria-label` to the card link | `src/components/cards/UnifiedCard.tsx` |
| **Media** | Seek with the keyboard; captions | Core Video / Vimeo embed with captions | `src/components/ui/MediaPlayer.tsx` |
| **Links** | External links open in a new tab and say "(opens in a new tab)"; `rel="noopener noreferrer"` | Link settings + screen-reader text | `CtaButton` in `src/components/ui/Button.tsx` |
| **Language** | Spanish content has `lang="es"` | Set the language on the block or with Polylang/WPML | `src/components/cards/EventRow.tsx` |
| **Motion** | Respect "reduce motion" | Wrap animations in `@media (prefers-reduced-motion: no-preference)` | `src/styles/accessibility.css` |

**Testing the WordPress build:** the repo's Playwright + axe suite can run against a WordPress staging URL:
`E2E_BASE_URL=https://staging.example.org pnpm test:e2e` (routes are listed in `tests/e2e/a11y.spec.ts`). Also
run the manual screen-reader script in [docs/accessibility/screen-reader-test.md](../accessibility/screen-reader-test.md).

---

## 4. What to reuse as is

| From the repo | Into WordPress |
|---|---|
| [`docs/wordpress/theme.json`](../wordpress/theme.json), [`pg-tokens.css`](../wordpress/pg-tokens.css) | Theme root / enqueued stylesheet (part 1) |
| [`docs/wordpress/icons/`](../wordpress/icons/) | 47 SVG icons (Material Icons, Outlined), `fill="currentColor"`, named like the code (`arrow-right.svg`, `search.svg`). Inline them; decorative icons keep `aria-hidden="true"`. `pnpm wp:assets` regenerates them. |
| [`docs/wordpress/logos/`](../wordpress/logos/) | Parent Guidance logo, color (light backgrounds) and light (navy backgrounds) |
| `src/imports/` | Project photos and partner logos (check usage rights). Photos loaded from Unsplash in `src/content` are placeholders and must be replaced. |
| `src/content/*.ts` | All copy: FAQ, page texts, legal documents, crisis lines, events. Import it into posts and fields (it is plain data: no markup except `**bold**` and `_italic_`). |
| [docs/system/sections/](../system/sections/README.md), [pages/](../system/pages/README.md) | Block specs and page templates (part 2): field limits, variants, order |
| [foundations.md](../system/foundations.md), [layout.md](../system/layout.md) | Contrast rules, breakpoints (375 / 768 / 1280), page gutters, section spacing |
| The prototype and Storybook | Behavior and visual reference for every state |
| `tests/e2e/` | Accessibility regression tests against staging (part 3) |

What does **not** carry over: the React components, the router and the Tailwind classes. Their behavior is
specified above and in the component docs.
