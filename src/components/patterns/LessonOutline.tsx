import { Link } from "react-router";
import type { Lesson } from "@/content/coursePrograms";
import { cn } from "@/lib/cn";
import { CheckCircle2, ChevronLeft, Play } from "@/components/ui/icons";

/* LessonOutline (docs/system/components/lesson-outline.md). Sidebar list of a course's lessons with a
 * completion bar. The current lesson is marked with aria-current; finished lessons show a check. */

export function LessonOutline({
  lessons,
  currentId,
  completed,
  lessonHref,
  courseHref,
}: {
  lessons: Lesson[];
  currentId: number;
  completed: ReadonlySet<number>;
  lessonHref: (id: number) => string;
  courseHref: string;
}) {
  const done = lessons.filter((l) => completed.has(l.id)).length;
  return (
    <nav
      aria-labelledby="lesson-outline"
      className="overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card lg:sticky lg:top-20"
    >
      <div className="border-b border-pg-line p-4">
        <h2 id="lesson-outline" className="text-sm font-bold text-pg-navy">
          Course outline
        </h2>
        <div className="mt-2 flex items-center gap-2">
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-pg-line"
            role="progressbar"
            aria-label="Lessons completed"
            aria-valuemin={0}
            aria-valuemax={lessons.length}
            aria-valuenow={done}
          >
            <div
              className="h-full rounded-full bg-pg-teal-dark transition-all duration-(--pg-dur-reveal)"
              style={{ width: `${(done / lessons.length) * 100}%` }}
            />
          </div>
          <span className="shrink-0 text-xs text-pg-slate" aria-hidden="true">
            {done}/{lessons.length}
          </span>
        </div>
      </div>

      <ol className="max-h-[60vh] divide-y divide-pg-tint-soft overflow-y-auto">
        {lessons.map((l) => {
          const active = l.id === currentId;
          const isDone = completed.has(l.id);
          return (
            <li key={l.id}>
              <Link
                to={lessonHref(l.id)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3 text-left no-underline transition-colors",
                  active ? "bg-pg-tint" : "hover:bg-pg-cream",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold",
                    isDone
                      ? "bg-pg-teal-dark text-white"
                      : active
                        ? "bg-pg-navy text-white"
                        : "bg-pg-cream-dark text-pg-slate",
                  )}
                >
                  {isDone ? <CheckCircle2 size={14} /> : l.id}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn("block truncate text-xs", active ? "font-semibold text-pg-navy" : "text-pg-slate")}
                  >
                    {l.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-pg-slate">
                    {l.duration}
                    {isDone && <span className="sr-only">, completed</span>}
                  </span>
                </span>
                {active && <Play size={12} aria-hidden="true" className="shrink-0 text-pg-teal-dark" />}
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-pg-line p-4">
        <Link
          to={courseHref}
          className="flex items-center gap-1 text-xs text-pg-teal-dark no-underline hover:underline"
        >
          <ChevronLeft size={14} aria-hidden="true" />
          Course overview
        </Link>
      </div>
    </nav>
  );
}
