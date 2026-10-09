# Open items and decisions

The prototype and the design system are complete. These topics remain open and do not block using the
prototype or the library.

| Topic | Detail | Owner |
|---|---|---|
| Choose the home page | Decide between the main home, Home V1 (`/home-v1`) and Home V2 (`/home-v2`) | Product |
| Buttons without an action | "Take the Quiz" and "Learn more" (Home V1 only) have no destination yet. "Help me choose" (Get Help) now links to the home FAQ until a questionnaire exists. | Design / development |
| Social media | Facebook, LinkedIn and Vimeo are linked; Instagram and YouTube have no URL yet (their icons show without a link) | Content |
| Sample content | Sample events and registration links; courses and resources without their own page open sample templates | Content |
| Home V2 accent | Uses the `peach` token, which is reserved for illustration accents | Design |
| Cookies Policy | Cookie names are shown in a monospace font | Design |
| Simulated forms | Contact, Ask a Therapist and newsletter forms send nothing; their success message says so (`prototypeNotice` in `src/content/site.ts`). In production, connect endpoints, show success only after a confirmed response, and remove the notice | Development |
| Figma mirror | Tokens, shadows and the code type scale are in sync (October 8). Page comparison with the Figma updates and decisions: [PAGE-COMPARISON.md](../figma-sync/PAGE-COMPARISON.md). Still to add as components: the new sections (SplitHero shapes, PhotoCtaBanner overlay, ResourceLibrary…); the repo is the source | Design |
| FAQ wording | Two home FAQ questions were duplicates; they now read "What happens in a typical session?" and "Is messaging limited?" — confirm the copy | Content |

Source: section 5.4 of the design guidelines (`docs/guidelines/05-quality.md`) and the October 2026 code audit (section 7).
