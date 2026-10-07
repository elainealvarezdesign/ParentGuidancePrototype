# Testimonials

`src/sections/Testimonials.tsx` · Used on: Parent Coaching

Left-aligned heading and three quote cards (`<figure>` + `<blockquote>` + `<figcaption>`).

| Field | Type | Rules |
|---|---|---|
| `eyebrow`, `title` | string | |
| `items[]` | `{ quote, name, meta }` | Exactly 3. Quote without quotation marks, up to ~160 characters. Name = first name + initial. Meta = "Mom of a 9-year-old · Utah". |

Quotes must be real and approved; never invent them for production.
