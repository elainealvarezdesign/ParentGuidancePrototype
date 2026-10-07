# Mental Health Series topic

Route `/mental-health-series/:slug` · `src/app/MentalHealthTopicPage.tsx` · Content `src/content/topics.ts`
(`Topic` type documents every field)

| # | Block | `Topic` fields |
|---|---|---|
| 1 | Header: "All topics" link, eyebrow "Mental Health Series · category", `<h1>` with the emphasized word, intro, reminder quote; aside with the expert and counts | `title`, `emphasis`, `category`, `intro`, `reminder`, `expert`, counts |
| 2 | "Watch": 2 video cards (Vimeo embed on play when `vimeoId` exists) | `videos` |
| 3 | "Live sessions": 3 session cards with Register (Spanish ones `lang="es"`) | `sessions` |
| 4 | "Key takeaways": numbered cards on tint | `takeaways` |
| 5 | "At home": numbered action cards with tips (`<dl>`) | `actions` |
| 6 | "Keep learning": 4 resource cards, school-leaders banner → Contact, Back to top | `resources` |
| 7 | `NewsletterSection` (compact) | `topicNewsletter` |

Headings use `SectionHeading` (`align="left" size="small"`). Unknown slug → not found. Only
"building-your-childs-confidence" exists; library resources without a page open it as sample content.
