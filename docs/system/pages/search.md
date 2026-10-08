# Search

Route `/search?q=…` · `src/app/SearchPage.tsx` · Content `src/content/search.ts` · Template: Utility

| #   | Block                                                      | Content                     |
| --- | ---------------------------------------------------------- | --------------------------- |
| 1   | `PageIntro`                                                | `searchPage.intro`          |
| 2   | `SiteSearch` (field, result count, results or suggestions) | `searchPage`, `searchIndex` |

The Home hero search (`HomeHero onSearch`) sends people here with their query. Submitting the form on this page
updates `?q=`, so each search has its own URL. Results come only from the content that exists on the site.
