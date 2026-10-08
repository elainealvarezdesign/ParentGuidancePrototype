# Get Help

Route `/get-help` · `src/app/GetHelpPage.tsx` · Content `src/content/getHelp.ts` · Template: Marketing

| # | Block | Content |
|---|---|---|
| 1 | `SplitHero` (`wide`) with `<CrisisNotice />` as children | `getHelpHero` |
| 2 | `CrisisLineBanner` (988: call, text, website) | `crisisLine` |
| 3 | Section `tint-soft`: `SectionHeading` "Browse support resources", hero-width `SearchField`, centered `FilterChips`, `UnifiedCard` grid (`imageKind="logo"`, cta "Get help", external), empty state | `resourceDirectory`, `resourceCategories`, `supportResources` |
| 3a | `IconCtaBanner` "Not sure which resource is right for you?" → "Help me choose" links to the home FAQ (`/#faq`) | `helpChooser` |
| 4 | `TrustStrip` | `getHelpTrust` |

The 911 notice and the 988 banner must stay above the fold area. Crisis copy changes need clinical review.
