import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeHero } from "./HomeHero";
import { ResourceTiles } from "./ResourceTiles";
import { FeatureRows } from "./FeatureRows";
import { FaqSection } from "./FaqSection";
import { PartnersStrip } from "./PartnersStrip";
import { NewsletterSection } from "./NewsletterSection";
import { SplitHero } from "./SplitHero";
import { PageIntro } from "./PageIntro";
import { DocumentHeader } from "./DocumentHeader";
import { PhotoCtaBanner } from "./PhotoCtaBanner";
import { BenefitsBand } from "./BenefitsBand";
import { ProcessSteps } from "./ProcessSteps";
import { Testimonials } from "./Testimonials";
import { CrisisLineBanner } from "./CrisisLineBanner";
import { IconCtaBanner } from "./IconCtaBanner";
import { TrustStrip } from "./TrustStrip";
import { ResourceLibrary } from "./ResourceLibrary";
import { SiteSearch } from "./SiteSearch";
import { CrisisNotice } from "@/components/ui/Notice";
import { homeFaq, homeHero, homeNewsletter, homePartners, homeResources, homeWhy } from "@/content/home";
import { askCta, askHero } from "@/content/askATherapist";
import { coursesCta, coursesHero } from "@/content/courses";
import { coachingBenefits, coachingHero, coachingSteps, coachingTestimonials } from "@/content/parentCoaching";
import { crisisLine, getHelpHero, getHelpTrust, helpChooser } from "@/content/getHelp";
import { contactIntro } from "@/content/contact";
import { topicNewsletter } from "@/content/topics";
import { seriesResources } from "@/content/mentalHealthSeries";
import { searchIndex, searchPage } from "@/content/search";
import { searchSite } from "@/lib/search";

/* Every section with the content it has on the site. Each section takes one typed `content` prop;
 * change it in the Controls panel. Guidance: docs/system/sections/. */
const meta: Meta = { title: "Sections/All sections", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

/** A story whose `content` arg is editable in the Controls panel (JSON). */
function section<C>(Component: React.ComponentType<{ content: C }>, content: C, name: string): Story {
  return {
    name,
    args: { content },
    argTypes: { content: { control: "object" } },
    render: (args) => <Component content={(args as { content: C }).content} />,
  };
}

// Sections that clear the fixed navbar get 56px on top; the preview has no navbar, so that space shows.
export const HomeHeroStory = section(HomeHero, homeHero, "HomeHero");
export const ResourceTilesStory = section(ResourceTiles, homeResources, "ResourceTiles");
export const FeatureRowsStory = section(FeatureRows, homeWhy, "FeatureRows");
export const Faq = section(FaqSection, homeFaq, "FaqSection");
export const Partners = section(PartnersStrip, homePartners, "PartnersStrip");
export const Newsletter = section(NewsletterSection, homeNewsletter, "NewsletterSection");
export const NewsletterCompact = section(NewsletterSection, topicNewsletter, "NewsletterSection (compact)");

export const SplitHeroWide = section(SplitHero, askHero, "SplitHero (wide)");
export const SplitHeroSquare = section(SplitHero, coursesHero, "SplitHero (square)");
export const SplitHeroPortrait = section(SplitHero, coachingHero, "SplitHero (portrait)");
export const SplitHeroNotice: Story = {
  name: "SplitHero (with notice)",
  render: () => (
    <SplitHero content={getHelpHero}>
      <CrisisNotice className="max-w-[500px] py-4" />
    </SplitHero>
  ),
};
export const PageIntroStory = section(PageIntro, contactIntro, "PageIntro");
export const DocumentHeaderStory: Story = {
  name: "DocumentHeader",
  render: () => (
    <DocumentHeader
      titleId="doc-title"
      content={{ eyebrow: "Legal", title: "Terms of Use", intro: "Please read these Terms of Use carefully." }}
    />
  ),
};

export const CtaBand = section(PhotoCtaBanner, askCta, "PhotoCtaBanner (band)");
export const CtaOverlay: Story = {
  name: "PhotoCtaBanner (overlay)",
  render: () => <PhotoCtaBanner content={coursesCta} variant="overlay" />,
};
export const Benefits = section(BenefitsBand, coachingBenefits, "BenefitsBand");
export const Steps = section(ProcessSteps, coachingSteps, "ProcessSteps");
export const TestimonialsStory = section(Testimonials, coachingTestimonials, "Testimonials");
export const CrisisLine = section(CrisisLineBanner, crisisLine, "CrisisLineBanner");
export const IconCta: Story = {
  name: "IconCtaBanner",
  render: () => (
    <div className="p-6">
      <IconCtaBanner content={helpChooser} />
    </div>
  ),
};
export const Trust = section(TrustStrip, getHelpTrust, "TrustStrip");
export const Library: Story = {
  name: "ResourceLibrary",
  render: () => <ResourceLibrary resources={seriesResources} />,
};

const { intro: _searchIntro, ...searchContent } = searchPage;
export const SiteSearchResults: Story = {
  name: "SiteSearch (results)",
  render: () => (
    <SiteSearch
      content={searchContent}
      query="anxiety"
      results={searchSite("anxiety", searchIndex)}
      onSearch={() => {}}
    />
  ),
};
export const SiteSearchEmpty: Story = {
  name: "SiteSearch (no results)",
  render: () => <SiteSearch content={searchContent} query="zzz" results={[]} onSearch={() => {}} />,
};
