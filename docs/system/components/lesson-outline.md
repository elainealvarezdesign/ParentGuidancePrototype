# LessonOutline

`src/components/patterns/LessonOutline.tsx` · Used on: Lesson page sidebar.

Course outline: a progress bar (`role="progressbar"`, "Lessons completed"), the numbered list of lessons as
links (current one `aria-current="page"`, completed ones show a check and say ", completed"), and a link
back to the course overview. Sticky on desktop; the list scrolls after 60vh.

Props: `lessons`, `currentId`, `completed` (Set of ids), `lessonHref(id)`, `courseHref`.
