# Question answer

Route `/ask-a-therapist/:questionId` · `src/app/QuestionDetailPage.tsx` · Content
`src/content/askATherapist.ts` (same `questions` as the list) · Template: Detail

| # | Block | Data |
|---|---|---|
| 1 | `Breadcrumb`: Ask a Therapist › category › question | |
| 2 | Main column: category `Badge` (label), `<h1>` question, "— User Submitted" | `question` |
| 3 | `MediaPlayer` (key = id) | `poster`, `duration` |
| 4 | `AccordionItem` (`compact`) "Read Transcript" | `transcript` |
| 5 | Warning disclaimer box | `questionDisclaimer` |
| 6 | `PrevNextNav` | neighbors in `questions` |
| 7 | Sidebar: "Answered by" card (`Avatar` l, name, credential, bio) | `therapists[answeredBy]` |
| 8 | Sidebar: photo card "Have a question of your own?" → `SubmitQuestionDialog` | |
| 9 | Sidebar: Related Questions (same category, else first others; 3) + "Browse all questions" | |

Unknown id → `NotFoundPage` ("We couldn't find that answer", link back to the list).
