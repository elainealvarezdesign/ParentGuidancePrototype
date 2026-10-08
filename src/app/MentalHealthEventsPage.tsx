import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Clock, Download, MapPin } from "@/components/ui/icons";
import {
  EVENTS,
  byDateTime,
  eventCategories,
  downloadIcs,
  formatStart,
  formatTimeRange,
  parseDate,
  toKey,
  type EventCategory,
  type SeriesEvent,
} from "@/content/events";
import { EventModal } from "@/components/patterns/EventModal";
import {
  DateBlock,
  EventActions,
  EventCategoryTag,
  LanguageTag,
  categoryStyle,
  toEventModalData,
} from "@/components/patterns/EventParts";
import { Section, Container } from "@/components/layout/Section";

const card = "rounded-pg-xl border border-pg-line bg-white shadow-pg-card";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
/** "Today" for the prototype: the sample events are in July–August 2025. */
const INITIAL = parseDate("2025-07-10");

type Filter = "all" | EventCategory;
type View = "month" | "list";

const monthLabel = (d: Date) => d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
const longDate = (d: Date) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
function EventDetail({ event }: { event: SeriesEvent }) {
  return (
    <article
      className="border-t border-pg-line pt-4 first:border-t-0 first:pt-0"
      lang={event.language === "Español" ? "es" : undefined}
    >
      <h3 className={`text-xl leading-snug font-bold text-pg-navy`}>{event.title}</h3>
      <ul className={`mt-2 grid gap-2 text-sm text-pg-slate`}>
        <li className="flex items-center gap-2">
          <Clock size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
          {formatTimeRange(event)}
          {event.start ? " CT" : ""}
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={16} className="shrink-0 text-pg-teal-dark" aria-hidden="true" />
          Online
        </li>
      </ul>
      <div className="mt-2 flex flex-wrap gap-2">
        <EventCategoryTag category={event.category} />
        {event.language && <LanguageTag language={event.language} />}
      </div>
      <p className={`mt-3 text-sm leading-relaxed text-pg-slate`}>{event.description}</p>
      <EventActions event={event} />
    </article>
  );
}

