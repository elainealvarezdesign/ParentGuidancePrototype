# SessionList

`src/sections/SessionList.tsx` · Used on: Mental Health Series topic ("Live sessions")

Cream band: eyebrow + title, then `SessionCard`s in a three-column grid (one column below `lg`), as a
`<ul>`. Hidden when printing.

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title` | string | |
| `sessions[]` | `SessionCardContent` | Fields in [cards.md](../components/cards.md#session-card). 3 per row. |
