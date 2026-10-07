# FaqSection

`src/sections/FaqSection.tsx` · Figma: **FAQ** · Used on: Home

Centered title and `AccordionItem` cards in two staggered columns (one column on mobile).

| Field | Type | Rules |
|---|---|---|
| `title` | string | "Frequently Asked Questions". |
| `items[].question` | string | A question a parent would ask, up to ~70 characters. Unique. |
| `items[].answer` | string | 1–3 sentences. |
| `items[].defaultOpen` | boolean | Only the first item. |

6–10 items.
