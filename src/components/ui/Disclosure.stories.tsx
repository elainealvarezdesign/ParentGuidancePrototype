import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionItem } from "./Accordion";
import { Tabs } from "./Tabs";
import { Pagination } from "./Pagination";
import { Breadcrumb } from "./Breadcrumb";
import { SectionHeading, ListHeading, Eyebrow } from "./SectionHeading";
import { Button } from "./Button";
import { BookOpen, CheckCircle2, Paperclip } from "./icons";

/* Structure and navigation: Accordion, Tabs, Pagination, Breadcrumb, headings. Guidance: docs/system/components/. */
const meta: Meta = { title: "UI/Structure & navigation" };
export default meta;
type Story = StoryObj;

export const Accordion: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-5">
      <AccordionItem title="What happens in a typical session?" defaultOpen>
        <p>You meet your coach by video for about 45 minutes and leave with one or two things to try.</p>
      </AccordionItem>
      <AccordionItem title="Is messaging limited?">
        <p>No. Message your coach any time between sessions.</p>
      </AccordionItem>
      <AccordionItem title="Read Transcript" variant="compact" headingLevel={2}>
        <p>Social withdrawal in children is one of the most common concerns parents bring to me…</p>
      </AccordionItem>
    </div>
  ),
};

export const TabsStory: Story = {
  name: "Tabs",
  render: function Render() {
    const [tab, setTab] = useState<"overview" | "takeaways" | "resources">("overview");
    return (
      <Tabs
        label="Lesson content"
        value={tab}
        onChange={setTab}
        tabs={[
          {
            id: "overview",
            label: "Overview",
            icon: <BookOpen />,
            panel: (
              <p className="text-sm text-pg-slate">Secure attachment is the foundation of every other milestone.</p>
            ),
          },
          {
            id: "takeaways",
            label: "Key Takeaways",
            icon: <CheckCircle2 />,
            panel: <p className="text-sm text-pg-slate">What secure vs. insecure attachment looks like.</p>,
          },
          {
            id: "resources",
            label: "Resources",
            icon: <Paperclip />,
            panel: <p className="text-sm text-pg-slate">Milestone Tracking Worksheet (PDF)</p>,
          },
        ]}
      />
    );
  },
};

export const PaginationStory: Story = {
  name: "Pagination",
  render: function Render() {
    const [page, setPage] = useState(2);
    return <Pagination page={page} totalPages={4} onChange={setPage} label="Questions pages" />;
  },
};

export const BreadcrumbStory: Story = {
  name: "Breadcrumb",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="-mt-14">
      <Breadcrumb
        items={[
          { label: "Courses", to: "/on-demand-courses" },
          { label: "Milestones to Progress", to: "/courses/milestones-to-progress", hideOnMobile: true },
          { label: "Working with Teachers" },
        ]}
      />
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Process" title="Getting started is simple" intro="Four steps, about ten minutes." />
      <SectionHeading align="left" size="small" eyebrow="Key takeaways" title="9 ideas to remember" />
      <ListHeading
        title="Browse All"
        count="15 questions"
        action={
          <Button variant="secondary" size="s">
            View all
          </Button>
        }
      />
      <Eyebrow>Mental Health Series</Eyebrow>
    </div>
  ),
};
