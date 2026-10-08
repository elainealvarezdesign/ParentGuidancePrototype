# AccordionItem

`src/components/ui/Accordion.tsx` · Figma: **Accordion**

One expand/collapse item: a `<button aria-expanded aria-controls>` inside a heading, and a `role="region"`
panel labelled by the button (W3C APG). The plus icon rotates to a cross when open.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | ReactNode | | The question or label. |
| `children` | ReactNode | | Panel content. |
| `defaultOpen` | boolean | false | Open the first FAQ item only. |
| `headingLevel` | 2, 3, 4 | 3 | Match the page outline. |
| `variant` | `card`, `compact`, `plain` | `card` | `card`: white card, large title (FAQ). `compact`: bordered card, small title (transcript). `plain`: divider rows (documents). |

Stack items with `gap-5`. Each item opens independently.
