# Ask a Therapist

Route `/ask-a-therapist` · `src/app/AskATherapistPage.tsx` · Content `src/content/askATherapist.ts`
· Template: Directory

| # | Block | Content / data |
|---|---|---|
| 1 | `SplitHero` (`wide`, badge eyebrow "Latest Answer", `person`) | `askHero` |
| 2 | `FilterBar`: `SearchField` + `FilterChips` (`questionCategories`) + `Select` (`questionSortOptions`) | |
| 3 | Section `tint-soft`: sidebar (submit prompt card + photo with caption) and the grid | `askSubmitPrompt` |
| 3a | `ListHeading` "Browse All" + count, `QuestionCard` grid (9 per page), empty state, `Pagination` | `questions`, `therapists` |
| 4 | `PhotoCtaBanner` (`band`) | `askCta` |
| — | `SubmitQuestionDialog` opened from the sidebar | `submitQuestionCopy` |

Behavior: search matches the question text; category, search and sort reset to page 1; sort Featured
(content order), Newest (id desc), A–Z. Cards link to `/ask-a-therapist/:id`.
