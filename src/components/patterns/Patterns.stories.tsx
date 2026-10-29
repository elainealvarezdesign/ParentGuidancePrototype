import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "./FilterBar";
import { SubmitQuestionDialog } from "./SubmitQuestionDialog";
import { SeriesCalendar } from "./SeriesCalendar";
import { LessonOutline } from "./LessonOutline";
import { PrevNextNav } from "./PrevNextNav";
import {
  DateBlock,
  EventActions,
  EventCategoryTag,
  EventDetail,
  EventListItem,
  UpcomingEventButton,
} from "./EventParts";
import { EventMonthGrid } from "./EventMonthGrid";
import { CookieTable } from "./CookieTable";
import { cookiesPage } from "@/content/cookies";
import { SearchField } from "@/components/ui/SearchField";
import { FilterChips } from "@/components/ui/FilterChips";
import { Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { questionCategories } from "@/content/askATherapist";
import { EVENTS, eventCategories, eventsPage, parseDate, type EventCategory, type SeriesEvent } from "@/content/events";
import { coursePrograms } from "@/content/coursePrograms";

/* Composed widgets (docs/system/components/README.md#patterns--composed-widgets--srccomponentspatterns). */
const meta: Meta = { title: "Patterns/Widgets" };
export default meta;
type Story = StoryObj;

export const FilterBarStory: Story = {
  name: "FilterBar",
  parameters: { layout: "fullscreen" },
  render: function Render() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState<(typeof questionCategories)[number]>("All");
    return (
      <FilterBar
        sticky={false}
        search={<SearchField label="Search questions" placeholder="Search questions…" value={q} onValueChange={setQ} />}
        filters={<FilterChips label="Filter by category" options={questionCategories} value={cat} onChange={setCat} />}
        sort={
          <Select size="compact" aria-label="Sort questions" defaultValue="featured">
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
          </Select>
        }
      />
    );
  },
};

export const SubmitQuestion: Story = {
  name: "SubmitQuestionDialog",
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Submit Question</Button>
        <SubmitQuestionDialog open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};

export const Calendar: Story = {
  name: "SeriesCalendar",
  render: () => <SeriesCalendar events={EVENTS} initialDate={parseDate("2025-07-01")} />,
};

export const EventPartsStory: Story = {
  name: "Event parts",
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(eventCategories) as EventCategory[]).map((c) => (
          <EventCategoryTag key={c} category={c} />
        ))}
      </div>
      <div className="flex gap-3">
        <DateBlock date={parseDate("2025-07-10")} />
        <DateBlock date={parseDate("2025-08-12")} size="sm" />
      </div>
      <EventActions event={EVENTS[1]} />
      <div className="max-w-sm rounded-pg-xl border border-pg-line bg-white p-5">
        <EventDetail event={EVENTS[1]} timeZone={eventsPage.timeZone} location={eventsPage.location} />
      </div>
      <ol className="max-w-2xl">
        <EventListItem event={EVENTS[2]} timeZone={eventsPage.timeZone} />
      </ol>
      <div className="max-w-sm">
        <UpcomingEventButton event={EVENTS[3]} onOpen={() => {}} />
      </div>
    </div>
  ),
};

function MonthGridDemo() {
  const [selected, setSelected] = useState("2025-07-10");
  const byDay = new Map<string, SeriesEvent[]>();
  EVENTS.forEach((e) => byDay.set(e.date, [...(byDay.get(e.date) ?? []), e]));
  return (
    <EventMonthGrid
      month={parseDate("2025-07-01")}
      byDay={byDay}
      selected={selected}
      onSelectDay={setSelected}
      onOpenEvent={() => {}}
      label={eventsPage.calendarLabel("July 2025")}
      moreLabel={eventsPage.more}
    />
  );
}

export const MonthGrid: Story = { name: "EventMonthGrid", render: () => <MonthGridDemo /> };

export const Cookies: Story = {
  name: "CookieTable",
  render: () => (
    <div className="flex max-w-4xl flex-col gap-10">
      {cookiesPage.tables.groups.slice(0, 2).map((g) => (
        <CookieTable key={g.label} group={g} />
      ))}
    </div>
  ),
};

export const Outline: Story = {
  name: "LessonOutline",
  render: () => {
    const p = coursePrograms["milestones-to-progress"];
    return (
      <div className="max-w-xs">
        <LessonOutline
          lessons={p.lessons}
          currentId={3}
          completed={new Set([1, 2])}
          lessonHref={(id) => `/courses/${p.slug}/lesson/${id}`}
          courseHref={`/courses/${p.slug}`}
        />
      </div>
    );
  },
};

export const PrevNext: Story = {
  name: "PrevNextNav",
  render: () => (
    <div className="max-w-3xl">
      <PrevNextNav
        label="More answers"
        prev={{
          title: "How can I tell if my child is just highly energetic or if they have ADHD?",
          to: "/ask-a-therapist/2",
        }}
        next={{
          title: "How can I better understand and help my child with an eating disorder?",
          to: "/ask-a-therapist/4",
        }}
      />
    </div>
  ),
};
