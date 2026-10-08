# DocumentHeader

`src/sections/DocumentHeader.tsx` · Used on: Terms of Use, Cookies Policy, Consent Documents

Left-aligned eyebrow, `<h1>` and one sentence for long documents, with an optional actions slot
(Download / Print) as `children`. The `<h1>` gets `titleId` and `tabIndex={-1}` so `BackToTopButton` can
focus it. Hidden in print unless `printable` (Cookies prints its header).

| Prop | Notes |
|---|---|
| `content` | `{ eyebrow, title, intro }` |
| `titleId` | id for the `<h1>` |
| `printable` | keep the header when printing |
