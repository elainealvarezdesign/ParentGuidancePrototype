import { cn } from "@/lib/cn";

/* Filter chips (docs/system/components/filter-chips.md). A single-choice row of pill buttons that filters
 * a list. Each chip is a toggle button with aria-pressed; the group is labelled so screen readers announce
 * what is being filtered. Scrolls horizontally on small screens.
 *
 *   <FilterChips label="Filter by category" options={CATEGORIES} value={cat} onChange={setCat} />
 */

export type FilterChipsProps<T extends string> = {
  /** Accessible name of the group, e.g. "Filter by category". */
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  /** Display text per option, when it differs from the value. */
  renderLabel?: (option: T) => string;
  className?: string;
};

export function FilterChips<T extends string>({ label, options, value, onChange, renderLabel, className }: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn("flex min-w-0 items-center gap-2 overflow-x-auto py-0.5", className)}>
      {options.map((option) => {
        const selected = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option)}
            className={cn(
              "min-h-9 shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-(--pg-dur-fast)",
              selected ? "bg-pg-navy text-white" : "bg-pg-cream-dark text-pg-slate hover:bg-pg-tint hover:text-pg-navy",
            )}
          >
            {renderLabel ? renderLabel(option) : option}
          </button>
        );
      })}
    </div>
  );
}
