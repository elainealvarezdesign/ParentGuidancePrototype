import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Download } from "@/components/ui/icons";
import {
  EVENTS,
  byDateTime,
  eventCategories,
  downloadIcs,
  eventsPage,
  parseDate,
  toKey,
  type EventCategory,
  type SeriesEvent,
} from "@/content/events";
import { EventModal } from "@/components/patterns/EventModal";
import {
  EventDetail,
  EventListItem,
  UpcomingEventButton,
  categoryStyle,
  toEventModalData,
} from "@/components/patterns/EventParts";
import { EventMonthGrid } from "@/components/patterns/EventMonthGrid";
import { Section, Container } from "@/components/layout/Section";

const card = "rounded-pg-xl border border-pg-line bg-white shadow-pg-card";
/** "Today" for the prototype: the sample events are in July–August 2025. */
const INITIAL = parseDate("2025-07-10");

type Filter = "all" | EventCategory;
type View = "month" | "list";

const copy = eventsPage;
const monthLabel = (d: Date) => d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
const longDate = (d: Date) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

/* Events ("/mental-health-series/events"). Recipe: docs/system/pages/events.md. Copy: eventsPage in
 * src/content/events.ts. Header → toolbar (month, Today, Month/List) → type filters → EventMonthGrid or the
 * month list | sidebar (selected day, upcoming events, calendar download) → EventModal. */
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
          to={copy.backLink.to}
          className={`inline-flex items-center gap-1 text-xs font-medium text-pg-teal-dark hover:text-pg-navy`}
        >
          <ChevronLeft size={16} aria-hidden="true" />
          {copy.backLink.label}
        </Link>
        <p className={`mt-4 flex items-center gap-2 text-pg-eyebrow text-pg-teal-dark`}>
          <span className="h-[18px] w-1 rounded-full bg-pg-sage" aria-hidden="true" />
          {copy.eyebrow}
        </p>
        <h1 className={`mt-2 text-pg-h1 font-medium text-pg-navy`}>{copy.title}</h1>
        <p className={`mt-2 max-w-[640px] text-base leading-relaxed text-pg-slate`}>{copy.intro}</p>

        {/* Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToMonth(-1)}
              aria-label={copy.toolbar.previousMonth}
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
              aria-label={copy.toolbar.nextMonth}
              className="grid h-9 w-9 place-items-center rounded-pg-md border border-pg-line bg-white text-pg-teal-dark hover:bg-pg-tint-soft"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <Button variant="secondary" size="s" onClick={goToToday} className="ml-1">
              {copy.toolbar.today}
            </Button>
          </div>
          <div className="inline-flex rounded-pg-md bg-pg-tint p-1" role="group" aria-label={copy.toolbar.viewGroup}>
            {(["month", "list"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={`h-8 rounded-pg-md px-4 text-sm ${view === v ? "bg-white font-semibold text-pg-navy shadow-pg-card" : "font-medium text-pg-slate"}`}
              >
                {v === "month" ? copy.toolbar.month : copy.toolbar.list}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div
          className="mt-4 -mr-6 flex gap-2 overflow-x-auto pr-6 pb-1 md:mr-0 md:flex-wrap md:overflow-visible md:pr-0"
          role="group"
          aria-label={copy.filters.group}
        >
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
            className={chip(filter === "all")}
          >
            {copy.filters.all}
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
            <span>{copy.emptyMonth(monthLabel(month))}</span>
            <button
              type="button"
              onClick={() => goToDate(nearest.date)}
              className="font-semibold text-pg-teal-dark underline underline-offset-4"
            >
              {copy.showMonth(monthLabel(parseDate(nearest.date)))}
            </button>
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* Month view */}
          {view === "month" ? (
            <EventMonthGrid
              month={month}
              byDay={byDay}
              selected={selected}
              onSelectDay={setSelected}
              onOpenEvent={openEvent}
              label={copy.calendarLabel(monthLabel(month))}
              moreLabel={copy.more}
            />
          ) : (
            /* List view */
            <section className={`${card} p-5 md:p-6`} aria-label={copy.listLabel(monthLabel(month))}>
              {monthEvents.length === 0 ? (
                <p className="text-sm text-pg-slate">{copy.noEventsInMonth(monthLabel(month))}</p>
              ) : (
                <ol className="grid gap-4">
                  {monthEvents.map((e) => (
                    <EventListItem key={e.id} event={e} timeZone={copy.timeZone} />
                  ))}
                </ol>
              )}
            </section>
          )}

          {/* Sidebar */}
          <aside className="grid gap-4">
            {view === "month" && (
              <section className={`${card} p-5`} aria-live="polite" aria-label={copy.selectedDay.label}>
                <p className={`text-pg-eyebrow text-pg-teal-dark`}>{longDate(parseDate(selected))}</p>
                <div className="mt-2 grid gap-4">
                  {selectedEvents.length ? (
                    selectedEvents.map((e) => (
                      <EventDetail key={e.id} event={e} timeZone={copy.timeZone} location={copy.location} />
                    ))
                  ) : (
                    <p className="text-sm text-pg-slate">{copy.selectedDay.empty}</p>
                  )}
                </div>
              </section>
            )}

            <section className={`${card} p-5`} aria-labelledby="upcoming-title">
              <h2 id="upcoming-title" className={`text-base font-bold text-pg-navy`}>
                {copy.upcoming.title}
              </h2>
              {upcoming.length ? (
                <ul className="mt-4 grid gap-2">
                  {upcoming.map((e) => (
                    <li key={e.id}>
                      <UpcomingEventButton
                        event={e}
                        onOpen={(event, click) => {
                          goToDate(event.date);
                          openEvent(event, click);
                        }}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-pg-slate">{copy.upcoming.empty}</p>
              )}
              {view === "month" && (
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`mt-3 text-sm font-semibold text-pg-teal-dark hover:underline`}
                >
                  {copy.upcoming.seeList}
                </button>
              )}
            </section>

            <section className="rounded-pg-xl bg-pg-navy p-5 text-white" aria-labelledby="sync-title">
              <h2 id="sync-title" className={`text-base font-bold`}>
                {copy.sync.title}
              </h2>
              <p className="mt-1 text-sm text-pg-sage">{copy.sync.body}</p>
              <Button variant="inverse" onClick={() => downloadIcs(copy.sync.fileName, EVENTS)} className="mt-4">
                <Download size={16} aria-hidden="true" />
                {copy.sync.button}
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
