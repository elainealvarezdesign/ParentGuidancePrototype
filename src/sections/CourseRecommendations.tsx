import { useId } from "react";
import { Link } from "react-router";
import type { CourseRecommendation } from "@/content/coursePrograms";
import { cn } from "@/lib/cn";

/* CourseRecommendations (docs/system/sections/course-recommendations.md). White card at the end of a course
 * page: up to three small course tiles (thumbnail, title, lessons • length). Tiles with a `slug` link to that
 * course; the others are plain. */

export type CourseRecommendationsContent = {
  title: string;
  /** "12 lessons • 3h". */
  meta: (rec: CourseRecommendation) => string;
  items: CourseRecommendation[];
};

const tile = "flex gap-3 rounded-pg-lg border border-pg-line p-3";

export function CourseRecommendations({ content }: { content: CourseRecommendationsContent }) {
  const headingId = useId();
  const { title, meta, items } = content;

  return (
    <section aria-labelledby={headingId} className="rounded-pg-xl border border-pg-line bg-white p-8 shadow-pg-card">
      <h2 id={headingId} className="mb-5 text-pg-h3 text-pg-navy">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((rec) => {
          const body = (
            <>
              <img src={rec.image} alt="" className="h-16 w-20 shrink-0 rounded-pg-md object-cover" />
              <span className="flex flex-col justify-center gap-1">
                <span className="text-xs font-semibold text-pg-navy">{rec.title}</span>
                <span className="text-xs text-pg-slate">{meta(rec)}</span>
              </span>
            </>
          );
          return (
            <li key={rec.title}>
              {rec.slug ? (
                <Link
                  to={`/courses/${rec.slug}`}
                  className={cn(
                    tile,
                    "no-underline transition-[border-color,box-shadow] hover:border-pg-sage hover:shadow-pg-card-hover",
                  )}
                >
                  {body}
                </Link>
              ) : (
                <div className={tile}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
