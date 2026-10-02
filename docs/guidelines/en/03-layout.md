# 3. Layout

## 3.1 Containers

| Token | Width | Tailwind | Use |
|-------|-------|----------|-----|
| `page` | 1280px | `max-w-pg-page` | Default container: navigation, sections, filter bars, card grids, Mental Health Series |
| `content` | 1100px | `max-w-pg-content` | Topic and event pages, centered banners |
| `reading` | 680px | `max-w-pg-reading` | Long text: legal pages, articles, single-column forms |

Hero text may limit its reading width with `max-w-[480px]` or similar; those are not containers.

### Side margins (gutter)

```tsx
<section className="px-6 md:px-10 lg:px-14">
  <div className="max-w-pg-page mx-auto">…</div>
</section>
```

- Mobile: 24px · Tablet (≥ 768): 40px · Desktop (≥ 1024): 56px.
- The section background runs edge to edge; the content is centered inside it.
- If a section has few elements (e.g. image + newsletter), the group is **centered** inside the container
  (`lg:justify-center`) instead of sticking to the left.

## 3.2 Breakpoints

Tailwind's breakpoints are used. The rule of thumb: **mobile and tablet stack; columns start at `lg`**.

| Prefix | From | What changes |
|--------|------|--------------|
| (base) | 0 | One column, 24px gutter, mobile-size headings, ☰ menu |
| `sm` | 640px | Card grids go to 2 columns; row buttons sit next to the content |
| `md` | 768px | Desktop-size headings, 40px gutter, filter bars on a single row |
| `lg` | 1024px | **Full navigation**, 2-column heroes, sidebars on detail and lesson pages, footer in rows, 3–4 column grids |
| `xl` | 1280px | Fine adjustments (3 columns of questions in Ask a Therapist); the container is already at its maximum |

**Degrade in steps**: 4 → 2 → 1 or 3 → 2 → 1 columns, never straight from 4 to 1.

Anything with a large fixed width (248–300px sidebars, 420–480px images) applies it only from `lg`
(`w-full lg:w-[300px]`). This keeps tablet free of horizontal scroll.

## 3.3 Vertical rhythm

| Context | Mobile → desktop | Tailwind |
|---------|------------------|----------|
| Standard section | 56 → 80px | `py-14 md:py-20` |
| Compact section (listings, filters) | 40 → 56px | `py-10 md:py-14` |
| Page hero | 96px on top (fixed 56px navbar) | `pt-24 pb-14` |
| Section title → content | 24–32px | `mb-6` / `mb-8` |
| Between cards in a grid | 16–20px | `gap-4` / `gap-5` |
| Inside a card | 16–20px | `p-4` / `p-5` |

