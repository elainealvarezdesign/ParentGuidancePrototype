# Events

Route `/mental-health-series/events` · `src/app/MentalHealthEventsPage.tsx` · Content `src/content/events.ts`
(events and `eventsPage`, every label on the page)

| # | Block |
|---|---|
| 1 | Back link "Mental Health Series", eyebrow "Events", `<h1>` "Live sessions & events", intro (times in CT) |
| 2 | Toolbar: previous/next month (named), month label (announced), "Today", Month/List switch (`aria-pressed`) |
| 3 | Category filters (`aria-pressed` chips with color swatches from `categoryStyle`) |
| 4 | "No events in <month>" notice with a jump to the nearest month that has events |
| 5 | Month view: `EventMonthGrid` (day cells select the day, named "Thursday, July 10, 1 event"; event pills open `EventModal`). List view: the month's events as `EventListItem`s |
| 6 | Sidebar: selected day's events as `EventDetail` (announced), Upcoming events (4 `UpcomingEventButton`s), "Never miss a session" (.ics of all events) |

Shared link `?event=<id>` (from "Copy event link") opens that event on load.
