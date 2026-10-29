# SchoolGate

`src/sections/SchoolGate.tsx` · Used on: Mental Health Series (step 1)

Full-height first step for content that depends on where the family lives. Left: eyebrow, `<h1>` with one
highlighted word, a help line with one link, and a form with two native selects in `Field`s (State, then
School district, enabled once a state is chosen) and "Continue". Right: layered artwork on a sage block.
Clears the fixed navbar. Calls `onSubmit(state, district)`.

| Field | Type | Rules |
|---|---|---|
| `eyebrow` | string | |
| `title` | `Title` | `{ text, highlight, after }`. |
| `help` | `{ text, linkLabel, to }` | "Don't see your state? Get in touch with our team." |
| `images` | `{ base, frame, photo: Media }` | `base` and `frame` are decorative; `photo` carries the alt text. |
| `state`, `district` | `{ label, placeholder }` | Labels are visually hidden but named for screen readers. |
| `submitLabel` | string | |

Props: `states`, `districtsByState`, `defaultDistricts` (lists from `src/content/mentalHealthSeries.ts`),
`onSubmit`.
