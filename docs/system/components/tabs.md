# Tabs

`src/components/ui/Tabs.tsx` · Figma: **Tabs**

W3C APG tabs with automatic activation inside a white card: Left/Right move and select, Home/End jump,
only the selected tab is in the Tab order, panels are labelled by their tab and focusable.

| Prop | Type | Notes |
|---|---|---|
| `label` | string | Name of the tab list ("Lesson content"). |
| `tabs` | `{ id, label, icon?, panel }[]` | 2–4 tabs, labels of 1–2 words. Icons 14px, decorative. |
| `value`, `onChange` | id, (id) => void | Controlled. |

Use tabs for alternative views of the same item (Overview / Takeaways / Resources). Use separate sections
when people need to see everything, and an accordion for many items.
