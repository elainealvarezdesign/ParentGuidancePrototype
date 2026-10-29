import { useParams } from "react-router";
import { coursePage, getProgram } from "@/content/coursePrograms";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CourseSummary } from "@/sections/CourseSummary";
import { CourseAbout } from "@/sections/CourseAbout";
import { CourseRecommendations } from "@/sections/CourseRecommendations";
import NotFoundPage from "./NotFoundPage";

/* Course overview ("/courses/:courseSlug"). One template for every course. Recipe: docs/system/pages/course.md.
 * Breadcrumb → CourseSummary [cover | summary, facts, instructors, Start | outline] → CourseAbout →
 * CourseRecommendations. Course data: src/content/coursePrograms.ts; shared labels: coursePage. */

export default function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const program = getProgram(courseSlug);
  if (!program) return <NotFoundPage {...coursePage.notFound} />;

  return (
    <>
      <Breadcrumb items={[coursePage.breadcrumb, { label: program.title }]} />
      <div key={program.slug} className="mx-auto flex max-w-pg-content flex-col gap-4 px-6 pt-8 pb-12">
        <CourseSummary content={{ ...program, labels: coursePage }} />
        <CourseAbout
          content={{ title: coursePage.aboutTitle, paragraphs: program.about, instructors: program.instructors }}
        />
        <CourseRecommendations
          content={{
            title: coursePage.recommendationsTitle,
            meta: coursePage.recommendationMeta,
            items: program.recommendations,
          }}
        />
      </div>
    </>
  );
}
