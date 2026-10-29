# Legal document

`src/components/patterns/LegalDocumentBody.tsx`, `src/components/patterns/DocumentActions.tsx`

`LegalDocumentBody` renders a legal text from `src/content/legal.ts`: effective date, intro, numbered
sections (sub-items indented), and a contact block with a mail button. It prints cleanly (no card, no
buttons). Props: `effectiveDate`, `introHeading`, `intro`, `sections`, `contactHeading`, `contactBody`,
`contactEmail`, `headingLevel` (`h3` when the document sits under its own `h2`, as on Consent Documents).

`DocumentActions` exports:
- `LegalActions` — Download + Print buttons under the title (`onDownload`).
- `BackToTopButton` — scrolls up and moves focus to the element with `focusId` (the page `<h1>`, which has
  `tabIndex={-1}`).
- `downloadTextFile(name, text)` — saves a .txt in the browser.

`CookieTable` (`src/components/patterns/CookieTable.tsx`) renders one cookie group from `cookiesPage.tables` in
`src/content/cookies.ts`: heading (`h3` by default) with a count pill, then a table (cookie, provider,
duration; rows with a `description` show it under the name). The table scrolls sideways on small screens; the
scroll region is focusable and named "<label> cookies table".
