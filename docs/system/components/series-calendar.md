# SeriesCalendar

`src/components/patterns/SeriesCalendar.tsx` · Used on: Mental Health Series (Monthly Calendar).

A compact Day / Week / Month calendar. Previous/Next buttons are named by the view ("Previous month"); the
period label is announced (`aria-live`); the view switch is a group of `aria-pressed` buttons. Events are
pill buttons colored by category (`categoryStyle`) that open `EventModal` next to them.

Props: `events` (`SeriesEvent[]`), `initialDate`. The full, filterable calendar is the Events page; this one
previews it and links there.
