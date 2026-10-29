import { useId } from "react";
import type { Instructor } from "@/content/coursePrograms";
import type { RichText as RichTextValue } from "@/content/types";
import { Avatar } from "@/components/ui/Avatar";
import { RichText } from "@/components/ui/RichText";

/* CourseAbout (docs/system/sections/course-about.md). White card under the course summary: "About this course"
 * paragraphs (**bold** allowed), then the instructors that have a bio, in up to three columns. */

export type CourseAboutContent = {
  title: string;
  paragraphs: RichTextValue[];
  /** Only instructors with a `bio` are listed. */
  instructors: Instructor[];
};

export function CourseAbout({ content }: { content: CourseAboutContent }) {
  const headingId = useId();
  const { title, paragraphs, instructors } = content;
  const withBios = instructors.filter((i) => i.bio);

  return (
    <section aria-labelledby={headingId} className="rounded-pg-xl border border-pg-line bg-white p-8 shadow-pg-card">
      <h2 id={headingId} className="mb-4 text-pg-h3 text-pg-navy">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm text-pg-slate [&_strong]:text-pg-navy">
        {paragraphs.map((p) => (
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
  );
}
