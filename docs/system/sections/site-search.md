# SiteSearch

`src/sections/SiteSearch.tsx` · Used on: Search (`/search`)

Hero search field with a Search button, an announced result count (`role="status"`) and the results as a
`<ul>` of links (type badge, title, one line). Before searching, and when nothing matches, it shows topic
suggestions that link to `/search?q=<topic>`. Results from Get Help open the organization's site in a new tab
and say so.

The page owns the query (it lives in the URL), so results can be shared and the browser Back button works.

| Prop       | Type                | Notes                                                                       |
| ---------- | ------------------- | --------------------------------------------------------------------------- |
| `content`  | `SiteSearchContent` | Copy and suggestions (below).                                               |
| `query`    | string              | Current query (from `?q=`).                                                 |
| `results`  | `SearchEntry[]`     | Already filtered; use `searchSite(query, searchIndex)` from `@/lib/search`. |
| `onSearch` | `(query) => void`   | Called on submit; the page updates the URL.                                 |

| Field                     | Type     | Rules                                                         |
| ------------------------- | -------- | ------------------------------------------------------------- |
| `label`                   | string   | Accessible name of the field ("Search the site").             |
| `placeholder`             | string   | An example query, not instructions.                           |
| `buttonLabel`             | string   | "Search".                                                     |
| `suggestions`             | string[] | 4–8 topics. Each must return results (a unit test checks it). |
| `emptyTitle`, `emptyBody` | string   | Shown when nothing matches.                                   |

**Index.** `searchIndex` in `src/content/search.ts` is built from the site's own content: pages, courses,
Ask a Therapist answers, Mental Health Series resources, events and Get Help organizations. New content is
searchable automatically. Matching (`src/lib/search.ts`) ignores case and accents, requires every word, and
ranks title matches first. In production the CMS (or WordPress search) replaces the index.
