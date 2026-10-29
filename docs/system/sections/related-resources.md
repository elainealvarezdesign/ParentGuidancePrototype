# RelatedResources

`src/sections/RelatedResources.tsx` · Used on: Mental Health Series topic ("Keep learning")

White band: eyebrow + title, up to four link cards (image, type pill, title, one sentence, link line with an
arrow; the whole card is the link) in a 4 → 2 → 1 grid, then an optional navy banner with one Inverse action.
Anything passed as `children` goes at the end (the page uses it for "Back to top"). Hidden when printing.

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title` | string | |
| `linkLabel` | string | Link line on every card ("View topic"). |
| `resources[]` | `{ type, title, description, image, to }` | Up to 4. Image 600px wide, landscape. `to` is an in-app route. |
| `banner` | `{ title, body, cta: Cta }` | Optional. One sentence of body. |
