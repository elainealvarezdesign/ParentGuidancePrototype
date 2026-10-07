# SectionHeading, ListHeading, Eyebrow

`src/components/ui/SectionHeading.tsx`

## SectionHeading

Eyebrow (optional), title, intro (optional). Centered by default.

| Prop | Values | Default |
|---|---|---|
| `title` | ReactNode | required |
| `eyebrow`, `intro` | ReactNode | |
| `align` | `center`, `left` | `center` |
| `as` | `h1`, `h2`, `h3` | `h2` |
| `size` | `large` (text-pg-h1), `small` (text-pg-h2) | `large` |
| `tone` | `default`, `inverse` (on navy) | `default` |
| `eyebrowSize` | `small` (11px), `large` (16px navy) | `small` |
| `id` | heading id for `Section labelledBy` | |

## ListHeading

The "Section Header" above lists and grids: sage bar, title (`text-pg-h3`), optional count badge, optional
action on the right ("View all events"). Props: `title`, `count`, `action`, `as` (`h2`/`h3`), `id`.

## Eyebrow

The small uppercase label alone. `tone`: `teal` (teal-dark), `navy`, `inverse` (sage on navy). `size`:
`small` 11px or `large` 16px.
