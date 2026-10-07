# Breadcrumb

`src/components/ui/Breadcrumb.tsx`

Thin tint bar under the navbar on detail pages. Render it **first**: it includes the 56px offset for the
fixed navbar. `<nav aria-label="Breadcrumb">` with an ordered list; the last item is the current page
(`aria-current="page"`, not a link, truncated).

| Prop | Type | Notes |
|---|---|---|
| `items` | `{ label, to?, hideOnMobile? }[]` | 2–3 items. Hide long middle items on mobile. |

```tsx
<Breadcrumb items={[{ label: "Courses", to: "/on-demand-courses" },
                    { label: program.title, to: courseHref, hideOnMobile: true },
                    { label: lesson.title }]} />
```
