# Mental Health Series

Route `/mental-health-series` · `src/app/MentalHealthSeriesPage.tsx` · Content
`src/content/mentalHealthSeries.ts`, `src/content/events.ts`

Two steps on one route.

**Step 1 — School gate** (`SchoolGate`): eyebrow, `<h1>` "What _state_ does your child attend school in?",
link to Contact for missing states, two native selects in `Field`s (State, then School district, enabled
after a state), "Continue". Right: layered photo on a sage block. Content: `seriesGate`, `usStates`,
`districtsByState`, `defaultDistricts`.

**Step 2 — Series home** (`SeriesHome`):

| # | Block | Content |
|---|---|---|
| 1 | Welcome: `<h1>`, "District · State" + "Change district" (back to step 1), hero `SearchField` (filters resources and events), Vimeo welcome video | `seriesWelcome` |
| 2 | `ResourceLibrary` | `seriesResources` (filtered by the search) |
| 3 | "Monthly Calendar": `ListHeading` + "View all events" → `/mental-health-series/events`, `SeriesCalendar` (starts July 2025) | `EVENTS` |
| 4 | "Upcoming Events": `ListHeading` + count, `EventRow` list (3 at a time, "Load more events") | `EVENTS` sorted |

In production the selected district would come from the account or the URL and filter the content.
