# SearchField

`src/components/ui/SearchField.tsx` · Figma: **Search Bar**

A search input with a permanent accessible name, a search icon and a "Clear search" button that appears
when there is text. Wrapped in `role="search"`.

| Prop | Type | Notes |
|---|---|---|
| `label` | string | Required accessible name ("Search questions"). |
| `value`, `onValueChange` | string, (v) => void | Controlled. Clearing calls `onValueChange("")`. |
| `variant` | `toolbar` (default), `hero` | `toolbar`: compact cream input for FilterBars. `hero`: large white pill (home, Series welcome). |
| `action` | ReactNode | Trailing element, e.g. a "Search" `Button` in the hero variant. |
| `placeholder`, … | native input props | Placeholder is an example, not the label. |
| `className` | string | Wrapper width/layout. |

Filtering lists update as the user types; pair the list with a `role="status"` count
("12 questions found") so screen readers hear the result.

```tsx
<SearchField label="Search courses" placeholder="Search courses…" value={q} onValueChange={setQ} />
```
