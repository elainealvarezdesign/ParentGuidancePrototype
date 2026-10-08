# Legal pages

Template: Document. Content `src/content/legal.ts` (Terms, Privacy) and `src/content/cookies.ts`.

| Route | File | Structure |
|---|---|---|
| `/terms-of-use` | `TermsOfUsePage.tsx` | `DocumentHeader` + `LegalActions` (Download .txt, Print) → card with `LegalDocumentBody` (Terms) → `BackToTopButton` |
| `/cookies-policy` | `CookiesPolicyPage.tsx` | `DocumentHeader` (printable) + actions → card: about, what cookies are, the three cookie types, cookie tables (necessary, functional, analytics, performance) → Back to top |
| `/consent-documents` | `ConsentDocumentsPage.tsx` | `DocumentHeader` → one expandable card per document (Terms, Privacy): `h2` button with `aria-expanded`/`aria-controls`, Download and Print per document; body headings are `h3` |

Printing shows only the document text (and, on Consent, only the document whose Print was pressed).
