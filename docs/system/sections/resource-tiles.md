# ResourceTiles

`src/sections/ResourceTiles.tsx` · Figma: **Home / Resource Tiles** · Used on: Home

A row of 4 photo tiles on sage (2×2 on mobile), each a link to a main area of the site, with an optional
"more" link under them. Each tile has an `h2`.

| Field | Type | Rules |
|---|---|---|
| `tiles[].title` | string | 2–4 words; `"\n"` controls the line break. |
| `tiles[].description` | string | One sentence, up to ~60 characters. |
| `tiles[].image` | `Media` | 176×128 crop. |
| `tiles[].dim` | boolean | Darken busy photos. |
| `tiles[].to` | route | |
| `more` | `Cta` | Optional link under the row. |

Exactly 4 tiles (one per service).
