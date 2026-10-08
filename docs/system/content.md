# Content model

All page content lives in **`src/content/`**, one file per page or feature, typed with the content types the
sections export. These files are the contract with a future CMS or API: when the backend exists, replace the
exported constants with fetched data of the same shape and the pages do not change.

| File | Feeds |
|---|---|
| `types.ts` | Shared building blocks: `Media`, `Cta`, `Title`, `RichText` |
| `site.ts` | Navbar links, languages, footer columns, social links, copyright |
| `home.ts` | Home sections |
| `askATherapist.ts` | Therapists, questions (list + answers), Ask page sections, submit dialog copy |
| `courses.ts` | Course catalog, topics, sort options, Courses page sections |
| `coursePrograms.ts` | Lessons, modules, instructors and overview of each course (Course and Lesson pages) |
| `mentalHealthSeries.ts` | States/districts, resource library, welcome block |
| `events.ts` | Series events (calendar, events page) + date/time and .ics helpers |
| `topics.ts` | Mental Health Series topic pages |
| `parentCoaching.ts`, `getHelp.ts`, `contact.ts` | Those pages' sections |
| `legal.ts`, `cookies.ts` | Legal texts and cookie tables |

## Building blocks (`types.ts`)

```ts
type Media = { src: string; alt: string };             // alt: "" only for decorative images
type Cta = { label: string } & ({ to: string } | { href: string }); // exactly one: `to` = in-app route,
                                                         // `href` = URL (http(s) → new tab), #anchor, tel:, mailto:
type Title = { text: string; highlight?: string; after?: string }; // highlight renders italic teal
type RichText = string;                                  // may contain **bold** and _italic_
```

## Rules

1. **Plain data only.** No JSX, no Tailwind classes, no colors. Visual mappings (an event category's color, a
   resource type's icon) live in the component that renders them.
2. **Text markup:** `**bold**` for one key fact and `_italic_` for one stressed word, rendered by
   `<RichText text=… />`. Anything richer becomes a new field.
3. **Images:** import local files from `src/imports/…` (Vite fingerprints them) or use a full URL. Every image
   has `alt`; write what the photo shows when it carries meaning, `""` when it is decorative.
4. **Links:** internal routes in `to`, external URLs in `href`. The components add `target="_blank"`,
   `rel` and the "(opens in a new tab)" text for external links.
5. **Lengths:** each field's doc comment gives the expected length ("up to ~80 characters"). Layouts are
   tested at those lengths; longer text needs a design check.
6. **IDs and slugs** are stable: they appear in URLs (`/ask-a-therapist/3`, `/courses/milestones-to-progress`).
   Detail pages look items up by id and show *not found* for unknown ids; they never fall back to another
   item.
7. **Prototype placeholders** are marked in comments (`SAMPLE_REGISTER_URL`, `sample: true` events,
   `detailSlugFor` for courses without a page). See `docs/handoff/05-open-items.md`.

## Example

```ts
// src/content/parentCoaching.ts
export const coachingHero: SplitHeroContent = {
  eyebrow: "Parent Coaching",
  title: { text: "A better way to navigate your ", highlight: "child's mental health." },
  body: "Work one-on-one with a therapist who coaches _you_ — so you can show up for your child…",
  actions: [
    { label: "Sign up now!", href: SIGN_UP_URL },   // external: new tab
    { label: "How it works", href: "#how-it-works" }, // in-page anchor
  ],
  image: { src: imgHero, alt: "Parent hugging child" },
  shape: "portrait",
};
```
