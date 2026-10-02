# 5. Quality standards

What every screen of the prototype meets and the rules any new screen has to keep. To review a screen step by
step, use the checklist in the [Introduction](./README.md#how-to-check-a-screen). Open items are listed in 5.4.

## 5.1 Accessibility

| Standard | How it is met |
|----------|---------------|
| Visible focus | 2px `pg-teal-dark` outline with a 2px offset on every link, button and field, from a global rule in `src/styles/accessibility.css` |
| Reduced motion | `MotionConfig reducedMotion="user"` in `App.tsx`, a CSS rule in `accessibility.css` and non-animated scrolling in `utils/motion.ts` ([section 4.4](./04-motion.md)) |
| Keyboard | Cards are links, FAQs are buttons with `aria-expanded`; the ☰ menu (below 1024px) closes with Esc, an outside tap or on navigation, and returns focus |
| Contrast | Text only in the approved pairs ([section 1.1](./01-foundations.md)): sage and mist are never text on light backgrounds, small accent text is teal dark and text on sage is navy |
| Text size | 12px minimum; 11px only for uppercase labels |
| Names and labels | Icon-only buttons carry `aria-label`; decorative icons and "•" separators carry `aria-hidden`; every image has `alt` |
| Structure | One `h1` per page |
| Responsive | No horizontal scroll at 390, 768, 1024 and 1280px; large fixed widths only from `lg` |

## 5.2 Visual consistency

| Topic | Rule |
|-------|------|
| Colors | Only `pg-*` tokens, in classes or as `var(--pg-*)`. Overlays on video and photos use navy, never black |
| Typography | Sizes on the scale ([section 1.2](./01-foundations.md)); Poppins applied once on `body`; uppercase tracking with `tracking-pg-caps` / `tracking-pg-eyebrow` |
| Radii | `rounded-pg-sm/md/lg/xl/2xl` (4/8/12/16/28px) and `rounded-full` |
| Shadows | `shadow-pg-card`, `shadow-pg-card-hover`, `shadow-pg-overlay` |
| Containers | `max-w-pg-page` (1280), `max-w-pg-content` (1100), `max-w-pg-reading` (680) |
| Durations | 0.15 / 0.22 / 0.35 / 0.55 s ([section 4.1](./04-motion.md)) |
| Buttons | Every action uses `<Button>`, `<ButtonLink>` or `<ButtonAnchor>` ([chapter 2](./02-buttons.md)) |
| Icons | Material Icons Outlined, always through `components/icons.tsx` |

Accepted exceptions: the colors inside SVG logos (brand art), the course and topic category palettes (data
colors) and the reading widths of hero text (`max-w-[480px]`…).

## 5.3 Figma

The Figma library mirrors the prototype: every token has its variable, every pattern its component ([section
3.7](./03-layout.md)) and every screen its frame at 1280, 768 and 375px. When a screen changes in the
prototype, its three frames are updated too.

## 5.4 Open items

| Topic | Detail | Owner |
|-------|--------|-------|
| Buttons without a function | "Help me choose" (Get Help), "Take the Quiz" and "Learn more" (Home V1), "Featured" (Ask a Therapist) | Design/development |
| Social networks | Facebook, Instagram, YouTube and LinkedIn URLs are missing (Vimeo is already linked) | Content |
| Sample content | Sample events and registration links; courses and resources without their own page open sample templates | Content |
| Repeated copy | Three home cards repeat "Dive into a wealth of knowledge tailored for parents" | Content |
| Home pages | Decide between the main home, V1 and V2 | Product |
| Home V2 accent | Uses a peach tone (`#e8a497`) that is not part of the palette | Design |
| Cookies Policy | Cookie names are shown in a monospace font | Design |
| Spacing and line height | Mental Health Series, Parent Coaching and the alternative home pages still use one-off line heights and spacing values instead of the scale | Development |
