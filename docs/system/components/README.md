# Components

Reusable building blocks in `src/components/`. Every component here is accessible out of the box; use it
instead of re-creating the markup. Each doc lists **when to use it**, **props**, **rules** and
**accessibility**.

## ui — primitives (`src/components/ui`)

| Component | Doc | One line |
|---|---|---|
| `Button`, `ButtonLink`, `ButtonAnchor`, `buttonClass` | [button.md](./button.md) | Actions and button-styled links |
| `Field`, `TextInput`, `TextArea`, `Select` | [field.md](./field.md) | Labelled form controls with hint and error |
| `SearchField` | [search-field.md](./search-field.md) | Labelled search input with clear button |
| `FilterChips` | [filter-chips.md](./filter-chips.md) | Single-choice pill filters |
| `Pagination` | [pagination.md](./pagination.md) | Page numbers for lists |
| `Dialog`, `useModal` | [dialog.md](./dialog.md) | Modal dialog and its focus behavior |
| `Tabs` | [tabs.md](./tabs.md) | Tabbed panels |
| `AccordionItem` | [accordion.md](./accordion.md) | Expand/collapse disclosure |
| `Badge` | [badge.md](./badge.md) | Category, type and status labels |
| `Avatar`, `PersonLine` | [avatar.md](./avatar.md) | Person initials/photo, name + role |
| `Notice`, `CrisisNotice` | [notice.md](./notice.md) | Inline messages and the 911 line |
| `SuccessMessage` | [success-message.md](./success-message.md) | What replaces a sent form |
| `SectionHeading`, `ListHeading`, `Eyebrow` | [section-heading.md](./section-heading.md) | Section titles and list headers |
| `Breadcrumb` | [breadcrumb.md](./breadcrumb.md) | Path bar on detail pages |
| `MediaPlayer` | [media-player.md](./media-player.md) | Video player (simulated) |
| `Reveal` | [foundations → Motion](../foundations.md#motion) | Scroll entrance animation |
| `RichText` | [content.md](../content.md) | Renders `**bold**`/`_italic_` in content strings |
| `icons` | [foundations → Icons](../foundations.md#icons) | The only icon import |

## cards — one item in a list (`src/components/cards`)

All in [cards.md](./cards.md): `UnifiedCard`, `QuestionCard`, `ResourceCard`, `EventRow`.

## patterns — composed widgets (`src/components/patterns`)

| Component | Doc | Used on |
|---|---|---|
| `FilterBar` | [filter-bar.md](./filter-bar.md) | Courses, Ask a Therapist, Series |
| `SubmitQuestionDialog` | [dialog.md](./dialog.md#submit-question) | Ask a Therapist, Answer |
| `PrevNextNav` | [prev-next-nav.md](./prev-next-nav.md) | Answer |
| `LessonOutline` | [lesson-outline.md](./lesson-outline.md) | Lesson |
| `SeriesCalendar` | [series-calendar.md](./series-calendar.md) | Mental Health Series |
| `EventModal` | [event-modal.md](./event-modal.md) | Series calendar, Events |
| `EventParts` (`EventCategoryTag`, `DateBlock`, `EventActions`…) | [event-parts.md](./event-parts.md) | Series, Events |
| `LegalDocumentBody`, `DocumentActions` | [legal-document.md](./legal-document.md) | Legal pages, Topic |

## layout and brand

`PageShell`, `Navbar`, `Footer`, `LanguageMenu`, `Section`, `Container`: [layout.md](../layout.md).
`Logo`, `LogoColor`, `SocialLinks`: `src/components/brand` (the logo SVG is the only place raw hex is allowed).

## Writing a new component

1. Put it in the right folder (see [README → Which layer](../README.md#which-layer-does-a-new-thing-belong-to)).
2. Start the file with a comment: name, doc path, one-line purpose, a usage example.
3. Type every prop and document non-obvious ones with `/** … */`.
4. Accept `className` for layout tweaks (merged with `cn()`), never for recoloring.
5. Handle names, focus and keyboard inside the component.
6. Add the doc here and run `pnpm check`.
