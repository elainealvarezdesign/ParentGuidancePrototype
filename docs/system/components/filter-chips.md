# FilterChips

`src/components/ui/FilterChips.tsx` · Figma: **Filter Chip**

A single-choice row of pill buttons. The group has an `aria-label`; each chip is a toggle with
`aria-pressed`. Scrolls horizontally on small screens.

| Prop | Type | Notes |
|---|---|---|
| `label` | string | Names the group: "Filter by category". |
| `options` | `readonly T[]` | Usually `as const` arrays from content, first item "All". |
| `value`, `onChange` | `T`, (v: T) => void | Controlled. Reset pagination when it changes. |
| `renderLabel` | (o: T) => string | Display text, e.g. with counts: `"Anxiety (3)"`. |
| `className` | string | `flex-wrap justify-center overflow-visible` to center and wrap (Get Help). |

Selected chip: navy fill, white text. Unselected: cream-dark fill, slate text.