Sections alternate by **background color** (cream → white → tint-soft → navy) instead of divider lines. For
highlighted blocks inside a section, see [Highlighted blocks](./01-foundations.md#highlighted-blocks).

## 3.4 Grid patterns

| Pattern | Classes | Use |
|---------|---------|-----|
| Resource cards | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (or `lg:grid-cols-4`) `gap-4/5` | Resource Library, home pages, a topic's resources |
| Courses | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4` | On-Demand Courses |
| Questions with sidebar | `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5` | Ask a Therapist |
| Detail + sidebar | `flex flex-col lg:flex-row gap-6`; sidebar `w-full lg:w-[280px]`–`[300px]`, `lg:sticky` | Course, lesson, question |
| Text + image (hero) | `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center` | Coaching, Courses and Get Help heroes |
| Benefits / steps | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` | Navy band and steps on Parent Coaching |
| Help lines | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5` | Get Help |
| Topic + sidebar | `grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14` | Mental Health Series topic page |

## 3.5 Patterns

### Standard card (`UnifiedCard`)

- White background, `rounded-pg-xl`, `pg-line` border, `card` shadow.
- 150px-tall image on top (`object-cover`, or `object-contain` with padding for logos).
- With logos, the image area is white (`bg-white`), like the rest of the card; with photos, `bg-pg-tint-soft` only
  shows while the image loads.
- Content with `p-4`: navy `h4` title, slate `small` description, teal dark `small` metadata.
- Full-width Primary button anchored at the bottom (`mt-auto`), so every card in a row aligns its button.
- Destination: `to` (internal route, `<Link>`), `href` (external, new tab) or `onClick`.
- Optional badge: navy pill with white text in the top-left corner.

Color variant (home): bottom block in `pg-sage` with `pg-navy` text. Hover on clickable cards: `card-hover`
shadow and at most `y: -2`. No card scaling.

Until a section has its own detail pages, its cards link to a **sample page** (courses alternate the Milestones
and Free Yourself templates; resources open "Building Your Child's Confidence").

### Filter bar

Same pattern on On-Demand Courses, Ask a Therapist and Mental Health Series:

```tsx
<div className="bg-white border-y border-pg-line sticky top-14 z-30 shadow-pg-card">
  <div className="max-w-pg-page mx-auto px-6 md:px-10 py-3 flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4">
    {/* search: relative min-w-0 flex-1 md:flex-none md:w-64; input bg-pg-cream rounded-pg-md py-2.5, text-pg-sage magnifier */}
    {/* chips: order-last basis-full md:order-none md:basis-auto flex-1 min-w-0 overflow-x-auto gap-2 */}
    {/* "Featured": sort menu on the right */}
  </div>
</div>
```

- Full width, below the hero, and **sticky under the navigation** while browsing the list it filters (if the
  page continues with other content, the bar sits inside the listing block so it releases at the end).
- One bar per listing: search and chips are never repeated further down.
- On mobile: search + "Featured" on top, chips on their own scrollable row.

### Section title with a count

4×20px sage bar + navy `h3` title + count pill `bg-pg-tint text-pg-teal-dark text-xs`
("Resource Library · 9 resources", "Browse All · 15 questions").

### Newsletter

The button sits inside the input box: `flex items-center gap-2 rounded-pg-xl bg-pg-tint-soft p-1.5` (on navy,
the box is `bg-pg-navy-hover` and the button is Inverse).

### Event pop-up / dialogs

[`EventModal`](../../../src/app/mhs/EventModal.tsx): 320px card with a teal header, `rounded-pg-xl`,
`shadow-pg-overlay`. Next to the element that opens it on desktop and tablet (`pg-navy/10` backdrop), centered on mobile
(`pg-navy/30` backdrop, `min(320px, 100vw − 32px)` wide). `role="dialog"` with
`aria-modal`, trapped focus, closes with Esc, the X or a click outside, and returns focus when closed.

### Legal pages

Terms of Use, Cookies Policy and Consent Documents share one template: a header with a **LEGAL** eyebrow (no
bar), `h1`, a `max-w-pg-reading` intro and, below it, the **Download** (Primary M, `file_download` icon) and
**Print** (Secondary M, `print` icon) buttons. The text sits in a single white card (`rounded-pg-xl`,
`p-7 md:p-10`) with the effective date in teal and sections separated by a `pg-line` rule.

Consent Documents groups the documents in collapsible cards: teal dot, `h4` title, chevron, and size S
Download/Print on the right (on mobile the buttons wrap to a second line). Only one document is open at a time.

### Video

Gradients and overlays on video or photos use navy (`from-pg-navy/80`, `bg-pg-navy/60`), equivalent to
*Background/Scrim* in Figma; never black.


Vimeo videos use an `iframe` in `aspect-video`, `rounded-pg-2xl` (featured) or `rounded-pg-xl` (cards), with a
descriptive `title`, `allow="autoplay; fullscreen; picture-in-picture"` and `dnt=1` in the URL. The Mental
Health Series welcome video loads the player directly; topic page videos show a thumbnail and load the player
on click.

## 3.6 Navigation

- Fixed 56px navy navbar (`h-14`); the logo always links to the home page.
- From `lg`, full links; below it, a ☰ button opens the menu (closes with Esc, an outside tap or on
  navigation) and returns focus.
- Every new page opens at the top (`ScrollRestoration`); back/forward restores the position.

## 3.7 Components in Figma

The Figma library ([Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG))
mirrors the prototype. Every pattern in this guide has a component; start new screens from them instead of
drawing by hand.

| Component | Figma page | Maps to |
|-----------|------------|---------|
| Button (Primary, Secondary, Tertiary, Inverse, Inverse Secondary × S/M/L) | Buttons | `<Button>` (chapter 2) |
| Filter Bar (Desktop/Mobile), Search Field, Sort Menu, Filter Chip | Inputs & Nav | Filter bar (3.5) |
| Section Header (title + count), Section Eyebrow (with or without bar) | Content Blocks | Section title with a count |
| Photo CTA Banner, Split CTA Banner (Desktop/Tablet/Mobile), Promo Banner, Multi-action Banner | Content Blocks | Page-closing banners |
| Hero Media (Portrait/Landscape) | Content Blocks | Hero image with color block |
| Outline Step, Course Mini Card, Instructor Line | Course & Media | Course detail (outline, "You may also like", instructors) |
| Video Card, Session Card, Takeaway Card, Action Card, Topic Resource Card | Cards | Mental Health Series topic page |
| Calendar (Desktop/Mobile), Event List Item, Event Popover | Calendar & Events | Events page and pop-up |
| Icon/… (Material Outlined, including `download`, `print` and `vimeo`) | Icons | `src/app/components/icons.tsx` |

Full screens live in **Layouts – Desktop / Tablet / Mobile** (1280, 768 and 375px). When a prototype screen
changes, update its frame on all three pages too.

## 3.8 Checklist for a new screen

1. `pg-cream` background, `max-w-pg-page` container with a `px-6 md:px-10 lg:px-14` gutter.
2. A single `display` (home pages only) or `h1` per page.
3. Sections with `py-14 md:py-20`, alternating the background color.
4. Grid from table 3.4, degrading in steps; fixed widths only from `lg`.
5. Cards with `UnifiedCard`; listings with the standard filter bar.
6. One teal Primary per section; buttons with `<Button>`.
7. Review at **390, 768, 1024 and 1280px**.
