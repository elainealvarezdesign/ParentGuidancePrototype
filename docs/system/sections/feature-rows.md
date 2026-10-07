# FeatureRows

`src/sections/FeatureRows.tsx` · Figma: **Home / Why Parent Guidance** · Used on: Home

Centered heading, then rows of image + title + one sentence that alternate sides on desktop.

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title`, `intro` | string | Title up to ~45 characters. |
| `imageBase` | `Media` | Optional frame drawn under every row image. |
| `rows[]` | `{ title, description, image }` | 3 rows. Title 2–5 words; description up to ~110 characters. |
