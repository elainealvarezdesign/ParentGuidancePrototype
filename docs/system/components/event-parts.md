# Event parts

`src/components/patterns/EventParts.tsx` — small pieces shared by the Series page and the Events page.

| Export | What |
|---|---|
| `categoryStyle` | Color per event category: `pill` classes (text at 4.5:1+) and `swatch` (dots, bars). Live Q&A = teal-dark, Workshop = navy, Support group = sage, Course update = tint with ring. |
| `EventCategoryTag` | The category label as a pill. |
| `LanguageTag` | "Español" pill. |
| `DateBlock` | Month + day tile, `size` `sm`/`md`, decorative (the date is written in text too). |
| `EventActions` | Register (new tab, Spanish label when needed) + Add to calendar (.ics download). |
| `toEventModalData` | `SeriesEvent` → `EventModal` data. |

Event data, labels and date helpers (`parseDate`, `formatTimeRange`, `formatStart`, `downloadIcs`) live in
`src/content/events.ts`. Colors stay here, not in content.
