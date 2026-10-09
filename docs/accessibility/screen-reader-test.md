# Screen-reader review

What a screen reader announces on every route of the prototype, what was fixed, and the manual script to run
with VoiceOver (macOS/iOS) and NVDA (Windows). The same script applies to the WordPress build
([WORDPRESS.md](../handoff/WORDPRESS.md)).

## 1. Automated review (October 9, 2026)

Every route was loaded in Chromium at 1280px and 375px and its accessibility tree was inspected: landmarks,
page title, heading outline, the accessible name of every link, button and field, images, and live regions.
This is what VoiceOver and NVDA read from; it is not a replacement for listening with them (section 2).

| Check | Result on all 17 routes × 2 widths |
|---|---|
| Landmarks: banner (header), navigation (named), one main, contentinfo (footer) | Pass |
| One `<h1>`, headings in order (no skipped levels) | Pass |
| Every link, button and field has a name | Pass |
| No two links with the same text going to different places | Pass |
| Images have `alt` (decorative ones `alt=""`) | Pass |
| Each page has its own tab title | Pass (after fix 2) |

Plus, in CI (`pnpm test:e2e`): axe WCAG 2.1 A/AA on every route, and keyboard flows (skip link, dialog focus
trap and return, seek bar, event pop-up, home search, route-change focus).

### Fixed in this review

1. **No banner landmark.** The navbar was not inside a `<header>`, so "jump to banner" found nothing.
   `PageShell` now wraps it in `<header>`.
2. **Same tab title on every page.** The title is the first thing a screen reader says on a new page; every
   route said "Parent Guidance | Mental health support for parents". Each page is now titled after its
   `<h1>`: "Parent Coaching… | Parent Guidance", "We couldn't find that page | Parent Guidance".
3. **Silent page changes.** In a single-page app the browser does not reload, so screen readers said nothing
   after a link changed the page. Focus now moves to the new page's `<h1>`, which announces it (except for
   in-page links such as `/#faq`, and for filter or search changes on the same page).

## 2. Manual script (VoiceOver and NVDA)

Run on the live prototype (or WordPress staging). Desktop: Safari + VoiceOver, Chrome or Firefox + NVDA.
Mobile: iOS Safari + VoiceOver at 375px. Note the result in the table at the end.

**Start:** VoiceOver `Cmd+F5` (keys: `VO` = `Ctrl+Option`). NVDA `Ctrl+Alt+N` (keys: `Insert` = NVDA key).

| # | Page | Steps | Expected |
|---|---|---|---|
| 1 | Any | Load the page | Tab title is announced: "<page heading> \| Parent Guidance" |
| 2 | Any | Press `Tab` once, then `Enter` | "Skip to content, link"; then focus moves to the main content |
| 3 | Any | Landmarks list: VO `VO+U` → Landmarks; NVDA `Insert+F7` → Landmarks | banner, navigation "Main", main, contentinfo (footer) |
| 4 | Any | Headings list: VO `VO+U` → Headings; NVDA `H` / `Insert+F7` | One heading level 1, then levels 2–3 in order |
| 5 | Any | Click a nav link (e.g. Parent Coaching) | The new page heading is announced, without moving the mouse |
| 6 | 375px | Open the menu button | "Open menu, button, collapsed"; after opening it reads "Close menu, expanded"; `Escape` closes and returns to the button |
| 7 | Home | Search field | "Search resources, search field"; type "anxiety", `Enter` → results page; "9 results for “anxiety”" is announced |
| 8 | Home | FAQ | Each question: "…, button, collapsed"; `Enter` expands and reads "expanded" |
| 9 | Ask a Therapist | Sort menu, filter chips | "Sort questions, popup button"; chips: "Anxiety, toggle button, not pressed" → "pressed"; result count is announced after filtering |
| 10 | Ask a Therapist | "Submit Question" | Dialog "Ask a Therapist" is announced; `Tab` stays inside; `Escape` closes; focus returns to "Submit Question" |
| 11 | Ask a Therapist dialog | Submit empty | Errors are announced and focus goes to the first field with "invalid data" and its message |
| 12 | Ask a Therapist dialog | Submit valid | "Question submitted" heading is announced, then the prototype notice |
| 13 | Contact Us | Fields | Each field reads its label and "required"; same error and success behavior as 11–12 |
| 14 | Events | Calendar day with an event | Opens the event pop-up as a dialog with the event title; `Escape` returns focus to the day |
| 15 | Lesson | Video seek bar | "Seek: <lesson title>, slider"; arrow keys change the value and it is announced |
| 16 | Lesson | Tabs | "Overview, tab, selected"; arrow keys move between tabs |
| 17 | Get Help | Crisis line | "Call 988, link" / "Text 988, link"; external sites say "(opens in a new tab)" |
| 18 | Events (Spanish event) | Read an event in Español | It is read with a Spanish voice (`lang="es"`) |
| 19 | Any | Turn on "Reduce motion" in the OS | No sliding or scaling animations |

### Results

| # | VoiceOver (macOS) | NVDA (Windows) | VoiceOver (iOS) | Notes |
|---|---|---|---|---|
| 1–19 | | | | |

Report anything that differs from "Expected" as an issue with the page, the step and what was announced.
