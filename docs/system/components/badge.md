# Badge

`src/components/ui/Badge.tsx` · Figma: **Badge / Tag**

A short, non-interactive label: category, content type, count or status. Every tone meets 4.5:1.

| Prop | Values | Default |
|---|---|---|
| `tone` | `navy`, `teal` (teal-dark fill), `tint`, `cream`, `success`, `warning`, `error`, `overlay` (on photos) | `tint` |
| `shape` | `pill` (rounded, 12px semibold) or `label` (8px radius, uppercase eyebrow) | `pill` |
| `icon` | ReactNode, 14–16px, decorative | |

Use `label` shape for the "Latest Answer" hero badge and category labels on detail pages; `pill` for counts,
types and statuses. Badges are not buttons: filters use `FilterChips`.
