# Sections

A section is a full-width band of a page with its own heading and content (`src/sections/`). Each one:

- takes **one prop, `content`**, typed by the `…Content` type it exports (plus a few layout props);
- renders a `<Section>` labelled by its heading, with the page gutter and a token background;
- documents each content field (length, image size) in its type, so the content file is self-explaining.

| Section | Doc | Used on | Content type |
|---|---|---|---|
| `HomeHero` | [home-hero.md](./home-hero.md) | Home | `HomeHeroContent` |
| `ResourceTiles` | [resource-tiles.md](./resource-tiles.md) | Home | `ResourceTilesContent` |
| `FeatureRows` | [feature-rows.md](./feature-rows.md) | Home | `FeatureRowsContent` |
| `FaqSection` | [faq.md](./faq.md) | Home | `FaqContent` |
| `PartnersStrip` | [partners-strip.md](./partners-strip.md) | Home | `PartnersContent` |
| `NewsletterSection` | [newsletter.md](./newsletter.md) | Home, Topic | `NewsletterContent` |
| `SplitHero` | [split-hero.md](./split-hero.md) | Ask, Courses, Coaching, Get Help | `SplitHeroContent` |
| `PageIntro` | [page-intro.md](./page-intro.md) | Contact Us | `PageIntroContent` |
| `DocumentHeader` | [document-header.md](./document-header.md) | Legal pages | `DocumentHeaderContent` |
| `PhotoCtaBanner` | [photo-cta-banner.md](./photo-cta-banner.md) | Ask (band), Courses (overlay) | `PhotoCtaBannerContent` |
| `BenefitsBand` | [benefits-band.md](./benefits-band.md) | Parent Coaching | `BenefitsBandContent` |
| `ProcessSteps` | [process-steps.md](./process-steps.md) | Parent Coaching | `ProcessStepsContent` |
| `Testimonials` | [testimonials.md](./testimonials.md) | Parent Coaching | `TestimonialsContent` |
| `CrisisLineBanner` | [crisis-line-banner.md](./crisis-line-banner.md) | Get Help | `CrisisLineBannerContent` |
| `IconCtaBanner` | [icon-cta-banner.md](./icon-cta-banner.md) | Get Help | `IconCtaBannerContent` |
| `TrustStrip` | [trust-strip.md](./trust-strip.md) | Get Help | `TrustStripContent` |
| `ResourceLibrary` | [resource-library.md](./resource-library.md) | Mental Health Series | `SeriesResource[]` |
| `SiteSearch` | [site-search.md](./site-search.md) | Search | `SiteSearchContent` |

## Choosing a hero

| Need | Use |
|---|---|
| The home page, with a search | `HomeHero` |
| An inner page with a photo | `SplitHero` (`wide`, `square` or `portrait` media) |
| A utility page without media | `PageIntro` |
| A long document | `DocumentHeader` |
| A detail page (answer, lesson, course) | `Breadcrumb` + the page's own header (see the page recipe) |

## Writing a new section

```tsx
/* MySection (docs/system/sections/my-section.md). One line: what it is for and where it goes. */
export type MySectionContent = {
  /** Up to ~40 characters. */
  title: string;
  items: { /** 2–5 words. */ title: string; /** One sentence. */ body: string }[];
};

export function MySection({ content }: { content: MySectionContent }) {
  const headingId = useId();
  return (
    <Section tone="white" spacing="m" labelledBy={headingId}>
      <Container>
        <SectionHeading id={headingId} title={content.title} />
        …
      </Container>
    </Section>
  );
}
```

Then add its doc here (purpose, content table, variants, rules) and use it from a page with content from
`src/content`.
