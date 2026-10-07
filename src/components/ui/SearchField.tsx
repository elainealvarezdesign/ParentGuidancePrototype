import { forwardRef, useId, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Search, X } from "./icons";

/* Search input with a permanent accessible name, a search icon and a named clear button
 * (audit H03, H05). Two looks:
 * - "toolbar": compact, cream background — filter bars above lists.
 * - "hero":    large white pill with a submit button — home hero.
 *
 *   <SearchField label="Search questions" value={q} onValueChange={setQ} placeholder="Search questions…" />
 */

export type SearchFieldProps = Omit<ComponentPropsWithoutRef<"input">, "value" | "onChange" | "type" | "size"> & {
  /** Accessible name (also shown to screen readers only). Required: placeholders are not labels. */
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  variant?: "toolbar" | "hero";
  /** Optional trailing element, e.g. a submit <Button> in the hero variant. */
  action?: ReactNode;
  /** Wrapper class (width, layout). */
  className?: string;
};

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField(
  { label, value, onValueChange, variant = "toolbar", action, className, id, ...props },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? `search-${autoId}`;
  const hero = variant === "hero";

  return (
    <div
      role="search"
      className={cn(
        "relative flex items-center",
        hero
          ? "gap-3 rounded-pg-2xl bg-white py-2 pr-2 pl-5 shadow-pg-card transition-shadow duration-(--pg-dur-fast) focus-within:ring-2 focus-within:ring-pg-teal-dark md:px-6 md:py-3"
          : "min-w-0",
        className,
      )}
    >
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <Search
        size={hero ? 20 : 16}
        aria-hidden="true"
        className={cn(
          "shrink-0 text-pg-slate",
          !hero && "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2",
        )}
      />
      <input
        ref={ref}
        id={inputId}
        type="search"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={cn(
          "min-w-0 flex-1 text-sm text-pg-navy outline-none placeholder:text-pg-slate [&::-webkit-search-cancel-button]:hidden",
          hero
            ? "bg-transparent"
            : "w-full rounded-pg-md bg-pg-cream py-2 pr-9 pl-9 focus-visible:ring-2 focus-visible:ring-pg-teal-dark",
        )}
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={() => onValueChange("")}
          aria-label="Clear search"
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-pg-md text-pg-slate transition-colors hover:text-pg-navy",
            !hero && "absolute top-1/2 right-1 -translate-y-1/2",
          )}
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
      {action}
    </div>
  );
});
