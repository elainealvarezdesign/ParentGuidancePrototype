import { formatTimeRange, parseDate, type SeriesEvent } from "@/content/events";
import { DateBlock, EventActions, EventCategoryTag, LanguageTag } from "@/components/patterns/EventParts";

/* EventRow (docs/system/components/cards.md#event-row). One event in a vertical list: date tile, title with
 * type tag, time (CT), description, Register + Add to calendar. Spanish events are marked lang="es". */

export function EventRow({ event, headingLevel: Heading = "h3" }: { event: SeriesEvent; headingLevel?: "h2" | "h3" }) {
  const date = parseDate(event.date);
  return (
    <article
      className="flex gap-4 rounded-pg-xl bg-white p-5 shadow-pg-card sm:gap-5 sm:px-6"
      lang={event.language === "Español" ? "es" : undefined}
    >
      <DateBlock date={date} />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <Heading className="text-sm font-semibold text-pg-navy">{event.title}</Heading>
          <EventCategoryTag category={event.category} />
          {event.language && <LanguageTag language={event.language} />}
        </div>
        <p className="text-xs font-medium text-pg-teal-dark">
          {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} ·{" "}
          {formatTimeRange(event)}
          {event.start ? " CT" : ""}
        </p>
        <p className="mt-0.5 text-sm text-pg-slate">{event.description}</p>
        <EventActions event={event} className="mt-2" />
      </div>
    </article>
  );
}
