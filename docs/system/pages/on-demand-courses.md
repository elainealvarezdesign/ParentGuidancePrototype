# On-Demand Courses

Route `/on-demand-courses` · `src/app/OnDemandCoursesPage.tsx` · Content `src/content/courses.ts`
· Template: Directory · Page background `tint-soft`

| # | Block | Content / data |
|---|---|---|
| 1 | `SplitHero` (`square`; actions "Browse all courses" → `#courses`, "Meet the coaches") | `coursesHero` |
| 2 | `FilterBar`: `SearchField` + `FilterChips` (`courseTopics`, labels with counts) + `Select` (`courseSortOptions`) | |
| 3 | Section `#courses`: `ListHeading` (topic or "All Courses" + count), `UnifiedCard` grid (9 per page, cta "Begin Course"), empty state, `Pagination` (scrolls back to `#courses`) | `courses` |
| 4 | `PhotoCtaBanner` (`overlay`, tone `tint-soft`) | `coursesCta` |

Search matches title, topic, instructor and description. Sort: Featured (featured first), A–Z, Newest
(new first). Card links use `detailSlugFor(course)` (prototype: only two courses have pages).
