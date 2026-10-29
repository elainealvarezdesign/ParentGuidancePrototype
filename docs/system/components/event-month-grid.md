# EventMonthGrid

`src/components/patterns/EventMonthGrid.tsx` · Used on: Events

The large month calendar of the Events page. Weekday header, one cell per day (weeks start on Sunday,
blank cells before and after the month). The whole cell is a button that selects the day: `aria-pressed`, named
"Thursday, July 10, 1 event". On desktop each day shows up to three event pills (time + title, colored by
`categoryStyle`) that open the event pop-up, plus "+N more"; on mobile it shows colored dots.

| Prop | Type | Notes |
|---|---|---|
| `month` | Date | First day of the month to show. |
| `byDay` | `Map<"YYYY-MM-DD", SeriesEvent[]>` | Events of the month, already filtered by category. |
| `selected`, `onSelectDay` | string, `(key) => void` | Selected day key. |
| `onOpenEvent` | `(event, click) => void` | Opens `EventModal` anchored to the clicked pill. |
| `label` | string | Accessible name, "Calendar, July 2025". |
| `moreLabel` | `(count) => string` | "+2 more". |

The smaller calendar on the Mental Health Series page is `SeriesCalendar`.
