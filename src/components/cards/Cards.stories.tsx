import type { Meta, StoryObj } from "@storybook/react-vite";
import UnifiedCard from "./UnifiedCard";
import { QuestionCard } from "./QuestionCard";
import { ResourceCard } from "./ResourceCard";
import { EventRow } from "./EventRow";
import { courses } from "@/content/courses";
import { supportResources } from "@/content/getHelp";
import { questions, therapists } from "@/content/askATherapist";
import { seriesResources, topicHref } from "@/content/mentalHealthSeries";
import { EVENTS } from "@/content/events";

/* Cards (docs/system/components/cards.md), with real content from src/content. */

const meta = {
  title: "Cards/Cards",
  component: UnifiedCard,
  parameters: {
    docs: {
      description: {
        component: "The card for browsable items. Guidance: docs/system/components/cards.md#unified-card",
      },
    },
  },
  args: {
    image: { src: courses[1].image, alt: "" },
    badge: courses[1].topic,
    person: courses[1].instructor,
    title: courses[1].title,
    meta: `${courses[1].duration} • ${courses[1].lessons} lessons`,
    footer: courses[1].instructor,
    cta: { label: "Begin Course", to: "/courses/milestones-to-progress" },
  },
} satisfies Meta<typeof UnifiedCard>;
export default meta;
type Story = StoryObj<typeof meta>;

// One card at its real grid width (a column of the 3-up grid).
const oneCard = [(Story: () => React.ReactNode) => <div className="max-w-xs">{Story()}</div>];

export const Course: Story = { decorators: oneCard };

export const HelpLine: Story = {
  name: "Help line (logo, external)",
  decorators: oneCard,
  args: {
    image: { src: supportResources[4].logo, alt: `${supportResources[4].name} logo` },
    imageKind: "logo",
    badge: supportResources[4].category,
    person: undefined,
    title: supportResources[4].name,
    description: supportResources[4].description,
    meta: supportResources[4].availability,
    footer: undefined,
    cta: { label: "Get help", href: supportResources[4].href },
  },
};

export const LongTitle: Story = {
  decorators: oneCard,
  args: { title: "Milestones to Progress: Guiding your child from birth through the early school years" },
};

export const Question: Story = {
  render: () => (
    <div className="max-w-xs">
      <QuestionCard
        question={questions[2].question}
        category={questions[2].category}
        answeredBy={therapists[questions[2].answeredBy].name}
        image={questions[2].thumbnail}
        to={`/ask-a-therapist/${questions[2].id}`}
      />
    </div>
  ),
};

export const Resources: Story = {
  render: () => (
    <ul className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
      {seriesResources.slice(0, 6).map((r) => (
        <li key={r.title}>
          <ResourceCard {...r} to={topicHref(r)} />
        </li>
      ))}
    </ul>
  ),
};

export const Events: Story = {
  render: () => (
    <ul className="flex max-w-4xl flex-col gap-3">
      {EVENTS.slice(0, 3).map((e) => (
        <li key={e.id}>
          <EventRow event={e} />
        </li>
      ))}
    </ul>
  ),
};
