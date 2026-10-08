# Storybook

The visual catalog of the design system. Every component, section and page renders there from the same code
the site runs, with live controls, viewports and an accessibility panel. It complements these docs: the docs
say **when and how** to use something; Storybook **shows** it in every state.

- **Local:** `pnpm storybook` → http://localhost:6006
- **Published:** with the site, at [`/storybook/`](https://parent-guidance-prototype.netlify.app/storybook/)
  (Netlify builds it after the app: `pnpm build-storybook -o dist/storybook`).
- **CI:** `pnpm build-storybook` runs in the check job, so a broken story fails the build.

## What is in it

| Sidebar group | Source | Content |
|---|---|---|
| Introduction | `src/stories/Introduction.mdx` | How to read the catalog |
| Foundations | `src/stories/Foundations.stories.tsx` | Colors, type, radius, shadow, spacing and motion, read from `tokens/pg.tokens.json` |
| UI | `src/components/ui/*.stories.tsx` | Button, Field, SearchField, FilterChips, badges, avatars, notices, success message, accordion, tabs, pagination, breadcrumb, headings, media player, dialog |
| Cards | `src/components/cards/Cards.stories.tsx` | Unified (course, help line, long title), Question, Resource, Event cards |
| Patterns | `src/components/patterns/Patterns.stories.tsx` | FilterBar, SubmitQuestionDialog, SeriesCalendar, event parts, LessonOutline, PrevNextNav |
| Sections | `src/sections/Sections.stories.tsx` | Every section with its real content (all SplitHero shapes, both CTA banner variants, both newsletter layouts…) |
| Pages | `src/stories/Pages.stories.tsx` | Every page, rendered at its route |

Stories use the real content from `src/content`, so what you see is what the site shows.

## Toolbar

- **Backgrounds:** cream (default), white, tint, navy, sage — check components on the surfaces they sit on.
- **Viewport:** Mobile 375, Tablet 768, Desktop 1280.
- **Accessibility tab:** axe results for the story. The project sets `a11y.test: "error"`, so violations
  show as failures.
- **Controls tab:** change props live (variants, long text, error messages).

## Adding a story

Put `Name.stories.tsx` next to the component. Use real content where it exists:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyCard } from "./MyCard";

const meta = {
  title: "Cards/MyCard",
  component: MyCard,
  parameters: { docs: { description: { component: "One line. Guidance: docs/system/components/cards.md#my-card" } } },
  args: { title: "Building Your Child's Confidence", cta: { label: "View", to: "/" } },
} satisfies Meta<typeof MyCard>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
export const LongTitle: StoryObj<typeof meta> = { args: { title: "A much longer title that wraps onto three lines…" } };
```

Cover the states that are hard to reach on the site: errors, empty lists, long text, mobile width.
Components that use links render inside a memory router (set `parameters.route` to start at a path).
