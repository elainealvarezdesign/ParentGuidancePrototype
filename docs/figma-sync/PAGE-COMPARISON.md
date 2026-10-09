# Figma vs prototype — page-by-page comparison

October 9, 2026. Each desktop frame (1280px) in Figma's **📐07. Layouts – Desktop** page was compared with the
same route of the prototype at 1280px. The code is the source of truth: where they differ, either the code
was fixed (it broke its own rules) or Figma should be updated (the code is newer or decided differently).

Images in Figma are placeholders by convention; photos in the prototype are not part of the comparison.

## Summary

| Result | Count |
|---|---|
| Frames compared | 18 (Events pop-up open is a state of Events) |
| Match (layout, sections, content, components) | 18 — every page has the same sections in the same order |
| Fixed in code | 2 (footer, page gutter on detail pages) |
| Figma to update (code is newer) | 9 |
| Decisions to make (Figma shows something the code does not have) | 7 |

## Fixed in code

| Where | Difference | Fix |
|---|---|---|
| Footer (every page) | Logo 117px and app badges 24px high, badges pushed far below the logo; Figma: larger logo with the badges right under it | Logo 182px, badges 40px, badges directly under the logo (`Footer.tsx`, `LogoColor className`) |
| Lesson pages, breadcrumb (Lesson, Course, Answer) | 24px side margin at every width; the system gutter is 24 / 40 / 56px (`layout.md`), which Figma uses | `px-6 md:px-10 lg:px-14` in `LessonPage.tsx` and `Breadcrumb.tsx` |

## Update Figma (the code is newer)

| Frame | In the code | In Figma |
|---|---|---|
| Home | FAQ title "Frequently Asked Questions"; no duplicate questions ("What happens in a typical session?", "Is messaging limited?") | "Frequently Ask Questions"; two questions repeated |
| Home | Each resource tile has its own description | "Dive into a wealth of knowledge…" on three tiles |
| Home | Search sends you to a Search page (`/search`) | No search results page |
| Ask a Therapist | 15 questions → 2 pages | Pagination shows 3 pages |
| Mental Health Series | "Change district" link next to the district; more events in the calendar | No way to change district |
| Get Help | "Help me choose" links to the home FAQ | Button without a destination |
| Get Help | Crisis banner third button reads "Visit Website" | Empty white button |
| Contact, Ask (dialog), newsletters | Success message adds the prototype notice ("nothing was sent") | Success message only |
| On-Demand Courses | Filter chips show counts as "Anxiety & Depression (3)" | "Anxiety & Depression 3" |

## Decide: keep Figma's version or the code's

| Frame | Figma | Code | Recommendation |
|---|---|---|---|
| Lesson, Answer, Series video | Player bar with volume, captions, settings and full screen | Play/pause, seek and time only (simulated player) | Keep the code until real video: the production player (Vimeo) brings its own controls |
| Course detail (both) | "0 of N lessons completed" and a progress bar in the outline | Outline without progress | Add to code if lesson progress will be tracked in production |
| Lesson (both) | Progress dots between "Back to Course" and "Next Lesson" | No dots | Optional; the outline already shows progress |
| Get Help, Series | Search field with a "Search" button | Field filters as you type (no button) | Keep the code: live filtering needs no button |
| Get Help | Paper-plane icon in "Not sure which resource…" | Signpost icon | Either; pick one and update the other |
| Detail pages | Breadcrumb starts with "← Back to courses" | "Courses ›" | Keep the code: a breadcrumb trail is clearer for screen readers |
| Mental Health Series gate | Photo 400×500 with a short sage block | Larger photo; the sage block reaches the bottom of the section | Align the code to Figma if the gate page stays |

Smaller differences (a few pixels of card width on Contact and Testimonials, pagination button style) are
within the system's rules and are not listed.

## Not compared

- Tablet and mobile frames: the prototype is tested at 375px in CI (no horizontal scroll, axe), and the page
  structure is the same as desktop.
- Home V1 and Home V2: explorations, pending the client's choice of home page.
