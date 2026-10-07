# Contact Us

Route `/contact-us` · `src/app/ContactUsPage.tsx` · Content `src/content/contact.ts` · Template: Utility

| # | Block | Content |
|---|---|---|
| 1 | `PageIntro` | `contactIntro` |
| 2 | Card (`max-w-pg-reading`): form — Full name*, Email* (2 columns from `sm`), Subject, How can we help?*, "Send message", `CrisisNotice` | `contactForm` |
| 2' | After sending: `SuccessMessage` with "Done" (resets the form) | `contactForm` |

Validation follows the [form pattern](../components/field.md#form-behavior-pattern-used-by-every-form).
Nothing is sent (prototype).
