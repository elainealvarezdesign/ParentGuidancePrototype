import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { CourseProgram } from "@/content/coursePrograms";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight, Clock } from "@/components/ui/icons";

/* CourseSummary (docs/system/sections/course-summary.md). The overview card at the top of a course page:
 * cover | label, h1, summary, facts (lessons, length, modules), instructors and "Start course" | the course
 * outline, which pages through lessons 8 at a time for long programs. Stacks below lg. */

const OUTLINE_PAGE = 8;

export type CourseSummaryContent = Pick<
  CourseProgram,
  "slug" | "title" | "label" | "cover" | "summary" | "totalDuration" | "instructors" | "lessons" | "modules"
> & {
  labels: {
    lessons: (count: number) => string;
    modules: (count: number) => string;
    startLabel: string;
    outline: { title: string; previous: string; next: string; page: (page: number, pages: number) => string };
  };
};

function OutlineButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-pg-line text-pg-slate transition-colors hover:border-pg-teal-dark hover:text-pg-teal-dark disabled:cursor-not-allowed disabled:opacity-30"
    >
      {children}
    </button>
  );
}

export function CourseSummary({ content }: { content: CourseSummaryContent }) {
  const { slug, title, label, cover, summary, totalDuration, instructors, lessons, modules, labels } = content;
  const [outlinePage, setOutlinePage] = useState(1);
  const pages = Math.ceil(lessons.length / OUTLINE_PAGE);
  const visible = lessons.slice((outlinePage - 1) * OUTLINE_PAGE, outlinePage * OUTLINE_PAGE);

  return (
    <Reveal
      className={cn(
        "flex flex-col overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card lg:flex-row",
      )}
    >
      <div className="shrink-0 p-5">
        <img src={cover.src} alt={cover.alt} className="h-80 w-full rounded-pg-md object-cover lg:w-65" />
      </div>

      <div className="flex flex-1 flex-col gap-4 border-pg-line p-6 lg:border-r">
        <Badge tone="tint" shape="label" className="px-3 py-1">
          {label}
        </Badge>
        <h1 className="text-pg-h1 text-pg-navy">{title}</h1>
        <p className="text-sm text-pg-slate">{summary}</p>
        <p className="flex flex-wrap items-center gap-2 text-sm text-pg-slate">
          <Clock size={14} aria-hidden="true" className="text-pg-teal-dark" />
          <span>{labels.lessons(lessons.length)}</span>
          <span aria-hidden="true">•</span>
          <span>{totalDuration}</span>
          {modules && (
            <>
              <span aria-hidden="true">•</span>
              <span>{labels.modules(modules.length)}</span>
            </>
          )}
        </p>
        <ul className="flex flex-col gap-2">
          {instructors.map((i) => (
            <li key={i.name} className="flex items-center gap-2">
              <Avatar name={i.name} photo={i.photo} size="s" />
              <span className="text-sm font-semibold text-pg-navy">{i.name}</span>
              <span className="text-xs text-pg-slate">{i.credential}</span>
            </li>
          ))}
        </ul>
        <ButtonLink to={`/courses/${slug}/lesson/1`} className="mt-auto self-start">
          {labels.startLabel}
          <ChevronRight size={16} aria-hidden="true" />
        </ButtonLink>
      </div>

      <nav aria-labelledby="course-outline" className="flex w-full shrink-0 flex-col gap-3 p-5 lg:w-70">
        <h2 id="course-outline" className="text-base font-bold text-pg-navy">
          {labels.outline.title}
        </h2>
        <ol className="flex flex-col gap-2" start={visible[0]?.id}>
          {visible.map((l) => (
            <li key={l.id}>
              <Link
                to={`/courses/${slug}/lesson/${l.id}`}
                className="flex items-center gap-3 rounded-pg-md border border-pg-line bg-white px-3 py-2 no-underline transition-colors hover:border-pg-sage hover:bg-pg-cream"
              >
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pg-cream-dark text-xs font-bold text-pg-slate"
                  aria-hidden="true"
                >
                  {l.id}
                </span>
                <span className="line-clamp-2 flex-1 text-xs text-pg-slate">{l.title}</span>
              </Link>
            </li>
          ))}
        </ol>
        {pages > 1 && (
          <div className="mt-1 flex items-center justify-between border-t border-pg-line pt-2">
            <OutlineButton
              label={labels.outline.previous}
              disabled={outlinePage === 1}
              onClick={() => setOutlinePage((p) => p - 1)}
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </OutlineButton>
            <span className="text-xs text-pg-slate" aria-live="polite">
              {labels.outline.page(outlinePage, pages)}
            </span>
            <OutlineButton
              label={labels.outline.next}
              disabled={outlinePage === pages}
              onClick={() => setOutlinePage((p) => p + 1)}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </OutlineButton>
          </div>
        )}
      </nav>
    </Reveal>
  );
}
