# ActionSteps

`src/sections/ActionSteps.tsx` · Used on: Mental Health Series topic ("At home")

Cream band in two columns on desktop: heading and a one-line intro on the left; numbered action cards on the
right (navy number, title, then tips as a `<dl>`: a short label and one or two sentences). Use for "things you
can do at home". Prints.

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title` | string | |
| `intro` | string | Optional, one sentence. |
| `steps[]` | `{ title, tips: { label, text }[] }` | 3–5 steps, 1–3 tips each. |
