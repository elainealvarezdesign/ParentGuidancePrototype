# VideoGrid

`src/sections/VideoGrid.tsx` · Used on: Mental Health Series topic ("Watch")

White band: eyebrow + title (`SectionHeading`, left, small), then `VideoCard`s in a two-column grid
(`<ul>`). Each card plays its Vimeo video in place. Hidden when printing.

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title` | string | |
| `videos[]` | `VideoCardContent` | 2 or 4 read best. Fields in [cards.md](../components/cards.md#video-card). |
