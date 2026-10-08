import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "./icons";

/* Pagination (docs/system/components/pagination.md). Previous / page numbers / Next inside a labelled
 * nav landmark; the current page has aria-current="page". Renders nothing for a single page. */

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** Landmark name, e.g. "Questions pages". */
  label?: string;
  className?: string;
};

export function Pagination({ page, totalPages, onChange, label = "Pagination", className }: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label={label} className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      <Button
        variant="secondary"
        size="s"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="gap-1 px-3"
      >
        <ChevronLeft size={16} aria-hidden="true" /> Previous
      </Button>
      <ul className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <li key={p}>
            <button
              type="button"
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
              aria-label={`Page ${p}`}
              className={cn(
                "h-9 w-9 rounded-pg-md text-sm font-medium transition-colors duration-(--pg-dur-fast)",
                p === page ? "bg-pg-navy text-white" : "text-pg-navy hover:bg-pg-tint-soft",
              )}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
      <Button
        variant="secondary"
        size="s"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="gap-1 px-3"
      >
        Next <ChevronRight size={16} aria-hidden="true" />
      </Button>
    </nav>
  );
}
