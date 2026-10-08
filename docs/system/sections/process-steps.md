# ProcessSteps

`src/sections/ProcessSteps.tsx` · Used on: Parent Coaching ("How it works")

Eyebrow + title, 3–4 numbered steps (sage circles joined by a line that draws in on desktop) as an `<ol>`,
then one action.

| Field | Type | Rules |
|---|---|---|
| `id` | string | Anchor target (`#how-it-works`). |
| `eyebrow`, `title` | string | |
| `steps[]` | `{ title, body }` | Title 2–8 words, body one sentence. |
| `cta` | `Cta` | Optional. |
