# CourseRecommendations

`src/sections/CourseRecommendations.tsx` · Used on: Course overview

White card: "You may also like" heading and up to three small course tiles (thumbnail, title, meta line).
Tiles with a `slug` link to that course; the others are not interactive.

| Field | Type | Rules |
|---|---|---|
| `title` | string | |
| `meta` | `(rec) => string` | "12 lessons • 3h" (`coursePage.recommendationMeta`). |
| `items` | `CourseRecommendation[]` | Up to 3. Thumbnail shown at 80×64px. |
