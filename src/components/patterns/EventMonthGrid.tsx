import type { MouseEvent } from "react";
import { formatStart, toKey, type SeriesEvent } from "@/content/events";
import { categoryStyle } from "./EventParts";

/* EventMonthGrid (docs/system/components/event-month-grid.md). The large month calendar of the Events page:
 * weekday header, one cell per day (weeks start on Sunday). The whole cell is a button that selects the day
 * (aria-pressed, a label with the date and number of events). On desktop each day shows up to three event
 * pills that open the event pop-up; on mobile it shows colored dots. */

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const longDate = (d: Date) => d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

export type EventMonthGridProps = {
  /** First day of the month to show. */
  month: Date;
  /** Events of the visible range, grouped by "YYYY-MM-DD". */
  byDay: Map<string, SeriesEvent[]>;
  /** Selected day, "YYYY-MM-DD". */
  selected: string;
  onSelectDay: (key: string) => void;
  onOpenEvent: (event: SeriesEvent, click: MouseEvent<HTMLElement>) => void;
  /** Accessible name of the grid, e.g. "Calendar, July 2025". */
  label: string;
  /** "+2 more" under a busy day. */
  moreLabel: (count: number) => string;
};

export function EventMonthGrid({
  month,
  byDay,
  selected,
  onSelectDay,
  onOpenEvent,
  label,
  moreLabel,
}: EventMonthGridProps) {
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: month.getDay() }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
  ];
  while (cells.length % 7) cells.push(null);

  return (
    <section className="overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card" aria-label={label}>
      <div className="grid grid-cols-7 border-b border-pg-line" aria-hidden="true">
        {WEEKDAYS.map((d) => (
          <span key={d} className="py-2 text-center text-pg-eyebrow text-pg-slate">
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
          const count =
            dayEvents.length === 0 ? "no events" : `${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}`;
          return (
            <div
              key={key}
              className={`relative min-h-[52px] min-w-0 border-r border-b border-pg-tint-soft transition-colors hover:bg-pg-tint-soft lg:min-h-[118px] [&:nth-child(7n)]:border-r-0 ${isSelected ? "bg-pg-tint-soft" : "bg-white"}`}
            >
              {/* The whole cell selects the day; event pills sit above it and open the event pop-up */}
              <button
                type="button"
                onClick={() => onSelectDay(key)}
                aria-pressed={isSelected}
                aria-label={`${longDate(date)}, ${count}`}
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
                    <span key={e.id} className={`h-1.5 w-1.5 rounded-full ${categoryStyle[e.category].swatch}`} />
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
                        onSelectDay(key);
                        onOpenEvent(e, click);
                      }}
                      aria-haspopup="dialog"
                      className={`pointer-events-auto block w-full rounded-pg-md px-2 py-1 text-left text-xs leading-tight transition-[filter] hover:brightness-110 ${categoryStyle[e.category].pill}`}
                    >
                      <span className="block text-xs font-semibold opacity-90">{formatStart(e)}</span>
                      <span className="line-clamp-2 font-medium">{e.title}</span>
                    </button>
                  ))}
                  {dayEvents.length > 3 && (
                    <span className="text-xs font-semibold text-pg-teal-dark">{moreLabel(dayEvents.length - 3)}</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
