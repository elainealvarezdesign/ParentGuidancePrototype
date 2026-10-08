import { useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Tabs (docs/system/components/tabs.md), W3C APG tabs with automatic activation: Left/Right/Home/End move
 * between tabs, only the selected tab is in the Tab order, each panel is labelled by its tab.
 *
 *   <Tabs label="Lesson content" value={tab} onChange={setTab}
 *     tabs={[{ id: "overview", label: "Overview", icon: <BookOpen />, panel: <p>…</p> }, …]} />
 */

export type TabItem<T extends string> = { id: T; label: string; icon?: ReactNode; panel: ReactNode };

export type TabsProps<T extends string> = {
  /** Accessible name of the tab list. */
  label: string;
  tabs: TabItem<T>[];
  value: T;
  onChange: (id: T) => void;
  className?: string;
};

export function Tabs<T extends string>({ label, tabs, value, onChange, className }: TabsProps<T>) {
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const index = Math.max(
    0,
    tabs.findIndex((t) => t.id === value),
  );

  function onKeyDown(e: React.KeyboardEvent) {
    const last = tabs.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    onChange(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className={cn("overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card", className)}>
      <div role="tablist" aria-label={label} className="flex border-b border-pg-line">
        {tabs.map((tab, i) => {
          const selected = i === index;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`${base}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${base}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={onKeyDown}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 border-b-2 px-2 py-4 text-xs font-semibold whitespace-nowrap transition-colors sm:flex-none sm:px-5 [&_svg]:size-3.5",
                selected
                  ? "border-pg-teal-dark text-pg-teal-dark"
                  : "border-transparent text-pg-slate hover:text-pg-navy",
              )}
            >
              {tab.icon && <span aria-hidden="true">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          id={`${base}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${tab.id}`}
          hidden={i !== index}
          tabIndex={0}
          className="p-6 outline-none focus-visible:ring-2 focus-visible:ring-pg-teal-dark focus-visible:ring-inset"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
