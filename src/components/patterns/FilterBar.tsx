import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* FilterBar (docs/system/components/filter-bar.md). The sticky white toolbar above a filterable list.
 * It only lays out its slots; the controls are the ui components:
 *
 *   <FilterBar
 *     search={<SearchField label="Search questions" … />}
 *     filters={<FilterChips label="Filter by category" … />}
 *     sort={<Select size="compact" aria-label="Sort questions">…</Select>}
 *   />
 *
 * On mobile the filters wrap to their own row under search and sort. */

export function FilterBar({
  search,
  filters,
  sort,
  sticky = true,
  className,
}: {
  search?: ReactNode;
  filters?: ReactNode;
  sort?: ReactNode;
  sticky?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("z-30 border-y border-pg-cream-dark bg-white shadow-pg-card", sticky && "sticky top-14", className)}
    >
      <div className="mx-auto flex max-w-pg-page flex-wrap items-center gap-3 px-6 py-3 md:flex-nowrap md:gap-4 md:px-10">
        {search && <div className="min-w-0 flex-1 md:w-64 md:flex-none">{search}</div>}
        {filters && <div className="order-last min-w-0 flex-1 basis-full md:order-none md:basis-auto">{filters}</div>}
        {sort && <div className="shrink-0">{sort}</div>}
      </div>
    </div>
  );
}
