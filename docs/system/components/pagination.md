# Pagination

`src/components/ui/Pagination.tsx` · Figma: **Pagination**

`<nav>` with Previous, page numbers (`aria-current="page"` on the current one) and Next. Renders nothing
when there is one page.

| Prop | Type | Notes |
|---|---|---|
| `page`, `totalPages` | number | 1-based. |
| `onChange` | (page) => void | Scroll the list back into view if the page is long (Courses does). |
| `label` | string | Landmark name: "Course pages". Default "Pagination". |

Use 9 items per page for 3-column grids.
