# 2. Buttons

Every action button in the prototype comes from a single system (teal, 8px, Poppins semibold 14px, teal dark on
hover), implemented in the [`Button.tsx`](../../../src/app/components/Button.tsx) component (section 2.4).

## 2.1 Styles

| Style | Look | When |
|-------|------|------|
| **Primary** | `pg-teal` background, white text; `pg-teal-dark` on hover | The main action of the section: "View course", "Book a session", "Submit question" |
| **Secondary** | White background, 1px `pg-teal` border, `pg-teal-dark` text; `pg-tint` background on hover | Supporting action next to a Primary ("Cancel", "View details") |
| **Tertiary** | `pg-teal-dark` text only, underlined on hover | Low-priority actions: "See more", "Skip" |
| **Inverse** | White background, `pg-navy` text; `pg-cream` on hover | Main action **on navy, teal or sage backgrounds** |
| **Inverse secondary** | `white/5` background, `white/20` border, white text; `white/10` on hover | Supporting action on dark backgrounds |

> **One Primary per section.** If there are more actions, they become Secondary or Tertiary.

There are no navy or sage buttons: navy is the color of text and navigation, not of action. That way users learn
that teal means "I can click this".

On a **sage** background (banners such as "Not sure which resource is right for you?") the main action is
**Inverse**: teal on sage is barely visible.

## 2.2 Sizes

| Size | Height | Padding | Text | When |
|------|--------|---------|------|------|
| **S** | 36px | `px-4` | 14px / 600 | Dense UI: toolbars, pagination, "Register" in event rows. On mobile, only if the button is full width |
| **M** | 44px | `px-5` | 14px / 600 | **Default** |
| **L** | 52px | `px-7` | 16px / 600 | Hero CTAs and key screens on mobile |

- `rounded-pg-md` radius (8px) on every size.
- The **pill** shape (`rounded-full`) is reserved for chips, badges, filters and the search bar. Not for action
  buttons.
- Optional icon on the right (`→` arrow or 16px Material Outlined icon) with `gap-2`. If the icon is decorative, it gets
  `aria-hidden="true"`.
- `w-full` only inside cards or on mobile.

## 2.3 States

| State | Primary | Secondary |
|-------|---------|-----------|
| Default | `bg-pg-teal text-white` | `bg-white border-pg-teal text-pg-teal-dark` |
| Hover | `bg-pg-teal-dark` | `bg-pg-tint` |
| Pressed | `scale 0.97` (motion `whileTap`) | same |
| Focus | 2px `pg-teal-dark` ring with a 2px offset | same |
| Loading | 16px spinner + "Sending…", `aria-busy="true"`, no clicks | same |
| Disabled | `bg-pg-line text-pg-slate`, `not-allowed` cursor | `border-pg-line text-pg-slate` |

Visible focus is applied globally in `src/styles/accessibility.css`: every link, button or field shows a 2px
teal dark ring with a white halo when navigating with the keyboard, on light and dark backgrounds. New
components don't need to add focus classes.

## 2.4 Component

The prototype's buttons use [`src/app/components/Button.tsx`](../../../src/app/components/Button.tsx):

| Component | For | Example |
|-----------|-----|---------|
| `<Button>` | Actions (submit, open, download) | `<Button variant="secondary" size="s" onClick={…}>Today</Button>` |
| `<ButtonLink>` | Navigation inside the app (`react-router`) | `<ButtonLink to="/ask-a-therapist">View Answer</ButtonLink>` |
| `<ButtonAnchor>` | External links, `mailto:`, `tel:`, `sms:` and `#` anchors | `<ButtonAnchor href="tel:988" variant="inverse" size="l">Call 988</ButtonAnchor>` |
| `buttonClass()` | Just the classes, for elements that can't use the components | `className={buttonClass({ variant: "secondary" })}` |

- Props: `variant` (`primary` by default, `secondary`, `tertiary`, `inverse`, `inverse-secondary`) and `size`
  (`s`, `m` by default, `l`). `<Button>` also accepts `loading`.
- They all have `whileTap={{ scale: 0.97 }}` and no `whileHover` scaling; hover changes color only.
- `className` is for layout (`w-full`, `mt-4`, `shrink-0`), not for changing colors, radii or sizes.
- Exception: the "Search" button inside a pill-shaped search bar may use `rounded-full`, because it is part
  of the bar.
- In newsletters, the button sits **inside** the input box (with `p-1.5` and `gap-2`), not glued to its edge.

### Controls that are not action buttons

These elements have their own style and do **not** use `<Button>`:

| Control | Style |
|---------|-------|
| Filter chips | `rounded-full text-xs font-medium px-4 py-2`; active `bg-pg-navy text-white`, inactive `bg-pg-cream-dark text-pg-slate`, with `aria-pressed` |
| "Featured" (sort) menu | `rounded-pg-md bg-pg-cream-dark text-xs font-medium px-4 py-2.5`, 14px `ListFilter` (filter_list) + `ChevronDown` (expand_more) icons, centered with the label |
| Segmented control (Month/List, Day/Week/Month) | `bg-pg-tint-soft` container; active option is white with `shadow-pg-card` and `aria-pressed` |
| Numeric pagination | 36–44px squares; current page in navy or teal; Prev/Next as `<Button variant="secondary" size="s">` |
| Icon-only buttons | 36–44px, `rounded-pg-md`, `aria-label` required (calendar arrows, close, menu) |

## 2.5 Accessibility

- Use `<button>` for actions and `<a>` for navigation. Never `<div onClick>`.
- Minimum touch area of **44×44px** on mobile (size M or L).
- External links (`target="_blank"`) must say so: an external-link icon + hidden text "(opens in a new tab)".
- Icon-only buttons get an `aria-label` ("Close", "Menu").
- Disabled: explain why with nearby helper text if it isn't obvious.
- On the **Get Help** page (crisis lines), call/text buttons use `<a href="tel:…">` and `<a href="sms:…">` in
  size L, so they are easy to tap in a moment of stress.

## 2.6 Do / Don't

**Do**
- One Primary per section, in teal.
- Short labels that start with a verb: "View course", "Book a session".
- The same size for every button in a row.

**Don't**
- Navy, sage or mist buttons.
- Mixing pill and rectangular buttons on the same screen.
- `whileHover` scaling above 1.02 on buttons: it feels unstable.
- Button text at 10–11px.
