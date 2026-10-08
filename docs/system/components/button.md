# Button

`src/components/ui/Button.tsx` · Figma: **Button**

Three elements, one look:

| Export | Renders | Use for |
|---|---|---|
| `Button` | `<button>` | Actions on the page (submit, open dialog, load more) |
| `ButtonLink` | React Router `<Link>` | Navigation inside the app (`to="/parent-coaching"`) |
| `ButtonAnchor` | `<a>` | External URLs, `tel:`, `sms:`, `mailto:`, in-page `#anchors` |
| `CtaButton` | `ButtonLink` or `ButtonAnchor` | A content `Cta` (`cta={…}`). **Sections and cards use this**, never their own `to ? … : …` |
| `buttonClass()` | class string | Rare: style another element as a button |

## Props

| Prop | Values | Default |
|---|---|---|
| `variant` | `primary`, `secondary`, `tertiary`, `inverse`, `inverse-secondary` | `primary` |
| `size` | `s` (36px), `m` (44px), `l` (52px) | `m` |
| `loading` (`Button` only) | boolean — disables and shows a spinner | — |
| …native props | `type`, `onClick`, `disabled`, `to`, `href`, `target`, `aria-*` | `type="button"` |
| `ref` | forwarded to the `<button>` / `<a>` (all four exports) | — |

### CtaButton

```tsx
<CtaButton cta={{ label: "Book a session", to: "/parent-coaching" }} trailing={<ArrowRight size={16} aria-hidden="true" />} />
```

| `cta` | Renders |
|---|---|
| `{ label, to }` | `ButtonLink` (router) |
| `{ label, href: "https://…" }` | `ButtonAnchor` with `target="_blank" rel="noopener noreferrer"` and a screen-reader "(opens in a new tab)" (also appended to a custom `aria-label`) |
| `{ label, href: "#id" }`, `tel:…`, `mailto:…` | `ButtonAnchor` in the same tab |

`Cta` requires exactly one of `to` / `href` (TypeScript rejects both or neither), so a CTA without a
destination cannot reach production by accident. The one place that allows a label-only action is
`IconCtaBanner` (typed `Cta | { label }`), which renders a `<button>` and is listed in the open items.

| Variant | Look | On |
|---|---|---|
| `primary` | teal fill, white text | light backgrounds; one per view area |
| `secondary` | white, teal border and text | light backgrounds, next to a primary |
| `tertiary` | text link style | low-emphasis actions ("Clear filters") |
| `inverse` | white fill, navy text | navy, teal or photo backgrounds |
| `inverse-secondary` | translucent white | navy backgrounds, next to an inverse |

## Rules

- Labels start with a verb, sentence case: "View answer", "Book a session". Max ~3 words.
- Icons: trailing `ArrowRight` for "go somewhere", leading icon for a specific action (Download, Send). Size 14–16, `aria-hidden="true"`.
- Full-width (`className="w-full"`) only inside cards and dialogs.
- External links: `target="_blank" rel="noopener noreferrer"` and `<span className="sr-only"> (opens in a new tab)</span>`.

## Accessibility

Focus ring from `accessibility.css`; disabled buttons use `disabled` (not just a style). A toggle button
uses `aria-pressed` (see "Mark complete" on the Lesson page). Never put a button inside a link or vice versa.

```tsx
<ButtonLink to="/parent-coaching">Get Started <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
<Button variant="secondary" size="s" onClick={clear}>Clear filters</Button>
```
