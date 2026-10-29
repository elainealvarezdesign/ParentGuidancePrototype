import type { MouseEvent } from "react";
import { Button, ButtonAnchor } from "@/components/ui/Button";
import { CalendarPlus, Clock, MapPin } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import {
  downloadIcs,
  eventCategories,
  formatTimeRange,
  parseDate,
  registerUrlFor,
  type EventCategory,
  type SeriesEvent,
} from "@/content/events";
import type { EventModalData } from "./EventModal";

/* Event building blocks shared by the Series calendar and the Events page
 * (docs/system/components/event-parts.md):
 *   categoryStyle      color per event type: `pill` (white or navy text at 4.5:1+) and `swatch` (dot/bar)
 *   EventCategoryTag   the type label as a pill
 *   DateBlock          month + day tile
 *   EventActions       Register (external) + Add to calendar (.ics)
 *   EventDetail        one event in the "Selected day" panel: title, time, place, tags, description, actions
 *   EventListItem      one event in the month list: date tile, weekday and time, title, description, actions
 *   UpcomingEventButton  compact button for the "Upcoming events" panel; opens the event pop-up
 *   toEventModalData   SeriesEvent → EventModal props */

export const categoryStyle: Record<EventCategory, { pill: string; swatch: string }> = {
  qa: { pill: "bg-pg-teal-dark text-white", swatch: "bg-pg-teal-dark" },
  workshop: { pill: "bg-pg-navy text-white", swatch: "bg-pg-navy" },
  support: { pill: "bg-pg-sage text-pg-navy", swatch: "bg-pg-sage" },
  course: { pill: "bg-pg-tint text-pg-teal-dark ring-1 ring-pg-sage ring-inset", swatch: "bg-pg-teal" },
};

export function EventCategoryTag({ category, className }: { category: EventCategory; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
        categoryStyle[category].pill,
        className,
      )}
    >
      {eventCategories[category].label}
    </span>
  );
}

export function LanguageTag({ language }: { language: string }) {
  return (
    <span className="inline-flex rounded-full bg-pg-cream-dark px-2 py-0.5 text-xs font-semibold text-pg-navy">
      {language}
    </span>
  );
}

export function DateBlock({ date, size = "md" }: { date: Date; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "flex shrink-0 flex-col items-center justify-center rounded-pg-lg bg-pg-tint leading-none text-pg-teal-dark",
        size === "sm" ? "h-11 w-11" : "h-14 w-14",
      )}
      aria-hidden="true"
    >
      <span className="text-pg-eyebrow">{date.toLocaleDateString("en-US", { month: "short" })}</span>
      <span className="mt-0.5 text-xl font-bold text-pg-navy">{date.getDate()}</span>
    </span>
  );
}

export function EventActions({ event, className }: { event: SeriesEvent; className?: string }) {
  const spanish = event.language === "Español";
  return (
    <div className={cn("mt-4 flex flex-wrap gap-2", className)}>
      <ButtonAnchor
        href={registerUrlFor(event)}
        target="_blank"
        rel="noopener noreferrer"
        lang={spanish ? "es" : undefined}
      >
        {spanish ? "Registrarse" : "Register"}
        <span className="sr-only">{spanish ? " (se abre en una pestaña nueva)" : " (opens in a new tab)"}</span>
      </ButtonAnchor>
      <Button variant="secondary" onClick={() => downloadIcs(`${event.id}.ics`, [event])}>
        <CalendarPlus size={16} aria-hidden="true" />
        Add to calendar
      </Button>
    </div>
  );
}

export const toEventModalData = (e: SeriesEvent): EventModalData => ({
  id: e.id,
  title: e.title,
  date: parseDate(e.date),
  time: formatTimeRange(e),
  description: e.description,
  registerUrl: registerUrlFor(e),
  language: e.language,
});

const isSpanish = (e: SeriesEvent) => e.language === "Español";

/** Time range with the time zone, "6:00 – 7:00 pm CT". All-day events have no zone. */
const timeWithZone = (e: SeriesEvent, timeZone: string) => `${formatTimeRange(e)}${e.start ? ` ${timeZone}` : ""}`;

export function EventDetail({
  event,
  timeZone,
  location,
}: {
  event: SeriesEvent;
  /** "CT". */
  timeZone: string;
  /** "Online". */
  location: string;
}) {
  return (
    <article
      className="border-t border-pg-line pt-4 first:border-t-0 first:pt-0"
      lang={isSpanish(event) ? "es" : undefined}
    >
      <h3 className="text-xl leading-snug font-bold text-pg-navy">{event.title}</h3>
      <ul className="mt-2 grid gap-2 text-sm text-pg-slate">
        <li className="flex items-center gap-2">
          <Clock size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
          {timeWithZone(event, timeZone)}
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
          {location}
        </li>
      </ul>
      <div className="mt-2 flex flex-wrap gap-2">
        <EventCategoryTag category={event.category} />
        {event.language && <LanguageTag language={event.language} />}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-pg-slate">{event.description}</p>
      <EventActions event={event} />
    </article>
  );
}

export function EventListItem({ event, timeZone }: { event: SeriesEvent; timeZone: string }) {
  const date = parseDate(event.date);
  return (
    <li className="flex gap-4 rounded-pg-lg border border-pg-tint-soft p-4" lang={isSpanish(event) ? "es" : undefined}>
      <DateBlock date={date} />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-pg-slate">
          {date.toLocaleDateString("en-US", { weekday: "long" })} · {timeWithZone(event, timeZone)}
        </p>
        <h3 className="mt-0.5 text-base leading-snug font-bold text-pg-navy">{event.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-pg-slate">{event.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <EventCategoryTag category={event.category} />
          {event.language && <LanguageTag language={event.language} />}
        </div>
        <EventActions event={event} />
      </div>
    </li>
  );
}

export function UpcomingEventButton({
  event,
  onOpen,
}: {
  event: SeriesEvent;
  onOpen: (event: SeriesEvent, click: MouseEvent<HTMLElement>) => void;
}) {
  const date = parseDate(event.date);
  return (
    <button
      type="button"
      onClick={(click) => onOpen(event, click)}
      aria-haspopup="dialog"
      className="relative flex w-full gap-3 rounded-pg-lg border border-pg-tint-soft py-2 pr-3 pl-4 text-left transition-colors hover:bg-pg-tint-soft"
    >
      <span
        className={cn("absolute top-2.5 bottom-2.5 left-0 w-[3px] rounded-pg-sm", categoryStyle[event.category].swatch)}
        aria-hidden="true"
      />
      <DateBlock date={date} size="sm" />
      <span className="min-w-0">
        <span className="block text-sm leading-snug font-semibold text-pg-navy">{event.title}</span>
        <span className="mt-0.5 block text-xs text-pg-slate">
          {date.toLocaleDateString("en-US", { weekday: "short" })} · {formatTimeRange(event)}
        </span>
        <span className="mt-2 block">
          <EventCategoryTag category={event.category} />
        </span>
      </span>
    </button>
  );
}
