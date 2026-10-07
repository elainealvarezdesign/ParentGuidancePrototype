# PhotoCtaBanner

`src/sections/PhotoCtaBanner.tsx` · Figma: **CTA Banner** · Used on: Ask a Therapist (band), On-Demand
Courses (overlay)

Near the end of a page, sends people to the next step (usually coaching). Max one per page.

| Variant | Look |
|---|---|
| `band` (default) | Full-width sage band, photo left, navy text right. |
| `overlay` | Rounded photo card in the page column with a navy gradient and white text. Pass `tone` = the page background. |

| Field | Type | Rules |
|---|---|---|
| `title` | string | Up to ~40 characters. |
| `body` | `RichText` | 1–2 sentences; one key fact may be **bold**. |
| `cta` | `Cta` | One action. |
| `image` | `Media` | Decorative in both variants (`alt: ""`). |
