# 4. Motion

The prototype animates with **`motion`** (Framer Motion, `motion/react`). Principle: **safe, unhurried**
motion, never bouncy, and always respecting reduced‑motion.

## 4.1 Tokens

Durations and curves live in [`tokens.css`](../../src/styles/tokens.css):

| Band | Duration | CSS variable | Tailwind class | Use |
|------|----------|--------------|----------------|-----|
| Micro | 0.15s | `--pg-dur-micro` | `duration-(--pg-dur-micro)` | Press, color change, sort menus |
| Fast | 0.22s | `--pg-dur-fast` | `duration-(--pg-dur-fast)` | Hover, icons, pop-ups |
| Base | 0.35s | `--pg-dur-base` | `duration-(--pg-dur-base)` | Accordions, menus, modals, view changes |
| Reveal | 0.55s | `--pg-dur-reveal` | `duration-(--pg-dur-reveal)` | Content entrance on scroll |

| Curve | Value | Use |
|-------|-------|-----|
| `ease-pg-out` | `[0.25, 0.46, 0.45, 0.94]` | Brand curve: entrances, reveals, pop-ups |
| `ease-pg-in-out` | `[0.65, 0, 0.35, 1]` | Open/close, accordions, tabs |

In `motion` props, write the numbers (`transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}`).
Stagger between cards in a grid: **0.06s**, for the first 6 items only.

## 4.2 Patterns

### Reveal on scroll

Used gently and **only once**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
/>
```

- Vertical offset of **16–24px**. Horizontal offsets (`x`) only in heroes and image + text rows, 32–48px at most,
  and a page that uses them gets `overflow-x-clip` so it doesn't create horizontal scroll on mobile.
- Always `once: true`: content doesn't hide again when scrolling up.
- Grids: `delay: index * 0.06`, for the first 6 items only.

### Interaction feedback

| Element | Animation |
|---------|-----------|
| Buttons (`<Button>`) | `whileTap={{ scale: 0.97 }}` + color with `transition-colors`. Hover changes color only |
| Clickable cards | Hover: `card-hover` shadow and `y: -2`. No scaling |
| Featured images | Hover: **1.02** maximum scale (or no animation) |
| Social icons | Hover: `y: -2`, no scaling |
| Accordion / FAQ | `auto` height + opacity, 0.35s; the `+` icon rotates 45° |
| Pop-ups and modals | Backdrop fades; panel `opacity 0 → 1`, `scale 0.97 → 1`, `y: -6 → 0`, 0.22s |
| Confirmations ("✓ Question Submitted") | `opacity 0 → 1`, `scale 0.9 → 1`, 0.35s, `ease-pg-out` |

### What to avoid

- Bouncy `type: "spring"`.
- `whileHover` scaling above 1.02.
- `whileHover` color changes in `motion`: use Tailwind `hover:` classes.
- Infinite or decorative animations. The only exception is the "live" dot (soft pulse), and only while that
  state is active.
- Entrance animations on the **Get Help** page: crisis content is visible from the very first moment
  (`initial={false}`).
- Animating the hero or the first visible block in a way that makes the page look empty on load.

## 4.3 Scrolling

- Every navigation opens the new page at the top (`<ScrollRestoration />` in the root layout); back/forward
  restores the position.
- "Back to top" buttons and page changes use `scrollBehavior()` from
  [`src/lib/motion.ts`](../../src/lib/motion.ts): `"smooth"`, or `"auto"` when the user asks for
  reduced motion.

## 4.4 Reduced‑motion contract (mandatory)

Implemented. The app is wrapped in `MotionConfig`:

```tsx
// src/app/App.tsx
<MotionConfig reducedMotion="user">{/* …app… */}</MotionConfig>
```

With `reducedMotion="user"`, `motion` turns off movement and scaling for anyone who has the system setting
enabled, and keeps opacity changes. CSS transitions are turned off by the
`@media (prefers-reduced-motion: reduce)` rule in [`accessibility.css`](../../src/styles/accessibility.css).

Rule: **no content may stay hidden** (`opacity: 0`) if the animation doesn't run.
