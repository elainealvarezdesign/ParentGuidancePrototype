# Figma ↔ prototype sync — status

Figma file: [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
Last session: October 6, 2026. Technical detail (node IDs, variables and properties) in [`LEDGER.md`](./LEDGER.md).

## Done

**Existing screens (24 frames, edited in place):** Home, Mental Health Series, Parent Coaching,
On-Demand Courses, Ask a Therapist, Ask a Therapist Detail, Get Help and Lesson (previously named "Course Detail",
which was actually the lesson page) — at Desktop, Tablet and Mobile.

**New Desktop screens (new row in Layouts – Desktop, y = 4200):**
Course Detail · Free Yourself, Course Detail · Milestones, Lesson · Milestones, MHS · State Select,
MHS · Events, MHS · Events (pop-up open), MHS · Topic, Contact Us, and in a second row (y = 6800)
Terms of Use, Cookies Policy and Consent Documents.

**New Tablet and Mobile screens (October 2):** the 11 new screens in Layouts – Tablet (row y = 4600)
and Layouts – Mobile (row y = 7000), in the same order as Desktop. On mobile, the Events pop-up is a
bottom sheet with a dimmed background; on Tablet it is the desktop popover next to day 10.

**Prototype:** fixed the mobile horizontal scroll on the Mental Health Series content page (the
search field couldn't shrink). No route overflows at 375px or 768px anymore.

**Small fixes:** the Lesson · Milestones player reads "0:00 / 4:12" and the trailing breadcrumb arrow on
Course Detail · Milestones is hidden.

**Library:**
- Button: 8px radius, heights 36/44/52 and new Inverse and Inverse Secondary types (855 variants).
- Updated components: FAQ Item, Newsletter Banner, Feature Teaser Card, Footer (+Terms of Use, +Vimeo),
  Filter Chip, Section Eyebrow (option without bar), Testimonial Card, Hero Media (Portrait/Landscape),
  Course Card, Avatar, Resource Card, Lesson Navigation Bar, Mark Complete, Lesson Label, Multi-action Banner,
  Promo Banner, Related Questions Card, Calendar (fluid + option without header), Text Input.
- New components: Filter Bar, Search Field, Sort Menu, Section Header, Photo CTA Banner, Split CTA Banner,
  Outline Step, Course Mini Card, Instructor Line, Event List Item, Takeaway Card, Session Card, Video Card,
  Action Card, Topic Resource Card, Icon/vimeo, Partner Logo/Staff Guidance (placeholder).
- New components (October 2): Icon/download, Icon/print.
- Action Card: the title now wraps (it used to overflow the card on mobile).
- New variable: Accent Colors/Live (#52BD95).

**Library cleanup:** rearranged 6 component sets with overlapping or out-of-frame variants (Event
Popover, Event Row, Promo Banner, Multi-action Banner, CTA Banner, Process Stepper) and fixed the variables'
fallback colors (only 2 were out of sync).

**Events pop-up:** matches the prototype: `pg-navy/10` background on Desktop and Tablet, and on mobile a
centered 320px card with a `pg-navy/30` background.

**Guidelines:** new section 3.7 "Figma components" and the legal-pages pattern in `03-layout.md` (EN and ES);
PDFs regenerated.

**Status colors:** the prototype adopts Figma's (*Success / Warning / Error Colors → Contrast* and *→ Soft*):
success `#117a3a` / `#d3f7df`, warning `#a84b02` / `#feeab1`, error `#932f2f` / `#fdcfcf`. All pass AA.

**Staff Guidance logo:** new Partner Logo/Staff Guidance component on the Partners Logos page (with its tile
in the showcase) and placed in the Home partners strip at Desktop, Tablet and Mobile.

**Publishing (October 5):** removed an unused instance-swap property from `Chevron_down` (Icon Library page)
that blocked it as an invalid asset; the library was published with all 402 assets.

**Token linking (October 5):** every color variable outside *Primitive Colors* now points to a primitive
(21 semantic colors and 5 content-type colors had raw hex values; 21 primitives were added to cover them).
Typography sizes and line heights and the Full radius now alias the unit scale.

**Variables aligned with the code (October 5):** motion durations and curves, button/control sizes and the
largest radius now match `tokens.css`; the Typography collection adds the code type scale (*Code Scale*).
All variables are exported as W3C design tokens in [`docs/tokens/`](../tokens/README.md).

**Deep audit (October 6):** every node outside component instances was checked on all 20 pages, plus all
variables and styles.
- Every variable now has a description (209 were missing) and a specific scope (no more *All scopes*;
  primitives are hidden from the pickers).
- The 43 text styles are bound to Typography variables (family, weight name, size, and line height for headings).
  New variables: *Font/Weight Name/SemiBold* and *Italic*, *Font/Body Sizes/Body XSmall*, *Font/Button Sizes/\**,
  *Font/Label Sizes/\**, and Unit Scale *18*.
- Fills, strokes, radius, gaps and padding are bound to variables everywhere, about 4,000 bindings. Exact matches
  caused no visual change. The 6/10/14px values that are not on the scale were moved to the nearest token
  (6→8, 10→8, 14→16; on the mobile layouts 22→24, 28→32, 34→32, 45→48). Colors 1–3 units away from a token
  (e.g. `#dee5e8`, `#59787d` on the Spacing page) now use that token. Documentation swatches use radius S (6→8),
  and component-set frames use radius XS.
- Every text uses a text style. Documentation labels use new `_Docs/*` styles; the leading underscore keeps them
  out of the published library. The Layout texts that had no style now use styles that match the code exactly.
- About 1,100 layers with default names ("Frame", "Group", "Rectangle", "Vector"…) were renamed after their
  content, e.g. *Swatch Item – Navy 10*, *Row – 2XS*, *Glyph*.
- Known exceptions (left as they are on purpose):
  - Logo artwork: partner logo colors, and the PG logo's scaled internal spacing.
  - The decorative line on the Cover.
  - The 102px gap on the Cover.
  - Per-path corner radius inside two icon glyphs.

**Page margin token (October 6):** new collection *Semantic: Layout* with modes Desktop Regular (default),
Desktop Large, Tablet and Mobile: *Page Margin* 90 / 170 / 40 / 24, *Page Gutter* 56 / 56 / 40 / 24 (code
`px-6 md:px-10 lg:px-14`), *Content Max Width* 1100 and *Reading Max Width* 680. The 90px side paddings of the legal
pages (Terms, Cookies, Consent — Desktop) are bound to *Page Margin*, and every frame on the three Layouts pages
has its matching mode set, so a page margin bound on Tablet or Mobile resolves to 40 or 24.

**Code aligned to the Spacing Scale (October 6):** the prototype no longer uses half-step spacing utilities:
`*-1.5` and `*-2.5` became `*-2` (8px) and `*-3.5` became `*-4` (16px). That is 118 changes in 16 app files; the
unused shadcn primitives were removed later the same day in the code cleanup. Built and checked at 375, 768 and 1280px with
no horizontal overflow. The guidelines now forbid half steps.

**Text styles that match the code (October 6):** five new styles, all bound to Typography variables.
- *Title/Card - Bold* (20/28, `text-xl font-bold`): the Consent Documents card titles.
- *Body/Medium - SemiBold* (16, `font-semibold`): "The course is broken up…" and the inline course name.
- *Body/Small - Bold* (14, inline "call 911.", "Important:").
- *Body/Small - Italic* (14, the Topic reminder quote).
- *Label/Medium - SemiBold Caps* (16/24, 0.1em tracking, the "WHY" eyebrow).

These replace the closest-style mapping, so the Layouts again show the same sizes as the prototype.

**Code cleanup for the developer handoff (October 6):**
- Removed the Figma Make leftovers: 48 unused shadcn components, 4 unused Figma Make page exports and their images,
  the unused fallback image component, the empty `globals.css` and `default_shadcn_theme.css`, and the Figma asset
  resolver in Vite.
- Dependencies went from 56 to 11.
- The package is renamed `parent-guidance-prototype`.
- Added strict TypeScript (`pnpm typecheck` passes; two type errors fixed).
- Pages now load lazily per route, with vendor chunks split. The main bundle went from 890 KB to 105 KB and the
  500 KB warning is gone.
- All 20 routes were checked at 375 and 1280px: no errors and no overflow.
- The remaining arbitrary spacing values (`px-[10px]`, `gap-[6px]`…) were moved onto the scale. The only ones left
  are the two structural offsets: the navbar clearance and the calendar day number.
- Developer guide: [`docs/handoff/DEVELOPER.md`](../handoff/DEVELOPER.md).

## October 8: tokens checked against the repo

- **Variables:** Figma and the repo export match (479 variables, same names and values). Easing is stored as a
  `cubic-bezier(…)` string and opacity as a percent in Figma; the values are the same.
- **New effect styles** for the code shadows: `Shadow/Card`, `Shadow/Card Hover`, `Shadow/Overlay`
  (`shadow-pg-card`, `shadow-pg-card-hover`, `shadow-pg-overlay`).
- **New text styles** for the code type scale: `Code/display`, `Code/h1` … `Code/eyebrow` (`text-pg-*`). Size and
  line height are bound to the `Typography/Code Scale` variables, so they switch to the mobile values in the
  Mobile mode.

## Pending


Nothing in the library. Library updates are published from Figma (Assets → Libraries → Publish).
