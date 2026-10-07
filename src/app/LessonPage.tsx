import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getProgram, type CourseProgram, type Lesson } from "@/content/coursePrograms";
import { LessonOutline } from "@/components/patterns/LessonOutline";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaPlayer } from "@/components/ui/MediaPlayer";
import { Tabs } from "@/components/ui/Tabs";
import { BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Circle, FileText, Paperclip } from "@/components/ui/icons";
import NotFoundPage from "./NotFoundPage";

/* Lesson ("/courses/:courseSlug/lesson/:lessonId"). One template for every course.
 * Recipe: docs/system/pages/lesson.md.
 * Breadcrumb → [lesson header, MediaPlayer, Tabs (overview, takeaways, resources) | LessonOutline] → lesson nav.
 * Unknown course or lesson → not found (M04). The player is keyed by lesson so it resets (M03). */

type Tab = "overview" | "takeaways" | "resources";

export default function LessonPage() {
  const { courseSlug, lessonId } = useParams<{ courseSlug: string; lessonId: string }>();
  const program = getProgram(courseSlug);
  const lesson = program?.lessons.find((l) => l.id === Number(lessonId));
  if (!program || !lesson)
    return (
      <NotFoundPage
        eyebrow="Lesson not found"
        title="We couldn't find that lesson"
        body="The course may have changed, or the link may be incomplete."
        actions={[
          {
            label: program ? "Back to the course" : "Browse courses",
            to: program ? `/courses/${program.slug}` : "/on-demand-courses",
          },
        ]}
      />
    );
  return <LessonView key={program.slug} program={program} lesson={lesson} />;
}

function LessonView({ program, lesson }: { program: CourseProgram; lesson: Lesson }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("overview");
  // Prototype: completion lives in memory for the visit. Production stores it per user.
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const { lessons } = program;
  const index = lessons.indexOf(lesson);
  const prev = lessons[index - 1];
  const next = lessons[index + 1];
  const courseHref = `/courses/${program.slug}`;
  const lessonHref = (id: number) => `${courseHref}/lesson/${id}`;
  const isDone = completed.has(lesson.id);
  const markComplete = () => setCompleted((s) => new Set(s).add(lesson.id));

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Courses", to: "/on-demand-courses" },
          { label: program.title, to: courseHref, hideOnMobile: true },
          { label: lesson.title },
        ]}
      />

      <div className="mx-auto flex w-full max-w-pg-page flex-col gap-6 px-6 py-6 lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-2">
                <Badge tone="tint" shape="label" className="px-2 py-0.5">
                  Lesson {lesson.id} of {lessons.length}
                </Badge>
                <span className="text-xs text-pg-slate">{lesson.duration}</span>
              </div>
              {lesson.module !== undefined && program.modules && (
                <p className="mb-1 text-xs text-pg-teal-dark">{program.modules[lesson.module].title}</p>
              )}
              <h1 className="text-pg-h1 text-pg-navy">{lesson.title}</h1>
            </div>
            <Button
              variant="secondary"
              size="s"
              onClick={markComplete}
              aria-pressed={isDone}
              className="shrink-0 gap-2 aria-pressed:bg-pg-tint"
            >
              {isDone ? <CheckCircle2 size={14} aria-hidden="true" /> : <Circle size={14} aria-hidden="true" />}
              {isDone ? "Completed" : "Mark complete"}
            </Button>
          </div>

          <MediaPlayer
            key={lesson.id}
            poster={program.poster}
            duration={lesson.duration}
            title={lesson.title}
            accent={program.accent}
          />

          <Tabs
            label="Lesson content"
            value={tab}
            onChange={setTab}
            tabs={[
              {
                id: "overview",
                label: "Overview",
                icon: <BookOpen />,
                panel: <p className="text-sm text-pg-slate">{lesson.description}</p>,
              },
              {
                id: "takeaways",
                label: "Key Takeaways",
                icon: <CheckCircle2 />,
                panel: (
                  <ul className="flex flex-col gap-3">
                    {lesson.takeaways.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-pg-teal-dark" />
                        <span className="text-sm text-pg-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                id: "resources",
                label: "Resources",
                icon: <Paperclip />,
                panel: (
                  // Prototype: resources have no files yet, so they are listed without links.
                  <ul className="flex flex-col gap-3">
                    {program.resources.map((r) => (
                      <li
                        key={r.label}
                        className="flex items-center justify-between rounded-pg-md border border-pg-line p-3"
                      >
                        <span className="flex items-center gap-2 text-sm text-pg-navy">
                          <FileText size={16} aria-hidden="true" className="text-pg-teal-dark" />
                          {r.label}
                        </span>
                        <Badge tone="tint">{r.type}</Badge>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>

        <aside className="w-full shrink-0 lg:w-70">
          <LessonOutline
            lessons={lessons}
            currentId={lesson.id}
            completed={completed}
            lessonHref={lessonHref}
            courseHref={courseHref}
          />
        </aside>
      </div>

      <nav aria-label="Lessons" className="border-t border-pg-line bg-white">
        <div className="mx-auto flex h-16 max-w-pg-page items-center justify-between gap-3 px-6">
          {prev ? (
            <ButtonLink to={lessonHref(prev.id)} variant="tertiary" rel="prev" className="gap-2">
              <ChevronLeft size={16} aria-hidden="true" />
              <span className="sm:hidden">Previous</span>
              <span className="hidden sm:inline">{prev.title}</span>
            </ButtonLink>
          ) : (
            <Link to={courseHref} className="text-sm text-pg-teal-dark no-underline hover:underline">
              Back to Course
            </Link>
          )}
          {next ? (
            <ButtonLink to={lessonHref(next.id)} rel="next">
              Next Lesson
              <ChevronRight size={16} aria-hidden="true" />
            </ButtonLink>
          ) : (
            <Button
              onClick={() => {
                markComplete();
                navigate(courseHref);
              }}
            >
              Finish Course
              <CheckCircle2 size={16} aria-hidden="true" />
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}
