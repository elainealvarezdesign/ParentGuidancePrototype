# ResourceLibrary

`src/sections/ResourceLibrary.tsx` · Used on: Mental Health Series

Sticky `FilterBar` (search, category chips, native sort) over a 3-column grid of `ResourceCard`s. Shows 9,
then "Show all N resources". Result count in a `ListHeading` and a `role="status"` sentence.

Prop `resources`: `SeriesResource[]` from `src/content/mentalHealthSeries.ts` (title, description, type,
category, duration, isNew, slug). Resources without `slug` open the sample topic (`topicHref`).
