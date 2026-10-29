# Mental Health Series topic

Route `/mental-health-series/:slug` · `src/app/MentalHealthTopicPage.tsx` · Content `src/content/topics.ts`
(`Topic` type documents every field; `topicPage` holds the labels shared by every topic)

| # | Section | Content |
|---|---|---|
| 1 | `TopicHero`: "All topics" link, eyebrow "Mental Health Series · category", `<h1>` with the emphasized word, intro, reminder quote; side card with the expert and three facts | `title`, `emphasis`, `category`, `intro`, `reminder`, `expert`, `topicFacts(topic)` |
| 2 | `VideoGrid` ("Watch"): 2 `VideoCard`s (Vimeo plays in place when `vimeoId` exists) | `videos` |
| 3 | `SessionList` ("Live sessions"): `SessionCard`s with Register (Spanish ones `lang="es"`) | `sessions` |
| 4 | `NumberedCards` ("Key takeaways") on tint | `takeaways` |
| 5 | `ActionSteps` ("At home"): numbered action cards with tips (`<dl>`) | `actions` |
| 6 | `RelatedResources` ("Keep learning"): 4 resource cards, school-leaders banner → Contact, Back to top | `resources`, `topicPage.leadersBanner` |
| 7 | `NewsletterSection` (compact) | `topicNewsletter` |

Unknown slug → not found (`topicPage.notFound`). Only "building-your-childs-confidence" exists; library
resources without a page open it as sample content. Add a topic: add a `Topic` to `TOPICS`; the page needs no
code.
