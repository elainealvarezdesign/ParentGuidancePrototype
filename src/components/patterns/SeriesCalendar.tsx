import { useCallback, useMemo, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { formatStart, toKey, type SeriesEvent } from "@/content/events";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { EventModal } from "./EventModal";
import { categoryStyle, toEventModalData } from "./EventParts";
import { DURATION } from "@/lib/motion";

/* SeriesCalendar (docs/system/components/series-calendar.md). Compact Day / Week / Month calendar on the
 * Mental Health Series page. Event pills are buttons that open EventModal next to them. The full,
 * filterable calendar is the Events page; this one previews it. Weeks start on Sunday. */

type View = "day" | "week" | "month";
const VIEWS: View[] = ["day", "week", "month"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fmt = (d: Date, o: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en-US", o);

function weekStart(d: Date) {
  const s = new Date(d);
  s.setDate(s.getDate() - s.getDay());
  return s;
}

function addDays(d: Date, n: number) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

type Open = { event: SeriesEvent; anchor: DOMRect } | null;

export function SeriesCalendar({
  events,
  initialDate,
}: {
  events: SeriesEvent[];
  /** First date shown. */ initialDate: Date;
}) {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(initialDate);
  const [open, setOpen] = useState<Open>(null);
  const close = useCallback(() => setOpen(null), []);

  const byDay = useMemo(() => {
    const map = new Map<string, SeriesEvent[]>();
    events.forEach((e) => map.set(e.date, [...(map.get(e.date) ?? []), e]));
    return map;
  }, [events]);
  const on = (d: Date) => byDay.get(toKey(d)) ?? [];
  const todayKey = toKey(new Date());

  function move(dir: 1 | -1) {
    const d = new Date(date);
    if (view === "month") d.setMonth(d.getMonth() + dir);
    else d.setDate(d.getDate() + (view === "week" ? 7 : 1) * dir);
    setDate(d);
  }

  const label =
    view === "month"
      ? fmt(date, { month: "long", year: "numeric" })
      : view === "week"
        ? `${fmt(weekStart(date), { month: "long", day: "numeric" })} – ${fmt(addDays(weekStart(date), 6), { month: "long", day: "numeric", year: "numeric" })}`
        : fmt(date, { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  const pill = (e: SeriesEvent, compact = false) => (
    <button
      key={e.id}
      type="button"
      aria-haspopup="dialog"
      onClick={(click: MouseEvent<HTMLButtonElement>) => {
        const anchor = click.currentTarget.getBoundingClientRect();
        setOpen((prev) => (prev?.event.id === e.id ? null : { event: e, anchor }));
      }}
      className={cn(
        "block w-full truncate rounded-pg-md px-2 text-left text-xs font-medium transition-[filter] hover:brightness-110",
        compact ? "py-0.5" : "py-1",
        categoryStyle[e.category].pill,
        open?.event.id === e.id && "ring-2 ring-pg-navy ring-offset-1",
      )}
    >
      {!compact && <span className="mr-1 font-normal">{formatStart(e)}</span>}
      {e.title}
    </button>
  );

  const dayNumber = (d: Date, size: "s" | "m") => (
    <span
      className={cn(
        "grid place-items-center rounded-full font-medium",
        size === "s" ? "h-6 w-6 text-xs" : "h-7 w-7 text-sm font-semibold",
        toKey(d) === todayKey ? "bg-pg-teal-dark text-white" : size === "s" ? "text-pg-slate" : "text-pg-navy",
      )}
    >
      {d.getDate()}
    </span>
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <NavButton label={`Previous ${view}`} onClick={() => move(-1)}>
            <ChevronLeft size={16} aria-hidden="true" />
          </NavButton>
          <h3 className="text-center text-sm font-semibold text-pg-navy sm:min-w-44" aria-live="polite">
            {label}
          </h3>
          <NavButton label={`Next ${view}`} onClick={() => move(1)}>
            <ChevronRight size={16} aria-hidden="true" />
          </NavButton>
        </div>
        <div
          role="group"
          aria-label="Calendar view"
          className="flex items-center gap-0.5 rounded-pg-md bg-pg-tint-soft p-0.5"
        >
          {VIEWS.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={cn(
                "rounded-pg-md px-3 py-2 text-xs font-medium capitalize transition-all",
                view === v ? "bg-white text-pg-navy shadow-pg-card" : "text-pg-slate",
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={`${view}-${toKey(date)}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.fast }}
        className="overflow-hidden rounded-pg-xl bg-white shadow-pg-card"
      >
        {view === "month" && (
          <MonthGrid
            date={date}
            render={(d) => (
              <>
                {dayNumber(d, "s")}
                {on(d).map((e) => pill(e, true))}
              </>
            )}
          />
        )}
        {view === "week" && (
          <div className="grid grid-cols-7">
            {Array.from({ length: 7 }, (_, i) => addDays(weekStart(date), i)).map((d) => (
              <div
                key={toKey(d)}
                className="flex min-h-50 flex-col gap-2 border-r border-pg-tint-soft p-2 last:border-r-0"
              >
                <span className="flex flex-col items-center gap-1 pb-1">
                  <span className="text-pg-eyebrow text-pg-slate">{WEEKDAYS[d.getDay()]}</span>
                  {dayNumber(d, "m")}
                </span>
                {on(d).map((e) => pill(e))}
              </div>
            ))}
          </div>
        )}
        {view === "day" && (
          <div>
            <div className="border-b border-pg-tint-soft px-5 py-4">
              <p className="text-sm font-semibold text-pg-navy">{fmt(date, { weekday: "long" })}</p>
              <p className="mt-0.5 text-xs text-pg-slate">
                {fmt(date, { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
            <ul className="flex min-h-50 flex-col gap-3 p-5">
              {on(date).length === 0 && (
                <li className="mt-8 text-center text-sm text-pg-slate">No events scheduled for this day.</li>
              )}
              {on(date).map((e) => (
                <li key={e.id} className="flex items-start gap-4">
                  <span className="w-16 shrink-0 text-right text-xs font-medium text-pg-teal-dark">
                    {formatStart(e)}
                  </span>
                  {pill(e)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      <EventModal event={open ? toEventModalData(open.event) : null} anchor={open?.anchor ?? null} onClose={close} />
    </div>
  );
}

function MonthGrid({ date, render }: { date: Date; render: (d: Date) => React.ReactNode }) {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: first.getDay() }, () => null),
    ...Array.from({ length: days }, (_, i) => new Date(first.getFullYear(), first.getMonth(), i + 1)),
  ];
  while (cells.length % 7) cells.push(null);
  return (
    <>
      <div className="grid grid-cols-7 border-b border-pg-tint-soft" aria-hidden="true">
        {WEEKDAYS.map((d) => (
          <span key={d} className="py-2 text-center text-pg-eyebrow text-pg-slate">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => (
          <div
            key={d ? toKey(d) : `blank-${i}`}
            className={cn(
              "flex min-h-20 min-w-0 flex-col gap-1 border-r border-b border-pg-tint-soft p-2 [&:nth-child(7n)]:border-r-0",
              !d && "bg-pg-tint-soft",
            )}
          >
            {d && render(d)}
          </div>
        ))}
      </div>
    </>
  );
}

function NavButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-pg-md border border-pg-line text-pg-navy transition-colors hover:bg-pg-cream"
    >
      {children}
    </button>
  );
}
