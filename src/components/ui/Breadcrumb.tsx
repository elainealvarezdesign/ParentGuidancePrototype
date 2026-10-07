import { Link } from "react-router";
import { cn } from "@/lib/cn";
import { ChevronRight } from "./icons";

/* Breadcrumb (docs/system/components/breadcrumb.md). Thin tint bar under the navbar on detail pages
 * (answers, lessons). The last item is the current page and is not a link. Middle items can be hidden on
 * small screens with `hideOnMobile`. Render it first on the page: it clears the fixed navbar itself. */

export type Crumb = { label: string; to?: string; hideOnMobile?: boolean };

export function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mt-14 border-b border-pg-line bg-pg-tint-soft", className)}>
      <ol className="mx-auto flex h-10 max-w-pg-page items-center gap-2 px-6 text-xs">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li
              key={item.label}
              className={cn(
                "flex min-w-0 items-center gap-2",
                item.hideOnMobile && "hidden sm:flex",
                last ? "min-w-0" : "shrink-0",
              )}
            >
              {i > 0 && <ChevronRight size={14} aria-hidden="true" className="shrink-0 text-pg-slate" />}
              {last ? (
                <span aria-current="page" className="truncate font-semibold text-pg-navy">
                  {item.label}
                </span>
              ) : item.to ? (
                <Link to={item.to} className="truncate text-pg-teal-dark no-underline hover:text-pg-navy">
                  {item.label}
                </Link>
              ) : (
                <span className="truncate text-pg-teal-dark">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
