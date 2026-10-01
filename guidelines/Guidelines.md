# Parent Guidance — Guidelines

Parent Guidance (parentguidance.org) supports families with mental health resources, coaching, courses and
crisis help. The UI must feel warm, calm and trustworthy. Full guidelines (Spanish) live in
`docs/guidelines/`; design tokens live in `src/styles/tokens.css` (Tailwind classes: `bg-pg-navy`,
`text-pg-slate`, `rounded-pg-md`, `shadow-pg-card`, `max-w-pg-page`).

# General

* Use flexbox and grid for layout; avoid absolute positioning unless required (badges, overlays).
* Reuse components: `UnifiedCard` for resource/course/help cards, `Button`/`ButtonLink`/`ButtonAnchor` for
  actions, `EventModal` as the pattern for dialogs.
* Never hard-code hex colors, font sizes, radii or shadows, and never use Tailwind grays (`text-gray-700`).
  Use the `pg-*` tokens below. In inline styles or motion props use the CSS variables
  (`var(--pg-teal)`, `var(--pg-shadow-card)`).
* Every page must work at 390px, 768px, 1024px and 1280px with no horizontal scroll.

# Colors

* Page background: cream `#f9f4f1`. Cards, panels and filter bars: white. Listing sections: tint soft
  `#f0f6f6`. Soft surfaces/badges: tint `#eaf1f1`. Inactive chips: cream dark `#f0edeb`.
* Headings and primary text: navy `#1c3243`. Body text and UI icons: slate `#435766`.
* Action color (buttons, links, active states): teal `#59797d`; hover/pressed: teal dark `#406064`.
* Decorative accent: sage `#90b3b6` (color blocks, section-title bars, search icons). Never use sage or mist
  `#acbcbe` for text on light backgrounds.
* On sage backgrounds use navy text and white (Inverse) buttons, never white text.
* Small teal text on cream or tint must use teal dark `#406064`.
* Borders and dividers: line `#dee8e9`.
* States: success `#2f7a5f` / `#e6f2ec`, warning `#8a5a1c` / `#f7eddc`, error `#b42318` / `#fdecea`.
* A highlighted block inside a section must contrast with it: sage, navy, or a white card with border and
  shadow. Never tint on tint soft, or cream dark on cream.
* No other colors (no purples, neutral greys or pure black) except logo art and course category colors.

# Typography

* Poppins only, weights 400–700. It is set once on `body`; do not add `font-['Poppins',sans-serif]` classes
  and do not use `font-black`.
* Scale: display 38/50px bold (home headlines only) · h1 28/40px (page titles, featured sections) · h2 24px ·
  h3 20px (block titles, "Resource Library"-style section labels, FAQ questions) · h4 16px bold (card titles) ·
  body-lg 16px · body 14px (default) · small 12px · eyebrow 11px semibold uppercase.
* No sizes outside the scale (13, 15, 18, 22, 30, 36px…). Minimum 12px; 11px only for uppercase text.
* Brand emphasis in headlines: one word or phrase in teal italics.

# Layout

* Containers: page 1280px (`max-w-pg-page`), content 1100px (`max-w-pg-content`), reading 680px
  (`max-w-pg-reading`). Horizontal padding: `px-6 md:px-10 lg:px-14`.
* Mobile and tablet stack; columns start at `lg` (1024px): two-column heroes, detail sidebars, footer rows,
  full navigation (hamburger menu below 1024px). Fixed widths (sidebars, large images) only from `lg`.
* Section vertical padding: `py-14 md:py-20`. Alternate section backgrounds (cream, white, tint soft, navy)
  instead of divider lines.
* Grids degrade in steps: 4 → 2 → 1 or 3 → 2 → 1 columns. Center small groups inside the container.
* Radii: buttons/inputs 8px · small panels/menus 12px · cards, dialogs, banners 16px · heroes and featured
  video 28px · chips/badges/avatars full.
* Shadows are navy-tinted: card `0 8px 24px rgba(28,50,67,0.06)`, card hover `0.14` opacity,
  overlay `0 24px 60px rgba(28,50,67,0.28)`. Never black shadows.

# Patterns

* Filter bar (Courses, Ask a Therapist, Mental Health Series): full-width white bar under the hero, sticky
  below the navbar while browsing the list it filters. Search on the left (cream input, sage search icon),
  category chips in one scrollable row, "Featured" sort menu on the right (ListFilter + ChevronDown icons,
  14px, centered). One filter bar per list; never repeat search or chips below it.
* Section label: 4×20px sage bar + 20px navy title + count pill (tint background, teal dark text).
* Newsletter: the button sits inside the input box (`p-1.5 gap-2`), not glued to its edge.
* Dialogs/pop-ups: white card 16px radius, overlay shadow, `role="dialog"`, focus trapped, close with Esc,
  the X or an outside click, focus returns to the trigger.
* Video: Vimeo iframe in 16:9 with a descriptive `title`.
* Navbar logo always links to the home page.

# Buttons

* Use `src/app/components/Button.tsx`: `<Button>` for actions, `<ButtonLink to>` for in-app links,
  `<ButtonAnchor href>` for external, mailto, tel and sms links. Props: `variant` (primary, secondary,
  tertiary, inverse, inverse-secondary) and `size` (`s` 36px, `m` 44px default, `l` 52px). Never restyle
  colors, radius or height through `className`.
* Primary: teal background, white text, 8px radius, Poppins semibold 14px; hover teal dark.
* Secondary: white background, 1px teal border, teal-dark text; hover tint background.
* Tertiary: teal-dark text only, underline on hover.
* On navy, teal or sage backgrounds: Inverse (white, navy text) or Inverse secondary (translucent outline).
* Only one Primary per section. Labels start with a verb ("View course", "Book a session").
* No navy or sage buttons. Pill shape is only for chips, badges, filters and search bars.
* Every button and link has a visible focus style (global 2px teal-dark ring). Icon-only buttons need an
  `aria-label`. Minimum touch target 44×44px. External links opening a new tab say so to screen readers.
* Crisis call/text buttons on Get Help use `tel:`/`sms:` links in size L.

# Motion

* Use `motion/react`. The app is wrapped in `<MotionConfig reducedMotion="user">`.
* Durations: 0.15s (press), 0.22s (hover, pop-ups), 0.35s (accordions, menus), 0.55s (scroll reveal).
  Ease `[0.25, 0.46, 0.45, 0.94]`.
* Scroll reveal: `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`,
  `viewport={{ once: true, margin: "-60px" }}`. Stagger grid items by 0.06s (first 6 only).
* Buttons: `whileTap={{ scale: 0.97 }}`, hover changes color only. Cards: stronger shadow and at most `y: -2`.
  Never scale above 1.02, no bouncy springs, no infinite decorative animations.
* No entrance animations on the Get Help (crisis) page — content must be visible immediately.
* New pages open at the top; back/forward restores the scroll position.
