# Figma ↔ prototype sync — status

Figma file: [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
Last session: October 2, 2026. Technical detail (node IDs, variables and properties) in [`LEDGER.md`](./LEDGER.md).

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

## Pending

Nothing in the library. Library updates are published from Figma (Assets → Libraries → Publish).
