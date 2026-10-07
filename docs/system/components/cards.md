# Cards

`src/components/cards/` — one item in a list or grid. Cards sit in `<ul>/<li>` grids, have one action, and
lift slightly on hover (`shadow-pg-card` → `shadow-pg-card-hover`). Wrap them in `<Reveal as="li">` for the
staggered entrance.

## Unified card

`UnifiedCard.tsx` · Figma: **Unified Card** · Used on: On-Demand Courses, Get Help, Home explorations.

Image on top (photo or logo), badge and person avatar over the image, title, optional description and
meta line, one button, optional footer line. Only the button is interactive.

| Prop | Type | Notes |
|---|---|---|
| `image` | `Media` | Photo 700px wide, or an organization logo. |
| `imageKind` | `photo` (cover), `logo` (contain on white) | default `photo` |
| `logoPadding` | `default`, `large` | `large` for square/tall logos. |
| `badge` | string | Category or type, 1–3 words. |
| `person` | string | Full name → avatar on the image. |
| `title` | string | Up to ~70 characters, never truncated. |
| `description` | string | One sentence, up to ~110 characters. |
| `meta` | string | "1h 30m • 6 lessons", "Available 24/7". |
| `footer` | string | Small centered line under the button. |
| `cta` | `Cta` | `to` = in-app; `href` = new tab with "(opens in a new tab)". |
| `headingLevel` | `h2`, `h3` | default `h3` |

The button's accessible name includes the title ("Begin Course: Body Love") so a list of identical buttons
is still distinguishable.

## Question card

`QuestionCard.tsx` · Used on: Ask a Therapist.

Photo with category badge (overlay) and answerer avatar, the question as title, "View Answer" button,
"Answered by" line. Props: `question`, `category`, `answeredBy` (name), `image` (decorative URL, 420×240),
`to`, `headingLevel`.

## Resource card

`ResourceCard.tsx` · Used on: Mental Health Series resource library.

Type badge with icon (Video, Article, Guide, Worksheet, Tool; colors and icons are defined in the card),
"New" badge, title, one line, footer with category and duration. **The whole card is one link** (it has no
other controls). Props: `title`, `description` (RichText), `type`, `category`, `duration`, `isNew`, `to`.

## Event row

`EventRow.tsx` · Used on: Mental Health Series "Upcoming Events".

Date tile, title with category tag (and language tag), date · time CT, description, Register (new tab) and
Add to calendar (.ics). Spanish events get `lang="es"` and Spanish button labels. Props: `event`
(`SeriesEvent` from `src/content/events.ts`), `headingLevel`.
