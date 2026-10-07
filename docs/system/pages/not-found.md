# Not found

`src/app/NotFoundPage.tsx` — used for unknown routes and by detail pages when the id does not exist
(audit M04: never fall back silently to another item).

Props (all optional): `eyebrow`, `title`, `body`, `actions` (`Cta[]`, first primary, then secondary,
tertiary). Defaults: "Page not found" with links to Home, Mental Health Series and Get Help.

```tsx
if (!question) return <NotFoundPage eyebrow="Question not found" title="We couldn't find that answer"
  body="It may have been removed, or the link may be incomplete."
  actions={[{ label: "Browse all questions", to: "/ask-a-therapist" }]} />;
```
