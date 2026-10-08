# HomeHero

`src/sections/HomeHero.tsx` · Figma: **Home / Hero** · Used on: Home

Display title with a highlighted part, one-sentence intro and the hero `SearchField` with a Search
button. Contains the page `<h1>` (`text-pg-display`).

| Field | Type | Rules |
|---|---|---|
| `title` | `Title` | 3–6 words; `highlight` renders italic. |
| `intro` | string | One sentence, up to ~140 characters. |
| `search` | `{ label, placeholder, buttonLabel }` | `label` is the accessible name ("Search resources"). |

Prop `onSearch(query)` receives the submitted query. The home page sends it to the [Search page](../pages/search.md) (`/search?q=…`).
