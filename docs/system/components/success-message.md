# SuccessMessage

`src/components/ui/SuccessMessage.tsx`

What replaces a form after it is sent: check icon, a heading that **receives focus** on mount (so keyboard
and screen-reader users land on the result, audit M06), a short body and an optional action. The wrapper
is `role="status"`.

| Prop | Type | Notes |
|---|---|---|
| `title` | string | "Message sent". Sentence case, no exclamation marks. |
| `children` | ReactNode | One or two sentences: what happens next. |
| `action` | ReactNode | "Done" button (closes a dialog or resets the form). |
| `headingLevel` | `h2`, `h3` | `h3` inside a dialog. |
