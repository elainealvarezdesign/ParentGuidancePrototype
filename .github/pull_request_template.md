## What changed

<!-- One or two sentences. Link the issue or audit finding if there is one. -->

## Checklist

- [ ] Uses existing components from `src/components` and sections from `src/sections` (no one-off copies)
- [ ] Colors, radius, shadows, spacing and type only through `pg-*` tokens and the 4px scale
- [ ] New or changed components and sections are documented in `docs/system/`
- [ ] Every control has an accessible name; works with keyboard only; focus is visible
- [ ] Checked at 375, 768 and 1280px with no horizontal scroll
- [ ] `pnpm check` passes (typecheck, lint, design rules, build)
