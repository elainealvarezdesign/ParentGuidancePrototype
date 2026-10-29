# TopicHero

`src/sections/TopicHero.tsx` · Used on: Mental Health Series topic

First section of a topic page. Back link, eyebrow with a sage bar, `<h1>` with one word in italics, intro,
a reminder quote (sage left border), and a side card with the expert (initials) and three facts (videos,
live sessions, takeaways). Clears the fixed navbar. The `<h1>` takes focus from "Back to top" (`titleId`).

| Field | Type | Rules |
|---|---|---|
| `backLink` | `{ label, to }` | "All topics" → the series page. |
| `eyebrow` | string | "Mental Health Series · Self-Care". |
| `title`, `emphasis` | string | `emphasis` must be part of `title`; it is shown in italics. |
| `intro` | string | 2–4 sentences. |
| `reminder` | string | One or two sentences. |
| `expert` | `{ name, role, initials }` | |
| `asideLabel` | string | Screen-reader name of the side card. |
| `facts` | `{ videos, sessions, takeaways }` | Built with `topicFacts(topic)` in `src/content/topics.ts`. |

Prop `titleId`: id of the `<h1>` (for `BackToTopButton`).
