# Code reusability audit

October 29, 2026. How much of this repository a developer can take as is ("plug and play") when building the
production site, measured in lines of production code (TypeScript, CSS, scripts; no tests, stories or docs).

## Result

| Target | Reused as is | Rebuilt from an exact spec | Discarded |
|---|---|---|---|
| **WordPress** (the plan) | **34%**: tokens, CSS, theme generator, content | 61%: components, sections and pages become blocks and templates | 5%: Home V1/V2 |
| **React / Next.js** | **95%**: everything except the home explorations | — | 5%: Home V1/V2 |

Total: **12,316 lines** of production code. In both cases the automated accessibility and keyboard tests
(Playwright + axe, `pnpm test:e2e`) run against any deployed site with `E2E_BASE_URL`, so QA is reused 100%.

## WordPress, layer by layer

| Layer | Lines | Share | What happens to it |
|---|---|---|---|
| Tokens (`tokens/`), CSS (`src/styles/`), generators (`scripts/`) | 1,131 | 9% | **Plug and play.** `pnpm tokens` writes `docs/wordpress/theme.json` and `pg-tokens.css`; the 47 icons and the logos are exported in `docs/wordpress/`. |
| Content (`src/content/`) | 3,040 | 25% | **Imported.** Every text, list and link is typed data shaped like a CMS: each type maps to a custom post type or ACF fields with the same names ([WORDPRESS.md](./WORDPRESS.md#repeating-content--custom-post-types)). No copy lives in components or pages. |
| Components, sections, pages (`src/components/`, `src/sections/`, `src/app/`, `src/lib/`) | 7,501 | 61% | **Rebuilt as blocks**, from an exact spec: each section has a typed `content` prop, a doc with field rules, a story and a block mapping in [WORDPRESS.md](./WORDPRESS.md#2-sections--blocks-and-patterns). The HTML structure, Tailwind classes (or the plain-CSS tokens) and accessible behavior carry over; the PHP/JS of each block is new work. |
| Home V1 and V2 (`src/app/HomePageV1.tsx`, `HomePageV2.tsx`) | 644 | 5% | **Discarded** once the client chooses the home page. |

## React / Next.js

Components, sections, tokens and content copy across unchanged; pages map one to one to routes. The work is
replacing the constants in `src/content` with CMS data of the same types and wiring the forms (each form has one
`onSubmit` to replace).

## What changed in this audit

The first pass found four things that lowered reuse. Three were fixed; the fourth waits on the client.

| Finding | Fix |
|---|---|
| Copy written inside pages (Cookies Policy, Consent Documents; labels on the Topic, Series, Events and Course pages) | Moved to `src/content` (`cookiesPage`, `consentPage`, `topicPage`, `seriesGate`/`seriesWelcome`/`seriesEvents`, `eventsPage`, `coursePage`). Pages now hold no copy. |
| Components defined inside pages, invisible to developers (Topic: 7; Series: 2; Course: 3; Events: 1 plus the month grid) | Extracted, documented and added to Storybook: sections `TopicHero`, `VideoGrid`, `SessionList`, `NumberedCards`, `ActionSteps`, `RelatedResources`, `SchoolGate`, `SeriesWelcome`, `CourseSummary`, `CourseAbout`, `CourseRecommendations`; cards `VideoCard`, `SessionCard`; patterns `EventMonthGrid`, `CookieTable`, and `EventDetail`, `EventListItem`, `UpcomingEventButton` in `EventParts`. |
| Consent Documents had its own accordion | Uses the system `AccordionItem` (new `document` variant, `actions` slot and controlled mode). |
| Home V1 and V2 still in the repo | Pending the client's choice of home page. |

| | Before | After |
|---|---|---|
| Sections | 18 | 29 |
| Component files (ui, cards, patterns) | 31 | 35 |
| Page code (`src/app`) | 3,464 lines | 2,404 lines |
| Content importable to WordPress | 23% | 25% |
| React plug and play | 80% | 95% |

Pages left in `src/app` are compositions of system parts plus page state (filters, the selected day, the open
dialog). Lesson and Question compose existing components (`MediaPlayer`, `Tabs`, `LessonOutline`,
`AccordionItem`, `PrevNextNav`); the Events page keeps its calendar state and composes `EventMonthGrid` and
`EventParts`.

## How it was measured

Non-blank lines of `.ts`, `.tsx`, `.css`, `.mjs` and `.json` under `tokens/`, `src/` and `scripts/`, excluding
`*.test.*` and `*.stories.*`. Each folder was assigned to one bucket per target. Visual parity of the refactor
was checked with full-page screenshots at 1280 and 375px before and after: Series, Events, Lesson and Question
are pixel-identical; Topic and Course differ only in text anti-aliasing; Cookies and Consent changed on purpose
(the cookie tables now share one component, and Consent uses the system accordion).
