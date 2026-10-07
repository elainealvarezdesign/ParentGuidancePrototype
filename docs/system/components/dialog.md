# Dialog and useModal

`src/components/ui/Dialog.tsx` · Figma: **Modal**

A modal dialog following the W3C APG pattern (audit H01): named by its title, focus moves inside on open,
Tab stays inside, Escape closes, focus returns to the trigger, the app behind is `inert` and does not
scroll. Renders in a portal and animates in/out.

```tsx
const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Submit Question</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="Ask a Therapist"
        description="Licensed therapists respond within 48 hours" icon={<MessageCircle />}>
  …form…
</Dialog>
```

| Prop | Type | Default | Notes |
|---|---|---|---|
| `open`, `onClose` | boolean, () => void | | Controlled. Overlay click, Escape and the close button call `onClose`. |
| `title` | ReactNode | | Visible `<h2>` and the accessible name. |
| `description` | ReactNode | | One line under the title, read as the description. |
| `icon` | ReactNode | | Icon tile in the header (decorative). |
| `tone` | `navy`, `teal` | `navy` | Header color. |
| `size` | `md` (512px), `lg` (672px) | `md` | |
| `closeLabel` | string | "Close" | Translate for Spanish content. |

Content goes in `children`, padded by the caller (`p-6 md:p-8`). Long content scrolls inside the dialog.

## useModal(ref, onClose, initialFocus?)

The behavior without the visuals, for popovers that position themselves (`EventModal`). The element in
`ref` gets `role="dialog"`, `aria-modal`, `tabIndex={-1}` from you; the hook does focus, Tab trap, Escape,
scroll lock and `inert`. Render the surface in a portal on `document.body`, otherwise it becomes inert too.

## Submit question

`src/components/patterns/SubmitQuestionDialog.tsx` — the "Ask a Therapist" form in a `Dialog`: question
(required), name (optional), email (required, validated). Errors focus the first invalid field; success
shows `SuccessMessage`. Copy comes from `submitQuestionCopy` in `src/content/askATherapist.ts`.
Props: `open`, `onClose`. Nothing is sent (prototype).
