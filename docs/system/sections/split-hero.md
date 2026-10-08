# SplitHero

`src/sections/SplitHero.tsx` · Figma: **Hero / Split** (Hero Media variants) · Used on: Ask a Therapist,
On-Demand Courses, Parent Coaching, Get Help

The first section of most inner pages: text on the left, a photo with an offset sage block on the right
(stacked on mobile, text first). Always contains the page `<h1>` and clears the navbar.

| Field | Type | Rules |
|---|---|---|
| `eyebrow` | string | Section name ("Parent Coaching") or a highlight ("Latest Answer"). |
| `eyebrowStyle` | `label` (text), `badge` (teal label badge) | default `label` |
| `title` | `Title` | Up to ~80 characters; `highlight` italic teal-dark. |
| `body` | `RichText` | 1–2 sentences, up to ~180 characters. |
| `person` | `{ name, role? }` | Credit a therapist (Ask). |
| `actions` | `Cta[]` | 0–2. First is primary, second secondary. `href` starting with `http` opens a new tab; `#id` scrolls in page. |
| `image` | `Media` | Meaningful alt unless purely decorative. |
| `shape` | `wide` 16:10 (Ask, Get Help) · `square` 1:1 (Courses) · `portrait` (Coaching) | default `wide` |

`children` renders under the text, e.g. `<CrisisNotice />` on Get Help.
