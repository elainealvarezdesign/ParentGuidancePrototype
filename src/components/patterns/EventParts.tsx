import { Button, ButtonAnchor } from "@/components/ui/Button";
import { CalendarPlus } from "@/components/ui/icons";
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
