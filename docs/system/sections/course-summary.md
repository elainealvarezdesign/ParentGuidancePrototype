# CourseSummary

`src/sections/CourseSummary.tsx` · Used on: Course overview

The card at the top of a course page, in three columns on desktop: cover photo | label `Badge`, `<h1>`,
summary, facts (lessons, length, modules), instructors (`Avatar` + name + credential) and "Start course" →
lesson 1 | the course outline. The outline shows 8 lessons at a time with named arrow buttons and an announced
"2 of 3". Stacks below `lg`.

Content: the course fields (`slug`, `title`, `label`, `cover`, `summary`, `totalDuration`, `instructors`,
`lessons`, `modules`) from a `CourseProgram`, plus `labels` (`coursePage` in
`src/content/coursePrograms.ts`). Render it with `key={program.slug}` so the outline page resets per course.
