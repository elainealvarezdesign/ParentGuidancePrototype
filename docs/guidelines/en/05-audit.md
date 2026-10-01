# 5. Prototype audit

Record of the review of `src/app` (excluding `components/ui`, the shadcn base components) against these
guidelines: what was found, how it was fixed and what is still pending (section 5.7).

## 5.1 Accessibility (high priority)

| Issue | Where | Fix |
|-------|-------|-----|
| ✅ ~~No visible focus styles~~ | All buttons and links | **Fixed** with a global rule in `src/styles/accessibility.css` |
| ✅ ~~Reduced‑motion not respected~~ | Whole app | **Fixed**: `MotionConfig` in `App.tsx`, CSS rule in `accessibility.css` and non-animated scrolling in `utils/motion.ts` |
| ✅ ~~Home cards not reachable with the keyboard~~ | Home, V1 and V2 | **Fixed**: cards are links and FAQs are buttons with `aria-expanded` |
| ✅ ~~Sage `#90b3b6` text on light backgrounds~~ | 41 uses | **Fixed**: now teal dark `#406064`. Sage stays on navy, where it passes (5.9:1) |
| ✅ ~~Mist `#acbcbe` text~~ | 36 texts and 11 placeholders | **Fixed**: text → slate `#435766`; all placeholders → teal `#59797d` |
| ✅ ~~9–11px text~~ | 75 uses | **Fixed**: everything at 12px, except uppercase eyebrows, which stay at 11px |
| ✅ ~~`#9aa4ac` text (2.5:1)~~ | `UnifiedCard` footer | **Fixed**: slate |
| ✅ ~~Small teal `#59797d` on cream or tints (3.9–4.3:1)~~ | 39 texts (eyebrows, chips, breadcrumbs, links) | **Fixed**: teal dark `#406064` |
| ✅ ~~White text on sage (2.3:1)~~ | Step numbers, avatars | **Fixed**: navy on sage (5.9:1) |
| ✅ ~~"Learn More" sage on sage (1:1, invisible)~~ | Home cards | **Fixed**: navy |
| ✅ ~~White "Next Lesson" button on amber (3.0:1)~~ | Lessons | **Fixed**: now a teal Primary |
| ✅ ~~Low-contrast "•" separators~~ | Course detail | **Fixed**: decorative in `pg-mist` with `aria-hidden` |
| ✅ ~~Testimonials in 3 columns on mobile~~ | Parent Coaching | **Fixed**: 1 column up to 1024px, 3 columns on desktop |
| ✅ ~~Navigation doesn't fit on mobile~~ | Header | **Fixed**: ☰ menu below 1024px (closes with Esc, an outside tap or on navigation) |
| ✅ ~~Footer overflows on mobile~~ | All pages | **Fixed**: stacked columns on mobile |
| ✅ ~~Home overflows on mobile~~ | Home | **Fixed**: wrapping title, 2×2 cards, stacked image + text rows and FAQ |
| ✅ ~~Horizontal scroll and broken layouts on mobile and tablet~~ | All pages | **Fixed**: no horizontal scroll at 390/768/1024/1280px (fixed widths only from `lg`) |

## 5.2 Off-palette colors ✅

**Fixed.** The ~1,140 hex color classes (90 distinct values) now use the `pg-*` tokens. Off-palette tones were
consolidated like this:

| Before | Now |
|--------|-----|
| `#1b1139`, `#2c3e50`, `#0d1b2a`, `#363049`, `#293a41`, `#1a2838`, `#172c3a` | `pg-navy` |
| `#58595b`, `#333`, `#6c777f`, `#737373` | `pg-slate` |
| `#6f9296`, `#76979a`, `#7da3a6`, `#7a9ea0`, `#6d8c94` / `#4a6b6f` | `pg-teal` / `pg-teal-dark` |
| `#97b4b5`, `#a1bfb9` | `pg-sage` |
| `#e8f1f1`, `#dceced`, `#edf5f5` | `pg-tint` |
| Neutral grays (`#f5f5f5`, `#f0f0f0`, `#fafafa`…) and `#eef3f3` | `pg-tint-soft` |
| Gray borders (`#e8ebed`, `#dde0e0`, `#e0e0e0`…) | `pg-line` |
| Warm dividers (`#ebe8e5`, `#f1eeee`…) | `pg-cream-dark` |
| `#c8893a` / `#52bd95` | new `pg-amber` / `pg-live` tokens (decorative only) |
| `#6b5c8d` / `#f0edf7` ("Guide" badge) | `pg-success` icon on `pg-success-soft`, `pg-navy` text |

Intentionally kept as hex: colors inside SVG logos (brand art), course and topic category palettes (data colors)
and values inside animation props (`whileHover`), which already use palette values.

