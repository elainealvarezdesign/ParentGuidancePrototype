import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { CalendarPlus, ChevronLeft, ChevronRight, Clock, Download, MapPin } from "lucide-react";
import {
  CATEGORIES,
  EVENTS,
  downloadIcs,
  formatStart,
  formatTimeRange,
  parseDate,
  toKey,
  type EventCategory,
  type SeriesEvent,
} from "./mhs/events";

const font = "font-['Poppins',sans-serif]";
const card = "rounded-2xl border border-[#dee8e9] bg-white shadow-[0_8px_24px_rgba(28,50,67,0.06)]";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const INITIAL = parseDate("2025-07-10");

type Filter = "all" | EventCategory;
type View = "month" | "list";

const monthLabel = (d: Date) => d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
const longDate = (d: Date) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
const byDateTime = (a: SeriesEvent, b: SeriesEvent) => (a.date + (a.start ?? "00:00")).localeCompare(b.date + (b.start ?? "00:00"));

function CategoryTag({ category }: { category: EventCategory }) {
  return <span className={`${font} inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${CATEGORIES[category].pill}`}>{CATEGORIES[category].label}</span>;
}

function DateBlock({ date, size = "md" }: { date: Date; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-11 w-11" : "h-14 w-14";
  return (
    <div className={`${font} ${box} flex shrink-0 flex-col items-center justify-center rounded-xl bg-[#eaf1f1] leading-none text-[#406064]`} aria-hidden="true">
      <span className="text-[10px] font-semibold uppercase tracking-[0.08em]">{date.toLocaleDateString("en-US", { month: "short" })}</span>
      <span className={`${size === "sm" ? "text-[17px]" : "text-xl"} mt-0.5 font-bold text-[#1c3243]`}>{date.getDate()}</span>
    </div>
  );
}

function EventActions({ event }: { event: SeriesEvent }) {
  const spanish = event.language === "Español";
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <a href="#" className={`${font} inline-flex min-h-10 items-center rounded-lg bg-[#59797d] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#406064]`} lang={spanish ? "es" : undefined}>
        {spanish ? "Registrarse" : "Register"}
      </a>
      <button
        type="button"
        onClick={() => downloadIcs(`${event.id}.ics`, [event])}
        className={`${font} inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[#59797d] bg-white px-4 text-[13px] font-semibold text-[#406064] transition-colors hover:bg-[#eaf1f1]`}
      >
        <CalendarPlus size={16} aria-hidden="true" />
        Add to calendar
      </button>
    </div>
  );
}

function EventDetail({ event }: { event: SeriesEvent }) {
  return (
    <article className="border-t border-[#dee8e9] pt-4 first:border-t-0 first:pt-0" lang={event.language === "Español" ? "es" : undefined}>
      <h3 className={`${font} text-lg font-bold leading-snug text-[#1c3243]`}>{event.title}</h3>
      <ul className={`${font} mt-2 grid gap-1.5 text-[13px] text-[#435766]`}>
        <li className="flex items-center gap-2"><Clock size={16} className="shrink-0 text-[#406064]" aria-hidden="true" />{formatTimeRange(event)}{event.start ? " CT" : ""}</li>
        <li className="flex items-center gap-2"><MapPin size={16} className="shrink-0 text-[#406064]" aria-hidden="true" />Online</li>
      </ul>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <CategoryTag category={event.category} />
        {event.language && <span className={`${font} inline-flex rounded-full bg-[#f0edeb] px-2 py-0.5 text-[11px] font-semibold text-[#1c3243]`}>{event.language}</span>}
      </div>
      <p className={`${font} mt-3 text-[13px] leading-relaxed text-[#435766]`}>{event.description}</p>
      <EventActions event={event} />
    </article>
  );
}

