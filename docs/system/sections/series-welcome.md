# SeriesWelcome

`src/sections/SeriesWelcome.tsx` · Used on: Mental Health Series (step 2)

Centered first section once a family has picked a school: `<h1>` with a highlighted part, the chosen location
with a "Change district" button, a hero `SearchField` and a 16:9 Vimeo welcome video. Clears the fixed navbar.

| Field | Type | Rules |
|---|---|---|
| `title` | `Title` | |
| `searchLabel`, `searchPlaceholder` | string | The label is announced; the placeholder is a hint only. |
| `changeLabel` | string | "Change district". |
| `vimeoId`, `videoTitle` | string | `videoTitle` names the iframe. |

Props: `location` ("Fort Worth ISD · Texas"), `onChangeLocation`, `search` and `onSearch` (the page owns the
search value because it filters the sections below).
