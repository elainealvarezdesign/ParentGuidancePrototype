# Lesson

Route `/courses/:courseSlug/lesson/:lessonId` · `src/app/LessonPage.tsx` · Content
`src/content/coursePrograms.ts` · Template: Detail. One template for every course.

| # | Block | Data |
|---|---|---|
| 1 | `Breadcrumb`: Courses › course (hidden on mobile) › lesson | |
| 2 | Header: "Lesson N of M" `Badge` + duration, module name (if any), `<h1>`, "Mark complete" toggle (`aria-pressed`) | `lesson`, `modules` |
| 3 | `MediaPlayer` (key = lesson id, accent from the program) | `poster`, `duration`, `accent` |
| 4 | `Tabs`: Overview (description) · Key Takeaways (list) · Resources (list, no files yet) | `description`, `takeaways`, `resources` |
| 5 | Sidebar: `LessonOutline` | `lessons`, completed set |
| 6 | Bottom nav: previous lesson (or "Back to Course") · "Next Lesson" (or "Finish Course") | |

Completion is kept in memory for the visit (production: per user). Unknown course or lesson → not found.