export default function MentalHealthEventsPage() {
  const [month, setMonth] = useState(new Date(INITIAL.getFullYear(), INITIAL.getMonth(), 1));
  const [selected, setSelected] = useState(toKey(INITIAL));
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("month");
  const [open, setOpen] = useState<{ event: SeriesEvent; anchor: DOMRect | null } | null>(null);
  const [params, setParams] = useSearchParams();

  // Shared links (?event=<id>, from "Copy event link") open that event's pop-up
  useEffect(() => {
    const shared = EVENTS.find((e) => e.id === params.get("event"));
    if (!shared) return;
    goToDate(shared.date);
    setOpen({ event: shared, anchor: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openEvent(e: SeriesEvent, click: MouseEvent<HTMLElement>) {
    setOpen({ event: e, anchor: click.currentTarget.getBoundingClientRect() });
  }

  const closeEvent = useCallback(() => {
    setOpen(null);
    if (params.has("event")) {
      const next = new URLSearchParams(params);
      next.delete("event");
      setParams(next, { replace: true, preventScrollReset: true });
    }
  }, [params, setParams]);

  const events = useMemo(
    () => EVENTS.filter((e) => filter === "all" || e.category === filter).sort(byDateTime),
    [filter],
  );
  const byDay = useMemo(() => {
    const map = new Map<string, SeriesEvent[]>();
    events.forEach((e) => map.set(e.date, [...(map.get(e.date) ?? []), e]));
    return map;
  }, [events]);

  const monthEvents = events.filter((e) => {
    const d = parseDate(e.date);
    return d.getFullYear() === month.getFullYear() && d.getMonth() === month.getMonth();
  });
  const selectedEvents = byDay.get(selected) ?? [];
  // Upcoming is relative to "today" (fixed in the prototype), not to the selected day, so the list stays put
  // while people open events from it (focus returns to the button they used).
  const upcoming = events.filter((e) => e.date >= toKey(INITIAL)).slice(0, 4);

  // Month grid: leading blanks, days, trailing blanks (weeks start on Sunday)
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const lead = month.getDay();
  const cells: (Date | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
  ];
  while (cells.length % 7) cells.push(null);

  function goToMonth(offset: number) {
    const next = new Date(month.getFullYear(), month.getMonth() + offset, 1);
    setMonth(next);
    const first = events.find((e) => e.date.startsWith(toKey(next).slice(0, 7)));
    setSelected(first ? first.date : toKey(next));
  }

  function goToDate(date: string) {
    const d = parseDate(date);
    setMonth(new Date(d.getFullYear(), d.getMonth(), 1));
    setSelected(date);
  }

  function goToToday() {
    const today = new Date();
    setMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelected(toKey(today));
  }

  // When the visible month has no events, offer the closest month that does
  const nearest =
    monthEvents.length === 0 && events.length
      ? events.reduce((best, e) =>
          Math.abs(parseDate(e.date).getTime() - month.getTime()) <
          Math.abs(parseDate(best.date).getTime() - month.getTime())
            ? e
            : best,
        )
      : undefined;

  const chip = (active: boolean) =>
    `inline-flex h-9 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
      active ? "border-pg-navy bg-pg-navy text-white" : "border-pg-line bg-white text-pg-navy hover:bg-pg-tint-soft"
    }`;

  return (
    <Section belowNav spacing="none" className="pt-6 pb-20 md:pt-10">
      <Container>
        {/* Header */}
        <Link
          to="/mental-health-series"
          className={`inline-flex items-center gap-1 text-xs font-medium text-pg-teal-dark hover:text-pg-navy`}
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Mental Health Series
        </Link>
        <p className={`mt-4 flex items-center gap-2 text-pg-eyebrow text-pg-teal-dark`}>
          <span className="h-[18px] w-1 rounded-full bg-pg-sage" aria-hidden="true" />
          Events
        </p>
        <h1 className={`mt-2 text-pg-h1 font-medium text-pg-navy`}>Live sessions &amp; events</h1>
        <p className={`mt-2 max-w-[640px] text-base leading-relaxed text-pg-slate`}>
          Join free live Q&amp;As, workshops and support groups with licensed therapists. All times are shown in Central
          Time (CT).
        </p>

        {/* Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToMonth(-1)}
              aria-label="Previous month"
              className="grid h-9 w-9 place-items-center rounded-pg-md border border-pg-line bg-white text-pg-teal-dark hover:bg-pg-tint-soft"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <h2 className={`min-w-[150px] text-center text-xl font-bold text-pg-navy md:text-2xl`} aria-live="polite">
              {monthLabel(month)}
            </h2>
            <button
              type="button"
              onClick={() => goToMonth(1)}
              aria-label="Next month"
              className="grid h-9 w-9 place-items-center rounded-pg-md border border-pg-line bg-white text-pg-teal-dark hover:bg-pg-tint-soft"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <Button variant="secondary" size="s" onClick={goToToday} className="ml-1">
              Today
            </Button>
          </div>
          <div className="inline-flex rounded-pg-md bg-pg-tint p-1" role="group" aria-label="Calendar view">
            {(["month", "list"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={`h-8 rounded-pg-md px-4 text-sm ${view === v ? "bg-white font-semibold text-pg-navy shadow-pg-card" : "font-medium text-pg-slate"}`}
              >
                {v === "month" ? "Month" : "List"}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div
          className="mt-4 -mr-6 flex gap-2 overflow-x-auto pr-6 pb-1 md:mr-0 md:flex-wrap md:overflow-visible md:pr-0"
          role="group"
          aria-label="Filter by event type"
        >
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
            className={chip(filter === "all")}
          >
            All events
          </button>
          {(Object.keys(eventCategories) as EventCategory[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={chip(filter === c)}
            >
              <span className={`h-2.5 w-2.5 rounded-pg-sm ${categoryStyle[c].swatch}`} aria-hidden="true" />
              {eventCategories[c].label}
            </button>
          ))}
        </div>

        {nearest && (
          <div
            className={`mt-4 flex flex-wrap items-center justify-between gap-3 rounded-pg-lg border border-pg-line bg-white px-4 py-3 text-sm text-pg-slate`}
          >
            <span>No events scheduled in {monthLabel(month)}.</span>
            <button
              type="button"
              onClick={() => goToDate(nearest.date)}
              className="font-semibold text-pg-teal-dark underline underline-offset-4"
            >
              Show {monthLabel(parseDate(nearest.date))}
            </button>
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* Month view */}
          {view === "month" ? (
            <section className={`${card} overflow-hidden`} aria-label={`Calendar, ${monthLabel(month)}`}>
              <div className="grid grid-cols-7 border-b border-pg-line" aria-hidden="true">
                {WEEKDAYS.map((d) => (
                  <span key={d} className={`py-2 text-center text-pg-eyebrow text-pg-slate`}>
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {cells.map((date, i) => {
                  if (!date) {
                    return (
                      <div
                        key={`blank-${i}`}
                        className="min-h-[52px] border-r border-b border-pg-tint-soft bg-pg-cream lg:min-h-[118px] [&:nth-child(7n)]:border-r-0"
                        aria-hidden="true"
                      />
                    );
                  }
                  const key = toKey(date);
                  const dayEvents = byDay.get(key) ?? [];
                  const isSelected = key === selected;
                  const dayLabel = `${longDate(date)}, ${dayEvents.length === 0 ? "no events" : `${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}`}`;
                  return (
                    <div
                      key={key}
                      className={`relative min-h-[52px] min-w-0 border-r border-b border-pg-tint-soft transition-colors hover:bg-pg-tint-soft lg:min-h-[118px] [&:nth-child(7n)]:border-r-0 ${isSelected ? "bg-pg-tint-soft" : "bg-white"}`}
                    >
                      {/* The whole cell selects the day; event pills sit above it and open the event pop-up */}
                      <button
                        type="button"
                        onClick={() => setSelected(key)}
                        aria-pressed={isSelected}
                        aria-label={dayLabel}
                        className="absolute inset-0 flex flex-col items-center gap-1 p-1 lg:items-start lg:p-2"
                      >
                        <span
                          className={`grid h-7 w-7 place-items-center rounded-full text-sm font-semibold ${isSelected ? "bg-pg-teal-dark text-white" : "text-pg-navy"}`}
                        >
                          {date.getDate()}
                        </span>
                        {/* Mobile: dots */}
                        <span className="flex gap-1 lg:hidden" aria-hidden="true">
                          {dayEvents.slice(0, 3).map((e) => (
                            <span
                              key={e.id}
                              className={`h-1.5 w-1.5 rounded-full ${categoryStyle[e.category].swatch}`}
                            />
                          ))}
                        </span>
                      </button>
                      {/* Desktop: event pills */}
                      {dayEvents.length > 0 && (
                        <div className="pointer-events-none relative hidden flex-col gap-1 px-2 pt-[42px] pb-2 lg:flex">
                          {dayEvents.slice(0, 3).map((e) => (
                            <button
                              key={e.id}
                              type="button"
                              onClick={(click) => {
                                setSelected(key);
                                openEvent(e, click);
                              }}
                              aria-haspopup="dialog"
                              className={`pointer-events-auto block w-full rounded-pg-md px-2 py-1 text-left text-xs leading-tight transition-[filter] hover:brightness-110 ${categoryStyle[e.category].pill}`}
                            >
                              <span className="block text-xs font-semibold opacity-90">{formatStart(e)}</span>
                              <span className="line-clamp-2 font-medium">{e.title}</span>
                            </button>
                          ))}
                          {dayEvents.length > 3 && (
                            <span className={`text-xs font-semibold text-pg-teal-dark`}>
                              +{dayEvents.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : (
            /* List view */
            <section className={`${card} p-5 md:p-6`} aria-label={`Events in ${monthLabel(month)}`}>
              {monthEvents.length === 0 ? (
                <p className={`text-sm text-pg-slate`}>No events in {monthLabel(month)}.</p>
              ) : (
                <ol className="grid gap-4">
                  {monthEvents.map((e) => (
                    <li
                      key={e.id}
                      className="flex gap-4 rounded-pg-lg border border-pg-tint-soft p-4"
                      lang={e.language === "Español" ? "es" : undefined}
                    >
                      <DateBlock date={parseDate(e.date)} />
                      <div className="min-w-0 flex-1">
                        <p className={`text-xs text-pg-slate`}>
                          {parseDate(e.date).toLocaleDateString("en-US", { weekday: "long" })} · {formatTimeRange(e)}
                          {e.start ? " CT" : ""}
                        </p>
                        <h3 className={`mt-0.5 text-base leading-snug font-bold text-pg-navy`}>{e.title}</h3>
                        <p className={`mt-1 text-sm leading-relaxed text-pg-slate`}>{e.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <EventCategoryTag category={e.category} />
                          {e.language && <LanguageTag language={e.language} />}
                        </div>
                        <EventActions event={e} />
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          )}

          {/* Sidebar */}
          <aside className="grid gap-4">
            {view === "month" && (
              <section className={`${card} p-5`} aria-live="polite" aria-label="Selected day">
                <p className={`text-pg-eyebrow text-pg-teal-dark`}>{longDate(parseDate(selected))}</p>
                <div className="mt-2 grid gap-4">
                  {selectedEvents.length ? (
                    selectedEvents.map((e) => <EventDetail key={e.id} event={e} />)
                  ) : (
                    <p className={`text-sm text-pg-slate`}>No events on this day.</p>
                  )}
                </div>
              </section>
            )}

            <section className={`${card} p-5`} aria-labelledby="upcoming-title">
              <h2 id="upcoming-title" className={`text-base font-bold text-pg-navy`}>
                Upcoming events
              </h2>
              {upcoming.length ? (
                <ul className="mt-4 grid gap-2">
                  {upcoming.map((e) => (
                    <li key={e.id}>
                      <button
                        type="button"
                        onClick={(click) => {
                          goToDate(e.date);
                          openEvent(e, click);
                        }}
                        aria-haspopup="dialog"
                        className="relative flex w-full gap-3 rounded-pg-lg border border-pg-tint-soft py-2 pr-3 pl-4 text-left transition-colors hover:bg-pg-tint-soft"
                      >
                        <span
                          className={`absolute top-2.5 bottom-2.5 left-0 w-[3px] rounded-pg-sm ${categoryStyle[e.category].swatch}`}
                          aria-hidden="true"
                        />
                        <DateBlock date={parseDate(e.date)} size="sm" />
                        <span className="min-w-0">
                          <span className={`block text-sm leading-snug font-semibold text-pg-navy`}>{e.title}</span>
                          <span className={`mt-0.5 block text-xs text-pg-slate`}>
                            {parseDate(e.date).toLocaleDateString("en-US", { weekday: "short" })} · {formatTimeRange(e)}
                          </span>
                          <span className="mt-2 block">
                            <EventCategoryTag category={e.category} />
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`mt-3 text-sm text-pg-slate`}>No more events scheduled.</p>
              )}
              {view === "month" && (
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`mt-3 text-sm font-semibold text-pg-teal-dark hover:underline`}
                >
                  See all in list view →
                </button>
              )}
            </section>

            <section className="rounded-pg-xl bg-pg-navy p-5 text-white" aria-labelledby="sync-title">
              <h2 id="sync-title" className={`text-base font-bold`}>
                Never miss a session
              </h2>
              <p className={`mt-1 text-sm text-pg-sage`}>
                Add every Parent Guidance event to Google, Outlook or Apple Calendar.
              </p>
              <Button
                variant="inverse"
                onClick={() => downloadIcs("parent-guidance-events.ics", EVENTS)}
                className="mt-4"
              >
                <Download size={16} aria-hidden="true" />
                Download calendar (.ics)
              </Button>
            </section>
          </aside>
        </div>
      </Container>

      <EventModal
        event={open ? toEventModalData(open.event) : null}
        anchor={open?.anchor ?? null}
        onClose={closeEvent}
      />
    </Section>
  );
}
