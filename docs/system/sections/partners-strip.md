# PartnersStrip

`src/sections/PartnersStrip.tsx` · Figma: **Partners** · Used on: Home

Title and a slow marquee of partner logos (CSS animation `pg-marquee`). With reduced motion the logos
stop and wrap; duplicated logos for the loop are hidden from screen readers.

| Field | Type | Rules |
|---|---|---|
| `title` | string | |
| `logos[]` | `{ src, alt, height }` | `alt` = organization name. `height` 40–48px. Grayscale or single-color logos. |
