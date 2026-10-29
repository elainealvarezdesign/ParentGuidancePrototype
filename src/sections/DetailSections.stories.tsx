import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopicHero } from "./TopicHero";
import { VideoGrid } from "./VideoGrid";
import { SessionList } from "./SessionList";
import { NumberedCards } from "./NumberedCards";
import { ActionSteps } from "./ActionSteps";
import { RelatedResources } from "./RelatedResources";
import { SchoolGate } from "./SchoolGate";
import { SeriesWelcome } from "./SeriesWelcome";
import { CourseSummary } from "./CourseSummary";
import { CourseAbout } from "./CourseAbout";
import { CourseRecommendations } from "./CourseRecommendations";
import { TOPICS, topicFacts, topicPage } from "@/content/topics";
import { defaultDistricts, districtsByState, seriesGate, seriesWelcome, usStates } from "@/content/mentalHealthSeries";
import { coursePage, coursePrograms } from "@/content/coursePrograms";

/* Sections of the detail pages (topic, Mental Health Series, course), with the content they have on the site.
 * Guidance: docs/system/sections/. */
const meta: Meta = { title: "Sections/Detail pages", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

const topic = TOPICS[0];
const program = coursePrograms["free-yourself-from-limiting-thoughts"];

export const TopicHeroStory: Story = {
  name: "TopicHero",
  render: () => (
    <TopicHero
      content={{
        backLink: topicPage.backLink,
        eyebrow: `${topicPage.seriesName} · ${topic.category}`,
        title: topic.title,
        emphasis: topic.emphasis,
        intro: topic.intro,
        reminder: topic.reminder,
        expert: topic.expert,
        asideLabel: topicPage.asideLabel,
        facts: topicFacts(topic),
      }}
    />
  ),
};
export const VideoGridStory: Story = {
  name: "VideoGrid",
  render: () => <VideoGrid content={{ ...topicPage.videos, videos: topic.videos }} />,
};
export const SessionListStory: Story = {
  name: "SessionList",
  render: () => <SessionList content={{ ...topicPage.sessions, sessions: topic.sessions }} />,
};
export const NumberedCardsStory: Story = {
  name: "NumberedCards",
  render: () => (
    <NumberedCards
      content={{
        eyebrow: topicPage.takeaways.eyebrow,
        title: topicPage.takeaways.title(topic.takeaways.length),
        items: topic.takeaways,
      }}
    />
  ),
};
export const ActionStepsStory: Story = {
  name: "ActionSteps",
  render: () => (
    <ActionSteps
      content={{
        eyebrow: topicPage.actions.eyebrow,
        title: topicPage.actions.title(topic.emphasis),
        intro: topicPage.actions.intro,
        steps: topic.actions,
      }}
    />
  ),
};
export const RelatedResourcesStory: Story = {
  name: "RelatedResources",
  render: () => (
    <RelatedResources
      content={{ ...topicPage.resources, resources: topic.resources, banner: topicPage.leadersBanner }}
    />
  ),
};
export const SchoolGateStory: Story = {
  name: "SchoolGate",
  render: () => (
    <SchoolGate
      content={seriesGate}
      states={usStates}
      districtsByState={districtsByState}
      defaultDistricts={defaultDistricts}
      onSubmit={() => {}}
    />
  ),
};
export const SeriesWelcomeStory: Story = {
  name: "SeriesWelcome",
  render: () => (
    <SeriesWelcome
      content={seriesWelcome}
      location="Fort Worth ISD · Texas"
      onChangeLocation={() => {}}
      search=""
      onSearch={() => {}}
    />
  ),
};
export const CourseSummaryStory: Story = {
  name: "CourseSummary",
  render: () => (
    <div className="mx-auto max-w-pg-content p-6">
      <CourseSummary content={{ ...program, labels: coursePage }} />
    </div>
  ),
};
export const CourseAboutStory: Story = {
  name: "CourseAbout",
  render: () => (
    <div className="mx-auto max-w-pg-content p-6">
      <CourseAbout
        content={{ title: coursePage.aboutTitle, paragraphs: program.about, instructors: program.instructors }}
      />
    </div>
  ),
};
export const CourseRecommendationsStory: Story = {
  name: "CourseRecommendations",
  render: () => (
    <div className="mx-auto max-w-pg-content p-6">
      <CourseRecommendations
        content={{
          title: coursePage.recommendationsTitle,
          meta: coursePage.recommendationMeta,
          items: program.recommendations,
        }}
      />
    </div>
  ),
};