## 5.3 Consistency

| Topic | Status |
|-------|--------|
| ✅ Radii | 27 variants → `rounded-pg-sm/md/lg/xl/2xl` tokens (4/8/12/16/28px) and `rounded-full` |
| ✅ Shadows | 30 recipes (classes and inline) → `shadow-pg-card`, `shadow-pg-card-hover`, `shadow-pg-overlay` |
| ✅ Containers | 1280/1180 → `max-w-pg-page`; 1100/1024/1000 → `max-w-pg-content`; 680 → `max-w-pg-reading` |
| ✅ Durations | 16 values → 4 bands (0.15 / 0.22 / 0.35 / 0.55 s); `duration-(--pg-dur-*)` classes in CSS |
| ✅ shadcn theme | `tokens.css` maps `--primary`, `--ring`, `--border`… to the PG palette |
| ✅ Buttons | ~45 action buttons in 17 files → `<Button>`, `<ButtonLink>` and `<ButtonAnchor>` ([Buttons](./02-buttons.md)): 8px, 36/44/52 heights, no navy or sage, no pills |
| ✅ Typeface | The 428 `font-['Poppins',sans-serif]` classes were removed: Poppins is applied once on `body` (`tokens.css`) |

## 5.4 Other

- ✅ Removed from `src/imports`: the parentguidance.org screen captures, unused images (`QB_united.png`,
  `ADDO.png`, `image.png`…), the unused Figma Make component `CreateLivePrototypeWithTransitions/index.tsx` and
  `pasted_text`: the folder went from 38 MB to 8.8 MB.
- ✅ The `<title>` and description in `index.html` now talk about Parent Guidance.
- There are two versions of the home page (`HomePageV1`, `HomePageV2`) in addition to the main one. Still to
  decide which one stays (5.7).

## 5.5 Migration (completed)

1. ✅ Import `tokens.css` (done, in `src/styles/`).
2. ✅ `MotionConfig reducedMotion="user"` and focus styles (done).
3. ✅ Fix contrast: sage, mist and 9–11px sizes (done).
4. ✅ Unify buttons into one component (done).
5. ✅ Replace loose hex values with `pg-*` classes and consolidate radii, shadows, widths and durations (done).

## 5.6 Final audit ✅

Review of the `src/app` code and the 21 screens in the browser (390, 768, 1024 and 1280px).

| Topic | Result |
|-------|--------|
| Colors | No hex in classes. Inline shadows and borders use `var(--pg-shadow-*)` and `var(--pg-line)`; black shadows became the system's navy ones and the `rgb(34,49,67)` gradient became `pg-navy` |
| Typography | Every size on the scale: 13→14, 15→16, 18→20 (titles) or 16 (paragraphs), 22→24; page and featured-section titles in h1 28/40; `display` 38/50 only on the home pages. `font-black` → `font-bold`. 11px text is only uppercase eyebrows |
| Radii and shadows | Only `rounded-pg-*` / `shadow-pg-*` tokens (the remaining Tailwind classes belong to `components/ui`, which no page uses) |
| Buttons | Every action button uses `<Button>`, `<ButtonLink>` or `<ButtonAnchor>` |
| Motion | No hover scaling above 1.02 and no bouncy springs; Get Help has no entrance animations (`initial={false}`) |
| Contrast | 1,685 texts checked; the only alerts are text over photos (which the analysis can't measure) and the "•" separators, now `aria-hidden` |
| Responsive | No horizontal scroll at 390/768/1024/1280. Footer and "Join Us!" switch to rows from 1024px |

Afterwards, Tailwind's generic grays (`text-gray-700/400` → `pg-navy`/`pg-slate`) and loose icon colors (`#333`,
`#acbcbe`, `#C0CDD4`, `#8D6B3A`) were also replaced with `currentColor` or tokens.

Intentionally left as loose values: reading widths (`max-w-[480px]`…) in hero text, and the colors of SVG logos
and category palettes.

## 5.7 Pending

| Topic | Detail | Owner |
|-------|--------|-------|
| Buttons without a function | "Help me choose" (Get Help), "Take the Quiz" and "Learn more" (Home V1), "Featured" (Ask a Therapist) | Design/development |
| Social networks | Facebook, Instagram, YouTube and LinkedIn URLs are missing (Vimeo is already linked) | Content |
| Sample content | Sample events and registration links; courses and resources without their own page open sample templates | Content |
| Repeated copy | Three home cards repeat "Dive into a wealth of knowledge tailored for parents" | Content |
| Home pages | Decide between the main home, V1 and V2 | Product |
| State colors | Validate `pg-success`, `pg-warning` and `pg-error` in Figma (already used in badges and notices) | Design |
