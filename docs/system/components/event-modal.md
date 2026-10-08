# EventModal

`src/components/patterns/EventModal.tsx` · Figma: **Calendar / Event card**

The event pop-up. On tablet/desktop it opens next to the event that was clicked (below it, or above when
there is no room); on phones it is centered. Modal behavior comes from `useModal` (focus moves in once the
card is positioned, Tab trap, Escape, inert page, focus returns). Rendered in a portal.

Content: title (teal-dark header), date tile, date and time (CT), description, "Register for this event"
(new tab) and "Copy event link" (copies `/mental-health-series/events?event=<id>`; the confirmation is
announced and its timer is cleared on close, audit L02). Spanish events switch labels and set `lang="es"`.

Props: `event` (`EventModalData` or null to close), `anchor` (`DOMRect` of the clicked element or null),
`onClose`. Build `event` with `toEventModalData(seriesEvent)` from `EventParts`.
