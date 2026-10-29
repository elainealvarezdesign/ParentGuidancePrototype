# Course overview

Route `/courses/:courseSlug` · `src/app/CoursePage.tsx` · Content `src/content/coursePrograms.ts`
· Template: Detail. One template for every course.

| # | Block | Data (`CourseProgram`) |
|---|---|---|
| 1 | `Breadcrumb`: Courses › course title | `title` |
| 2 | `CourseSummary`: cover photo · label `Badge`, `<h1>`, summary, facts (lessons, duration, modules), instructors (`Avatar` + name + credential), "Start course" → lesson 1 · outline (8 lessons per page, paged with named arrow buttons) | `cover`, `label`, `summary`, `totalDuration`, `modules`, `instructors`, `lessons` |
| 3 | `CourseAbout`: paragraphs (`RichText`), instructor bios when present | `about`, `instructors[].bio` |
| 4 | `CourseRecommendations` ("You may also like"): recommendation tiles (link when `slug` exists) | `recommendations` |

Labels shared by every course (breadcrumb, "Start course", outline buttons, headings, not found): `coursePage`.

Add a course: add a `CourseProgram` to `coursePrograms` (slug, lessons with ids from 1). Its overview and
lesson pages exist immediately. Unknown slug → not found.
