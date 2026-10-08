# Layout

## The page frame

`src/components/layout/PageShell.tsx` wraps every route (it is the router's root element):

```
<a href="#main">Skip to content</a>        visible only on keyboard focus
<Navbar />                                 fixed, 56px tall, navy
<main id="main" tabIndex={-1}>             the page renders here (cream background)
<Footer />
```

Pages **never** render `<main>`, `Navbar` or `Footer`. Because the navbar is fixed, the first block of a
page must start 56px down: use `<Section belowNav>` (adds `mt-14`), or `Breadcrumb` (which already
includes it) on detail pages. Route changes scroll to the top (`<ScrollRestoration />` in PageShell).

## Section and Container

`src/components/layout/Section.tsx`

```tsx
<Section tone="tint-soft" spacing="l" labelledBy={headingId}>
  <Container>…</Container>
</Section>
```

| `Section` prop | Values | Default | Notes |
|---|---|---|---|
| `tone` | `cream`, `white`, `tint`, `tint-soft`, `sage`, `navy` | `cream` | Background. Alternate tones between sections instead of drawing divider lines. `navy` also sets white text. |
| `spacing` | `none`, `s`, `m`, `l` | `m` | Vertical padding: s 32/40, m 48/56, l 56/80 (mobile/md). Use `none` + own padding only when a section needs asymmetric padding. |
| `belowNav` | boolean | — | First section of a page: clears the fixed navbar. |
| `labelledBy` | heading id | — | Names the `<section>` landmark. Pass the id of the section's heading. |
| `id`, `className` | | | `id` for in-page links (`href="#courses"`). |

| `Container` prop | Values | Default | Width |
|---|---|---|---|
| `width` | `page`, `content`, `reading`, `full` | `page` | 1280 / 1100 / 680 / none |

`Container` also applies the page gutter: `px-6 md:px-10 lg:px-14` (24 / 40 / 56px).

## Breakpoints

Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Design and test at **375, 768 and 1280**.

| Pattern | Mobile | md | lg+ |
|---|---|---|---|
| SplitHero | stacked, text first | stacked | 2 columns |
| Card grids | 1 column | 2 columns | 3 columns (`xl:` for the Ask grid) |
| FilterBar | search + sort on one row, chips scroll on a second row | | one row |
| Sidebar layouts | Ask: submit card above the grid. Answer, Lesson: sidebar after the content | | sidebar beside the content, sticky |
| Footer | stacked | | 3 columns |

## Sticky elements

- `Navbar`: fixed at the top, `z-50`.
- `FilterBar`: `sticky top-14 z-30` (sits under the navbar). Sticky sidebars use `lg:top-20` or `lg:top-32`
  when a FilterBar is above them.
- `Dialog` and `EventModal` render in a portal on `document.body` and make the rest of the app `inert` while open.

## Page templates

| Template | Structure | Used by |
|---|---|---|
| Marketing | `HomeHero`/`SplitHero` → content sections → CTA band | Home, Parent Coaching, Get Help |
| Directory | `SplitHero` → `FilterBar` → grid + `Pagination` → `PhotoCtaBanner` | On-Demand Courses, Ask a Therapist |
| Detail | `Breadcrumb` → main column + sidebar (`lg:flex-row`) | Answer, Lesson, Course |
| Utility | `PageIntro` → one card (form) | Contact Us |
| Document | `DocumentHeader` → document card → Back to top | Terms, Cookies, Consent |
