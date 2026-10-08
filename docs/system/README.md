# Parent Guidance design system (code)

This folder documents the design system **as it exists in this repository**. The code is the source of
truth: tokens, components, sections, content and pages all live in `src/` and `tokens/`. Figma mirrors the
code, not the other way round. A developer, or an AI agent, should be able to build or rebuild any page of
the site from these docs and the code alone, without opening Figma.

| Read this | When |
|---|---|
| [Architecture](#architecture) (below) | First. How the layers fit together. |
| [Build a page](#build-a-page) (below) | You need a new page or want to change one. |
| [foundations.md](./foundations.md) | Colors, type, spacing, radius, shadow, motion, icons. |
| [layout.md](./layout.md) | Page shell, sections, containers, gutters, breakpoints. |
| [content.md](./content.md) | How content is typed and where it lives (the future CMS shape). |
| [components/](./components/) | Every reusable component: props, rules, accessibility. |
| [sections/](./sections/) | Every page section: what it is for, its content fields and limits. |
| [pages/](./pages/) | Every page as a recipe: which sections, in which order, with which content. |
| [storybook.md](./storybook.md) | The visual catalog: every component, section and page rendered live (`pnpm storybook`). |

## Architecture

```
tokens/pg.tokens.json ──(pnpm tokens)──▶ src/styles/tokens.css   Tailwind utilities: bg-pg-navy, text-pg-h1, rounded-pg-xl…
                                              │
src/components/ui        primitives           Button, Field, Dialog, Tabs, Badge, SearchField, MediaPlayer…
src/components/cards     item cards           UnifiedCard, QuestionCard, ResourceCard, EventRow
src/components/patterns  composed widgets     FilterBar, SubmitQuestionDialog, SeriesCalendar, EventModal…
src/components/layout    page frame           PageShell (skip link, Navbar, <main>, Footer), Section, Container
src/components/brand     logo, social icons
                                              │
src/sections             page sections        SplitHero, FaqSection, ResourceLibrary, PhotoCtaBanner…
                         each takes ONE typed `content` prop
                                              │
src/content              typed content        home.ts, askATherapist.ts, courses.ts… (what a CMS would return)
                                              │
src/app/*Page.tsx        pages                a list of sections fed with content; routes in src/app/App.tsx
```

Rules that hold everywhere:

1. **Pages compose, they do not style.** A page is a list of sections (and, for app-like pages, components)
   fed with content from `src/content`. New visual patterns go into a section or component first.
2. **Sections take content, not copy.** Every section exports a `…Content` type; text, images and links come
   in through `content`. The type documents each field (length, image size, optional or not).
3. **Content is plain data.** No JSX and no CSS classes in `src/content`. The only markup allowed in text is
   `**bold**` and `_italic_` (rendered by `RichText`). See [content.md](./content.md).
4. **Only tokens.** Colors, type, spacing, radius, shadow and motion come from tokens
   (`pnpm check:design` fails on raw hex, Tailwind grays, half-steps and arbitrary pixel spacing).
5. **Accessible by default.** Every interactive component already handles labels, focus, keyboard and
   announcements. Use the component instead of rebuilding the behavior. Rules in
   [foundations.md → Accessibility](./foundations.md#accessibility).
6. **One `<main>`.** `PageShell` renders the skip link, `Navbar`, `<main id="main">` and `Footer`. Pages
   never render `<main>`; the first section clears the fixed navbar with `Section belowNav`.

### Which layer does a new thing belong to?

| It is… | Put it in | Example |
|---|---|---|
| A value (color, size, duration) | `tokens/pg.tokens.json`, then `pnpm tokens` | a new status color |
| A control or display element with no page context | `components/ui` | a tooltip |
| One item in a list or grid | `components/cards` | a webinar card |
| A widget built from several ui components, used on one or more pages | `components/patterns` | a booking form |
| A full-width band of a page with its own heading and content | `sections` | a pricing table |
| Text, images, links, lists of items | `src/content/<page>.ts` | a new FAQ entry |

## Build a page

The whole flow, using a hypothetical "Workshops" page.

1. **Pick the sections.** Look at [sections/](./sections/) and at the [page recipes](./pages/) for a page
   that already does something similar. Most inner pages are `SplitHero` + a list or grid +
   `PhotoCtaBanner`. Utility pages start with `PageIntro`; documents with `DocumentHeader`.
2. **Write the content** in `src/content/workshops.ts`, typed with each section's content type:

   ```ts
   import type { SplitHeroContent } from "@/sections/SplitHero";
   import type { PhotoCtaBannerContent } from "@/sections/PhotoCtaBanner";
   import imgHero from "@/imports/workshops/hero.jpg";

   export const workshopsHero: SplitHeroContent = {
     eyebrow: "Workshops",
     title: { text: "Practical sessions for ", highlight: "busy parents." },
     body: "Short, live workshops with licensed therapists.",
     actions: [{ label: "See dates", href: "#dates" }],
     image: { src: imgHero, alt: "A parent taking notes during an online workshop" },
     shape: "wide",
   };
   ```

3. **Compose the page** in `src/app/WorkshopsPage.tsx`:

   ```tsx
   import { workshopsCta, workshopsHero } from "@/content/workshops";
   import { SplitHero } from "@/sections/SplitHero";
   import { PhotoCtaBanner } from "@/sections/PhotoCtaBanner";

   /* Workshops ("/workshops"). Recipe: docs/system/pages/workshops.md. */
   export default function WorkshopsPage() {
     return (
       <>
         <SplitHero content={workshopsHero} />
         {/* list or grid section here */}
         <PhotoCtaBanner content={workshopsCta} />
       </>
     );
   }
   ```

4. **Add the route** in `src/app/App.tsx` (lazy, above the `"*"` route):
   `{ path: "workshops", lazy: page(() => import("./WorkshopsPage")) }`. Link it from `mainNav` or
   `footerColumns` in `src/content/site.ts` if it is a top-level page.
5. **Write the recipe** `docs/system/pages/workshops.md` (copy an existing one).
6. **Check:** add the route to `tests/e2e/a11y.spec.ts`, run `pnpm check` and `pnpm test:e2e`, and look at the
   page at 375, 768 and 1280px with the keyboard only (Tab, Shift+Tab, Enter, Space, Escape).

If no section fits, build one in `src/sections/` following [sections/README.md](./sections/README.md), and
document it next to the others.

## Page map

| Route | Page file | Recipe |
|---|---|---|
| `/` | `HomePage.tsx` | [home.md](./pages/home.md) |
| `/mental-health-series` | `MentalHealthSeriesPage.tsx` | [mental-health-series.md](./pages/mental-health-series.md) |
| `/mental-health-series/events` | `MentalHealthEventsPage.tsx` | [events.md](./pages/events.md) |
| `/mental-health-series/:slug` | `MentalHealthTopicPage.tsx` | [mental-health-topic.md](./pages/mental-health-topic.md) |
| `/parent-coaching` | `ParentCoachingPage.tsx` | [parent-coaching.md](./pages/parent-coaching.md) |
| `/on-demand-courses` | `OnDemandCoursesPage.tsx` | [on-demand-courses.md](./pages/on-demand-courses.md) |
| `/courses/:courseSlug` | `CoursePage.tsx` | [course.md](./pages/course.md) |
| `/courses/:courseSlug/lesson/:lessonId` | `LessonPage.tsx` | [lesson.md](./pages/lesson.md) |
| `/ask-a-therapist` | `AskATherapistPage.tsx` | [ask-a-therapist.md](./pages/ask-a-therapist.md) |
| `/ask-a-therapist/:questionId` | `QuestionDetailPage.tsx` | [question-detail.md](./pages/question-detail.md) |
| `/get-help` | `GetHelpPage.tsx` | [get-help.md](./pages/get-help.md) |
| `/contact-us` | `ContactUsPage.tsx` | [contact-us.md](./pages/contact-us.md) |
| `/terms-of-use`, `/cookies-policy`, `/consent-documents` | `TermsOfUsePage.tsx`, `CookiesPolicyPage.tsx`, `ConsentDocumentsPage.tsx` | [legal.md](./pages/legal.md) |
| `*` | `NotFoundPage.tsx` | [not-found.md](./pages/not-found.md) |
| `/home-v1`, `/home-v2` | `HomePageV1.tsx`, `HomePageV2.tsx` | Explorations, not part of the system (see [home.md](./pages/home.md)) |

## Commands

```bash
pnpm dev            # local server
pnpm check          # everything CI runs: typecheck, lint, tokens, design rules, build
pnpm tokens         # regenerate src/styles/tokens.css after editing tokens/pg.tokens.json
pnpm check:design   # design-rule check only
pnpm check:docs     # every docs/system path referenced in src/ exists, every block is documented
pnpm test           # unit, component and content tests (Vitest)
pnpm test:e2e       # accessibility (axe) and keyboard tests on every route (Playwright)
pnpm storybook      # visual catalog at http://localhost:6006
```
