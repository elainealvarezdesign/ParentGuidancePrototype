import { useState } from "react";
import { Link, useParams } from "react-router";
import { getProgram, type CourseProgram } from "@/content/coursePrograms";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RichText } from "@/components/ui/RichText";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight, Clock } from "@/components/ui/icons";
import NotFoundPage from "./NotFoundPage";

/* Course overview ("/courses/:courseSlug"). One template for every course. Recipe: docs/system/pages/course.md.
 * Breadcrumb → overview card [cover | summary, facts, instructors, Start | outline] → About → You may also like.
 * The outline pages through lessons 8 at a time for long programs. */

const OUTLINE_PAGE = 8;
const card = "rounded-pg-xl border border-pg-line bg-white shadow-pg-card";

export default function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const program = getProgram(courseSlug);
  if (!program)
    return (
      <NotFoundPage
        eyebrow="Course not found"
        title="We couldn't find that course"
        body="It may have been renamed or retired."
        actions={[{ label: "Browse courses", to: "/on-demand-courses" }]}
      />
    );
  return <CourseOverview key={program.slug} program={program} />;
}

function CourseOverview({ program }: { program: CourseProgram }) {
  const [outlinePage, setOutlinePage] = useState(1);
  const { slug, title, label, cover, summary, totalDuration, instructors, about, recommendations, lessons, modules } =
    program;
  const pages = Math.ceil(lessons.length / OUTLINE_PAGE);
  const visible = lessons.slice((outlinePage - 1) * OUTLINE_PAGE, outlinePage * OUTLINE_PAGE);
  const withBios = instructors.filter((i) => i.bio);

  return (
    <>
      <Breadcrumb items={[{ label: "Courses", to: "/on-demand-courses" }, { label: title }]} />

      <div className="mx-auto flex max-w-pg-content flex-col gap-4 px-6 pt-8 pb-12">
        <Reveal className={cn(card, "flex flex-col overflow-hidden lg:flex-row")}>
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
              <span>{lessons.length} lessons</span>
              <span aria-hidden="true">•</span>
              <span>{totalDuration}</span>
              {modules && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{modules.length} modules</span>
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
              Start course
              <ChevronRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>

          <nav aria-labelledby="course-outline" className="flex w-full shrink-0 flex-col gap-3 p-5 lg:w-70">
            <h2 id="course-outline" className="text-base font-bold text-pg-navy">
              Course outline
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
                  label="Previous lessons"
                  disabled={outlinePage === 1}
                  onClick={() => setOutlinePage((p) => p - 1)}
                >
                  <ChevronLeft size={16} aria-hidden="true" />
                </OutlineButton>
                <span className="text-xs text-pg-slate" aria-live="polite">
                  {outlinePage} of {pages}
                </span>
                <OutlineButton
                  label="Next lessons"
                  disabled={outlinePage === pages}
                  onClick={() => setOutlinePage((p) => p + 1)}
                >
                  <ChevronRight size={16} aria-hidden="true" />
                </OutlineButton>
              </div>
            )}
          </nav>
        </Reveal>

        <section aria-labelledby="about-course" className={cn(card, "p-8")}>
          <h2 id="about-course" className="mb-4 text-pg-h3 text-pg-navy">
            About this course
          </h2>
          <div className="flex flex-col gap-3 text-sm text-pg-slate [&_strong]:text-pg-navy">
            {about.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>
          {withBios.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-5 border-t border-pg-line pt-6 sm:grid-cols-3">
              {withBios.map((i) => (
                <li key={i.name} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar name={i.name} photo={i.photo} size="l" />
                    <div>
                      <p className="text-sm font-semibold text-pg-navy">{i.name}</p>
                      <p className="text-xs text-pg-teal-dark">{i.credential}</p>
                    </div>
                  </div>
                  <p className="text-xs text-pg-slate">{i.bio}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="also-like" className={cn(card, "p-8")}>
          <h2 id="also-like" className="mb-5 text-pg-h3 text-pg-navy">
            You may also like
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {recommendations.map((rec) => {
              const body = (
                <>
                  <img src={rec.image} alt="" className="h-16 w-20 shrink-0 rounded-pg-md object-cover" />
                  <span className="flex flex-col justify-center gap-1">
                    <span className="text-xs font-semibold text-pg-navy">{rec.title}</span>
                    <span className="text-xs text-pg-slate">
                      {rec.lessons} lessons • {rec.duration}
                    </span>
                  </span>
                </>
              );
              const box = "flex gap-3 rounded-pg-lg border border-pg-line p-3";
              return (
                <li key={rec.title}>
                  {rec.slug ? (
                    <Link
                      to={`/courses/${rec.slug}`}
                      className={cn(
                        box,
                        "no-underline transition-[border-color,box-shadow] hover:border-pg-sage hover:shadow-pg-card-hover",
                      )}
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className={box}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

function OutlineButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
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
