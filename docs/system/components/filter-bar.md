# FilterBar

`src/components/patterns/FilterBar.tsx` · Figma: **Filter Bar**

The sticky white toolbar above a filterable list. It only lays out three slots; the controls are ui
components:

```tsx
<FilterBar
  search={<SearchField label="Search questions" value={q} onValueChange={setQ} />}
  filters={<FilterChips label="Filter by category" options={categories} value={cat} onChange={setCat} />}
  sort={<Select size="compact" aria-label="Sort questions" value={sort} onChange={…}>…</Select>}
/>
```

| Prop | Notes |
|---|---|
| `search`, `filters`, `sort` | Any can be omitted. On mobile, chips wrap to their own row. |
| `sticky` | default `true`: `sticky top-14 z-30` under the navbar. |

Rules: every filter change resets pagination to page 1; show the result count in a `ListHeading` and in a
`role="status"` sentence; offer "Clear filters" in the empty state.
