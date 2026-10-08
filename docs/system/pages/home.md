# Home

Route `/` · `src/app/HomePage.tsx` · Content `src/content/home.ts`

| # | Section | Content | Tone |
|---|---|---|---|
| 1 | `HomeHero` | `homeHero` | cream |
| 2 | `ResourceTiles` | `homeResources` (4 tiles: Series, Coaching, Courses, Ask a Therapist) | cream |
| 3 | `FeatureRows` | `homeWhy` ("Why Parent Guidance", 3 rows) | cream |
| 4 | `FaqSection` | `homeFaq` (7 questions) | cream |
| 5 | `PartnersStrip` | `homePartners` | cream |
| 6 | `NewsletterSection` | `homeNewsletter` (with image) | sage |

```tsx
<HomeHero content={homeHero} />
<ResourceTiles content={homeResources} />
<FeatureRows content={homeWhy} />
<FaqSection content={homeFaq} />
<PartnersStrip content={homePartners} />
<NewsletterSection content={homeNewsletter} />
```

**Explorations:** `/home-v1` and `/home-v2` are alternative home layouts kept for comparison while the
final home is chosen. They are not linked, reuse the shared sections where they overlap, and should be
deleted once a home is picked.
