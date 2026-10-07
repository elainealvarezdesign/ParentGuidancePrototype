# NewsletterSection

`src/sections/NewsletterSection.tsx` · Figma: **Newsletter / Join Us** · Used on: Home, Topic

Sage band with an email form (Subscribe inside the field box). Validates the email, ties the error to the
field, and replaces the form with an announced success line. **Simulated**: nothing is sent.

Two layouts, chosen by content:

- **With `image`**: photo on the left, text and form on the right (Home).
- **Without `image`**: compact band, eyebrow + title + one line on the left, form on the right (Topic).

| Field | Type | Rules |
|---|---|---|
| `eyebrow` | string | Compact layout only. |
| `title` | string | 1–4 words. |
| `body` | string | One sentence, up to ~110 characters. |
| `image`, `imageBase` | `Media` | Optional; `imageBase` is a frame under the photo. |
| `successMessage` | string | "Thanks! You're subscribed." |
