# Notice and CrisisNotice

`src/components/ui/Notice.tsx` · Figma: **Notice**

An inline message box: icon + one or two sentences.

| `tone` | Look | Use |
|---|---|---|
| `crisis` | white box, navy alert icon | The safety line. Use `<CrisisNotice />`, never retype it. |
| `warning` | amber soft box | Disclaimers ("does not form a therapist/patient relationship") |
| `info` | tint box | Neutral help text |
| `success` | green soft box | Confirmation inside a form |

`<CrisisNotice />` renders "If you or someone you know is in immediate danger, **call 911.**" It must
appear on Get Help (hero) and Contact Us (under the form), and on any page about risk or crisis. Wording
changes need clinical review.
