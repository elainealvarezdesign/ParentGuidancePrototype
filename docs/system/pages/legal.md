# Legal pages

Template: Document. Content `src/content/legal.ts` (Terms, Privacy, `consentPage`) and `src/content/cookies.ts`
(`cookiesPage`: all the policy text and the cookie tables). Pages hold no copy.

| Route | File | Structure |
|---|---|---|
| `/terms-of-use` | `TermsOfUsePage.tsx` | `DocumentHeader` + `LegalActions` (Download .txt, Print) → card with `LegalDocumentBody` (Terms) → `BackToTopButton` |
| `/cookies-policy` | `CookiesPolicyPage.tsx` | `DocumentHeader` (printable) + actions → card: about, what cookies are, the three cookie types, one `CookieTable` per group (necessary, functional, analytics, performance), your choices (browser and ad opt-out links), contact → Back to top |
| `/consent-documents` | `ConsentDocumentsPage.tsx` | `DocumentHeader` → one `AccordionItem` per document (Terms, Privacy), only one open at a time (controlled), with Download and Print as `actions`; body headings are `h3` |

Printing shows only the document text (and, on Consent, only the document whose Print was pressed).
