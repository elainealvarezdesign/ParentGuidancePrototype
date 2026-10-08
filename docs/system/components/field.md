# Field, TextInput, TextArea, Select

`src/components/ui/Field.tsx` · Figma: **Input**, **Select**, **Text Area**

`<Field>` owns the label, hint and error and connects them to the control inside it (id,
`aria-describedby`, `aria-invalid`, `required`) through context. Controls never need ids by hand.

```tsx
<Field label="Email" required error={errors.email} hint="We only use it to reply.">
  <TextInput type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</Field>
```

## Field props

| Prop | Type | Notes |
|---|---|---|
| `label` | ReactNode | Always required. Placeholders are not labels. |
| `hint` | ReactNode | Helper text under the label ("Optional"). |
| `error` | ReactNode | Shows the message, marks the control invalid, read with it. |
| `required` | boolean | Adds the asterisk and `required`. |
| `hideLabel` | boolean | Label only for screen readers. Only when the context already labels it (search-like inputs, the series state picker). |
| `tone` | `default`, `inverse` (navy/teal surfaces), `on-sage` | Colors of label and messages. |

## Controls

- `TextInput` — `<input>`, 44px min height. All native props.
- `TextArea` — `<textarea>`, `rows` default 4, not resizable.
- `Select` — native `<select>` with a chevron. `size="field"` (forms, full width) or `size="compact"`
  (toolbars: sort menus). **Always use the native select for sort/filter menus** (audit H07); outside a
  `Field`, give it `aria-label` ("Sort questions").

## Form behavior (pattern used by every form)

1. `<form noValidate onSubmit=…>` — validate in code so messages are consistent.
2. On submit, set `errors`; move focus to the first invalid control (keep a ref per required control).
3. On success, replace the form with `<SuccessMessage>`, which takes focus.

See `ContactUsPage.tsx` and `SubmitQuestionDialog.tsx`.
