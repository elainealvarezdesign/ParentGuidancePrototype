# Parent Guidance — Guidelines

Parent Guidance (parentguidance.org) supports families with mental health resources, coaching, courses and
crisis help. The UI must feel warm, calm and trustworthy. Full guidelines (Spanish) live in
`docs/guidelines/`; design tokens live in `src/styles/tokens.css` (Tailwind classes: `bg-pg-navy`, `text-pg-slate`, `rounded-pg-md`, `shadow-pg-card`, `max-w-pg-page`).

# General

* Use flexbox and grid for layout; avoid absolute positioning unless required (badges, overlays).
* Keep components small; reuse `UnifiedCard` for any resource/course/series card.
* Never hard-code hex colors, font sizes, radii or shadows. Use the `pg-*` tokens below.
* Every page must work at 375px, 768px and 1280px.

# Colors

* Page background: cream `#f9f4f1`. Cards/panels: white. Soft surfaces: tint `#eaf1f1`; hover `#f0f6f6`.
* Headings and primary text: navy `#1c3243`. Body text: slate `#435766`.
* Action color (buttons, links, active states): teal `#59797d`; hover/pressed: teal dark `#406064`.
* Decorative accent: sage `#90b3b6` (color blocks, large icons). Never use sage or mist `#acbcbe` for text.
* Borders and dividers: line `#dee8e9`.
* On sage backgrounds use navy text, never white.
* Small teal text on cream or tint must use teal dark `#406064` (contrast).
* Do not use other hex values (no purples, no neutral greys, no pure black).

# Typography

* Poppins only (400, 500, 600, 700).
* Scale: display 38/50px bold · h1 28/40px medium · h2 24px bold · h3 20px bold · h4 16px bold ·
  body-lg 16px · body 14px (default) · small 12px · eyebrow 11px semibold uppercase, tracking 0.12em.
* Minimum text size 12px (only the uppercase eyebrow may be 11px).
* Brand emphasis in headlines: one word in italics, same color.

# Layout

* Container max-width 1280px; detail pages 1100px; long reading text 680px.
* Horizontal padding: `px-6 md:px-10 lg:px-14`.
* Section vertical padding: `py-14 md:py-20`. Alternate section backgrounds (cream, white, tint, navy)
  instead of divider lines.
* Grids degrade in steps: 4 → 2 → 1 or 3 → 2 → 1 columns.
* Radii: buttons/inputs 8px · cards 16px · small panels 12px · hero blocks 28px · chips/badges/avatars full.
* Shadows are navy-tinted: card `0 8px 24px rgba(28,50,67,0.06)`, card hover `0.14` opacity,
  overlay `0 24px 60px rgba(28,50,67,0.28)`.

# Buttons

* Primary: teal background, white text, 8px radius, Poppins semibold 14px, min height 44px; hover teal dark.
* Secondary: white background, 1px teal border, teal-dark text; hover tint background.
* Tertiary: teal-dark text only, underline on hover.
* On navy backgrounds: white button with navy text (hover cream), or translucent white outline button.
* Only one Primary button per section. Labels start with a verb ("View course", "Book a session").
* Pill shape is only for chips, badges, filters and the search bar — not for action buttons.
* Every button and link needs a visible focus style: 2px teal-dark ring with 2px offset.
* Icon-only buttons need an `aria-label`. Minimum touch target 44×44px.

# Motion

* Use `motion/react`. Wrap the app in `<MotionConfig reducedMotion="user">`.
* Scroll reveal: `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`,
  `viewport={{ once: true, margin: "-60px" }}`, duration 0.55s, ease `[0.25, 0.46, 0.45, 0.94]`.
* Stagger grid items by 0.06s (first 6 only). Do not animate the hero or the first visible block.
* Buttons: `whileTap={{ scale: 0.97 }}`; hover color via Tailwind `hover:` classes.
* Card hover: stronger shadow and at most `y: -2`. No scaling cards, no bouncy springs, no infinite
  decorative animations.
* No entrance animations on the Get Help (crisis) page — content must be visible immediately.
