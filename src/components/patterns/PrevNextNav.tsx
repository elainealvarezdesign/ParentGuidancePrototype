import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/* PrevNextNav (docs/system/components/prev-next-nav.md). "Previous / Next" links at the end of a detail
 * page (answers, lessons). Each side is optional; an empty side keeps the other aligned. */

export type PrevNextItem = { title: string; to: string };

function Item({ item, dir }: { item: PrevNextItem; dir: "prev" | "next" }) {
  const next = dir === "next";
  return (
    <Link
      to={item.to}
      rel={next ? "next" : "prev"}
      className={cn(
        "group flex min-w-0 flex-1 items-center gap-3 rounded-pg-lg border border-pg-line bg-white p-4 no-underline transition-[border-color,box-shadow,translate] duration-(--pg-dur-fast) hover:-translate-y-0.5 hover:border-pg-sage hover:shadow-pg-card-hover",
        next && "flex-row-reverse text-right",
      )}
    >
      {next ? (
        <ChevronRight size={16} aria-hidden="true" className="shrink-0 text-pg-slate group-hover:text-pg-teal-dark" />
      ) : (
        <ChevronLeft size={16} aria-hidden="true" className="shrink-0 text-pg-slate group-hover:text-pg-teal-dark" />
      )}
      <span className="min-w-0 flex-1">
        <span className="mb-0.5 block text-pg-eyebrow text-pg-slate">{next ? "Next" : "Previous"}</span>
        <span className="block truncate text-xs font-semibold text-pg-navy">{item.title}</span>
      </span>
    </Link>
  );
}

export function PrevNextNav({
  prev,
  next,
  label = "More items",
}: {
  prev?: PrevNextItem;
  next?: PrevNextItem;
  label?: string;
}) {
  if (!prev && !next) return null;
  return (
    <nav aria-label={label} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {prev ? <Item item={prev} dir="prev" /> : <span className="hidden flex-1 sm:block" />}
      {next ? <Item item={next} dir="next" /> : <span className="hidden flex-1 sm:block" />}
    </nav>
  );
}
