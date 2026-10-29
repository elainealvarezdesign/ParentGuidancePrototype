import { useParams } from "react-router";
import { getTopic, topicFacts, topicNewsletter, topicPage } from "@/content/topics";
import { TopicHero } from "@/sections/TopicHero";
import { VideoGrid } from "@/sections/VideoGrid";
import { SessionList } from "@/sections/SessionList";
import { NumberedCards } from "@/sections/NumberedCards";
import { ActionSteps } from "@/sections/ActionSteps";
import { RelatedResources } from "@/sections/RelatedResources";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { BackToTopButton } from "@/components/patterns/DocumentActions";
import NotFoundPage from "./NotFoundPage";

/* Mental Health Series topic ("/mental-health-series/:slug"). Recipe: docs/system/pages/mental-health-topic.md.
 * TopicHero → VideoGrid → SessionList → NumberedCards (takeaways) → ActionSteps → RelatedResources → Newsletter.
 * Topic text: TOPICS in src/content/topics.ts; shared labels: topicPage. */

const TITLE_ID = "topic-title";

export default function MentalHealthTopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const topic = getTopic(slug);

  if (!topic) return <NotFoundPage {...topicPage.notFound} />;

  const { videos, sessions, takeaways, actions, resources, leadersBanner } = topicPage;

  return (
    <div className="bg-pg-cream print:bg-white">
      <TopicHero
        titleId={TITLE_ID}
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
      <VideoGrid content={{ ...videos, videos: topic.videos }} />
      <SessionList content={{ ...sessions, sessions: topic.sessions }} />
      <NumberedCards
        content={{
          eyebrow: takeaways.eyebrow,
          title: takeaways.title(topic.takeaways.length),
          items: topic.takeaways,
        }}
      />
      <ActionSteps
        content={{
          eyebrow: actions.eyebrow,
          title: actions.title(topic.emphasis),
          intro: actions.intro,
          steps: topic.actions,
        }}
      />
      <RelatedResources content={{ ...resources, resources: topic.resources, banner: leadersBanner }}>
        <BackToTopButton focusId={TITLE_ID} />
      </RelatedResources>
      <NewsletterSection content={topicNewsletter} />
    </div>
  );
}