export default function MentalHealthEventsPage() {
  const [month, setMonth] = useState(new Date(INITIAL.getFullYear(), INITIAL.getMonth(), 1));
  const [selected, setSelected] = useState(toKey(INITIAL));
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("month");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const events = useMemo(() => EVENTS.filter((e) => filter === "all" || e.category === filter).sort(byDateTime), [filter]);
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
  const upcoming = events.filter((e) => e.date > selected).slice(0, 4);

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
  const nearest = monthEvents.length === 0 && events.length
    ? events.reduce((best, e) => (Math.abs(parseDate(e.date).getTime() - month.getTime()) < Math.abs(parseDate(best.date).getTime() - month.getTime()) ? e : best))
    : undefined;

  const chip = (active: boolean) =>
    `${font} inline-flex h-9 shrink-0 items-center gap-2 rounded-full border px-3.5 text-[13px] font-medium transition-colors ${
      active ? "border-[#1c3243] bg-[#1c3243] text-white" : "border-[#dee8e9] bg-white text-[#1c3243] hover:bg-[#f0f6f6]"
    }`;

  return (
    <main className="bg-[#f9f4f1] px-6 pb-20 pt-20 md:px-10 md:pt-24 lg:px-14">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <Link to="/mental-health-series" className={`${font} inline-flex items-center gap-1 text-xs font-medium text-[#406064] hover:text-[#1c3243]`}>
          <ChevronLeft size={16} aria-hidden="true" />
          Mental Health Series
        </Link>
        <p className={`${font} mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#406064]`}>
          <span className="h-[18px] w-1 rounded-full bg-[#90b3b6]" aria-hidden="true" />
          Events
        </p>
        <h1 className={`${font} mt-2 text-[28px] font-medium leading-[1.15] text-[#1c3243] md:text-[40px]`}>Live sessions &amp; events</h1>
        <p className={`${font} mt-2 max-w-[640px] text-base leading-relaxed text-[#435766]`}>
          Join free live Q&amp;As, workshops and support groups with licensed therapists. All times are shown in Central Time (CT).
        </p>

        {/* Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => goToMonth(-1)} aria-label="Previous month" className="grid h-9 w-9 place-items-center rounded-lg border border-[#dee8e9] bg-white text-[#406064] hover:bg-[#f0f6f6]">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <h2 className={`${font} min-w-[150px] text-center text-xl font-bold text-[#1c3243] md:text-2xl`} aria-live="polite">{monthLabel(month)}</h2>
            <button type="button" onClick={() => goToMonth(1)} aria-label="Next month" className="grid h-9 w-9 place-items-center rounded-lg border border-[#dee8e9] bg-white text-[#406064] hover:bg-[#f0f6f6]">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={goToToday} className={`${font} ml-1 h-9 rounded-lg border border-[#59797d] bg-white px-3.5 text-[13px] font-semibold text-[#406064] hover:bg-[#eaf1f1]`}>
              Today
            </button>
          </div>
          <div className="inline-flex rounded-[10px] bg-[#eaf1f1] p-[3px]" role="group" aria-label="Calendar view">
            {(["month", "list"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={`${font} h-8 rounded-lg px-3.5 text-[13px] ${view === v ? "bg-white font-semibold text-[#1c3243] shadow-[0_1px_3px_rgba(28,50,67,0.12)]" : "font-medium text-[#435766]"}`}
              >
                {v === "month" ? "Month" : "List"}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="-mr-6 mt-4 flex gap-2 overflow-x-auto pb-1 pr-6 md:mr-0 md:flex-wrap md:overflow-visible md:pr-0" role="group" aria-label="Filter by event type">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={chip(filter === "all")}>All events</button>
          {(Object.keys(CATEGORIES) as EventCategory[]).map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={chip(filter === c)}>
              <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: CATEGORIES[c].swatch }} aria-hidden="true" />
              {CATEGORIES[c].label}
            </button>
          ))}
        </div>

        {nearest && (
          <div className={`${font} mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#dee8e9] bg-white px-4 py-3 text-sm text-[#435766]`}>
            <span>No events scheduled in {monthLabel(month)}.</span>
            <button type="button" onClick={() => goToDate(nearest.date)} className="font-semibold text-[#406064] underline underline-offset-4">
              Show {monthLabel(parseDate(nearest.date))}
            </button>
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* Month view */}
          {view === "month" ? (
            <section className={`${card} overflow-hidden`} aria-label={`Calendar, ${monthLabel(month)}`}>
              <div className="grid grid-cols-7 border-b border-[#dee8e9]" aria-hidden="true">
                {WEEKDAYS.map((d) => (
                  <span key={d} className={`${font} py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.06em] text-[#435766] md:text-[11px] md:tracking-[0.1em]`}>{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {cells.map((date, i) => {
                  if (!date) {
                    return <div key={`blank-${i}`} className="min-h-[52px] border-b border-r border-[#eef3f3] bg-[repeating-linear-gradient(135deg,#f9f4f1_0_6px,#f4efec_6px_12px)] lg:min-h-[118px] [&:nth-child(7n)]:border-r-0" aria-hidden="true" />;
                  }
                  const key = toKey(date);
                  const dayEvents = byDay.get(key) ?? [];
                  const isSelected = key === selected;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelected(key)}
                      aria-pressed={isSelected}
                      aria-label={`${longDate(date)}, ${dayEvents.length === 0 ? "no events" : `${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}`}`}
                      className={`flex min-h-[52px] min-w-0 flex-col items-center gap-1 border-b border-r border-[#eef3f3] p-1 text-left transition-colors hover:bg-[#f0f6f6] lg:min-h-[118px] lg:items-stretch lg:gap-1.5 lg:p-2 [&:nth-child(7n)]:border-r-0 ${isSelected ? "bg-[#f0f6f6]" : "bg-white"}`}
                    >
                      <span className={`${font} grid h-7 w-7 place-items-center rounded-full text-[13px] font-semibold ${isSelected ? "bg-[#59797d] text-white" : "text-[#1c3243]"}`}>
                        {date.getDate()}
                      </span>
                      {/* Desktop: event pills */}
                      <span className="hidden flex-col gap-1 lg:flex">
                        {dayEvents.slice(0, 3).map((e) => (
                          <span key={e.id} className={`${font} block rounded-md px-1.5 py-1 text-[11.5px] leading-tight ${CATEGORIES[e.category].pill}`}>
                            <span className="block text-[10.5px] font-semibold opacity-90">{formatStart(e)}</span>
                            <span className="line-clamp-2 font-medium">{e.title}</span>
                          </span>
                        ))}
                        {dayEvents.length > 3 && <span className={`${font} text-[11px] font-semibold text-[#406064]`}>+{dayEvents.length - 3} more</span>}
                      </span>
                      {/* Mobile: dots */}
                      <span className="flex gap-[3px] lg:hidden" aria-hidden="true">
                        {dayEvents.slice(0, 3).map((e) => (
                          <span key={e.id} className="h-1.5 w-1.5 rounded-full" style={{ background: CATEGORIES[e.category].swatch }} />
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ) : (
            /* List view */
            <section className={`${card} p-5 md:p-6`} aria-label={`Events in ${monthLabel(month)}`}>
              {monthEvents.length === 0 ? (
                <p className={`${font} text-sm text-[#435766]`}>No events in {monthLabel(month)}.</p>
              ) : (
                <ol className="grid gap-4">
                  {monthEvents.map((e) => (
                    <li key={e.id} className="flex gap-4 rounded-xl border border-[#eef3f3] p-4" lang={e.language === "Español" ? "es" : undefined}>
                      <DateBlock date={parseDate(e.date)} />
                      <div className="min-w-0 flex-1">
                        <p className={`${font} text-xs text-[#435766]`}>{parseDate(e.date).toLocaleDateString("en-US", { weekday: "long" })} · {formatTimeRange(e)}{e.start ? " CT" : ""}</p>
                        <h3 className={`${font} mt-0.5 text-base font-bold leading-snug text-[#1c3243]`}>{e.title}</h3>
                        <p className={`${font} mt-1 text-[13px] leading-relaxed text-[#435766]`}>{e.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <CategoryTag category={e.category} />
                          {e.language && <span className={`${font} inline-flex rounded-full bg-[#f0edeb] px-2 py-0.5 text-[11px] font-semibold text-[#1c3243]`}>{e.language}</span>}
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
                <p className={`${font} text-[11px] font-semibold uppercase tracking-[0.12em] text-[#406064]`}>{longDate(parseDate(selected))}</p>
                <div className="mt-2 grid gap-4">
                  {selectedEvents.length ? (
                    selectedEvents.map((e) => <EventDetail key={e.id} event={e} />)
                  ) : (
                    <p className={`${font} text-sm text-[#435766]`}>No events on this day.</p>
                  )}
                </div>
              </section>
            )}

            <section className={`${card} p-5`} aria-labelledby="upcoming-title">
              <h2 id="upcoming-title" className={`${font} text-base font-bold text-[#1c3243]`}>Upcoming events</h2>
              {upcoming.length ? (
                <ul className="mt-3.5 grid gap-2.5">
                  {upcoming.map((e) => (
                    <li key={e.id}>
                      <button
                        type="button"
                        onClick={() => { goToDate(e.date); setView("month"); }}
                        className="relative flex w-full gap-3 rounded-xl border border-[#eef3f3] py-2.5 pl-3.5 pr-3 text-left transition-colors hover:bg-[#f0f6f6]"
                      >
                        <span className="absolute bottom-2.5 left-0 top-2.5 w-[3px] rounded" style={{ background: CATEGORIES[e.category].swatch }} aria-hidden="true" />
                        <DateBlock date={parseDate(e.date)} size="sm" />
                        <span className="min-w-0">
                          <span className={`${font} block text-[13px] font-semibold leading-snug text-[#1c3243]`}>{e.title}</span>
                          <span className={`${font} mt-0.5 block text-xs text-[#435766]`}>{parseDate(e.date).toLocaleDateString("en-US", { weekday: "short" })} · {formatTimeRange(e)}</span>
                          <span className="mt-1.5 block"><CategoryTag category={e.category} /></span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`${font} mt-3 text-sm text-[#435766]`}>No more events scheduled.</p>
              )}
              {view === "month" && (
                <button type="button" onClick={() => setView("list")} className={`${font} mt-3 text-[13px] font-semibold text-[#406064] hover:underline`}>
                  See all in list view →
                </button>
              )}
            </section>

            <section className="rounded-2xl bg-[#1c3243] p-5 text-white" aria-labelledby="sync-title">
              <h2 id="sync-title" className={`${font} text-base font-bold`}>Never miss a session</h2>
              <p className={`${font} mt-1 text-[13px] text-[#90b3b6]`}>Add every Parent Guidance event to Google, Outlook or Apple Calendar.</p>
              <button
                type="button"
                onClick={() => downloadIcs("parent-guidance-events.ics", EVENTS)}
                className={`${font} mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 text-[13px] font-semibold text-[#1c3243] transition-colors hover:bg-[#f9f4f1]`}
              >
                <Download size={16} aria-hidden="true" />
                Download calendar (.ics)
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
